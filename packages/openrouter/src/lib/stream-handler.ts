import { EventEmitter } from "events";
import type * as Event from "events";
import { IStreamHandler } from "../types";
import { OpenRouterErrorAdapter } from "./error-adapter";

export class StreamHandler implements IStreamHandler {
  handleStream(stream: Event): EventEmitter {
    const eventEmitter = new EventEmitter();
    let buffer = "";

    stream.on("data", (chunk: Buffer) => {
      buffer += chunk.toString();
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (line.trim() === "" || line.startsWith(":")) {
          // Handle SSE comments (OpenRouter processing messages)
          if (line.includes("OPENROUTER PROCESSING")) {
            eventEmitter.emit("processing");
          }
          continue;
        }

        try {
          const message = line.replace(/^data: /, "");
          if (message === "[DONE]") {
            eventEmitter.emit("done");
            continue;
          }

          const parsed = JSON.parse(message);

          // Emit the full chunk for raw access
          eventEmitter.emit("chunk", parsed);

          // Handle the standardized response format
          if (parsed.choices?.[0]) {
            const choice = parsed.choices[0];

            // For streaming responses, we'll get delta updates
            if (choice.delta) {
              // Extract the delta components
              const { content, role, tool_calls } = choice.delta;

              // Emit specific events for different delta types
              if (content) {
                // Emit both for backwards compatibility
                eventEmitter.emit("token", content);
                eventEmitter.emit("content", content);
              }
              if (role) {
                eventEmitter.emit("role", role);
              }
              if (tool_calls) {
                eventEmitter.emit("tool_calls", tool_calls);
              }
            }

            // Handle finish reason if present
            if (choice.finish_reason) {
              eventEmitter.emit("finish", choice.finish_reason);
            }
          }

          // Handle usage statistics in the final message
          if (parsed.usage) {
            eventEmitter.emit("usage", parsed.usage);
          }
        } catch (error) {
          eventEmitter.emit("error", OpenRouterErrorAdapter.handleError(error));
        }
      }
    });

    stream.on("end", () => eventEmitter.emit("done"));
    stream.on("error", (error: Error) => {
      eventEmitter.emit("error", OpenRouterErrorAdapter.handleError(error));
    });

    return eventEmitter;
  }
}
