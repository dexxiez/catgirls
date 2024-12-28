import { AxiosError } from "axios";

export interface ErrorResponse {
  error: {
    code: number;
    message: string;
    metadata?: ModerationErrorMetadata | ProviderErrorMetadata;
  };
}

interface ModerationErrorMetadata {
  reasons: string[];
  flagged_input: string;
  provider_name: string;
  model_slug: string;
}

interface ProviderErrorMetadata {
  provider_name: string;
  raw: unknown;
}

export class OpenRouterErrorAdapter {
  private static readonly ERROR_MESSAGES = {
    400: "Bad Request: Invalid or missing parameters, or CORS issue",
    401: "Invalid credentials: OAuth session expired or disabled/invalid API key",
    402: "Insufficient credits: Add more credits and retry the request",
    403: "Content moderation: Your input was flagged",
    408: "Request timeout: Your request took too long to process",
    429: "Rate limited: You are sending too many requests",
    502: "Provider error: Model is down or invalid response received",
    503: "No provider: No available model provider meets your routing requirements",
  } as const;

  static handleError(error: unknown): never {
    if (this.isAxiosError(error)) {
      throw this.handleAxiosError(error);
    }

    throw new Error(
      `Unexpected error: ${error instanceof Error ? error.message : String(error)}`,
    );
  }

  private static isAxiosError(
    error: unknown,
  ): error is AxiosError<ErrorResponse> {
    return error instanceof Error && "isAxiosError" in error;
  }

  private static handleAxiosError(error: AxiosError<ErrorResponse>): Error {
    if (error.response) {
      const { status, data } = error.response;

      if (this.isOpenRouterError(data)) {
        return this.createDetailedError(data.error);
      }

      return new Error(
        `HTTP ${status}: ${this.ERROR_MESSAGES[status as keyof typeof this.ERROR_MESSAGES] || "Unknown error"}`,
      );
    }

    if (error.request) {
      return new Error("No response received from OpenRouter API");
    }

    return new Error(`Failed to make request: ${error.message}`);
  }

  private static isOpenRouterError(data: unknown): data is ErrorResponse {
    return (
      typeof data === "object" &&
      data !== null &&
      "error" in data &&
      typeof (data as ErrorResponse).error.code === "number" &&
      typeof (data as ErrorResponse).error.message === "string"
    );
  }

  private static createDetailedError({
    code,
    message,
    metadata,
  }: ErrorResponse["error"]): Error {
    const baseMessage = `${this.ERROR_MESSAGES[code as keyof typeof this.ERROR_MESSAGES] || "Unknown error"}: ${message}`;

    if (!metadata) {
      return new Error(baseMessage);
    }

    if (this.isModerationError(metadata)) {
      return new Error(
        `${baseMessage}\nFlagged by ${metadata.provider_name} for: ${metadata.reasons.join(", ")}\n` +
          `Flagged content: "${metadata.flagged_input}"`,
      );
    }

    if (this.isProviderError(metadata)) {
      return new Error(
        `${baseMessage}\nProvider ${metadata.provider_name} error: ${JSON.stringify(metadata.raw)}`,
      );
    }

    return new Error(baseMessage);
  }

  private static isModerationError(
    metadata: unknown,
  ): metadata is ModerationErrorMetadata {
    return (
      typeof metadata === "object" &&
      metadata !== null &&
      "reasons" in metadata &&
      "flagged_input" in metadata &&
      "provider_name" in metadata &&
      "model_slug" in metadata
    );
  }

  private static isProviderError(
    metadata: unknown,
  ): metadata is ProviderErrorMetadata {
    return (
      typeof metadata === "object" &&
      metadata !== null &&
      "provider_name" in metadata &&
      "raw" in metadata
    );
  }
}
