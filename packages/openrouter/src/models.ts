// ! Generated file, do not modify by hand. See packages/openrouter/scripts/generate-models.ts

export type RouterModel =
  /** DeepSeek: DeepSeek V3.1
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-chat-v3.1
  */
  | "deepseek/deepseek-chat-v3.1"
  /** DeepSeek: DeepSeek V3.1 Base
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-v3.1-base
  */
  | "deepseek/deepseek-v3.1-base"
  /** OpenAI: GPT-4o Audio
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-audio-preview
  */
  | "openai/gpt-4o-audio-preview"
  /** Mistral: Mistral Medium 3.1
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 262144
  @url https://openrouter.ai/mistralai/mistral-medium-3.1
  */
  | "mistralai/mistral-medium-3.1"
  /** Baidu: ERNIE 4.5 21B A3B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 120000
  @url https://openrouter.ai/baidu/ernie-4.5-21b-a3b
  */
  | "baidu/ernie-4.5-21b-a3b"
  /** Baidu: ERNIE 4.5 VL 28B A3B
  @capabilities frequency_penalty, include_reasoning, logit_bias, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 30000
  @url https://openrouter.ai/baidu/ernie-4.5-vl-28b-a3b
  */
  | "baidu/ernie-4.5-vl-28b-a3b"
  /** Z.AI: GLM 4.5V
  @capabilities frequency_penalty, include_reasoning, logit_bias, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 65536
  @url https://openrouter.ai/z-ai/glm-4.5v
  */
  | "z-ai/glm-4.5v"
  /** AI21: Jamba Mini 1.7
  @capabilities max_tokens, response_format, stop, temperature, tool_choice, tools, top_p
  @context_length 256000
  @url https://openrouter.ai/ai21/jamba-mini-1.7
  */
  | "ai21/jamba-mini-1.7"
  /** AI21: Jamba Large 1.7
  @capabilities max_tokens, response_format, stop, temperature, tool_choice, tools, top_p
  @context_length 256000
  @url https://openrouter.ai/ai21/jamba-large-1.7
  */
  | "ai21/jamba-large-1.7"
  /** OpenAI: GPT-5 Chat
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs
  @context_length 400000
  @url https://openrouter.ai/openai/gpt-5-chat
  */
  | "openai/gpt-5-chat"
  /** OpenAI: GPT-5
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 400000
  @url https://openrouter.ai/openai/gpt-5
  */
  | "openai/gpt-5"
  /** OpenAI: GPT-5 Mini
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 400000
  @url https://openrouter.ai/openai/gpt-5-mini
  */
  | "openai/gpt-5-mini"
  /** OpenAI: GPT-5 Nano
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 400000
  @url https://openrouter.ai/openai/gpt-5-nano
  */
  | "openai/gpt-5-nano"
  /** OpenAI: gpt-oss-120b
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131000
  @url https://openrouter.ai/openai/gpt-oss-120b
  */
  | "openai/gpt-oss-120b"
  /** OpenAI: gpt-oss-20b (free)
  @capabilities include_reasoning, max_tokens, reasoning, response_format, structured_outputs, temperature, top_p
  @context_length 131072
  @url https://openrouter.ai/openai/gpt-oss-20b:free
  */
  | "openai/gpt-oss-20b:free"
  /** OpenAI: gpt-oss-20b
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131000
  @url https://openrouter.ai/openai/gpt-oss-20b
  */
  | "openai/gpt-oss-20b"
  /** Anthropic: Claude Opus 4.1
  @capabilities include_reasoning, max_tokens, reasoning, stop, temperature, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-opus-4.1
  */
  | "anthropic/claude-opus-4.1"
  /** Mistral: Codestral 2508
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 256000
  @url https://openrouter.ai/mistralai/codestral-2508
  */
  | "mistralai/codestral-2508"
  /** Qwen: Qwen3 30B A3B Instruct 2507
  @capabilities max_tokens, presence_penalty, response_format, seed, temperature, top_p
  @context_length 131072
  @url https://openrouter.ai/qwen/qwen3-30b-a3b-instruct-2507
  */
  | "qwen/qwen3-30b-a3b-instruct-2507"
  /** Z.AI: GLM 4.5
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/z-ai/glm-4.5
  */
  | "z-ai/glm-4.5"
  /** Z.AI: GLM 4.5 Air (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/z-ai/glm-4.5-air:free
  */
  | "z-ai/glm-4.5-air:free"
  /** Z.AI: GLM 4.5 Air
  @capabilities include_reasoning, max_tokens, reasoning, temperature, tool_choice, tools, top_p
  @context_length 131072
  @url https://openrouter.ai/z-ai/glm-4.5-air
  */
  | "z-ai/glm-4.5-air"
  /** Qwen: Qwen3 235B A22B Thinking 2507
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 262144
  @url https://openrouter.ai/qwen/qwen3-235b-a22b-thinking-2507
  */
  | "qwen/qwen3-235b-a22b-thinking-2507"
  /** Z.AI: GLM 4 32B 
  @capabilities max_tokens, temperature, tool_choice, tools, top_p
  @context_length 128000
  @url https://openrouter.ai/z-ai/glm-4-32b
  */
  | "z-ai/glm-4-32b"
  /** Qwen: Qwen3 Coder  (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 262144
  @url https://openrouter.ai/qwen/qwen3-coder:free
  */
  | "qwen/qwen3-coder:free"
  /** Qwen: Qwen3 Coder 
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 262144
  @url https://openrouter.ai/qwen/qwen3-coder
  */
  | "qwen/qwen3-coder"
  /** Bytedance: UI-TARS 7B 
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/bytedance/ui-tars-1.5-7b
  */
  | "bytedance/ui-tars-1.5-7b"
  /** Google: Gemini 2.5 Flash Lite
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-flash-lite
  */
  | "google/gemini-2.5-flash-lite"
  /** Qwen: Qwen3 235B A22B Instruct 2507
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 262144
  @url https://openrouter.ai/qwen/qwen3-235b-a22b-2507
  */
  | "qwen/qwen3-235b-a22b-2507"
  /** Switchpoint Router
  @capabilities include_reasoning, max_tokens, reasoning, seed, stop, temperature, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/switchpoint/router
  */
  | "switchpoint/router"
  /** MoonshotAI: Kimi K2 (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/moonshotai/kimi-k2:free
  */
  | "moonshotai/kimi-k2:free"
  /** MoonshotAI: Kimi K2
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 63000
  @url https://openrouter.ai/moonshotai/kimi-k2
  */
  | "moonshotai/kimi-k2"
  /** THUDM: GLM 4.1V 9B Thinking
  @capabilities frequency_penalty, include_reasoning, logit_bias, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 65536
  @url https://openrouter.ai/thudm/glm-4.1v-9b-thinking
  */
  | "thudm/glm-4.1v-9b-thinking"
  /** Mistral: Devstral Medium
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/devstral-medium
  */
  | "mistralai/devstral-medium"
  /** Mistral: Devstral Small 1.1
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/mistralai/devstral-small
  */
  | "mistralai/devstral-small"
  /** Venice: Uncensored (free)
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, stop, structured_outputs, temperature, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/cognitivecomputations/dolphin-mistral-24b-venice-edition:free
  */
  | "cognitivecomputations/dolphin-mistral-24b-venice-edition:free"
  /** xAI: Grok 4
  @capabilities include_reasoning, logprobs, max_tokens, reasoning, response_format, seed, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 256000
  @url https://openrouter.ai/x-ai/grok-4
  */
  | "x-ai/grok-4"
  /** Google: Gemma 3n 2B (free)
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, temperature, top_p
  @context_length 8192
  @url https://openrouter.ai/google/gemma-3n-e2b-it:free
  */
  | "google/gemma-3n-e2b-it:free"
  /** Tencent: Hunyuan A13B Instruct (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/tencent/hunyuan-a13b-instruct:free
  */
  | "tencent/hunyuan-a13b-instruct:free"
  /** Tencent: Hunyuan A13B Instruct
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/tencent/hunyuan-a13b-instruct
  */
  | "tencent/hunyuan-a13b-instruct"
  /** TNG: DeepSeek R1T2 Chimera (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/tngtech/deepseek-r1t2-chimera:free
  */
  | "tngtech/deepseek-r1t2-chimera:free"
  /** Morph: Morph V3 Large
  @capabilities max_tokens, stop, temperature
  @context_length 81920
  @url https://openrouter.ai/morph/morph-v3-large
  */
  | "morph/morph-v3-large"
  /** Morph: Morph V3 Fast
  @capabilities max_tokens, stop, temperature
  @context_length 81920
  @url https://openrouter.ai/morph/morph-v3-fast
  */
  | "morph/morph-v3-fast"
  /** Baidu: ERNIE 4.5 VL 424B A47B 
  @capabilities frequency_penalty, include_reasoning, logit_bias, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 123000
  @url https://openrouter.ai/baidu/ernie-4.5-vl-424b-a47b
  */
  | "baidu/ernie-4.5-vl-424b-a47b"
  /** Baidu: ERNIE 4.5 300B A47B 
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 123000
  @url https://openrouter.ai/baidu/ernie-4.5-300b-a47b
  */
  | "baidu/ernie-4.5-300b-a47b"
  /** TheDrummer: Anubis 70B V1.1
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_p
  @context_length 16384
  @url https://openrouter.ai/thedrummer/anubis-70b-v1.1
  */
  | "thedrummer/anubis-70b-v1.1"
  /** Inception: Mercury
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/inception/mercury
  */
  | "inception/mercury"
  /** Mistral: Mistral Small 3.2 24B (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-small-3.2-24b-instruct:free
  */
  | "mistralai/mistral-small-3.2-24b-instruct:free"
  /** Mistral: Mistral Small 3.2 24B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 128000
  @url https://openrouter.ai/mistralai/mistral-small-3.2-24b-instruct
  */
  | "mistralai/mistral-small-3.2-24b-instruct"
  /** MiniMax: MiniMax M1
  @capabilities frequency_penalty, include_reasoning, logit_bias, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_p
  @context_length 1000000
  @url https://openrouter.ai/minimax/minimax-m1
  */
  | "minimax/minimax-m1"
  /** Google: Gemini 2.5 Flash Lite Preview 06-17
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-flash-lite-preview-06-17
  */
  | "google/gemini-2.5-flash-lite-preview-06-17"
  /** Google: Gemini 2.5 Flash
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-flash
  */
  | "google/gemini-2.5-flash"
  /** Google: Gemini 2.5 Pro
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-pro
  */
  | "google/gemini-2.5-pro"
  /** MoonshotAI: Kimi Dev 72B (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/moonshotai/kimi-dev-72b:free
  */
  | "moonshotai/kimi-dev-72b:free"
  /** OpenAI: o3 Pro
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/o3-pro
  */
  | "openai/o3-pro"
  /** xAI: Grok 3 Mini
  @capabilities include_reasoning, logprobs, max_tokens, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-3-mini
  */
  | "x-ai/grok-3-mini"
  /** xAI: Grok 3
  @capabilities frequency_penalty, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-3
  */
  | "x-ai/grok-3"
  /** Mistral: Magistral Small 2506
  @capabilities frequency_penalty, include_reasoning, max_tokens, presence_penalty, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 40000
  @url https://openrouter.ai/mistralai/magistral-small-2506
  */
  | "mistralai/magistral-small-2506"
  /** Mistral: Magistral Medium 2506
  @capabilities frequency_penalty, include_reasoning, max_tokens, presence_penalty, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 40960
  @url https://openrouter.ai/mistralai/magistral-medium-2506
  */
  | "mistralai/magistral-medium-2506"
  /** Mistral: Magistral Medium 2506 (thinking)
  @capabilities frequency_penalty, include_reasoning, max_tokens, presence_penalty, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 40960
  @url https://openrouter.ai/mistralai/magistral-medium-2506:thinking
  */
  | "mistralai/magistral-medium-2506:thinking"
  /** Google: Gemini 2.5 Pro Preview 06-05
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-pro-preview
  */
  | "google/gemini-2.5-pro-preview"
  /** DeepSeek: Deepseek R1 0528 Qwen3 8B (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/deepseek/deepseek-r1-0528-qwen3-8b:free
  */
  | "deepseek/deepseek-r1-0528-qwen3-8b:free"
  /** DeepSeek: Deepseek R1 0528 Qwen3 8B
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32000
  @url https://openrouter.ai/deepseek/deepseek-r1-0528-qwen3-8b
  */
  | "deepseek/deepseek-r1-0528-qwen3-8b"
  /** DeepSeek: R1 0528 (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-r1-0528:free
  */
  | "deepseek/deepseek-r1-0528:free"
  /** DeepSeek: R1 0528
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-r1-0528
  */
  | "deepseek/deepseek-r1-0528"
  /** Sarvam AI: Sarvam-M (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/sarvamai/sarvam-m:free
  */
  | "sarvamai/sarvam-m:free"
  /** Anthropic: Claude Opus 4
  @capabilities include_reasoning, max_tokens, reasoning, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-opus-4
  */
  | "anthropic/claude-opus-4"
  /** Anthropic: Claude Sonnet 4
  @capabilities include_reasoning, max_tokens, reasoning, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-sonnet-4
  */
  | "anthropic/claude-sonnet-4"
  /** Mistral: Devstral Small 2505 (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/devstral-small-2505:free
  */
  | "mistralai/devstral-small-2505:free"
  /** Mistral: Devstral Small 2505
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/devstral-small-2505
  */
  | "mistralai/devstral-small-2505"
  /** Google: Gemma 3n 4B (free)
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, temperature, top_p
  @context_length 8192
  @url https://openrouter.ai/google/gemma-3n-e4b-it:free
  */
  | "google/gemma-3n-e4b-it:free"
  /** Google: Gemma 3n 4B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, stop, temperature, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/google/gemma-3n-e4b-it
  */
  | "google/gemma-3n-e4b-it"
  /** OpenAI: Codex Mini
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/codex-mini
  */
  | "openai/codex-mini"
  /** Nous: DeepHermes 3 Mistral 24B Preview
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/nousresearch/deephermes-3-mistral-24b-preview
  */
  | "nousresearch/deephermes-3-mistral-24b-preview"
  /** Mistral: Mistral Medium 3
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-medium-3
  */
  | "mistralai/mistral-medium-3"
  /** Google: Gemini 2.5 Pro Preview 05-06
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-pro-preview-05-06
  */
  | "google/gemini-2.5-pro-preview-05-06"
  /** Arcee AI: Spotlight
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, stop, temperature, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/arcee-ai/spotlight
  */
  | "arcee-ai/spotlight"
  /** Arcee AI: Maestro Reasoning
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, stop, temperature, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/arcee-ai/maestro-reasoning
  */
  | "arcee-ai/maestro-reasoning"
  /** Arcee AI: Virtuoso Large
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/arcee-ai/virtuoso-large
  */
  | "arcee-ai/virtuoso-large"
  /** Arcee AI: Coder Large
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, stop, temperature, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/arcee-ai/coder-large
  */
  | "arcee-ai/coder-large"
  /** Microsoft: Phi 4 Reasoning Plus
  @capabilities frequency_penalty, include_reasoning, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, temperature, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/microsoft/phi-4-reasoning-plus
  */
  | "microsoft/phi-4-reasoning-plus"
  /** Inception: Mercury Coder
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/inception/mercury-coder
  */
  | "inception/mercury-coder"
  /** Qwen: Qwen3 4B (free)
  @capabilities frequency_penalty, include_reasoning, max_tokens, presence_penalty, reasoning, response_format, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_p
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-4b:free
  */
  | "qwen/qwen3-4b:free"
  /** OpenGVLab: InternVL3 14B
  @capabilities max_tokens, temperature, top_p
  @context_length 12288
  @url https://openrouter.ai/opengvlab/internvl3-14b
  */
  | "opengvlab/internvl3-14b"
  /** DeepSeek: DeepSeek Prover V2
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, top_k, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-prover-v2
  */
  | "deepseek/deepseek-prover-v2"
  /** Meta: Llama Guard 4 12B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, top_k, top_p
  @context_length 163840
  @url https://openrouter.ai/meta-llama/llama-guard-4-12b
  */
  | "meta-llama/llama-guard-4-12b"
  /** Qwen: Qwen3 30B A3B (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-30b-a3b:free
  */
  | "qwen/qwen3-30b-a3b:free"
  /** Qwen: Qwen3 30B A3B
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-30b-a3b
  */
  | "qwen/qwen3-30b-a3b"
  /** Qwen: Qwen3 8B (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-8b:free
  */
  | "qwen/qwen3-8b:free"
  /** Qwen: Qwen3 8B
  @capabilities frequency_penalty, include_reasoning, logit_bias, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/qwen/qwen3-8b
  */
  | "qwen/qwen3-8b"
  /** Qwen: Qwen3 14B (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-14b:free
  */
  | "qwen/qwen3-14b:free"
  /** Qwen: Qwen3 14B
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-14b
  */
  | "qwen/qwen3-14b"
  /** Qwen: Qwen3 32B
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-32b
  */
  | "qwen/qwen3-32b"
  /** Qwen: Qwen3 235B A22B (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/qwen/qwen3-235b-a22b:free
  */
  | "qwen/qwen3-235b-a22b:free"
  /** Qwen: Qwen3 235B A22B
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-235b-a22b
  */
  | "qwen/qwen3-235b-a22b"
  /** TNG: DeepSeek R1T Chimera (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/tngtech/deepseek-r1t-chimera:free
  */
  | "tngtech/deepseek-r1t-chimera:free"
  /** TNG: DeepSeek R1T Chimera
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/tngtech/deepseek-r1t-chimera
  */
  | "tngtech/deepseek-r1t-chimera"
  /** Microsoft: MAI DS R1 (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/microsoft/mai-ds-r1:free
  */
  | "microsoft/mai-ds-r1:free"
  /** Microsoft: MAI DS R1
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/microsoft/mai-ds-r1
  */
  | "microsoft/mai-ds-r1"
  /** THUDM: GLM Z1 32B
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/thudm/glm-z1-32b
  */
  | "thudm/glm-z1-32b"
  /** THUDM: GLM 4 32B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 32000
  @url https://openrouter.ai/thudm/glm-4-32b
  */
  | "thudm/glm-4-32b"
  /** OpenAI: o4 Mini High
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/o4-mini-high
  */
  | "openai/o4-mini-high"
  /** OpenAI: o3
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/o3
  */
  | "openai/o3"
  /** OpenAI: o4 Mini
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/o4-mini
  */
  | "openai/o4-mini"
  /** Shisa AI: Shisa V2 Llama 3.3 70B  (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/shisa-ai/shisa-v2-llama3.3-70b:free
  */
  | "shisa-ai/shisa-v2-llama3.3-70b:free"
  /** Shisa AI: Shisa V2 Llama 3.3 70B 
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/shisa-ai/shisa-v2-llama3.3-70b
  */
  | "shisa-ai/shisa-v2-llama3.3-70b"
  /** OpenAI: GPT-4.1
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 1047576
  @url https://openrouter.ai/openai/gpt-4.1
  */
  | "openai/gpt-4.1"
  /** OpenAI: GPT-4.1 Mini
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 1047576
  @url https://openrouter.ai/openai/gpt-4.1-mini
  */
  | "openai/gpt-4.1-mini"
  /** OpenAI: GPT-4.1 Nano
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 1047576
  @url https://openrouter.ai/openai/gpt-4.1-nano
  */
  | "openai/gpt-4.1-nano"
  /** EleutherAI: Llemma 7b
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 4096
  @url https://openrouter.ai/eleutherai/llemma_7b
  */
  | "eleutherai/llemma_7b"
  /** AlfredPros: CodeLLaMa 7B Instruct Solidity
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 8192
  @url https://openrouter.ai/alfredpros/codellama-7b-instruct-solidity
  */
  | "alfredpros/codellama-7b-instruct-solidity"
  /** ArliAI: QwQ 32B RpR v1 (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/arliai/qwq-32b-arliai-rpr-v1:free
  */
  | "arliai/qwq-32b-arliai-rpr-v1:free"
  /** ArliAI: QwQ 32B RpR v1
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/arliai/qwq-32b-arliai-rpr-v1
  */
  | "arliai/qwq-32b-arliai-rpr-v1"
  /** Agentica: Deepcoder 14B Preview (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 96000
  @url https://openrouter.ai/agentica-org/deepcoder-14b-preview:free
  */
  | "agentica-org/deepcoder-14b-preview:free"
  /** Agentica: Deepcoder 14B Preview
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 96000
  @url https://openrouter.ai/agentica-org/deepcoder-14b-preview
  */
  | "agentica-org/deepcoder-14b-preview"
  /** MoonshotAI: Kimi VL A3B Thinking (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/moonshotai/kimi-vl-a3b-thinking:free
  */
  | "moonshotai/kimi-vl-a3b-thinking:free"
  /** MoonshotAI: Kimi VL A3B Thinking
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/moonshotai/kimi-vl-a3b-thinking
  */
  | "moonshotai/kimi-vl-a3b-thinking"
  /** xAI: Grok 3 Mini Beta
  @capabilities include_reasoning, logprobs, max_tokens, reasoning, response_format, seed, stop, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-3-mini-beta
  */
  | "x-ai/grok-3-mini-beta"
  /** xAI: Grok 3 Beta
  @capabilities frequency_penalty, logprobs, max_tokens, presence_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-3-beta
  */
  | "x-ai/grok-3-beta"
  /** NVIDIA: Llama 3.3 Nemotron Super 49B v1
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/nvidia/llama-3.3-nemotron-super-49b-v1
  */
  | "nvidia/llama-3.3-nemotron-super-49b-v1"
  /** NVIDIA: Llama 3.1 Nemotron Ultra 253B v1 (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/nvidia/llama-3.1-nemotron-ultra-253b-v1:free
  */
  | "nvidia/llama-3.1-nemotron-ultra-253b-v1:free"
  /** NVIDIA: Llama 3.1 Nemotron Ultra 253B v1
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, presence_penalty, reasoning, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/nvidia/llama-3.1-nemotron-ultra-253b-v1
  */
  | "nvidia/llama-3.1-nemotron-ultra-253b-v1"
  /** Meta: Llama 4 Maverick
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 1048576
  @url https://openrouter.ai/meta-llama/llama-4-maverick
  */
  | "meta-llama/llama-4-maverick"
  /** Meta: Llama 4 Scout
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 1048576
  @url https://openrouter.ai/meta-llama/llama-4-scout
  */
  | "meta-llama/llama-4-scout"
  /** DeepSeek: DeepSeek V3 Base
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-v3-base
  */
  | "deepseek/deepseek-v3-base"
  /** Typhoon2 70B Instruct
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, stop, temperature, top_k, top_p
  @context_length 8192
  @url https://openrouter.ai/scb10x/llama3.1-typhoon2-70b-instruct
  */
  | "scb10x/llama3.1-typhoon2-70b-instruct"
  /** Google: Gemini 2.5 Pro Experimental
  @capabilities max_tokens, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-pro-exp-03-25
  */
  | "google/gemini-2.5-pro-exp-03-25"
  /** Qwen: Qwen2.5 VL 32B Instruct (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 8192
  @url https://openrouter.ai/qwen/qwen2.5-vl-32b-instruct:free
  */
  | "qwen/qwen2.5-vl-32b-instruct:free"
  /** Qwen: Qwen2.5 VL 32B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_logprobs, top_p
  @context_length 16384
  @url https://openrouter.ai/qwen/qwen2.5-vl-32b-instruct
  */
  | "qwen/qwen2.5-vl-32b-instruct"
  /** DeepSeek: DeepSeek V3 0324 (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-chat-v3-0324:free
  */
  | "deepseek/deepseek-chat-v3-0324:free"
  /** DeepSeek: DeepSeek V3 0324
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-chat-v3-0324
  */
  | "deepseek/deepseek-chat-v3-0324"
  /** Qrwkv 72B (free)
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/featherless/qwerky-72b:free
  */
  | "featherless/qwerky-72b:free"
  /** OpenAI: o1-pro
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs
  @context_length 200000
  @url https://openrouter.ai/openai/o1-pro
  */
  | "openai/o1-pro"
  /** Mistral: Mistral Small 3.1 24B (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 128000
  @url https://openrouter.ai/mistralai/mistral-small-3.1-24b-instruct:free
  */
  | "mistralai/mistral-small-3.1-24b-instruct:free"
  /** Mistral: Mistral Small 3.1 24B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-small-3.1-24b-instruct
  */
  | "mistralai/mistral-small-3.1-24b-instruct"
  /** Google: Gemma 3 4B (free)
  @capabilities max_tokens, response_format, seed, structured_outputs, temperature, top_p
  @context_length 32768
  @url https://openrouter.ai/google/gemma-3-4b-it:free
  */
  | "google/gemma-3-4b-it:free"
  /** Google: Gemma 3 4B
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/google/gemma-3-4b-it
  */
  | "google/gemma-3-4b-it"
  /** Google: Gemma 3 12B (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/google/gemma-3-12b-it:free
  */
  | "google/gemma-3-12b-it:free"
  /** Google: Gemma 3 12B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 96000
  @url https://openrouter.ai/google/gemma-3-12b-it
  */
  | "google/gemma-3-12b-it"
  /** Cohere: Command A
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/cohere/command-a
  */
  | "cohere/command-a"
  /** OpenAI: GPT-4o-mini Search Preview
  @capabilities max_tokens, response_format, structured_outputs, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-mini-search-preview
  */
  | "openai/gpt-4o-mini-search-preview"
  /** OpenAI: GPT-4o Search Preview
  @capabilities max_tokens, response_format, structured_outputs, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-search-preview
  */
  | "openai/gpt-4o-search-preview"
  /** Reka: Flash 3 (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/rekaai/reka-flash-3:free
  */
  | "rekaai/reka-flash-3:free"
  /** Google: Gemma 3 27B (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_logprobs, top_p
  @context_length 96000
  @url https://openrouter.ai/google/gemma-3-27b-it:free
  */
  | "google/gemma-3-27b-it:free"
  /** Google: Gemma 3 27B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_logprobs, top_p
  @context_length 96000
  @url https://openrouter.ai/google/gemma-3-27b-it
  */
  | "google/gemma-3-27b-it"
  /** TheDrummer: Anubis Pro 105B V1
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/thedrummer/anubis-pro-105b-v1
  */
  | "thedrummer/anubis-pro-105b-v1"
  /** TheDrummer: Skyfall 36B V2
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/thedrummer/skyfall-36b-v2
  */
  | "thedrummer/skyfall-36b-v2"
  /** Microsoft: Phi 4 Multimodal Instruct
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/microsoft/phi-4-multimodal-instruct
  */
  | "microsoft/phi-4-multimodal-instruct"
  /** Perplexity: Sonar Reasoning Pro
  @capabilities frequency_penalty, include_reasoning, max_tokens, presence_penalty, reasoning, temperature, top_k, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/perplexity/sonar-reasoning-pro
  */
  | "perplexity/sonar-reasoning-pro"
  /** Perplexity: Sonar Pro
  @capabilities frequency_penalty, max_tokens, presence_penalty, temperature, top_k, top_p, web_search_options
  @context_length 200000
  @url https://openrouter.ai/perplexity/sonar-pro
  */
  | "perplexity/sonar-pro"
  /** Perplexity: Sonar Deep Research
  @capabilities frequency_penalty, include_reasoning, max_tokens, presence_penalty, reasoning, temperature, top_k, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/perplexity/sonar-deep-research
  */
  | "perplexity/sonar-deep-research"
  /** Qwen: QwQ 32B (free)
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, stop, structured_outputs, temperature, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/qwen/qwq-32b:free
  */
  | "qwen/qwq-32b:free"
  /** Qwen: QwQ 32B
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/qwen/qwq-32b
  */
  | "qwen/qwq-32b"
  /** Nous: DeepHermes 3 Llama 3 8B Preview (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/nousresearch/deephermes-3-llama-3-8b-preview:free
  */
  | "nousresearch/deephermes-3-llama-3-8b-preview:free"
  /** Google: Gemini 2.0 Flash Lite
  @capabilities max_tokens, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.0-flash-lite-001
  */
  | "google/gemini-2.0-flash-lite-001"
  /** Anthropic: Claude 3.7 Sonnet
  @capabilities include_reasoning, max_tokens, reasoning, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.7-sonnet
  */
  | "anthropic/claude-3.7-sonnet"
  /** Anthropic: Claude 3.7 Sonnet (thinking)
  @capabilities include_reasoning, max_tokens, reasoning, stop, temperature, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.7-sonnet:thinking
  */
  | "anthropic/claude-3.7-sonnet:thinking"
  /** Perplexity: R1 1776
  @capabilities frequency_penalty, include_reasoning, logit_bias, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, stop, temperature, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/perplexity/r1-1776
  */
  | "perplexity/r1-1776"
  /** Mistral: Saba
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-saba
  */
  | "mistralai/mistral-saba"
  /** Dolphin3.0 R1 Mistral 24B (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/cognitivecomputations/dolphin3.0-r1-mistral-24b:free
  */
  | "cognitivecomputations/dolphin3.0-r1-mistral-24b:free"
  /** Dolphin3.0 R1 Mistral 24B
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/cognitivecomputations/dolphin3.0-r1-mistral-24b
  */
  | "cognitivecomputations/dolphin3.0-r1-mistral-24b"
  /** Dolphin3.0 Mistral 24B (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/cognitivecomputations/dolphin3.0-mistral-24b:free
  */
  | "cognitivecomputations/dolphin3.0-mistral-24b:free"
  /** Dolphin3.0 Mistral 24B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/cognitivecomputations/dolphin3.0-mistral-24b
  */
  | "cognitivecomputations/dolphin3.0-mistral-24b"
  /** Llama Guard 3 8B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-guard-3-8b
  */
  | "meta-llama/llama-guard-3-8b"
  /** OpenAI: o3 Mini High
  @capabilities max_tokens, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/o3-mini-high
  */
  | "openai/o3-mini-high"
  /** DeepSeek: R1 Distill Llama 8B
  @capabilities frequency_penalty, include_reasoning, logit_bias, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 32000
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-llama-8b
  */
  | "deepseek/deepseek-r1-distill-llama-8b"
  /** Google: Gemini 2.0 Flash
  @capabilities max_tokens, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.0-flash-001
  */
  | "google/gemini-2.0-flash-001"
  /** Qwen: Qwen VL Plus
  @capabilities max_tokens, presence_penalty, response_format, seed, temperature, top_p
  @context_length 7500
  @url https://openrouter.ai/qwen/qwen-vl-plus
  */
  | "qwen/qwen-vl-plus"
  /** AionLabs: Aion-1.0
  @capabilities include_reasoning, max_tokens, reasoning, temperature, top_p
  @context_length 131072
  @url https://openrouter.ai/aion-labs/aion-1.0
  */
  | "aion-labs/aion-1.0"
  /** AionLabs: Aion-1.0-Mini
  @capabilities include_reasoning, max_tokens, reasoning, temperature, top_p
  @context_length 131072
  @url https://openrouter.ai/aion-labs/aion-1.0-mini
  */
  | "aion-labs/aion-1.0-mini"
  /** AionLabs: Aion-RP 1.0 (8B)
  @capabilities max_tokens, temperature, top_p
  @context_length 32768
  @url https://openrouter.ai/aion-labs/aion-rp-llama-3.1-8b
  */
  | "aion-labs/aion-rp-llama-3.1-8b"
  /** Qwen: Qwen VL Max
  @capabilities max_tokens, presence_penalty, response_format, seed, temperature, top_p
  @context_length 7500
  @url https://openrouter.ai/qwen/qwen-vl-max
  */
  | "qwen/qwen-vl-max"
  /** Qwen: Qwen-Turbo
  @capabilities max_tokens, presence_penalty, response_format, seed, temperature, tool_choice, tools, top_p
  @context_length 1000000
  @url https://openrouter.ai/qwen/qwen-turbo
  */
  | "qwen/qwen-turbo"
  /** Qwen: Qwen2.5 VL 72B Instruct (free)
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen2.5-vl-72b-instruct:free
  */
  | "qwen/qwen2.5-vl-72b-instruct:free"
  /** Qwen: Qwen2.5 VL 72B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen2.5-vl-72b-instruct
  */
  | "qwen/qwen2.5-vl-72b-instruct"
  /** Qwen: Qwen-Plus
  @capabilities max_tokens, presence_penalty, response_format, seed, temperature, tool_choice, tools, top_p
  @context_length 131072
  @url https://openrouter.ai/qwen/qwen-plus
  */
  | "qwen/qwen-plus"
  /** Qwen: Qwen-Max 
  @capabilities max_tokens, presence_penalty, response_format, seed, temperature, tool_choice, tools, top_p
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-max
  */
  | "qwen/qwen-max"
  /** OpenAI: o3 Mini
  @capabilities max_tokens, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/o3-mini
  */
  | "openai/o3-mini"
  /** DeepSeek: R1 Distill Qwen 1.5B
  @capabilities frequency_penalty, include_reasoning, logit_bias, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, stop, temperature, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-qwen-1.5b
  */
  | "deepseek/deepseek-r1-distill-qwen-1.5b"
  /** Mistral: Mistral Small 3 (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-small-24b-instruct-2501:free
  */
  | "mistralai/mistral-small-24b-instruct-2501:free"
  /** Mistral: Mistral Small 3
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-small-24b-instruct-2501
  */
  | "mistralai/mistral-small-24b-instruct-2501"
  /** DeepSeek: R1 Distill Qwen 32B
  @capabilities frequency_penalty, include_reasoning, logit_bias, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, temperature, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-qwen-32b
  */
  | "deepseek/deepseek-r1-distill-qwen-32b"
  /** DeepSeek: R1 Distill Qwen 14B (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 64000
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-qwen-14b:free
  */
  | "deepseek/deepseek-r1-distill-qwen-14b:free"
  /** DeepSeek: R1 Distill Qwen 14B
  @capabilities frequency_penalty, include_reasoning, logit_bias, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 64000
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-qwen-14b
  */
  | "deepseek/deepseek-r1-distill-qwen-14b"
  /** Perplexity: Sonar Reasoning
  @capabilities frequency_penalty, include_reasoning, max_tokens, presence_penalty, reasoning, temperature, top_k, top_p, web_search_options
  @context_length 127000
  @url https://openrouter.ai/perplexity/sonar-reasoning
  */
  | "perplexity/sonar-reasoning"
  /** Perplexity: Sonar
  @capabilities frequency_penalty, max_tokens, presence_penalty, temperature, top_k, top_p, web_search_options
  @context_length 127072
  @url https://openrouter.ai/perplexity/sonar
  */
  | "perplexity/sonar"
  /** Liquid: LFM 7B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/liquid/lfm-7b
  */
  | "liquid/lfm-7b"
  /** Liquid: LFM 3B
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/liquid/lfm-3b
  */
  | "liquid/lfm-3b"
  /** DeepSeek: R1 Distill Llama 70B (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 8192
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-llama-70b:free
  */
  | "deepseek/deepseek-r1-distill-llama-70b:free"
  /** DeepSeek: R1 Distill Llama 70B
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-llama-70b
  */
  | "deepseek/deepseek-r1-distill-llama-70b"
  /** DeepSeek: R1 (free)
  @capabilities include_reasoning, max_tokens, reasoning, temperature
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-r1:free
  */
  | "deepseek/deepseek-r1:free"
  /** DeepSeek: R1
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-r1
  */
  | "deepseek/deepseek-r1"
  /** MiniMax: MiniMax-01
  @capabilities max_tokens, temperature, top_p
  @context_length 1000192
  @url https://openrouter.ai/minimax/minimax-01
  */
  | "minimax/minimax-01"
  /** Mistral: Codestral 2501
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 262144
  @url https://openrouter.ai/mistralai/codestral-2501
  */
  | "mistralai/codestral-2501"
  /** Microsoft: Phi 4
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_logprobs, top_p
  @context_length 16384
  @url https://openrouter.ai/microsoft/phi-4
  */
  | "microsoft/phi-4"
  /** DeepSeek: DeepSeek V3
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-chat
  */
  | "deepseek/deepseek-chat"
  /** Sao10K: Llama 3.3 Euryale 70B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/sao10k/l3.3-euryale-70b
  */
  | "sao10k/l3.3-euryale-70b"
  /** OpenAI: o1
  @capabilities max_tokens, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/o1
  */
  | "openai/o1"
  /** xAI: Grok 2 Vision 1212
  @capabilities frequency_penalty, logprobs, max_tokens, presence_penalty, response_format, seed, stop, temperature, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/x-ai/grok-2-vision-1212
  */
  | "x-ai/grok-2-vision-1212"
  /** xAI: Grok 2 1212
  @capabilities frequency_penalty, logprobs, max_tokens, presence_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-2-1212
  */
  | "x-ai/grok-2-1212"
  /** Cohere: Command R7B (12-2024)
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r7b-12-2024
  */
  | "cohere/command-r7b-12-2024"
  /** Google: Gemini 2.0 Flash Experimental (free)
  @capabilities max_tokens, response_format, seed, stop, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.0-flash-exp:free
  */
  | "google/gemini-2.0-flash-exp:free"
  /** Meta: Llama 3.3 70B Instruct (free)
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 65536
  @url https://openrouter.ai/meta-llama/llama-3.3-70b-instruct:free
  */
  | "meta-llama/llama-3.3-70b-instruct:free"
  /** Meta: Llama 3.3 70B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.3-70b-instruct
  */
  | "meta-llama/llama-3.3-70b-instruct"
  /** Amazon: Nova Lite 1.0
  @capabilities max_tokens, stop, temperature, tools, top_k, top_p
  @context_length 300000
  @url https://openrouter.ai/amazon/nova-lite-v1
  */
  | "amazon/nova-lite-v1"
  /** Amazon: Nova Micro 1.0
  @capabilities max_tokens, stop, temperature, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/amazon/nova-micro-v1
  */
  | "amazon/nova-micro-v1"
  /** Amazon: Nova Pro 1.0
  @capabilities max_tokens, stop, temperature, tools, top_k, top_p
  @context_length 300000
  @url https://openrouter.ai/amazon/nova-pro-v1
  */
  | "amazon/nova-pro-v1"
  /** Qwen: QwQ 32B Preview
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/qwen/qwq-32b-preview
  */
  | "qwen/qwq-32b-preview"
  /** OpenAI: GPT-4o (2024-11-20)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-2024-11-20
  */
  | "openai/gpt-4o-2024-11-20"
  /** Mistral Large 2411
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-large-2411
  */
  | "mistralai/mistral-large-2411"
  /** Mistral Large 2407
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-large-2407
  */
  | "mistralai/mistral-large-2407"
  /** Mistral: Pixtral Large 2411
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/pixtral-large-2411
  */
  | "mistralai/pixtral-large-2411"
  /** xAI: Grok Vision Beta
  @capabilities frequency_penalty, logprobs, max_tokens, presence_penalty, response_format, seed, stop, temperature, top_logprobs, top_p
  @context_length 8192
  @url https://openrouter.ai/x-ai/grok-vision-beta
  */
  | "x-ai/grok-vision-beta"
  /** Infermatic: Mistral Nemo Inferor 12B
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 8192
  @url https://openrouter.ai/infermatic/mn-inferor-12b
  */
  | "infermatic/mn-inferor-12b"
  /** Qwen2.5 Coder 32B Instruct (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2.5-coder-32b-instruct:free
  */
  | "qwen/qwen-2.5-coder-32b-instruct:free"
  /** Qwen2.5 Coder 32B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2.5-coder-32b-instruct
  */
  | "qwen/qwen-2.5-coder-32b-instruct"
  /** SorcererLM 8x22B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 16000
  @url https://openrouter.ai/raifle/sorcererlm-8x22b
  */
  | "raifle/sorcererlm-8x22b"
  /** TheDrummer: UnslopNemo 12B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/thedrummer/unslopnemo-12b
  */
  | "thedrummer/unslopnemo-12b"
  /** Anthropic: Claude 3.5 Haiku
  @capabilities max_tokens, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-haiku
  */
  | "anthropic/claude-3.5-haiku"
  /** Anthropic: Claude 3.5 Haiku (2024-10-22)
  @capabilities max_tokens, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-haiku-20241022
  */
  | "anthropic/claude-3.5-haiku-20241022"
  /** Magnum v4 72B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_a, top_k, top_p
  @context_length 16384
  @url https://openrouter.ai/anthracite-org/magnum-v4-72b
  */
  | "anthracite-org/magnum-v4-72b"
  /** Anthropic: Claude 3.5 Sonnet
  @capabilities max_tokens, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-sonnet
  */
  | "anthropic/claude-3.5-sonnet"
  /** Mistral: Ministral 8B
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 128000
  @url https://openrouter.ai/mistralai/ministral-8b
  */
  | "mistralai/ministral-8b"
  /** Mistral: Ministral 3B
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/ministral-3b
  */
  | "mistralai/ministral-3b"
  /** Qwen2.5 7B Instruct
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_p
  @context_length 65536
  @url https://openrouter.ai/qwen/qwen-2.5-7b-instruct
  */
  | "qwen/qwen-2.5-7b-instruct"
  /** NVIDIA: Llama 3.1 Nemotron 70B Instruct
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/nvidia/llama-3.1-nemotron-70b-instruct
  */
  | "nvidia/llama-3.1-nemotron-70b-instruct"
  /** Inflection: Inflection 3 Productivity
  @capabilities max_tokens, stop, temperature, top_p
  @context_length 8000
  @url https://openrouter.ai/inflection/inflection-3-productivity
  */
  | "inflection/inflection-3-productivity"
  /** Inflection: Inflection 3 Pi
  @capabilities max_tokens, stop, temperature, top_p
  @context_length 8000
  @url https://openrouter.ai/inflection/inflection-3-pi
  */
  | "inflection/inflection-3-pi"
  /** Google: Gemini 1.5 Flash 8B
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1000000
  @url https://openrouter.ai/google/gemini-flash-1.5-8b
  */
  | "google/gemini-flash-1.5-8b"
  /** TheDrummer: Rocinante 12B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/thedrummer/rocinante-12b
  */
  | "thedrummer/rocinante-12b"
  /** Magnum v2 72B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/anthracite-org/magnum-v2-72b
  */
  | "anthracite-org/magnum-v2-72b"
  /** Meta: Llama 3.2 3B Instruct (free)
  @capabilities frequency_penalty, max_tokens, presence_penalty, stop, temperature, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.2-3b-instruct:free
  */
  | "meta-llama/llama-3.2-3b-instruct:free"
  /** Meta: Llama 3.2 3B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 20000
  @url https://openrouter.ai/meta-llama/llama-3.2-3b-instruct
  */
  | "meta-llama/llama-3.2-3b-instruct"
  /** Meta: Llama 3.2 1B Instruct
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.2-1b-instruct
  */
  | "meta-llama/llama-3.2-1b-instruct"
  /** Meta: Llama 3.2 90B Vision Instruct
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.2-90b-vision-instruct
  */
  | "meta-llama/llama-3.2-90b-vision-instruct"
  /** Meta: Llama 3.2 11B Vision Instruct (free)
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, stop, temperature, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.2-11b-vision-instruct:free
  */
  | "meta-llama/llama-3.2-11b-vision-instruct:free"
  /** Meta: Llama 3.2 11B Vision Instruct
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.2-11b-vision-instruct
  */
  | "meta-llama/llama-3.2-11b-vision-instruct"
  /** Qwen2.5 72B Instruct (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2.5-72b-instruct:free
  */
  | "qwen/qwen-2.5-72b-instruct:free"
  /** Qwen2.5 72B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2.5-72b-instruct
  */
  | "qwen/qwen-2.5-72b-instruct"
  /** NeverSleep: Lumimaid v0.2 8B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_a, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/neversleep/llama-3.1-lumimaid-8b
  */
  | "neversleep/llama-3.1-lumimaid-8b"
  /** OpenAI: o1-mini
  @capabilities max_tokens, seed
  @context_length 128000
  @url https://openrouter.ai/openai/o1-mini
  */
  | "openai/o1-mini"
  /** OpenAI: o1-mini (2024-09-12)
  @capabilities max_tokens, seed
  @context_length 128000
  @url https://openrouter.ai/openai/o1-mini-2024-09-12
  */
  | "openai/o1-mini-2024-09-12"
  /** Mistral: Pixtral 12B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/pixtral-12b
  */
  | "mistralai/pixtral-12b"
  /** Cohere: Command R+ (08-2024)
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-plus-08-2024
  */
  | "cohere/command-r-plus-08-2024"
  /** Cohere: Command R (08-2024)
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-08-2024
  */
  | "cohere/command-r-08-2024"
  /** Qwen: Qwen2.5-VL 7B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2.5-vl-7b-instruct
  */
  | "qwen/qwen-2.5-vl-7b-instruct"
  /** Sao10K: Llama 3.1 Euryale 70B v2.2
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/sao10k/l3.1-euryale-70b
  */
  | "sao10k/l3.1-euryale-70b"
  /** Microsoft: Phi-3.5 Mini 128K Instruct
  @capabilities max_tokens, temperature, tool_choice, tools, top_p
  @context_length 128000
  @url https://openrouter.ai/microsoft/phi-3.5-mini-128k-instruct
  */
  | "microsoft/phi-3.5-mini-128k-instruct"
  /** Nous: Hermes 3 70B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/nousresearch/hermes-3-llama-3.1-70b
  */
  | "nousresearch/hermes-3-llama-3.1-70b"
  /** Nous: Hermes 3 405B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/nousresearch/hermes-3-llama-3.1-405b
  */
  | "nousresearch/hermes-3-llama-3.1-405b"
  /** OpenAI: ChatGPT-4o
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, top_logprobs, top_p
  @context_length 128000
  @url https://openrouter.ai/openai/chatgpt-4o-latest
  */
  | "openai/chatgpt-4o-latest"
  /** Sao10K: Llama 3 8B Lunaris
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, top_k, top_p
  @context_length 8192
  @url https://openrouter.ai/sao10k/l3-lunaris-8b
  */
  | "sao10k/l3-lunaris-8b"
  /** OpenAI: GPT-4o (2024-08-06)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-2024-08-06
  */
  | "openai/gpt-4o-2024-08-06"
  /** Meta: Llama 3.1 405B (base)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/meta-llama/llama-3.1-405b
  */
  | "meta-llama/llama-3.1-405b"
  /** Meta: Llama 3.1 8B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.1-8b-instruct
  */
  | "meta-llama/llama-3.1-8b-instruct"
  /** Meta: Llama 3.1 405B Instruct (free)
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, stop, structured_outputs, temperature, top_k, top_p
  @context_length 65536
  @url https://openrouter.ai/meta-llama/llama-3.1-405b-instruct:free
  */
  | "meta-llama/llama-3.1-405b-instruct:free"
  /** Meta: Llama 3.1 405B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/meta-llama/llama-3.1-405b-instruct
  */
  | "meta-llama/llama-3.1-405b-instruct"
  /** Meta: Llama 3.1 70B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.1-70b-instruct
  */
  | "meta-llama/llama-3.1-70b-instruct"
  /** Mistral: Mistral Nemo (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-nemo:free
  */
  | "mistralai/mistral-nemo:free"
  /** Mistral: Mistral Nemo
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 32000
  @url https://openrouter.ai/mistralai/mistral-nemo
  */
  | "mistralai/mistral-nemo"
  /** OpenAI: GPT-4o-mini
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-mini
  */
  | "openai/gpt-4o-mini"
  /** OpenAI: GPT-4o-mini (2024-07-18)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-mini-2024-07-18
  */
  | "openai/gpt-4o-mini-2024-07-18"
  /** Google: Gemma 2 27B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, stop, structured_outputs, temperature, top_k, top_p
  @context_length 8192
  @url https://openrouter.ai/google/gemma-2-27b-it
  */
  | "google/gemma-2-27b-it"
  /** Google: Gemma 2 9B (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 8192
  @url https://openrouter.ai/google/gemma-2-9b-it:free
  */
  | "google/gemma-2-9b-it:free"
  /** Google: Gemma 2 9B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, top_k, top_logprobs, top_p
  @context_length 8192
  @url https://openrouter.ai/google/gemma-2-9b-it
  */
  | "google/gemma-2-9b-it"
  /** Anthropic: Claude 3.5 Sonnet (2024-06-20)
  @capabilities max_tokens, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-sonnet-20240620
  */
  | "anthropic/claude-3.5-sonnet-20240620"
  /** Sao10k: Llama 3 Euryale 70B v2.1
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 8192
  @url https://openrouter.ai/sao10k/l3-euryale-70b
  */
  | "sao10k/l3-euryale-70b"
  /** Dolphin 2.9.2 Mixtral 8x22B 🐬
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 16000
  @url https://openrouter.ai/cognitivecomputations/dolphin-mixtral-8x22b
  */
  | "cognitivecomputations/dolphin-mixtral-8x22b"
  /** Qwen 2 72B Instruct
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, stop, temperature, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2-72b-instruct
  */
  | "qwen/qwen-2-72b-instruct"
  /** Mistral: Mistral 7B Instruct (free)
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-7b-instruct:free
  */
  | "mistralai/mistral-7b-instruct:free"
  /** Mistral: Mistral 7B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-7b-instruct
  */
  | "mistralai/mistral-7b-instruct"
  /** NousResearch: Hermes 2 Pro - Llama-3 8B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/nousresearch/hermes-2-pro-llama-3-8b
  */
  | "nousresearch/hermes-2-pro-llama-3-8b"
  /** Mistral: Mistral 7B Instruct v0.3
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-7b-instruct-v0.3
  */
  | "mistralai/mistral-7b-instruct-v0.3"
  /** Microsoft: Phi-3 Mini 128K Instruct
  @capabilities max_tokens, temperature, tool_choice, tools, top_p
  @context_length 128000
  @url https://openrouter.ai/microsoft/phi-3-mini-128k-instruct
  */
  | "microsoft/phi-3-mini-128k-instruct"
  /** Microsoft: Phi-3 Medium 128K Instruct
  @capabilities max_tokens, temperature, tool_choice, tools, top_p
  @context_length 128000
  @url https://openrouter.ai/microsoft/phi-3-medium-128k-instruct
  */
  | "microsoft/phi-3-medium-128k-instruct"
  /** NeverSleep: Llama 3 Lumimaid 70B
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 8192
  @url https://openrouter.ai/neversleep/llama-3-lumimaid-70b
  */
  | "neversleep/llama-3-lumimaid-70b"
  /** Google: Gemini 1.5 Flash 
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1000000
  @url https://openrouter.ai/google/gemini-flash-1.5
  */
  | "google/gemini-flash-1.5"
  /** OpenAI: GPT-4o
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o
  */
  | "openai/gpt-4o"
  /** OpenAI: GPT-4o (extended)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o:extended
  */
  | "openai/gpt-4o:extended"
  /** Meta: LlamaGuard 2 8B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, stop, temperature, top_k, top_p
  @context_length 8192
  @url https://openrouter.ai/meta-llama/llama-guard-2-8b
  */
  | "meta-llama/llama-guard-2-8b"
  /** OpenAI: GPT-4o (2024-05-13)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-2024-05-13
  */
  | "openai/gpt-4o-2024-05-13"
  /** Meta: Llama 3 8B Instruct
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 8192
  @url https://openrouter.ai/meta-llama/llama-3-8b-instruct
  */
  | "meta-llama/llama-3-8b-instruct"
  /** Meta: Llama 3 70B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 8192
  @url https://openrouter.ai/meta-llama/llama-3-70b-instruct
  */
  | "meta-llama/llama-3-70b-instruct"
  /** Mistral: Mixtral 8x22B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 65536
  @url https://openrouter.ai/mistralai/mixtral-8x22b-instruct
  */
  | "mistralai/mixtral-8x22b-instruct"
  /** WizardLM-2 8x22B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, top_k, top_p
  @context_length 65536
  @url https://openrouter.ai/microsoft/wizardlm-2-8x22b
  */
  | "microsoft/wizardlm-2-8x22b"
  /** Google: Gemini 1.5 Pro
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 2000000
  @url https://openrouter.ai/google/gemini-pro-1.5
  */
  | "google/gemini-pro-1.5"
  /** OpenAI: GPT-4 Turbo
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4-turbo
  */
  | "openai/gpt-4-turbo"
  /** Cohere: Command R+
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-plus
  */
  | "cohere/command-r-plus"
  /** Cohere: Command R+ (04-2024)
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-plus-04-2024
  */
  | "cohere/command-r-plus-04-2024"
  /** Midnight Rose 70B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 4096
  @url https://openrouter.ai/sophosympatheia/midnight-rose-70b
  */
  | "sophosympatheia/midnight-rose-70b"
  /** Cohere: Command
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, top_k, top_p
  @context_length 4096
  @url https://openrouter.ai/cohere/command
  */
  | "cohere/command"
  /** Cohere: Command R
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r
  */
  | "cohere/command-r"
  /** Anthropic: Claude 3 Haiku
  @capabilities max_tokens, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-haiku
  */
  | "anthropic/claude-3-haiku"
  /** Anthropic: Claude 3 Opus
  @capabilities max_tokens, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-opus
  */
  | "anthropic/claude-3-opus"
  /** Cohere: Command R (03-2024)
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-03-2024
  */
  | "cohere/command-r-03-2024"
  /** Mistral Large
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 128000
  @url https://openrouter.ai/mistralai/mistral-large
  */
  | "mistralai/mistral-large"
  /** OpenAI: GPT-3.5 Turbo (older v0613)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 4095
  @url https://openrouter.ai/openai/gpt-3.5-turbo-0613
  */
  | "openai/gpt-3.5-turbo-0613"
  /** OpenAI: GPT-4 Turbo Preview
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4-turbo-preview
  */
  | "openai/gpt-4-turbo-preview"
  /** Nous: Hermes 2 Mixtral 8x7B DPO
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, stop, temperature, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/nousresearch/nous-hermes-2-mixtral-8x7b-dpo
  */
  | "nousresearch/nous-hermes-2-mixtral-8x7b-dpo"
  /** Mistral Small
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-small
  */
  | "mistralai/mistral-small"
  /** Mistral Tiny
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-tiny
  */
  | "mistralai/mistral-tiny"
  /** Mistral: Mixtral 8x7B Instruct
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mixtral-8x7b-instruct
  */
  | "mistralai/mixtral-8x7b-instruct"
  /** Noromaid 20B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_a, top_k, top_p
  @context_length 4096
  @url https://openrouter.ai/neversleep/noromaid-20b
  */
  | "neversleep/noromaid-20b"
  /** Goliath 120B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_a, top_k, top_p
  @context_length 6144
  @url https://openrouter.ai/alpindale/goliath-120b
  */
  | "alpindale/goliath-120b"
  /** Auto Router
  @capabilities 
  @context_length 2000000
  @url https://openrouter.ai/openrouter/auto
  */
  | "openrouter/auto"
  /** OpenAI: GPT-4 Turbo (older v1106)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4-1106-preview
  */
  | "openai/gpt-4-1106-preview"
  /** OpenAI: GPT-3.5 Turbo Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, top_logprobs, top_p
  @context_length 4095
  @url https://openrouter.ai/openai/gpt-3.5-turbo-instruct
  */
  | "openai/gpt-3.5-turbo-instruct"
  /** Mistral: Mistral 7B Instruct v0.1
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 2824
  @url https://openrouter.ai/mistralai/mistral-7b-instruct-v0.1
  */
  | "mistralai/mistral-7b-instruct-v0.1"
  /** Pygmalion: Mythalion 13B
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_k, top_p
  @context_length 4096
  @url https://openrouter.ai/pygmalionai/mythalion-13b
  */
  | "pygmalionai/mythalion-13b"
  /** OpenAI: GPT-3.5 Turbo 16k
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 16385
  @url https://openrouter.ai/openai/gpt-3.5-turbo-16k
  */
  | "openai/gpt-3.5-turbo-16k"
  /** Mancer: Weaver (alpha)
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, top_a, top_k, top_p
  @context_length 8000
  @url https://openrouter.ai/mancer/weaver
  */
  | "mancer/weaver"
  /** ReMM SLERP 13B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_a, top_k, top_p
  @context_length 6144
  @url https://openrouter.ai/undi95/remm-slerp-l2-13b
  */
  | "undi95/remm-slerp-l2-13b"
  /** MythoMax 13B
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, top_a, top_k, top_p
  @context_length 4096
  @url https://openrouter.ai/gryphe/mythomax-l2-13b
  */
  | "gryphe/mythomax-l2-13b"
  /** OpenAI: GPT-3.5 Turbo
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 16385
  @url https://openrouter.ai/openai/gpt-3.5-turbo
  */
  | "openai/gpt-3.5-turbo"
  /** OpenAI: GPT-4
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 8191
  @url https://openrouter.ai/openai/gpt-4
  */
  | "openai/gpt-4"
  /** OpenAI: GPT-4 (older v0314)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 8191
  @url https://openrouter.ai/openai/gpt-4-0314
  */
  | "openai/gpt-4-0314"
  | (string & {});

export const toolCallingModels = [
  /** DeepSeek: DeepSeek V3.1
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-chat-v3.1
  */
  "deepseek/deepseek-chat-v3.1",
  /** OpenAI: GPT-4o Audio
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-audio-preview
  */
  "openai/gpt-4o-audio-preview",
  /** Mistral: Mistral Medium 3.1
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 262144
  @url https://openrouter.ai/mistralai/mistral-medium-3.1
  */
  "mistralai/mistral-medium-3.1",
  /** Z.AI: GLM 4.5V
  @capabilities frequency_penalty, include_reasoning, logit_bias, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 65536
  @url https://openrouter.ai/z-ai/glm-4.5v
  */
  "z-ai/glm-4.5v",
  /** AI21: Jamba Mini 1.7
  @capabilities max_tokens, response_format, stop, temperature, tool_choice, tools, top_p
  @context_length 256000
  @url https://openrouter.ai/ai21/jamba-mini-1.7
  */
  "ai21/jamba-mini-1.7",
  /** AI21: Jamba Large 1.7
  @capabilities max_tokens, response_format, stop, temperature, tool_choice, tools, top_p
  @context_length 256000
  @url https://openrouter.ai/ai21/jamba-large-1.7
  */
  "ai21/jamba-large-1.7",
  /** OpenAI: GPT-5
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 400000
  @url https://openrouter.ai/openai/gpt-5
  */
  "openai/gpt-5",
  /** OpenAI: GPT-5 Mini
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 400000
  @url https://openrouter.ai/openai/gpt-5-mini
  */
  "openai/gpt-5-mini",
  /** OpenAI: GPT-5 Nano
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 400000
  @url https://openrouter.ai/openai/gpt-5-nano
  */
  "openai/gpt-5-nano",
  /** OpenAI: gpt-oss-120b
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131000
  @url https://openrouter.ai/openai/gpt-oss-120b
  */
  "openai/gpt-oss-120b",
  /** OpenAI: gpt-oss-20b
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131000
  @url https://openrouter.ai/openai/gpt-oss-20b
  */
  "openai/gpt-oss-20b",
  /** Anthropic: Claude Opus 4.1
  @capabilities include_reasoning, max_tokens, reasoning, stop, temperature, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-opus-4.1
  */
  "anthropic/claude-opus-4.1",
  /** Mistral: Codestral 2508
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 256000
  @url https://openrouter.ai/mistralai/codestral-2508
  */
  "mistralai/codestral-2508",
  /** Z.AI: GLM 4.5
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/z-ai/glm-4.5
  */
  "z-ai/glm-4.5",
  /** Z.AI: GLM 4.5 Air (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/z-ai/glm-4.5-air:free
  */
  "z-ai/glm-4.5-air:free",
  /** Z.AI: GLM 4.5 Air
  @capabilities include_reasoning, max_tokens, reasoning, temperature, tool_choice, tools, top_p
  @context_length 131072
  @url https://openrouter.ai/z-ai/glm-4.5-air
  */
  "z-ai/glm-4.5-air",
  /** Qwen: Qwen3 235B A22B Thinking 2507
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 262144
  @url https://openrouter.ai/qwen/qwen3-235b-a22b-thinking-2507
  */
  "qwen/qwen3-235b-a22b-thinking-2507",
  /** Z.AI: GLM 4 32B 
  @capabilities max_tokens, temperature, tool_choice, tools, top_p
  @context_length 128000
  @url https://openrouter.ai/z-ai/glm-4-32b
  */
  "z-ai/glm-4-32b",
  /** Qwen: Qwen3 Coder  (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 262144
  @url https://openrouter.ai/qwen/qwen3-coder:free
  */
  "qwen/qwen3-coder:free",
  /** Qwen: Qwen3 Coder 
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 262144
  @url https://openrouter.ai/qwen/qwen3-coder
  */
  "qwen/qwen3-coder",
  /** Google: Gemini 2.5 Flash Lite
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-flash-lite
  */
  "google/gemini-2.5-flash-lite",
  /** Qwen: Qwen3 235B A22B Instruct 2507
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 262144
  @url https://openrouter.ai/qwen/qwen3-235b-a22b-2507
  */
  "qwen/qwen3-235b-a22b-2507",
  /** MoonshotAI: Kimi K2 (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/moonshotai/kimi-k2:free
  */
  "moonshotai/kimi-k2:free",
  /** MoonshotAI: Kimi K2
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 63000
  @url https://openrouter.ai/moonshotai/kimi-k2
  */
  "moonshotai/kimi-k2",
  /** Mistral: Devstral Medium
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/devstral-medium
  */
  "mistralai/devstral-medium",
  /** Mistral: Devstral Small 1.1
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/mistralai/devstral-small
  */
  "mistralai/devstral-small",
  /** xAI: Grok 4
  @capabilities include_reasoning, logprobs, max_tokens, reasoning, response_format, seed, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 256000
  @url https://openrouter.ai/x-ai/grok-4
  */
  "x-ai/grok-4",
  /** Inception: Mercury
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/inception/mercury
  */
  "inception/mercury",
  /** Mistral: Mistral Small 3.2 24B (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-small-3.2-24b-instruct:free
  */
  "mistralai/mistral-small-3.2-24b-instruct:free",
  /** Mistral: Mistral Small 3.2 24B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 128000
  @url https://openrouter.ai/mistralai/mistral-small-3.2-24b-instruct
  */
  "mistralai/mistral-small-3.2-24b-instruct",
  /** MiniMax: MiniMax M1
  @capabilities frequency_penalty, include_reasoning, logit_bias, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_p
  @context_length 1000000
  @url https://openrouter.ai/minimax/minimax-m1
  */
  "minimax/minimax-m1",
  /** Google: Gemini 2.5 Flash Lite Preview 06-17
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-flash-lite-preview-06-17
  */
  "google/gemini-2.5-flash-lite-preview-06-17",
  /** Google: Gemini 2.5 Flash
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-flash
  */
  "google/gemini-2.5-flash",
  /** Google: Gemini 2.5 Pro
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-pro
  */
  "google/gemini-2.5-pro",
  /** OpenAI: o3 Pro
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/o3-pro
  */
  "openai/o3-pro",
  /** xAI: Grok 3 Mini
  @capabilities include_reasoning, logprobs, max_tokens, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-3-mini
  */
  "x-ai/grok-3-mini",
  /** xAI: Grok 3
  @capabilities frequency_penalty, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-3
  */
  "x-ai/grok-3",
  /** Mistral: Magistral Small 2506
  @capabilities frequency_penalty, include_reasoning, max_tokens, presence_penalty, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 40000
  @url https://openrouter.ai/mistralai/magistral-small-2506
  */
  "mistralai/magistral-small-2506",
  /** Mistral: Magistral Medium 2506
  @capabilities frequency_penalty, include_reasoning, max_tokens, presence_penalty, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 40960
  @url https://openrouter.ai/mistralai/magistral-medium-2506
  */
  "mistralai/magistral-medium-2506",
  /** Mistral: Magistral Medium 2506 (thinking)
  @capabilities frequency_penalty, include_reasoning, max_tokens, presence_penalty, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 40960
  @url https://openrouter.ai/mistralai/magistral-medium-2506:thinking
  */
  "mistralai/magistral-medium-2506:thinking",
  /** Google: Gemini 2.5 Pro Preview 06-05
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-pro-preview
  */
  "google/gemini-2.5-pro-preview",
  /** DeepSeek: R1 0528
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-r1-0528
  */
  "deepseek/deepseek-r1-0528",
  /** Anthropic: Claude Opus 4
  @capabilities include_reasoning, max_tokens, reasoning, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-opus-4
  */
  "anthropic/claude-opus-4",
  /** Anthropic: Claude Sonnet 4
  @capabilities include_reasoning, max_tokens, reasoning, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-sonnet-4
  */
  "anthropic/claude-sonnet-4",
  /** Mistral: Devstral Small 2505 (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/devstral-small-2505:free
  */
  "mistralai/devstral-small-2505:free",
  /** Mistral: Devstral Small 2505
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/devstral-small-2505
  */
  "mistralai/devstral-small-2505",
  /** OpenAI: Codex Mini
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/codex-mini
  */
  "openai/codex-mini",
  /** Mistral: Mistral Medium 3
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-medium-3
  */
  "mistralai/mistral-medium-3",
  /** Google: Gemini 2.5 Pro Preview 05-06
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-pro-preview-05-06
  */
  "google/gemini-2.5-pro-preview-05-06",
  /** Arcee AI: Virtuoso Large
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/arcee-ai/virtuoso-large
  */
  "arcee-ai/virtuoso-large",
  /** Inception: Mercury Coder
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/inception/mercury-coder
  */
  "inception/mercury-coder",
  /** Qwen: Qwen3 4B (free)
  @capabilities frequency_penalty, include_reasoning, max_tokens, presence_penalty, reasoning, response_format, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_p
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-4b:free
  */
  "qwen/qwen3-4b:free",
  /** Qwen: Qwen3 30B A3B
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-30b-a3b
  */
  "qwen/qwen3-30b-a3b",
  /** Qwen: Qwen3 14B
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-14b
  */
  "qwen/qwen3-14b",
  /** Qwen: Qwen3 32B
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-32b
  */
  "qwen/qwen3-32b",
  /** Qwen: Qwen3 235B A22B (free)
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/qwen/qwen3-235b-a22b:free
  */
  "qwen/qwen3-235b-a22b:free",
  /** Qwen: Qwen3 235B A22B
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-235b-a22b
  */
  "qwen/qwen3-235b-a22b",
  /** OpenAI: o4 Mini High
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/o4-mini-high
  */
  "openai/o4-mini-high",
  /** OpenAI: o3
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/o3
  */
  "openai/o3",
  /** OpenAI: o4 Mini
  @capabilities include_reasoning, max_tokens, reasoning, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/o4-mini
  */
  "openai/o4-mini",
  /** OpenAI: GPT-4.1
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 1047576
  @url https://openrouter.ai/openai/gpt-4.1
  */
  "openai/gpt-4.1",
  /** OpenAI: GPT-4.1 Mini
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 1047576
  @url https://openrouter.ai/openai/gpt-4.1-mini
  */
  "openai/gpt-4.1-mini",
  /** OpenAI: GPT-4.1 Nano
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 1047576
  @url https://openrouter.ai/openai/gpt-4.1-nano
  */
  "openai/gpt-4.1-nano",
  /** xAI: Grok 3 Mini Beta
  @capabilities include_reasoning, logprobs, max_tokens, reasoning, response_format, seed, stop, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-3-mini-beta
  */
  "x-ai/grok-3-mini-beta",
  /** xAI: Grok 3 Beta
  @capabilities frequency_penalty, logprobs, max_tokens, presence_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-3-beta
  */
  "x-ai/grok-3-beta",
  /** Meta: Llama 4 Maverick
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 1048576
  @url https://openrouter.ai/meta-llama/llama-4-maverick
  */
  "meta-llama/llama-4-maverick",
  /** Meta: Llama 4 Scout
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 1048576
  @url https://openrouter.ai/meta-llama/llama-4-scout
  */
  "meta-llama/llama-4-scout",
  /** Google: Gemini 2.5 Pro Experimental
  @capabilities max_tokens, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-pro-exp-03-25
  */
  "google/gemini-2.5-pro-exp-03-25",
  /** DeepSeek: DeepSeek V3 0324 (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-chat-v3-0324:free
  */
  "deepseek/deepseek-chat-v3-0324:free",
  /** DeepSeek: DeepSeek V3 0324
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-chat-v3-0324
  */
  "deepseek/deepseek-chat-v3-0324",
  /** Mistral: Mistral Small 3.1 24B (free)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 128000
  @url https://openrouter.ai/mistralai/mistral-small-3.1-24b-instruct:free
  */
  "mistralai/mistral-small-3.1-24b-instruct:free",
  /** Mistral: Mistral Small 3.1 24B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-small-3.1-24b-instruct
  */
  "mistralai/mistral-small-3.1-24b-instruct",
  /** Google: Gemini 2.0 Flash Lite
  @capabilities max_tokens, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.0-flash-lite-001
  */
  "google/gemini-2.0-flash-lite-001",
  /** Anthropic: Claude 3.7 Sonnet
  @capabilities include_reasoning, max_tokens, reasoning, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.7-sonnet
  */
  "anthropic/claude-3.7-sonnet",
  /** Anthropic: Claude 3.7 Sonnet (thinking)
  @capabilities include_reasoning, max_tokens, reasoning, stop, temperature, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.7-sonnet:thinking
  */
  "anthropic/claude-3.7-sonnet:thinking",
  /** Mistral: Saba
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-saba
  */
  "mistralai/mistral-saba",
  /** OpenAI: o3 Mini High
  @capabilities max_tokens, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/o3-mini-high
  */
  "openai/o3-mini-high",
  /** Google: Gemini 2.0 Flash
  @capabilities max_tokens, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.0-flash-001
  */
  "google/gemini-2.0-flash-001",
  /** Qwen: Qwen-Turbo
  @capabilities max_tokens, presence_penalty, response_format, seed, temperature, tool_choice, tools, top_p
  @context_length 1000000
  @url https://openrouter.ai/qwen/qwen-turbo
  */
  "qwen/qwen-turbo",
  /** Qwen: Qwen-Plus
  @capabilities max_tokens, presence_penalty, response_format, seed, temperature, tool_choice, tools, top_p
  @context_length 131072
  @url https://openrouter.ai/qwen/qwen-plus
  */
  "qwen/qwen-plus",
  /** Qwen: Qwen-Max 
  @capabilities max_tokens, presence_penalty, response_format, seed, temperature, tool_choice, tools, top_p
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-max
  */
  "qwen/qwen-max",
  /** OpenAI: o3 Mini
  @capabilities max_tokens, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/o3-mini
  */
  "openai/o3-mini",
  /** Mistral: Mistral Small 3
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-small-24b-instruct-2501
  */
  "mistralai/mistral-small-24b-instruct-2501",
  /** DeepSeek: R1 Distill Llama 70B
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-llama-70b
  */
  "deepseek/deepseek-r1-distill-llama-70b",
  /** DeepSeek: R1
  @capabilities frequency_penalty, include_reasoning, logit_bias, logprobs, max_tokens, min_p, presence_penalty, reasoning, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-r1
  */
  "deepseek/deepseek-r1",
  /** Mistral: Codestral 2501
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 262144
  @url https://openrouter.ai/mistralai/codestral-2501
  */
  "mistralai/codestral-2501",
  /** DeepSeek: DeepSeek V3
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-chat
  */
  "deepseek/deepseek-chat",
  /** OpenAI: o1
  @capabilities max_tokens, response_format, seed, structured_outputs, tool_choice, tools
  @context_length 200000
  @url https://openrouter.ai/openai/o1
  */
  "openai/o1",
  /** xAI: Grok 2 1212
  @capabilities frequency_penalty, logprobs, max_tokens, presence_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-2-1212
  */
  "x-ai/grok-2-1212",
  /** Google: Gemini 2.0 Flash Experimental (free)
  @capabilities max_tokens, response_format, seed, stop, temperature, tool_choice, tools, top_p
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.0-flash-exp:free
  */
  "google/gemini-2.0-flash-exp:free",
  /** Meta: Llama 3.3 70B Instruct (free)
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 65536
  @url https://openrouter.ai/meta-llama/llama-3.3-70b-instruct:free
  */
  "meta-llama/llama-3.3-70b-instruct:free",
  /** Meta: Llama 3.3 70B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.3-70b-instruct
  */
  "meta-llama/llama-3.3-70b-instruct",
  /** Amazon: Nova Lite 1.0
  @capabilities max_tokens, stop, temperature, tools, top_k, top_p
  @context_length 300000
  @url https://openrouter.ai/amazon/nova-lite-v1
  */
  "amazon/nova-lite-v1",
  /** Amazon: Nova Micro 1.0
  @capabilities max_tokens, stop, temperature, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/amazon/nova-micro-v1
  */
  "amazon/nova-micro-v1",
  /** Amazon: Nova Pro 1.0
  @capabilities max_tokens, stop, temperature, tools, top_k, top_p
  @context_length 300000
  @url https://openrouter.ai/amazon/nova-pro-v1
  */
  "amazon/nova-pro-v1",
  /** OpenAI: GPT-4o (2024-11-20)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-2024-11-20
  */
  "openai/gpt-4o-2024-11-20",
  /** Mistral Large 2411
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-large-2411
  */
  "mistralai/mistral-large-2411",
  /** Mistral Large 2407
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-large-2407
  */
  "mistralai/mistral-large-2407",
  /** Mistral: Pixtral Large 2411
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 131072
  @url https://openrouter.ai/mistralai/pixtral-large-2411
  */
  "mistralai/pixtral-large-2411",
  /** TheDrummer: UnslopNemo 12B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/thedrummer/unslopnemo-12b
  */
  "thedrummer/unslopnemo-12b",
  /** Anthropic: Claude 3.5 Haiku
  @capabilities max_tokens, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-haiku
  */
  "anthropic/claude-3.5-haiku",
  /** Anthropic: Claude 3.5 Haiku (2024-10-22)
  @capabilities max_tokens, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-haiku-20241022
  */
  "anthropic/claude-3.5-haiku-20241022",
  /** Anthropic: Claude 3.5 Sonnet
  @capabilities max_tokens, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-sonnet
  */
  "anthropic/claude-3.5-sonnet",
  /** Mistral: Ministral 8B
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 128000
  @url https://openrouter.ai/mistralai/ministral-8b
  */
  "mistralai/ministral-8b",
  /** NVIDIA: Llama 3.1 Nemotron 70B Instruct
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 131072
  @url https://openrouter.ai/nvidia/llama-3.1-nemotron-70b-instruct
  */
  "nvidia/llama-3.1-nemotron-70b-instruct",
  /** Google: Gemini 1.5 Flash 8B
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1000000
  @url https://openrouter.ai/google/gemini-flash-1.5-8b
  */
  "google/gemini-flash-1.5-8b",
  /** TheDrummer: Rocinante 12B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/thedrummer/rocinante-12b
  */
  "thedrummer/rocinante-12b",
  /** Meta: Llama 3.2 3B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 20000
  @url https://openrouter.ai/meta-llama/llama-3.2-3b-instruct
  */
  "meta-llama/llama-3.2-3b-instruct",
  /** Qwen2.5 72B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2.5-72b-instruct
  */
  "qwen/qwen-2.5-72b-instruct",
  /** Mistral: Pixtral 12B
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/pixtral-12b
  */
  "mistralai/pixtral-12b",
  /** Cohere: Command R+ (08-2024)
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-plus-08-2024
  */
  "cohere/command-r-plus-08-2024",
  /** Cohere: Command R (08-2024)
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-08-2024
  */
  "cohere/command-r-08-2024",
  /** Microsoft: Phi-3.5 Mini 128K Instruct
  @capabilities max_tokens, temperature, tool_choice, tools, top_p
  @context_length 128000
  @url https://openrouter.ai/microsoft/phi-3.5-mini-128k-instruct
  */
  "microsoft/phi-3.5-mini-128k-instruct",
  /** Nous: Hermes 3 70B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/nousresearch/hermes-3-llama-3.1-70b
  */
  "nousresearch/hermes-3-llama-3.1-70b",
  /** OpenAI: GPT-4o (2024-08-06)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-2024-08-06
  */
  "openai/gpt-4o-2024-08-06",
  /** Meta: Llama 3.1 8B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.1-8b-instruct
  */
  "meta-llama/llama-3.1-8b-instruct",
  /** Meta: Llama 3.1 405B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 32768
  @url https://openrouter.ai/meta-llama/llama-3.1-405b-instruct
  */
  "meta-llama/llama-3.1-405b-instruct",
  /** Meta: Llama 3.1 70B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.1-70b-instruct
  */
  "meta-llama/llama-3.1-70b-instruct",
  /** Mistral: Mistral Nemo
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 32000
  @url https://openrouter.ai/mistralai/mistral-nemo
  */
  "mistralai/mistral-nemo",
  /** OpenAI: GPT-4o-mini
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-mini
  */
  "openai/gpt-4o-mini",
  /** OpenAI: GPT-4o-mini (2024-07-18)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-mini-2024-07-18
  */
  "openai/gpt-4o-mini-2024-07-18",
  /** Anthropic: Claude 3.5 Sonnet (2024-06-20)
  @capabilities max_tokens, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-sonnet-20240620
  */
  "anthropic/claude-3.5-sonnet-20240620",
  /** Mistral: Mistral 7B Instruct (free)
  @capabilities frequency_penalty, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-7b-instruct:free
  */
  "mistralai/mistral-7b-instruct:free",
  /** Mistral: Mistral 7B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-7b-instruct
  */
  "mistralai/mistral-7b-instruct",
  /** Mistral: Mistral 7B Instruct v0.3
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-7b-instruct-v0.3
  */
  "mistralai/mistral-7b-instruct-v0.3",
  /** Microsoft: Phi-3 Mini 128K Instruct
  @capabilities max_tokens, temperature, tool_choice, tools, top_p
  @context_length 128000
  @url https://openrouter.ai/microsoft/phi-3-mini-128k-instruct
  */
  "microsoft/phi-3-mini-128k-instruct",
  /** Microsoft: Phi-3 Medium 128K Instruct
  @capabilities max_tokens, temperature, tool_choice, tools, top_p
  @context_length 128000
  @url https://openrouter.ai/microsoft/phi-3-medium-128k-instruct
  */
  "microsoft/phi-3-medium-128k-instruct",
  /** Google: Gemini 1.5 Flash 
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 1000000
  @url https://openrouter.ai/google/gemini-flash-1.5
  */
  "google/gemini-flash-1.5",
  /** OpenAI: GPT-4o
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o
  */
  "openai/gpt-4o",
  /** OpenAI: GPT-4o (extended)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o:extended
  */
  "openai/gpt-4o:extended",
  /** OpenAI: GPT-4o (2024-05-13)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p, web_search_options
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-2024-05-13
  */
  "openai/gpt-4o-2024-05-13",
  /** Meta: Llama 3 8B Instruct
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 8192
  @url https://openrouter.ai/meta-llama/llama-3-8b-instruct
  */
  "meta-llama/llama-3-8b-instruct",
  /** Meta: Llama 3 70B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 8192
  @url https://openrouter.ai/meta-llama/llama-3-70b-instruct
  */
  "meta-llama/llama-3-70b-instruct",
  /** Mistral: Mixtral 8x22B Instruct
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, repetition_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_k, top_logprobs, top_p
  @context_length 65536
  @url https://openrouter.ai/mistralai/mixtral-8x22b-instruct
  */
  "mistralai/mixtral-8x22b-instruct",
  /** Google: Gemini 1.5 Pro
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 2000000
  @url https://openrouter.ai/google/gemini-pro-1.5
  */
  "google/gemini-pro-1.5",
  /** OpenAI: GPT-4 Turbo
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4-turbo
  */
  "openai/gpt-4-turbo",
  /** Cohere: Command R+
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-plus
  */
  "cohere/command-r-plus",
  /** Cohere: Command R+ (04-2024)
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-plus-04-2024
  */
  "cohere/command-r-plus-04-2024",
  /** Cohere: Command R
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r
  */
  "cohere/command-r",
  /** Anthropic: Claude 3 Haiku
  @capabilities max_tokens, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-haiku
  */
  "anthropic/claude-3-haiku",
  /** Anthropic: Claude 3 Opus
  @capabilities max_tokens, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-opus
  */
  "anthropic/claude-3-opus",
  /** Cohere: Command R (03-2024)
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tools, top_k, top_p
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-03-2024
  */
  "cohere/command-r-03-2024",
  /** Mistral Large
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 128000
  @url https://openrouter.ai/mistralai/mistral-large
  */
  "mistralai/mistral-large",
  /** OpenAI: GPT-3.5 Turbo (older v0613)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 4095
  @url https://openrouter.ai/openai/gpt-3.5-turbo-0613
  */
  "openai/gpt-3.5-turbo-0613",
  /** OpenAI: GPT-4 Turbo Preview
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4-turbo-preview
  */
  "openai/gpt-4-turbo-preview",
  /** Mistral Small
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-small
  */
  "mistralai/mistral-small",
  /** Mistral Tiny
  @capabilities frequency_penalty, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-tiny
  */
  "mistralai/mistral-tiny",
  /** Mistral: Mixtral 8x7B Instruct
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, response_format, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mixtral-8x7b-instruct
  */
  "mistralai/mixtral-8x7b-instruct",
  /** OpenAI: GPT-4 Turbo (older v1106)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4-1106-preview
  */
  "openai/gpt-4-1106-preview",
  /** Mistral: Mistral 7B Instruct v0.1
  @capabilities frequency_penalty, logit_bias, max_tokens, min_p, presence_penalty, repetition_penalty, seed, stop, temperature, tool_choice, tools, top_k, top_p
  @context_length 2824
  @url https://openrouter.ai/mistralai/mistral-7b-instruct-v0.1
  */
  "mistralai/mistral-7b-instruct-v0.1",
  /** OpenAI: GPT-3.5 Turbo 16k
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 16385
  @url https://openrouter.ai/openai/gpt-3.5-turbo-16k
  */
  "openai/gpt-3.5-turbo-16k",
  /** OpenAI: GPT-3.5 Turbo
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 16385
  @url https://openrouter.ai/openai/gpt-3.5-turbo
  */
  "openai/gpt-3.5-turbo",
  /** OpenAI: GPT-4
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 8191
  @url https://openrouter.ai/openai/gpt-4
  */
  "openai/gpt-4",
  /** OpenAI: GPT-4 (older v0314)
  @capabilities frequency_penalty, logit_bias, logprobs, max_tokens, presence_penalty, response_format, seed, stop, structured_outputs, temperature, tool_choice, tools, top_logprobs, top_p
  @context_length 8191
  @url https://openrouter.ai/openai/gpt-4-0314
  */
  "openai/gpt-4-0314",
] as const;

export type ToolCallingModel =
  | (typeof toolCallingModels)[number]
  | (string & {});
