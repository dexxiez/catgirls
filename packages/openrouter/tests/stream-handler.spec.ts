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

    // Simulate receiving chunks of SSE data
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

    // Simulate chunks split in the middle of the JSON
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
});
