import { RouterModel } from "../models";
import {
  ChatCompletionResult,
  GenerationStats,
  IHttpClient,
  IStreamHandler,
  QueryResponseModel,
  Request,
} from "../types";
import { OpenRouterErrorAdapter } from "./error-adapter";
import { HttpClient } from "./http-client";
import { StreamHandler } from "./stream-handler";

export class OpenRouterClient {
  private readonly baseURL = "https://openrouter.ai/api/v1";
  private httpClient: IHttpClient;
  private streamHandler: IStreamHandler;

  constructor(
    private readonly apiKey: string,
    private readonly defaultConfig: {
      siteUrl?: string;
      siteName?: string;
      model?: RouterModel;
    } = {},
    httpClient?: IHttpClient,
    streamHandler?: IStreamHandler,
  ) {
    this.httpClient =
      httpClient || new HttpClient(this.baseURL, this.getDefaultHeaders());
    this.streamHandler = streamHandler || new StreamHandler();
  }

  private getDefaultHeaders() {
    const headers: Record<string, string> = {
      Authorization: `Bearer ${this.apiKey}`,
      "Content-Type": "application/json",
    };

    if (this.defaultConfig.siteUrl) {
      headers["HTTP-Referer"] = this.defaultConfig.siteUrl;
    }
    if (this.defaultConfig.siteName) {
      headers["X-Title"] = this.defaultConfig.siteName;
    }

    return headers;
  }

  async chatCompletion<T extends boolean = false>(
    options: Request & { stream?: T },
  ): Promise<ChatCompletionResult<T>> {
    try {
      const data = {
        ...options,
        model: options.model || this.defaultConfig.model,
        stream: options.stream,
      };

      if (options.stream) {
        const response = await this.httpClient.post("/chat/completions", data, {
          responseType: "stream",
          signal: options.signal,
        });
        return this.streamHandler.handleStream(
          response.data,
        ) as ChatCompletionResult<T>;
      }

      const response = await this.httpClient.post("/chat/completions", data);
      return response.data as ChatCompletionResult<T>;
    } catch (error) {
      throw OpenRouterErrorAdapter.handleError(error);
    }
  }

  async getGenerationStats(generationId: string): Promise<GenerationStats> {
    try {
      const response = await this.httpClient.get(
        `/generation?id=${generationId}`,
      );
      return response.data.data; // i shit you not
    } catch (error) {
      throw OpenRouterErrorAdapter.handleError(error);
    }
  }

  async getModels(): Promise<QueryResponseModel[]> {
    try {
      const response = await this.httpClient.get("/models");
      return response.data.data; // yep
    } catch (error) {
      throw OpenRouterErrorAdapter.handleError(error);
    }
  }
}
