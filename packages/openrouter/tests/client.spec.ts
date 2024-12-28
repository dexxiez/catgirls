/* eslint-disable @typescript-eslint/no-explicit-any */
import { EventEmitter } from "events";
import { OpenRouterClient } from "../src/lib/client";
import { HttpClient } from "../src/lib/http-client";
import { StreamHandler } from "../src/lib/stream-handler";
import { Request } from "../src/types";
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
    // Clear all mocks
    jest.clearAllMocks();

    // Setup mocks
    mockHttpClient = new HttpClient("", {}) as jest.Mocked<HttpClient>;
    mockStreamHandler = new StreamHandler() as jest.Mocked<StreamHandler>;

    // Create client instance with mocked dependencies
    client = new OpenRouterClient(
      mockApiKey,
      mockConfig,
      mockHttpClient,
      mockStreamHandler,
    );
  });

  describe("getModels", () => {
    it("should fetch models successfully", async () => {
      const mockResponse: AxiosResponse = {
        data: { data: ["model1", "model2"] },
        status: 200,
        statusText: "OK",
        headers: {},
        config: {} as any,
      };
      mockHttpClient.get.mockResolvedValueOnce(mockResponse);

      const result = await client.getModels();

      expect(mockHttpClient.get).toHaveBeenCalledWith("/models");
      expect(result).toEqual(mockResponse.data.data);
    });

    it("should handle errors when fetching models", async () => {
      const mockError = new Error("Models fetch failed");
      mockHttpClient.get.mockRejectedValueOnce(mockError);

      await expect(client.getModels()).rejects.toThrow();
    });
  });

  describe("chatCompletion", () => {
    // Create a proper Request object that satisfies the type requirements
    const mockRequest: Request = {
      messages: [{ role: "user", content: "Hello" }],
      signal: new AbortController().signal,
      top_logprobs: 0, // Required field from the type
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

      const result = await client.chatCompletion(mockRequest);

      expect(mockHttpClient.post).toHaveBeenCalledWith("/chat/completions", {
        ...mockRequest,
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

      const streamRequest: Request = {
        ...mockRequest,
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
      const customRequest: Request = {
        ...mockRequest,
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

      await expect(client.chatCompletion(mockRequest)).rejects.toThrow();
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
      expect(result).toEqual(mockResponse.data);
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
