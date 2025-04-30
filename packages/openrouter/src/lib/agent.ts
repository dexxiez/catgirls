/* eslint-disable @typescript-eslint/no-explicit-any -- Allow any type for tool calls */
import { EventEmitter } from "events";
import { OpenRouterClient } from "./client";
import { AgentMarkers, AgentOptions, Message } from "../types";
import { RouterModel } from "../models";

/**
 * Agent class for performing chain-of-thought reasoning with LLMs
 */
export class Agent extends EventEmitter {
  private client: OpenRouterClient;
  private options: Required<AgentOptions>;
  private messages: Message[] = [];

  constructor(client: OpenRouterClient, options: AgentOptions = {}) {
    super();
    this.client = client;

    // Default markers for UI rendering
    const defaultMarkers: AgentMarkers = {
      thinking: "<thinking>",
      action: "<action>",
      observation: "<observation>",
      finalAnswer: "<answer>",
    };

    this.options = {
      maxIterations: options.maxIterations ?? 5,
      model: options.model ?? ("anthropic/claude-3.7-sonnet" as RouterModel),
      systemPrompt:
        options.systemPrompt ??
        this.getDefaultSystemPrompt(options.markers ?? defaultMarkers),
      tools: options.tools ?? [],
      verbose: options.verbose ?? false,
      markers: options.markers ?? defaultMarkers,
      stopCondition:
        options.stopCondition ?? this.defaultStopCondition.bind(this),
    };

    // Initialize with system message
    this.messages.push({
      role: "system",
      content: this.options.systemPrompt,
    });
  }

  /**
   * Default stop condition - checks if the message contains the final answer marker
   */
  private defaultStopCondition(messages: Message[]): boolean {
    const lastMessage = messages[messages.length - 1];
    return (
      lastMessage.role === "assistant" &&
      typeof lastMessage.content === "string" &&
      lastMessage.content.includes(this.options.markers.finalAnswer!)
    );
  }

  /**
   * Gets the default system prompt with markers
   */
  private getDefaultSystemPrompt(markers: AgentMarkers): string {
    return `You are a helpful assistant that solves tasks step by step.

When you're analyzing a problem or thinking about it, wrap your thoughts in ${markers.thinking} tags.
Example: ${markers.thinking}I need to break this problem into parts: first calculate X, then Y${markers.thinking}

When you decide to use a tool, wrap your reasoning in ${markers.action} tags.
Example: ${markers.action}I'll search for information about climate change${markers.action}

After getting information, wrap your observations in ${markers.observation} tags.
Example: ${markers.observation}The search revealed that global temperatures have risen by 1.1°C${markers.observation}

When you have a final answer, wrap it in ${markers.finalAnswer} tags.
Example: ${markers.finalAnswer}Based on my analysis, the answer is 42${markers.finalAnswer}

Use ONLY these markers for structuring your responses. Only use ${markers.finalAnswer} when you're completely done with the task.`;
  }

  /**
   * Run the agent on a query (non-streaming)
   */
  async run(query: string): Promise<string> {
    // Add the user query
    this.messages.push({ role: "user", content: query });

    let iterations = 0;
    let finalAnswer: string | null = null;

    while (iterations < this.options.maxIterations && finalAnswer === null) {
      iterations++;

      if (this.options.verbose) {
        this.emit("iteration", {
          iteration: iterations,
          messages: this.messages,
        });
      }

      // Think: Ask the LLM
      const response = await this.client.chatCompletion({
        messages: this.messages,
        model: this.options.model,
        tools: this.formatTools(),
      });

      // Get the assistant's response
      const assistantMessage = response.choices[0].message as Message & {
        tool_calls?: any[];
      };
      this.messages.push(assistantMessage as Message);

      // Emit the response
      this.emit("response", assistantMessage);

      // Check if the stop condition is met
      if (this.options.stopCondition(this.messages)) {
        const lastMessage = this.messages[this.messages.length - 1];
        if (typeof lastMessage.content === "string") {
          // Extract the final answer from within the markers
          const finalAnswerMarker = this.options.markers.finalAnswer!;
          const regex = new RegExp(
            `${finalAnswerMarker}(.*?)${finalAnswerMarker}`,
            "s",
          );
          const match = lastMessage.content.match(regex);

          finalAnswer = match ? match[1].trim() : lastMessage.content;
          this.emit("final_answer", finalAnswer);
        } else {
          finalAnswer = "Received non-string content as final answer.";
        }

        break;
      }

      // Check if there are tool calls
      if (
        assistantMessage.tool_calls &&
        assistantMessage.tool_calls.length > 0
      ) {
        for (const toolCall of assistantMessage.tool_calls) {
          if (toolCall.type === "function") {
            const { name, arguments: args } = toolCall.function;
            const parsedArgs = args && args.trim() ? JSON.parse(args) : {};

            // Find the tool
            const tool = this.options.tools.find((t) => t.name === name);

            if (tool) {
              try {
                // Emit tool call event
                this.emit("tool_call", { name, args: parsedArgs });

                // Act: Execute the tool
                const result = await tool.execute(parsedArgs);

                // Observe: Add the result back to messages
                this.messages.push({
                  role: "tool",
                  tool_call_id: toolCall.id,
                  content: JSON.stringify(result),
                });

                this.emit("tool_result", {
                  tool: name,
                  args: parsedArgs,
                  result,
                });
              } catch (error) {
                // Handle tool execution error
                this.messages.push({
                  role: "tool",
                  tool_call_id: toolCall.id,
                  content: JSON.stringify({ error: String(error) }),
                });

                // Safely parse args or use empty object if parsing fails
                let safeArgs = {};
                try {
                  if (args && args.trim()) {
                    safeArgs = JSON.parse(args);
                  }
                } catch {
                  // If JSON parsing fails, keep empty object
                }

                this.emit("tool_error", {
                  tool: name,
                  args: safeArgs,
                  error,
                });
              }
            }
          }
        }
      }
    }

    if (finalAnswer === null) {
      finalAnswer = "Max iterations reached without final answer.";
    }

    this.emit("complete");
    return finalAnswer;
  }

  /**
   * Run the agent on a query with streaming support
   */
  async runStream(query: string): Promise<EventEmitter> {
    const eventEmitter = new EventEmitter();

    // Add the user query
    this.messages.push({ role: "user", content: query });

    let iterations = 0;
    let isDone = false;
    // Track processed tool calls to avoid duplicates
    const processedToolCallIds = new Set<string>();

    const processIteration = async () => {
      if (iterations >= this.options.maxIterations || isDone) {
        eventEmitter.emit("complete");
        return;
      }

      iterations++;

      if (this.options.verbose) {
        eventEmitter.emit("iteration", {
          iteration: iterations,
          messages: this.messages,
        });
      }

      try {
        // Think: Ask the LLM with streaming enabled
        const stream = await this.client.chatCompletion({
          messages: this.messages,
          model: this.options.model,
          tools: this.formatTools(),
          stream: true,
        });

        let accumulatedContent = "";
        let currentToolCalls: any[] = [];
        let lastMarkerType: string | null = null;
        let markerContent = "";

        // Handle streaming tokens
        stream.on("content", (content: string) => {
          accumulatedContent += content;
          eventEmitter.emit("token", content);

          // Look for markers in the accumulated content
          for (const [type, marker] of Object.entries(this.options.markers)) {
            if (!marker) continue;

            // Check for opening marker
            if (accumulatedContent.includes(marker) && !lastMarkerType) {
              const markerIndex = accumulatedContent.lastIndexOf(marker);
              if (
                markerIndex !== -1 &&
                markerIndex + marker.length <= accumulatedContent.length
              ) {
                lastMarkerType = type;
                markerContent = "";

                // Emit marker start event
                eventEmitter.emit("marker", {
                  type,
                  content: "",
                });
              }
            }

            // Check for closing marker (only if we're in a marker section)
            if (
              lastMarkerType === type &&
              accumulatedContent.includes(marker)
            ) {
              const markerStartIndex = accumulatedContent.indexOf(marker);
              const markerEndIndex = accumulatedContent.lastIndexOf(marker);

              // If we have both opening and closing markers
              if (markerStartIndex !== markerEndIndex) {
                // Extract the content between markers
                markerContent = accumulatedContent.substring(
                  markerStartIndex + marker.length,
                  markerEndIndex,
                );

                // Emit the complete marker content
                eventEmitter.emit("marker", {
                  type,
                  content: markerContent,
                });

                lastMarkerType = null;
                markerContent = "";
              }
            }
          }
        });

        // Handle tool calls from streaming
        stream.on("tool_calls", (toolCalls: any) => {
          currentToolCalls = currentToolCalls.concat(toolCalls);
          // Emit the stream_tool_calls event for UI updates
          eventEmitter.emit("stream_tool_calls", toolCalls);
        });

        // Handle errors during streaming
        stream.on("error", (error: Error) => {
          eventEmitter.emit("error", error);
          isDone = true;
        });

        // When streaming is complete
        stream.on("done", async () => {
          // Create the assistant message
          const assistantMessage: Message = {
            role: "assistant",
            content: accumulatedContent,
          };

          // If we have tool calls, add them to the message
          if (currentToolCalls.length > 0) {
            (assistantMessage as any).tool_calls = currentToolCalls;
          }

          this.messages.push(assistantMessage);
          eventEmitter.emit("response", assistantMessage);

          // Check if the stop condition is met
          if (this.options.stopCondition(this.messages)) {
            isDone = true;

            // Extract final answer if present
            if (
              this.options.markers.finalAnswer &&
              typeof assistantMessage.content === "string"
            ) {
              const finalAnswerMarker = this.options.markers.finalAnswer;
              const regex = new RegExp(
                `${finalAnswerMarker}(.*?)${finalAnswerMarker}`,
                "s",
              );
              const match = assistantMessage.content.match(regex);

              const finalAnswer = match
                ? match[1].trim()
                : assistantMessage.content;
              eventEmitter.emit("final_answer", finalAnswer);
            }

            eventEmitter.emit("complete");
            return;
          }

          // Process tool calls if any
          if (currentToolCalls.length > 0) {
            for (const toolCall of currentToolCalls) {
              if (toolCall.type === "function") {
                const {
                  id,
                  function: { name, arguments: args },
                } = toolCall;

                // Skip if we've already processed this tool call
                if (processedToolCallIds.has(id)) continue;
                processedToolCallIds.add(id);

                try {
                  const parsedArgs =
                    args && args.trim() ? JSON.parse(args) : {};

                  // Find the tool
                  const tool = this.options.tools.find((t) => t.name === name);

                  if (tool) {
                    // Emit tool_call event for each executed tool
                    eventEmitter.emit("tool_call", { name, args: parsedArgs });

                    // Act: Execute the tool
                    const result = await tool.execute(parsedArgs);

                    // Observe: Add the result back to messages
                    this.messages.push({
                      role: "tool",
                      tool_call_id: id,
                      content: JSON.stringify(result),
                    });

                    eventEmitter.emit("tool_result", {
                      tool: name,
                      args: parsedArgs,
                      result,
                    });
                  }
                } catch (error) {
                  // Handle tool execution error
                  this.messages.push({
                    role: "tool",
                    tool_call_id: id,
                    content: JSON.stringify({ error: String(error) }),
                  });

                  // Safely parse args or use empty object if parsing fails
                  let safeArgs = {};
                  try {
                    if (args && args.trim()) {
                      safeArgs = JSON.parse(args);
                    }
                  } catch {
                    // If JSON parsing fails, keep empty object
                  }

                  eventEmitter.emit("tool_error", {
                    tool: name,
                    args: safeArgs,
                    error,
                  });
                }
              }
            }

            // Reset for next iteration
            currentToolCalls = [];

            // Continue with next iteration
            setTimeout(processIteration, 0);
          } else {
            // No tool calls, check if we need to continue
            if (!isDone) {
              setTimeout(processIteration, 0);
            }
          }
        });
      } catch (error) {
        eventEmitter.emit("error", error);
        isDone = true;
      }
    };

    // Start the first iteration
    processIteration();

    return eventEmitter;
  }

  /**
   * Format tools for the LLM API
   */
  private formatTools(): any[] {
    return this.options.tools.map((tool) => ({
      type: "function",
      function: {
        name: tool.name,
        description: tool.description,
        parameters: tool.parameters,
      },
    }));
  }
}
