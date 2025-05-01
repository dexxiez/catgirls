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
  supported_parameters: string[];
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
  top_logprobs?: number;

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
  | "AI21"
  | "AionLabs"
  | "Alibaba"
  | "Amazon Bedrock"
  | "Anthropic"
  | "Atoma"
  | "Avian.io"
  | "Azure"
  | "CentML"
  | "Chutes"
  | "Cloudflare"
  | "Cohere"
  | "Crusoe"
  | "DeepInfra"
  | "DeepSeek"
  | "Enfer"
  | "Featherless"
  | "Fireworks"
  | "Friendli"
  | "GMICloud"
  | "Google AI Studio"
  | "Google Vertex"
  | "Groq"
  | "Hyperbolic"
  | "Hyperbolic (quantized)"
  | "Inception"
  | "inference.net"
  | "Infermatic"
  | "Inflection"
  | "InoCloud"
  | "kluster.ai"
  | "Lambda"
  | "Lepton"
  | "Liquid"
  | "Mancer"
  | "Mancer (private)"
  | "Minimax"
  | "Mistral"
  | "nCompass"
  | "Nebius AI Studio"
  | "NextBit"
  | "Nineteen"
  | "NovitaAI"
  | "OpenAI"
  | "OpenInference"
  | "Parasail"
  | "Perplexity"
  | "Phala"
  | "Reflection"
  | "SambaNova"
  | "Stealth"
  | "Targon"
  | "Together"
  | "Together (lite)"
  | "Ubicloud"
  | "Venice"
  | "xAI";

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

type BaseRequest = {
  model?: string;
  stream?: boolean;
  temperature?: number;
};

// Discriminated union for the request
type CompletionRequest =
  | (BaseRequest & {
      messages: Message[];
      prompt?: undefined; // Force it to be undefined
    })
  | (BaseRequest & {
      prompt: string;
      messages?: undefined; // Force it to be undefined
    });

// Now for the responses...
// Common fields that appear in all responses
type BaseResponse = {
  id: string;
  provider: string;
  model: string;
  created: number;
  system_fingerprint: string;
  usage?: ResponseUsage;
};

// Non-streaming message-based response
type MessageBasedResponse = BaseResponse & {
  object: "chat.completion";
  choices: Array<{
    logprobs: null;
    finish_reason: string | null;
    index?: number;
    message: {
      role: string;
      content: string;
      refusal?: string;
    };
    text: never;
  }>;
};

// Non-streaming prompt-based response
type PromptBasedResponse = BaseResponse & {
  object: "chat.completion";
  choices: Array<{
    logprobs: null;
    finish_reason: string | null;
    index?: number;
    text: string;
    message: never;
  }>;
};

// Streaming chunk response
export type StreamingResponse = BaseResponse & {
  object: "chat.completion.chunk";
  choices: Array<{
    index: number;
    finish_reason: string | null;
    delta: {
      content?: string;
      role?: string;
      tool_calls?: ToolCall[];
    };
    error?: ErrorResponse;
  }>;
};

// Now the main type that ties it all together
export type ChatCompletionResult<
  TStreaming extends boolean,
  TRequest extends CompletionRequest,
> = TStreaming extends true
  ? EventEmitter
  : TRequest extends { messages: Message[] }
    ? MessageBasedResponse
    : PromptBasedResponse;

// If the provider returns usage, we pass it down
// as-is. Otherwise, we count using the GPT-4 tokenizer.

type ResponseUsage = {
  /** Including images and tools if any */
  prompt_tokens: number;
  /** The tokens generated */
  completion_tokens: number;
  /** Sum of the above two fields */
  total_tokens: number;
};

// Subtypes:

type ErrorResponse = {
  code: number; // See "Error Handling" section
  message: string;
  metadata?: Record<string, unknown>; // Contains additional error information such as provider details, the raw error message, etc.
};

type ToolCall = {
  id: string;
  type: "function";
  function: any;
};

export type GenerationStats = {
  id: string;
  upstream_id: string;
  total_cost: number;
  cache_discount: any;
  provider_name: string;
  created_at: string;
  model: string;
  app_id: any;
  streamed: boolean;
  cancelled: boolean;
  latency: number;
  moderation_latency: any;
  generation_time: number;
  finish_reason: string;
  tokens_prompt: number;
  tokens_completion: number;
  native_tokens_prompt: number;
  native_tokens_completion: number;
  native_tokens_reasoning: any;
  num_media_prompt: any;
  num_media_completion: any;
  origin: string;
  usage: number;
};

/**
 * Configuration options for the Agent
 */
export interface AgentOptions {
  /**
   * Maximum number of iterations the agent will perform before giving up
   * @default 5
   */
  maxIterations?: number;

  /**
   * The model to use for the agent
   * If not provided, falls back to the client's default model
   */
  model?: RouterModel;

  /**
   * System prompt to instruct the agent
   * If not provided, a default prompt will be generated based on markers
   */
  systemPrompt?: string;

  /**
   * Whether to prepend the default system prompt to the user's system prompt
   * @default false
   */
  prependDefaultPrompt?: boolean;

  /**
   * Tools the agent can use to perform tasks
   * @default []
   */
  tools?: AgentTool[];

  /**
   * Whether to emit verbose debugging events
   * @default false
   */
  verbose?: boolean;

  /**
   * Markers for different parts of the agent's thought process
   * Used for UI rendering and response formatting
   */
  markers?: AgentMarkers;

  /**
   * Custom function to determine when the agent should stop iterations
   * By default, stops when the finalAnswer marker is found
   */
  stopCondition?: (messages: Message[]) => boolean;
}

/**
 * UI markers for different parts of the agent's thought process
 */
export interface AgentMarkers {
  /**
   * Opening and closing markers for the agent's thinking/reasoning process
   * @default "<thinking>" for both opening and closing
   */
  thinking?: string | { open: string; close: string };

  /**
   * Opening and closing markers for when the agent decides to take an action (usually using a tool)
   * @default "<action>" for both opening and closing
   */
  action?: string | { open: string; close: string };

  /**
   * Opening and closing markers for observations after receiving tool results
   * @default "<observation>" for both opening and closing
   */
  observation?: string | { open: string; close: string };

  /**
   * Opening and closing markers for the final answer/conclusion
   * @default "<answer>" for both opening and closing
   */
  finalAnswer?: string | { open: string; close: string };
}

/**
 * Tool definition for agent functions
 */
export interface AgentTool {
  /**
   * Name of the tool - used by the LLM to invoke it
   */
  name: string;

  /**
   * Description of what the tool does
   * This helps the LLM understand when to use the tool
   */
  description: string;

  /**
   * JSON Schema defining the parameters for the tool
   * Should be an object type with properties
   */
  parameters: object;

  /**
   * Function that executes the tool's functionality
   * Returns a promise that resolves to the tool's result
   */
  execute: (params: any) => Promise<any>;
}

/**
 * Events emitted by the Agent during execution
 */
export interface AgentEvents {
  /**
   * Emitted for each token when streaming
   */
  token: (token: string) => void;

  /**
   * Emitted when a marker (thinking/action/observation/answer) is found
   */
  marker: (data: { type: string; content: string }) => void;

  /**
   * Emitted when the agent calls a tool
   */
  tool_call: (data: { name: string; args: any }) => void;

  /**
   * Emitted when a tool returns a result
   */
  tool_result: (data: { tool: string; args: any; result: any }) => void;

  /**
   * Emitted when a tool throws an error
   */
  tool_error: (data: { tool: string; args: any; error: any }) => void;

  /**
   * Emitted at the start of each iteration when verbose is true
   */
  iteration: (data: { iteration: number; messages: Message[] }) => void;

  /**
   * Emitted when the agent gets a response from the LLM
   */
  response: (message: Message) => void;

  /**
   * Emitted when the agent extracts a final answer
   */
  final_answer: (answer: string) => void;

  /**
   * Emitted when the agent completes execution
   */
  complete: () => void;

  /**
   * Emitted when an error occurs
   */
  error: (error: Error) => void;
}

/**
 * Return type for non-streaming agent execution
 */
export type AgentResult = string;

/**
 * Return type for streaming agent execution
 */
export type AgentStreamResult = EventEmitter;
