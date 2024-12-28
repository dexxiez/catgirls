/* eslint-disable @typescript-eslint/no-explicit-any */
import { EventEmitter } from "events";
import { StreamHandler } from "../src/lib/stream-handler";
import { OpenRouterErrorAdapter } from "../src/lib/error-adapter";

jest.mock("../src/lib/error-adapter", () => ({
  OpenRouterErrorAdapter: {
    handleError: jest.fn((error) => new Error(`Handled: ${error.message}`)),
  },
}));

describe("StreamHandler", () => {
  let streamHandler: StreamHandler;
  let mockStream: EventEmitter;
  let resultEmitter: EventEmitter;

  beforeEach(() => {
    streamHandler = new StreamHandler();
    mockStream = new EventEmitter();
    resultEmitter = streamHandler.handleStream(mockStream);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should emit tokens when receiving valid data chunks", (done) => {
    const expectedTokens: string[] = ["Hello", " World"];
    const receivedTokens: string[] = [];

    resultEmitter.on("token", (token: string) => {
      receivedTokens.push(token);
      if (receivedTokens.length === expectedTokens.length) {
        expect(receivedTokens).toEqual(expectedTokens);
        done();
      }
    });

    mockStream.emit(
      "data",
      Buffer.from('data: {"choices":[{"delta":{"content":"Hello"}}]}\n\n'),
    );
    mockStream.emit(
      "data",
      Buffer.from('data: {"choices":[{"delta":{"content":" World"}}]}\n\n'),
    );
  });

  it("should handle split chunks correctly", (done) => {
    const expectedTokens = ["He", "llo World"];
    const receivedTokens: string[] = [];

    resultEmitter.on("token", (token: string) => {
      receivedTokens.push(token);
      if (receivedTokens.length === expectedTokens.length) {
        expect(receivedTokens).toEqual(expectedTokens);
        done();
      }
    });

    mockStream.emit(
      "data",
      Buffer.from('data: {"choices":[{"delta":{"content":"He"}}]}\n\n'),
    );
    mockStream.emit(
      "data",
      Buffer.from('data: {"choices":[{"delta":{"content":"llo World"}}]}\n\n'),
    );
  });

  it("should emit done event when stream ends", (done) => {
    resultEmitter.on("done", () => {
      done();
    });
    mockStream.emit("data", Buffer.from("data: [DONE]\n\n"));
  });

  it("should handle empty lines and comments properly", (done) => {
    const tokenReceived = jest.fn();
    resultEmitter.on("token", tokenReceived);
    resultEmitter.on("done", () => {
      expect(tokenReceived).not.toHaveBeenCalled();
      done();
    });
    mockStream.emit("data", Buffer.from("\n"));
    mockStream.emit("data", Buffer.from(":comment\n"));
    mockStream.emit("data", Buffer.from("data: [DONE]\n"));
  });

  it("should emit error events for invalid JSON", (done) => {
    resultEmitter.on("error", (error) => {
      expect(OpenRouterErrorAdapter.handleError).toHaveBeenCalled();
      expect(error.message).toContain("Handled:");
      done();
    });
    mockStream.emit("data", Buffer.from("data: {invalid-json}\n\n"));
  });

  it("should handle stream errors", (done) => {
    const testError = new Error("Stream broke, yo");
    resultEmitter.on("error", (error) => {
      expect(OpenRouterErrorAdapter.handleError).toHaveBeenCalledWith(
        testError,
      );
      expect(error.message).toContain("Handled:");
      done();
    });
    mockStream.emit("error", testError);
  });

  it("should ignore delta events without content", (done) => {
    const tokenReceived = jest.fn();
    resultEmitter.on("token", tokenReceived);
    resultEmitter.on("done", () => {
      expect(tokenReceived).not.toHaveBeenCalled();
      done();
    });
    mockStream.emit(
      "data",
      Buffer.from('data: {"choices":[{"delta":{}}]}\n\n'),
    );
    mockStream.emit("data", Buffer.from("data: [DONE]\n"));
  });

  it("should handle content and role in same delta", (done) => {
    const events: string[] = [];

    resultEmitter.on("role", (role) => {
      events.push(`role:${role}`);
      checkDone();
    });

    resultEmitter.on("content", (content) => {
      events.push(`content:${content}`);
      checkDone();
    });

    function checkDone() {
      if (events.length === 2) {
        expect(events).toContain("role:assistant");
        expect(events).toContain("content:Hello");
        done();
      }
    }

    mockStream.emit(
      "data",
      Buffer.from(
        'data: {"choices":[{"delta":{"role":"assistant","content":"Hello"}}]}\n',
      ),
    );
  });

  it("should handle tool calls in delta", (done) => {
    const toolCall = {
      id: "call_1",
      type: "function",
      function: { name: "test" },
    };

    resultEmitter.on("tool_calls", (toolCalls) => {
      expect(toolCalls).toEqual([toolCall]);
      done();
    });

    mockStream.emit(
      "data",
      Buffer.from(
        `data: {"choices":[{"delta":{"tool_calls":[${JSON.stringify(toolCall)}]}}]}\n`,
      ),
    );
  });

  it("should emit role events when present in delta", (done) => {
    resultEmitter.on("role", (role: string) => {
      expect(role).toBe("assistant");
      done();
    });

    mockStream.emit(
      "data",
      Buffer.from('data: {"choices":[{"delta":{"role":"assistant"}}]}\n\n'),
    );
  });

  it("should emit finish events when finish_reason is present", (done) => {
    resultEmitter.on("finish", (reason: string) => {
      expect(reason).toBe("stop");
      done();
    });

    mockStream.emit(
      "data",
      Buffer.from('data: {"choices":[{"finish_reason":"stop"}]}\n\n'),
    );
  });

  it("should emit usage stats when present", (done) => {
    const expectedUsage = {
      prompt_tokens: 10,
      completion_tokens: 20,
      total_tokens: 30,
    };

    resultEmitter.on("usage", (usage: any) => {
      expect(usage).toEqual(expectedUsage);
      done();
    });

    mockStream.emit(
      "data",
      Buffer.from(`data: {"usage":${JSON.stringify(expectedUsage)}}\n\n`),
    );
  });

  it("should emit processing event for OpenRouter processing messages", (done) => {
    const processingReceived = jest.fn();
    resultEmitter.on("processing", processingReceived);

    mockStream.emit(
      "data",
      Buffer.from(": OPENROUTER PROCESSING MODEL-123\n\n"),
    );

    // Give event loop a chance to process
    setTimeout(() => {
      expect(processingReceived).toHaveBeenCalled();
      done();
    }, 0);
  });

  it("should handle line breaks in content gracefully", (done) => {
    const expectedContent = "Hello\nWorld\nHow are\nyou?";
    const receivedContent: string[] = [];

    resultEmitter.on("content", (content: string) => {
      receivedContent.push(content);
      if (receivedContent.join("") === expectedContent) {
        done();
      }
    });

    mockStream.emit(
      "data",
      Buffer.from(
        'data: {"choices":[{"delta":{"content":"Hello\\nWorld"}}]}\n\n',
      ),
    );
    mockStream.emit(
      "data",
      Buffer.from(
        'data: {"choices":[{"delta":{"content":"\\nHow are\\nyou?"}}]}\n\n',
      ),
    );
  });
});
