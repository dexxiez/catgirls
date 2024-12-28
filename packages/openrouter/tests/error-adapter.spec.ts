import { AxiosError, InternalAxiosRequestConfig, AxiosHeaders } from "axios";
import { OpenRouterErrorAdapter } from "../src/lib/error-adapter";

describe("OpenRouterErrorAdapter", () => {
  // Helper to create a minimal valid Axios config
  const createAxiosConfig = (): InternalAxiosRequestConfig => ({
    headers: new AxiosHeaders(),
    method: "get",
    url: "",
    data: undefined,
    baseURL: "",
    transformRequest: [],
    transformResponse: [],
    timeout: 0,
    xsrfCookieName: "",
    xsrfHeaderName: "",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: window.FormData,
    },
  });

  describe("handleError", () => {
    it("should handle basic Axios errors with standard status codes", () => {
      const statusCodes = [400, 401, 402, 403, 408, 429, 502, 503];

      statusCodes.forEach((status) => {
        const axiosError = new AxiosError();
        axiosError.response = {
          status,
          data: {},
          statusText: "",
          headers: {},
          config: createAxiosConfig(),
        };

        expect(() => OpenRouterErrorAdapter.handleError(axiosError)).toThrow();
      });
    });

    it("should handle moderation errors with detailed metadata", () => {
      const axiosError = new AxiosError();
      axiosError.response = {
        status: 403,
        data: {
          error: {
            code: 403,
            message: "Content violated moderation policy",
            metadata: {
              reasons: ["hate", "violence"],
              flagged_input: "bad content here",
              provider_name: "TestProvider",
              model_slug: "test-model",
            },
          },
        },
        statusText: "",
        headers: {},
        config: createAxiosConfig(),
      };

      expect(() => OpenRouterErrorAdapter.handleError(axiosError)).toThrow(
        /Flagged by TestProvider for: hate, violence/,
      );
    });

    it("should handle provider errors with raw data", () => {
      const axiosError = new AxiosError();
      axiosError.response = {
        status: 502,
        data: {
          error: {
            code: 502,
            message: "Provider failed to process request",
            metadata: {
              provider_name: "TestProvider",
              raw: { reason: "model_overloaded" },
            },
          },
        },
        statusText: "",
        headers: {},
        config: createAxiosConfig(),
      };

      expect(() => OpenRouterErrorAdapter.handleError(axiosError)).toThrow(
        /Provider TestProvider error/,
      );
    });

    it("should handle network errors without response", () => {
      const axiosError = new AxiosError();
      axiosError.request = {}; // Simulating a request that got no response
      axiosError.config = createAxiosConfig();

      expect(() => OpenRouterErrorAdapter.handleError(axiosError)).toThrow(
        "No response received from OpenRouter API",
      );
    });

    it("should handle setup errors before request is made", () => {
      const axiosError = new AxiosError("Failed to configure request");
      axiosError.config = createAxiosConfig();

      expect(() => OpenRouterErrorAdapter.handleError(axiosError)).toThrow(
        "Failed to make request: Failed to configure request",
      );
    });

    it("should handle non-Axios errors gracefully", () => {
      const randomError = new Error("Something weird happened");

      expect(() => OpenRouterErrorAdapter.handleError(randomError)).toThrow(
        "Unexpected error: Something weird happened",
      );
    });

    it("should handle malformed OpenRouter error responses", () => {
      const axiosError = new AxiosError();
      axiosError.response = {
        status: 500,
        data: {
          error: {
            // Missing required code
            message: "Malformed error",
          },
        },
        statusText: "",
        headers: {},
        config: createAxiosConfig(),
      };

      expect(() => OpenRouterErrorAdapter.handleError(axiosError)).toThrow(
        /HTTP 500: Unknown error/,
      );
    });

    it("should handle unmapped HTTP status codes", () => {
      const axiosError = new AxiosError();
      axiosError.response = {
        status: 418, // I'm a teapot (not in our error map)
        data: {
          error: {
            code: 418,
            message: "Server refuses to brew coffee",
          },
        },
        statusText: "",
        headers: {},
        config: createAxiosConfig(),
      };

      expect(() => OpenRouterErrorAdapter.handleError(axiosError)).toThrow(
        "Unknown error: Server refuses to brew coffee",
      );
    });

    it("should handle unknown error codes in OpenRouter response", () => {
      const axiosError = new AxiosError();
      axiosError.response = {
        status: 500,
        data: {
          error: {
            code: 9999, // Some weird code that's not in our mapping
            message: "Something strange happened",
          },
        },
        statusText: "",
        headers: {},
        config: createAxiosConfig(),
      };

      expect(() => OpenRouterErrorAdapter.handleError(axiosError)).toThrow(
        "Unknown error: Something strange happened",
      );
    });

    it("should handle null metadata in error response", () => {
      const axiosError = new AxiosError();
      axiosError.response = {
        status: 502,
        data: {
          error: {
            code: 502,
            message: "Something went wrong",
            metadata: null, // Explicitly testing null metadata
          },
        },
        statusText: "",
        headers: {},
        config: createAxiosConfig(),
      };

      // Should just return the base message without any metadata parsing
      expect(() => OpenRouterErrorAdapter.handleError(axiosError)).toThrow(
        "Provider error: Model is down or invalid response received: Something went wrong",
      );
    });

    it("should handle malformed moderation metadata", () => {
      const axiosError = new AxiosError();
      axiosError.response = {
        status: 403,
        data: {
          error: {
            code: 403,
            message: "Content violated moderation policy",
            metadata: {
              // Missing required fields for moderation metadata
              provider_name: "TestProvider",
            },
          },
        },
        statusText: "",
        headers: {},
        config: createAxiosConfig(),
      };

      // Should fall back to base message without metadata details
      expect(() => OpenRouterErrorAdapter.handleError(axiosError)).toThrow(
        /Content violated moderation policy/,
      );
    });

    it("should handle malformed provider metadata", () => {
      const axiosError = new AxiosError();
      axiosError.response = {
        status: 502,
        data: {
          error: {
            code: 502,
            message: "Provider failed",
            metadata: {
              // Missing raw field
              provider_name: "TestProvider",
            },
          },
        },
        statusText: "",
        headers: {},
        config: createAxiosConfig(),
      };

      // Should fall back to base message without provider details
      expect(() => OpenRouterErrorAdapter.handleError(axiosError)).toThrow(
        /Provider failed/,
      );
    });

    it("should handle undefined error responses", () => {
      const axiosError = new AxiosError();
      axiosError.response = {
        status: 500,
        data: undefined,
        statusText: "",
        headers: {},
        config: createAxiosConfig(),
      };

      expect(() => OpenRouterErrorAdapter.handleError(axiosError)).toThrow(
        /HTTP 500: Unknown error/,
      );
    });
  });
});
