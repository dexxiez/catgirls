/* eslint-disable @typescript-eslint/no-explicit-any */
import type EventEmitter from "events";
import { RouterModel } from "./models";

export interface IHttpClient {
  post(url: string, data: any, config?: any): Promise<any>;
  get(url: string): Promise<any>;
}

export interface IStreamHandler {
  handleStream(stream: unknown): EventEmitter;
}

export interface QueryResponseModel {
  id: string;
  name: string;
  created: number;
  description: string;
  pricing: ModelPricing;
  context_length: number;
  architecture: ModelArchitecture;
  top_provider: TopProvider;
  per_request_limits: PerRequestLimits;
}

interface ModelPricing {
  prompt: string;
  completion: string;
  request: string;
  image: string;
}

interface ModelArchitecture {
  tokenizer: "Router"; // Assuming this is a fixed value based on the example
  instruct_type: "none" | string; // Added string union type for extensibility
  modality: "text->text" | string; // Added string union type for extensibility
}

interface TopProvider {
  context_length: number;
  max_completion_tokens: number;
  is_moderated: boolean;
}

interface PerRequestLimits {
  prompt_tokens: number | null;
  completion_tokens: number | null;
}

export type Request = {
  /**
   * The prompt to generate completions formatted as a string
   * Either `prompt` or `messages` is required
   */
  prompt?: string;

  /**
   * The messages to generate completions formatted as an array of objects
   * Either `prompt` or `messages` is required
   */
  messages?: Message[];
  /**
   * The model identifier to use for the request
   * If unspecified, uses the user's default model
   * @see {@link https://openrouter.ai/docs} for supported models
   * @optional
   */
  model?: RouterModel;

  /**
   * Forces the model to produce output in a specific format
   * Only supported by certain models - check model documentation
   * @optional
   */
  response_format?: {
    /** The type of response format to enforce */
    type: "json_object";
  };

  /**
   * Sequences that will cause the model to stop generating
   * Can be a single string or array of strings
   * @optional
   */
  stop?: string | string[];

  /**
   * Whether to stream the response tokens
   * @optional
   * @default false
   */
  stream?: boolean;

  /**
   * Maximum number of tokens to generate
   * @optional
   * @range [1, context_length)
   */
  max_tokens?: number;

  /**
   * Controls randomness in the output
   * Higher values = more random, lower = more focused
   * @optional
   * @range [0, 2]
   */
  temperature?: number;

  /**
   * Tool configurations for function calling capabilities
   * Passed directly to providers implementing OpenAI's interface
   * Transformed to YAML template for other providers
   * @see {@link https://openrouter.ai/models?supported_parameters=tools}
   * @optional
   */
  tools?: Tool[];

  /**
   * Specifies how tools should be used
   * @optional
   */
  tool_choice?: ToolChoice;

  // Advanced Parameters

  /**
   * Random seed for reproducible outputs
   * Must be an integer
   * @optional
   */
  seed?: number;

  /**
   * Nucleus sampling threshold
   * @optional
   * @range (0, 1]
   */
  top_p?: number;

  /**
   * Limits vocabulary to k highest probability tokens
   * Not available for OpenAI models
   * @optional
   * @range [1, Infinity)
   */
  top_k?: number;

  /**
   * Penalizes tokens based on their frequency
   * @optional
   * @range [-2, 2]
   */
  frequency_penalty?: number;

  /**
   * Penalizes tokens based on their presence
   * @optional
   * @range [-2, 2]
   */
  presence_penalty?: number;

  /**
   * Penalizes token repetition
   * @optional
   * @range (0, 2]
   */
  repetition_penalty?: number;

  /**
   * Token-level bias adjustments
   * @optional
   */
  logit_bias?: { [key: number]: number };

  /**
   * Number of most likely tokens to return with their probabilities
   * Must be an integer
   * @optional
   */
  top_logprobs: number;

  /**
   * Minimum probability threshold for token selection
   * @optional
   * @range [0, 1]
   */
  min_p?: number;

  /**
   * Dynamic nucleus sampling threshold
   * @optional
   * @range [0, 1]
   */
  top_a?: number;

  /**
   * Predicted output to reduce latency
   * @see {@link https://platform.openai.com/docs/guides/latency-optimization#use-predicted-outputs}
   * @optional
   */
  prediction?: {
    type: "content";
    content: string;
  };

  // OpenRouter-specific Parameters

  /**
   * Array of prompt transformation identifiers
   * @see {@link https://openrouter.ai/docs/transforms}
   * @optional
   */
  transforms?: string[];

  /**
   * Array of model identifiers for routing
   * @see {@link https://openrouter.ai/docs/model-routing}
   * @optional
   */
  models?: RouterModel[];

  /**
   * Routing strategy
   * @optional
   */
  route?: "fallback";

  /**
   * Provider preferences for routing
   * @see {@link https://openrouter.ai/docs/provider-routing}
   * @optional
   */
  provider?: ProviderPreferences;

  /**
   * Signal for aborting the request
   */
  signal?: AbortSignal;
};

// Subtypes:

type TextContent = {
  type: "text";
  text: string;
};

type ImageContentPart = {
  type: "image_url";
  image_url: {
    url: string; // URL or base64 encoded image data
    detail?: string; // Optional, defaults to 'auto'
  };
};

type ContentPart = TextContent | ImageContentPart;

export type Message =
  | {
      role: "user" | "assistant" | "system";
      // ContentParts are only for the 'user' role:
      content: string | ContentPart[];
      // If "name" is included, it will be prepended like this
      // for non-OpenAI models: `{name}: {content}`
      name?: string;
    }
  | {
      role: "tool";
      content: string;
      tool_call_id: string;
      name?: string;
    };

type FunctionDescription = {
  description?: string;
  name: string;
  parameters: object; // JSON Schema object
};

type Tool = {
  type: "function";
  function: FunctionDescription;
};

type ToolChoice =
  | "none"
  | "auto"
  | {
      type: "function";
      function: {
        name: string;
      };
    };

export type ProviderName =
  | "OpenAI"
  | "Anthropic"
  | "Google"
  | "Google AI Studio"
  | "Amazon Bedrock"
  | "Groq"
  | "SambaNova"
  | "Cohere"
  | "Mistral"
  | "Together"
  | "Together 2"
  | "Fireworks"
  | "DeepInfra"
  | "Lepton"
  | "Novita"
  | "Avian"
  | "Lambda"
  | "Azure"
  | "Modal"
  | "AnyScale"
  | "Replicate"
  | "Perplexity"
  | "Recursal"
  | "OctoAI"
  | "DeepSeek"
  | "Infermatic"
  | "AI21"
  | "Featherless"
  | "Inflection"
  | "xAI"
  | "Cloudflare"
  | "SF Compute"
  | "01.AI"
  | "HuggingFace"
  | "Mancer"
  | "Mancer 2"
  | "Hyperbolic"
  | "Hyperbolic 2"
  | "Lynn 2"
  | "Lynn"
  | "Reflection";

export type DataCollectionSetting = "deny" | "allow";

export type Quantization =
  | "int4"
  | "int8"
  | "fp6"
  | "fp8"
  | "fp16"
  | "bf16"
  | "unknown";

export interface ProviderPreferences {
  /**
   * Whether to allow backup providers to serve requests
   * - true: (default) when the primary provider (or your custom providers in "order") is unavailable, use the next best provider.
   * - false: use only the primary/custom provider, and return the upstream error if it's unavailable.
   */
  allow_fallbacks?: boolean | null;

  /**
   * Whether to filter providers to only those that support the parameters you've provided.
   * If this setting is omitted or set to false, then providers will receive only the parameters they support,
   * and ignore the rest.
   */
  require_parameters?: boolean | null;

  /**
   * Data collection setting. If no available model provider meets the requirement, your request will return an error.
   * - allow: (default) allow providers which store user data non-transiently and may train on it
   * - deny: use only providers which do not collect user data.
   */
  data_collection?: DataCollectionSetting | null;

  /**
   * An ordered list of provider names. The router will attempt to use the first provider in the subset
   * of this list that supports your requested model, and fall back to the next if it is unavailable.
   * If no providers are available, the request will fail with an error message.
   */
  order?: ProviderName[] | null;

  /**
   * List of provider names to ignore. If provided, this list is merged with your account-wide
   * ignored provider settings for this request.
   */
  ignore?: ProviderName[] | null;

  /**
   * A list of quantization levels to filter the provider by.
   */
  quantizations?: Quantization[] | null;
}
