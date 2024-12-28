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
        if (line.trim() === "" || line.startsWith(":")) continue;

        try {
          const message = line.replace(/^data: /, "");
          if (message === "[DONE]") {
            eventEmitter.emit("done");
            continue;
          }

          const parsed = JSON.parse(message);
          const content = parsed.choices[0]?.delta?.content;
          if (content) {
            eventEmitter.emit("token", content);
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
