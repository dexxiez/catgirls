/* eslint-disable @typescript-eslint/no-explicit-any */
import { EventEmitter } from "events";
import { OpenRouterClient } from "../src/lib/client";
import { HttpClient } from "../src/lib/http-client";
import { StreamHandler } from "../src/lib/stream-handler";
import { Message } from "../src/types";
import { AxiosResponse } from "axios";

jest.mock("../src/lib/http-client");
jest.mock("../src/lib/stream-handler");

describe("OpenRouterClient", () => {
  const mockApiKey = "test-api-key";
  const mockConfig = {
    siteUrl: "https://test.com",
    siteName: "Test Site",
    model: "test-model",
  };

  let client: OpenRouterClient;
  let mockHttpClient: jest.Mocked<HttpClient>;
  let mockStreamHandler: jest.Mocked<StreamHandler>;

  beforeEach(() => {
    jest.clearAllMocks();

    mockHttpClient = new HttpClient("", {}) as jest.Mocked<HttpClient>;
    mockStreamHandler = new StreamHandler() as jest.Mocked<StreamHandler>;

    client = new OpenRouterClient(
      mockApiKey,
      mockConfig,
      mockHttpClient,
      mockStreamHandler,
    );
  });

  describe("chatCompletion", () => {
    // Create a properly typed message-based request
    const mockMessagesRequest = {
      messages: [{ role: "user", content: "Hello" }] as Message[],
      signal: new AbortController().signal,
      top_logprobs: 0,
    };

    it("should make a non-streaming chat completion request", async () => {
      const mockResponse: AxiosResponse = {
        data: { choices: [{ message: "Hello there!" }] },
        status: 200,
        statusText: "OK",
        headers: {},
        config: {} as any,
      };
      mockHttpClient.post.mockResolvedValueOnce(mockResponse);

      const result = await client.chatCompletion(mockMessagesRequest);

      expect(mockHttpClient.post).toHaveBeenCalledWith("/chat/completions", {
        ...mockMessagesRequest,
        model: mockConfig.model,
        stream: undefined,
      });
      expect(result).toEqual(mockResponse.data);
    });

    it("should handle streaming chat completion requests", async () => {
      const mockStream = new EventEmitter();
      const mockResponse: AxiosResponse = {
        data: mockStream,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {} as any,
      };
      mockHttpClient.post.mockResolvedValueOnce(mockResponse);
      mockStreamHandler.handleStream.mockReturnValueOnce(new EventEmitter());

      const streamRequest = {
        ...mockMessagesRequest,
        stream: true,
      };

      await client.chatCompletion(streamRequest);

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        "/chat/completions",
        {
          ...streamRequest,
          model: mockConfig.model,
        },
        {
          responseType: "stream",
          signal: streamRequest.signal,
        },
      );
      expect(mockStreamHandler.handleStream).toHaveBeenCalledWith(mockStream);
    });

    it("should use provided model instead of default", async () => {
      const customModel = "custom-model";
      const customRequest = {
        ...mockMessagesRequest,
        model: customModel,
      };

      const mockResponse: AxiosResponse = {
        data: {},
        status: 200,
        statusText: "OK",
        headers: {},
        config: {} as any,
      };
      mockHttpClient.post.mockResolvedValueOnce(mockResponse);

      await client.chatCompletion(customRequest);

      expect(mockHttpClient.post).toHaveBeenCalledWith(
        "/chat/completions",
        expect.objectContaining({
          model: customModel,
        }),
      );
    });

    it("should handle API errors properly", async () => {
      const mockError = new Error("API Error");
      mockHttpClient.post.mockRejectedValueOnce(mockError);

      await expect(
        client.chatCompletion(mockMessagesRequest),
      ).rejects.toThrow();
    });
  });

  describe("getGenerationStats", () => {
    const mockGenerationId = "test-gen-id";

    it("should fetch generation stats successfully", async () => {
      const mockResponse: AxiosResponse = {
        data: { usage: { total_tokens: 100 } },
        status: 200,
        statusText: "OK",
        headers: {},
        config: {} as any,
      };
      mockHttpClient.get.mockResolvedValueOnce(mockResponse);

      const result = await client.getGenerationStats(mockGenerationId);

      expect(mockHttpClient.get).toHaveBeenCalledWith(
        `/generation?id=${mockGenerationId}`,
      );
      expect(result).toEqual(mockResponse.data.data);
    });

    it("should handle errors when fetching stats", async () => {
      const mockError = new Error("Stats fetch failed");
      mockHttpClient.get.mockRejectedValueOnce(mockError);

      await expect(
        client.getGenerationStats(mockGenerationId),
      ).rejects.toThrow();
    });
  });

  describe("constructor", () => {
    beforeEach(() => {
      // Reset the constructor mock before each test
      (HttpClient as jest.Mock).mockClear();
    });

    it("should create instance with default dependencies if none provided", () => {
      const defaultClient = new OpenRouterClient(mockApiKey, mockConfig);
      expect(defaultClient).toBeInstanceOf(OpenRouterClient);
    });

    it("should set correct default headers", () => {
      // Create a new client - this will trigger the HttpClient constructor
      new OpenRouterClient(mockApiKey, mockConfig);

      // Verify the HttpClient was constructed with correct headers
      expect(HttpClient).toHaveBeenLastCalledWith(
        "https://openrouter.ai/api/v1",
        expect.objectContaining({
          Authorization: `Bearer ${mockApiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": mockConfig.siteUrl,
          "X-Title": mockConfig.siteName,
        }),
      );
    });
  });
});
