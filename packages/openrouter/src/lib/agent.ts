/* eslint-disable @typescript-eslint/no-explicit-any -- Allow any type for tool calls */
import { EventEmitter } from "events";
import { OpenRouterClient } from "./client";
import { AgentMarkers, AgentOptions, Message } from "../types";
import { RouterModel } from "../models";
import { normalizeMarker } from "./utils";

/**
 * Agent class for performing chain-of-thought reasoning with LLMs
 */
export class Agent extends EventEmitter {
  private client: OpenRouterClient;
  private options: Required<AgentOptions>;
  private messages: Message[] = [];
  private normalizedMarkers: {
    thinking: { open: string; close: string } | null;
    action: { open: string; close: string } | null;
    observation: { open: string; close: string } | null;
    finalAnswer: { open: string; close: string } | null;
  };

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

    const markers = options.markers ?? defaultMarkers;

    // Normalize markers for easier handling
    this.normalizedMarkers = {
      thinking: normalizeMarker(markers.thinking),
      action: normalizeMarker(markers.action),
      observation: normalizeMarker(markers.observation),
      finalAnswer: normalizeMarker(markers.finalAnswer),
    };

    this.options = {
      maxIterations: options.maxIterations ?? 5,
      model: options.model ?? ("anthropic/claude-3.7-sonnet" as RouterModel),
      prependDefaultPrompt: options.prependDefaultPrompt ?? false,
      systemPrompt: options.prependDefaultPrompt
        ? this.getDefaultSystemPrompt(markers) + "\n\n" + options.systemPrompt
        : (options.systemPrompt ?? this.getDefaultSystemPrompt(markers)),
      tools: options.tools ?? [],
      verbose: options.verbose ?? false,
      markers: markers,
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
    const finalAnswerMarker = this.normalizedMarkers.finalAnswer;

    if (!finalAnswerMarker) return false;

    return (
      lastMessage.role === "assistant" &&
      typeof lastMessage.content === "string" &&
      lastMessage.content.includes(finalAnswerMarker.open)
    );
  }

  /**
   * Gets the default system prompt with markers
   */
  private getDefaultSystemPrompt(markers: AgentMarkers): string {
    const thinkingMarker = normalizeMarker(markers.thinking);
    const actionMarker = normalizeMarker(markers.action);
    const observationMarker = normalizeMarker(markers.observation);
    const finalAnswerMarker = normalizeMarker(markers.finalAnswer);

    return `You are a helpful assistant that solves tasks step by step.

${
  thinkingMarker
    ? `When you're analyzing a problem or thinking about it, wrap your thoughts in ${thinkingMarker.open} and ${thinkingMarker.close} tags.
Example: ${thinkingMarker.open}I need to break this problem into parts: first calculate X, then Y${thinkingMarker.close}`
    : ""
}

${
  actionMarker
    ? `When you decide to use a tool, wrap your reasoning in ${actionMarker.open} and ${actionMarker.close} tags.
Example: ${actionMarker.open}I'll search for information about climate change${actionMarker.close}`
    : ""
}

${
  observationMarker
    ? `After getting information, wrap your observations in ${observationMarker.open} and ${observationMarker.close} tags.
Example: ${observationMarker.open}The search revealed that global temperatures have risen by 1.1°C${observationMarker.close}`
    : ""
}

${
  finalAnswerMarker
    ? `When you have a final answer, wrap it in ${finalAnswerMarker.open} and ${finalAnswerMarker.close} tags.
Example: ${finalAnswerMarker.open}Based on my analysis, the answer is 42${finalAnswerMarker.close}`
    : ""
}

Use ONLY these markers for structuring your responses. Only use ${finalAnswerMarker?.open} when you're completely done with the task.`;
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
          const finalAnswerMarker = this.normalizedMarkers.finalAnswer;

          if (finalAnswerMarker) {
            const regex = new RegExp(
              `${this.escapeRegExp(finalAnswerMarker.open)}(.*?)${this.escapeRegExp(finalAnswerMarker.close)}`,
              "s",
            );
            const match = lastMessage.content.match(regex);

            finalAnswer = match ? match[1].trim() : lastMessage.content;
            this.emit("final_answer", finalAnswer);
          } else {
            finalAnswer = lastMessage.content;
          }
        } else {
          finalAnswer = "RECEIVED_NON_STRING_FINAL_ANSWER";
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
      finalAnswer = "MAX_ITERATIONS_REACHED_WITHOUT_FINAL_ANSWER";
    }

    // Check if the last message was from a tool and no final answer was given
    const lastMessage = this.messages[this.messages.length - 1];
    const isLastMessageTool = lastMessage?.role === "tool";

    if (
      isLastMessageTool &&
      finalAnswer === "MAX_ITERATIONS_REACHED_WITHOUT_FINAL_ANSWER"
    ) {
      finalAnswer = "ANSWER_AFTER_TOOL_NOT_GIVEN";
    }

    this.emit("complete");
    return finalAnswer;
  }

  /**
   * Helper method to escape special regex characters
   */
  private escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
    let forceExtraIteration = false;
    // Track processed tool calls to avoid duplicates
    const processedToolCallIds = new Set<string>();

    const processIteration = async () => {
      if (iterations >= this.options.maxIterations || isDone) {
        if (iterations >= this.options.maxIterations && !isDone) {
          // We reached max iterations without a final answer
          const finalAnswerMarker = this.normalizedMarkers.finalAnswer;
          let hasFinalAnswer = false;

          // Check if we have already emitted a final answer
          if (
            finalAnswerMarker &&
            this.messages.length > 0 &&
            typeof this.messages[this.messages.length - 1].content === "string"
          ) {
            const lastContent = this.messages[this.messages.length - 1]
              .content as string;
            hasFinalAnswer = lastContent.includes(finalAnswerMarker.open);
          }

          if (!hasFinalAnswer) {
            eventEmitter.emit(
              "final_answer",
              "MAX_ITERATIONS_REACHED_WITHOUT_FINAL_ANSWER",
            );
          }
        }

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
          for (const [type, normalizedMarker] of Object.entries(
            this.normalizedMarkers,
          )) {
            if (!normalizedMarker) continue;
            const { open, close } = normalizedMarker;

            // Check for opening marker
            if (accumulatedContent.includes(open) && !lastMarkerType) {
              const markerIndex = accumulatedContent.lastIndexOf(open);
              if (
                markerIndex !== -1 &&
                markerIndex + open.length <= accumulatedContent.length
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
            if (lastMarkerType === type && accumulatedContent.includes(close)) {
              const markerStartIndex = accumulatedContent.indexOf(open);
              const markerEndIndex = accumulatedContent.lastIndexOf(close);

              // If we have both opening and closing markers
              if (
                markerStartIndex !== -1 &&
                markerEndIndex > markerStartIndex
              ) {
                // Extract the content between markers
                markerContent = accumulatedContent.substring(
                  markerStartIndex + open.length,
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

          // Emit a synthetic final answer when an error occurs
          if (!isDone) {
            const finalAnswerMarker = this.normalizedMarkers.finalAnswer;
            let hasFinalAnswer = false;

            // Check if we have already emitted a final answer
            if (
              finalAnswerMarker &&
              this.messages.length > 0 &&
              typeof this.messages[this.messages.length - 1].content ===
                "string"
            ) {
              const lastContent = this.messages[this.messages.length - 1]
                .content as string;
              hasFinalAnswer = lastContent.includes(finalAnswerMarker.open);
            }

            if (!hasFinalAnswer) {
              eventEmitter.emit(
                "final_answer",
                "Encountered an error while processing the request.",
              );
            }

            eventEmitter.emit("complete");
          }

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
            const finalAnswerMarker = this.normalizedMarkers.finalAnswer;
            if (
              finalAnswerMarker &&
              typeof assistantMessage.content === "string"
            ) {
              const regex = new RegExp(
                `${this.escapeRegExp(finalAnswerMarker.open)}(.*?)${this.escapeRegExp(finalAnswerMarker.close)}`,
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

                  // Set the force extra iteration flag to ensure one more pass
                  // even when a tool errors out
                  forceExtraIteration = true;
                }
              }
            }

            // Reset for next iteration
            currentToolCalls = [];

            forceExtraIteration = true; // Always do one more iteration after tool calls
            // Continue with next iteration
            setTimeout(processIteration, 0);
          } else {
            // No tool calls, check if we need to continue
            if (!isDone && forceExtraIteration) {
              forceExtraIteration = false;
              setTimeout(processIteration, 0);
            } else if (!isDone) {
              // Before we complete, check if we've emitted a final answer
              let hasFinalAnswer = false;

              // Check last message for final answer marker
              const finalAnswerMarker = this.normalizedMarkers.finalAnswer;
              if (
                finalAnswerMarker &&
                this.messages.length > 0 &&
                typeof this.messages[this.messages.length - 1].content ===
                  "string"
              ) {
                const lastContent = this.messages[this.messages.length - 1]
                  .content as string;
                hasFinalAnswer = lastContent.includes(finalAnswerMarker.open);
              }

              // Check if any tool calls were made during the conversation
              const hasToolMessages = this.messages.some(
                (msg) => msg.role === "tool",
              );

              // If no final answer found after last iteration, emit a synthetic one
              if (!hasFinalAnswer && !isDone) {
                if (hasToolMessages) {
                  // Only emit this specific message if tools were actually used
                  eventEmitter.emit(
                    "final_answer",
                    "ANSWER_AFTER_TOOL_NOT_GIVEN",
                  );
                } else {
                  // Otherwise emit a more generic message
                  eventEmitter.emit(
                    "final_answer",
                    "MAX_ITERATIONS_REACHED_WITHOUT_FINAL_ANSWER",
                  );
                }
              }

              isDone = true;
              eventEmitter.emit("complete");
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
