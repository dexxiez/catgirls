// ! Generated file, do not modify by hand. See packages/openrouter/scripts/generate-models.ts

export type RouterModel =
  /** Microsoft: Phi 4 Reasoning Plus (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/microsoft/phi-4-reasoning-plus:free
  */
  | "microsoft/phi-4-reasoning-plus:free"
  /** Microsoft: Phi 4 Reasoning Plus
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, repetition_penalty, response_format, top_k, seed, min_p
  @context_length 32768
  @url https://openrouter.ai/microsoft/phi-4-reasoning-plus
  */
  | "microsoft/phi-4-reasoning-plus"
  /** Microsoft: Phi 4 Reasoning (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/microsoft/phi-4-reasoning:free
  */
  | "microsoft/phi-4-reasoning:free"
  /** Qwen: Qwen3 0.6B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 32000
  @url https://openrouter.ai/qwen/qwen3-0.6b-04-28:free
  */
  | "qwen/qwen3-0.6b-04-28:free"
  /** Inception: Mercury Coder Small Beta
  @capabilities max_tokens, frequency_penalty, presence_penalty, stop
  @context_length 32000
  @url https://openrouter.ai/inception/mercury-coder-small-beta
  */
  | "inception/mercury-coder-small-beta"
  /** Qwen: Qwen3 1.7B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 32000
  @url https://openrouter.ai/qwen/qwen3-1.7b:free
  */
  | "qwen/qwen3-1.7b:free"
  /** Qwen: Qwen3 4B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 128000
  @url https://openrouter.ai/qwen/qwen3-4b:free
  */
  | "qwen/qwen3-4b:free"
  /** OpenGVLab: InternVL3 14B (free)
  @capabilities max_tokens, temperature, top_p
  @context_length 32000
  @url https://openrouter.ai/opengvlab/internvl3-14b:free
  */
  | "opengvlab/internvl3-14b:free"
  /** OpenGVLab: InternVL3 2B (free)
  @capabilities max_tokens, temperature, top_p
  @context_length 32000
  @url https://openrouter.ai/opengvlab/internvl3-2b:free
  */
  | "opengvlab/internvl3-2b:free"
  /** DeepSeek: DeepSeek Prover V2 (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-prover-v2:free
  */
  | "deepseek/deepseek-prover-v2:free"
  /** DeepSeek: DeepSeek Prover V2
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias, response_format
  @context_length 131072
  @url https://openrouter.ai/deepseek/deepseek-prover-v2
  */
  | "deepseek/deepseek-prover-v2"
  /** Meta: Llama Guard 4 12B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, response_format, top_k, seed, min_p
  @context_length 163840
  @url https://openrouter.ai/meta-llama/llama-guard-4-12b
  */
  | "meta-llama/llama-guard-4-12b"
  /** Qwen: Qwen3 30B A3B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-30b-a3b:free
  */
  | "qwen/qwen3-30b-a3b:free"
  /** Qwen: Qwen3 30B A3B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, presence_penalty, frequency_penalty, repetition_penalty, top_k, stop, response_format, seed, min_p, logit_bias, tools, tool_choice, structured_outputs, logprobs, top_logprobs
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-30b-a3b
  */
  | "qwen/qwen3-30b-a3b"
  /** Qwen: Qwen3 8B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-8b:free
  */
  | "qwen/qwen3-8b:free"
  /** Qwen: Qwen3 8B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 128000
  @url https://openrouter.ai/qwen/qwen3-8b
  */
  | "qwen/qwen3-8b"
  /** Qwen: Qwen3 14B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-14b:free
  */
  | "qwen/qwen3-14b:free"
  /** Qwen: Qwen3 14B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, repetition_penalty, response_format, top_k, seed, min_p, logit_bias, logprobs, top_logprobs
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-14b
  */
  | "qwen/qwen3-14b"
  /** Qwen: Qwen3 32B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-32b:free
  */
  | "qwen/qwen3-32b:free"
  /** Qwen: Qwen3 32B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, repetition_penalty, response_format, top_k, seed, min_p, logit_bias, tools, tool_choice, logprobs, top_logprobs
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-32b
  */
  | "qwen/qwen3-32b"
  /** Qwen: Qwen3 235B A22B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-235b-a22b:free
  */
  | "qwen/qwen3-235b-a22b:free"
  /** Qwen: Qwen3 235B A22B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, presence_penalty, frequency_penalty, repetition_penalty, top_k, seed, stop, response_format, min_p, tools, tool_choice, logit_bias, structured_outputs, logprobs, top_logprobs
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-235b-a22b
  */
  | "qwen/qwen3-235b-a22b"
  /** TNG: DeepSeek R1T Chimera (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 163840
  @url https://openrouter.ai/tngtech/deepseek-r1t-chimera:free
  */
  | "tngtech/deepseek-r1t-chimera:free"
  /** THUDM: GLM Z1 Rumination 32B 
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 32000
  @url https://openrouter.ai/thudm/glm-z1-rumination-32b
  */
  | "thudm/glm-z1-rumination-32b"
  /** THUDM: GLM Z1 9B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 32000
  @url https://openrouter.ai/thudm/glm-z1-9b:free
  */
  | "thudm/glm-z1-9b:free"
  /** THUDM: GLM 4 9B (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 32000
  @url https://openrouter.ai/thudm/glm-4-9b:free
  */
  | "thudm/glm-4-9b:free"
  /** Microsoft: MAI DS R1 (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 163840
  @url https://openrouter.ai/microsoft/mai-ds-r1:free
  */
  | "microsoft/mai-ds-r1:free"
  /** Google: Gemini 2.5 Pro Preview
  @capabilities max_tokens, temperature, top_p, tools, tool_choice, stop, seed, response_format, structured_outputs
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-pro-preview-03-25
  */
  | "google/gemini-2.5-pro-preview-03-25"
  /** THUDM: GLM Z1 32B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/thudm/glm-z1-32b:free
  */
  | "thudm/glm-z1-32b:free"
  /** THUDM: GLM Z1 32B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 32000
  @url https://openrouter.ai/thudm/glm-z1-32b
  */
  | "thudm/glm-z1-32b"
  /** THUDM: GLM 4 32B (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/thudm/glm-4-32b:free
  */
  | "thudm/glm-4-32b:free"
  /** THUDM: GLM 4 32B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 32000
  @url https://openrouter.ai/thudm/glm-4-32b
  */
  | "thudm/glm-4-32b"
  /** Google: Gemini 2.5 Flash Preview
  @capabilities max_tokens, temperature, top_p, tools, tool_choice, stop, response_format, structured_outputs
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-flash-preview
  */
  | "google/gemini-2.5-flash-preview"
  /** Google: Gemini 2.5 Flash Preview (thinking)
  @capabilities max_tokens, temperature, top_p, tools, tool_choice, stop, response_format, structured_outputs
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-flash-preview:thinking
  */
  | "google/gemini-2.5-flash-preview:thinking"
  /** OpenAI: o4 Mini High
  @capabilities tools, tool_choice, seed, max_tokens, response_format, structured_outputs
  @context_length 200000
  @url https://openrouter.ai/openai/o4-mini-high
  */
  | "openai/o4-mini-high"
  /** OpenAI: o3
  @capabilities tools, tool_choice, seed, max_tokens, response_format, structured_outputs
  @context_length 200000
  @url https://openrouter.ai/openai/o3
  */
  | "openai/o3"
  /** OpenAI: o4 Mini
  @capabilities tools, tool_choice, seed, max_tokens, response_format, structured_outputs
  @context_length 200000
  @url https://openrouter.ai/openai/o4-mini
  */
  | "openai/o4-mini"
  /** Shisa AI: Shisa V2 Llama 3.3 70B  (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/shisa-ai/shisa-v2-llama3.3-70b:free
  */
  | "shisa-ai/shisa-v2-llama3.3-70b:free"
  /** Qwen: Qwen2.5 Coder 7B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, logit_bias, logprobs, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen2.5-coder-7b-instruct
  */
  | "qwen/qwen2.5-coder-7b-instruct"
  /** OpenAI: GPT-4.1
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 1047576
  @url https://openrouter.ai/openai/gpt-4.1
  */
  | "openai/gpt-4.1"
  /** OpenAI: GPT-4.1 Mini
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 1047576
  @url https://openrouter.ai/openai/gpt-4.1-mini
  */
  | "openai/gpt-4.1-mini"
  /** OpenAI: GPT-4.1 Nano
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 1047576
  @url https://openrouter.ai/openai/gpt-4.1-nano
  */
  | "openai/gpt-4.1-nano"
  /** EleutherAI: Llemma 7b
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed
  @context_length 4096
  @url https://openrouter.ai/eleutherai/llemma_7b
  */
  | "eleutherai/llemma_7b"
  /** AlfredPros: CodeLLaMa 7B Instruct Solidity
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed
  @context_length 4096
  @url https://openrouter.ai/alfredpros/codellama-7b-instruct-solidity
  */
  | "alfredpros/codellama-7b-instruct-solidity"
  /** ArliAI: QwQ 32B RpR v1 (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/arliai/qwq-32b-arliai-rpr-v1:free
  */
  | "arliai/qwq-32b-arliai-rpr-v1:free"
  /** Agentica: Deepcoder 14B Preview (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 96000
  @url https://openrouter.ai/agentica-org/deepcoder-14b-preview:free
  */
  | "agentica-org/deepcoder-14b-preview:free"
  /** Moonshot AI: Kimi VL A3B Thinking (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 131072
  @url https://openrouter.ai/moonshotai/kimi-vl-a3b-thinking:free
  */
  | "moonshotai/kimi-vl-a3b-thinking:free"
  /** xAI: Grok 3 Mini Beta
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, reasoning, include_reasoning, stop, seed, logprobs, top_logprobs, response_format
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-3-mini-beta
  */
  | "x-ai/grok-3-mini-beta"
  /** xAI: Grok 3 Beta
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logprobs, top_logprobs, response_format
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-3-beta
  */
  | "x-ai/grok-3-beta"
  /** NVIDIA: Llama 3.3 Nemotron Super 49B v1 (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 131072
  @url https://openrouter.ai/nvidia/llama-3.3-nemotron-super-49b-v1:free
  */
  | "nvidia/llama-3.3-nemotron-super-49b-v1:free"
  /** NVIDIA: Llama 3.3 Nemotron Super 49B v1
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, logit_bias, logprobs, top_logprobs
  @context_length 131072
  @url https://openrouter.ai/nvidia/llama-3.3-nemotron-super-49b-v1
  */
  | "nvidia/llama-3.3-nemotron-super-49b-v1"
  /** NVIDIA: Llama 3.1 Nemotron Ultra 253B v1 (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 131072
  @url https://openrouter.ai/nvidia/llama-3.1-nemotron-ultra-253b-v1:free
  */
  | "nvidia/llama-3.1-nemotron-ultra-253b-v1:free"
  /** Meta: Llama 4 Maverick (free)
  @capabilities max_tokens, temperature, top_p, structured_outputs, response_format, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 256000
  @url https://openrouter.ai/meta-llama/llama-4-maverick:free
  */
  | "meta-llama/llama-4-maverick:free"
  /** Meta: Llama 4 Maverick
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias, tools, tool_choice, response_format, logprobs, top_logprobs, structured_outputs
  @context_length 1048576
  @url https://openrouter.ai/meta-llama/llama-4-maverick
  */
  | "meta-llama/llama-4-maverick"
  /** Meta: Llama 4 Scout (free)
  @capabilities max_tokens, temperature, top_p, structured_outputs, response_format, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 512000
  @url https://openrouter.ai/meta-llama/llama-4-scout:free
  */
  | "meta-llama/llama-4-scout:free"
  /** Meta: Llama 4 Scout
  @capabilities max_tokens, temperature, top_p, presence_penalty, frequency_penalty, repetition_penalty, top_k, tools, tool_choice, stop, response_format, top_logprobs, logprobs, logit_bias, seed, min_p, structured_outputs
  @context_length 1048576
  @url https://openrouter.ai/meta-llama/llama-4-scout
  */
  | "meta-llama/llama-4-scout"
  /** OpenHands LM 32B V0.1
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed
  @context_length 16384
  @url https://openrouter.ai/all-hands/openhands-lm-32b-v0.1
  */
  | "all-hands/openhands-lm-32b-v0.1"
  /** Mistral: Ministral 8B
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 131072
  @url https://openrouter.ai/mistral/ministral-8b
  */
  | "mistral/ministral-8b"
  /** DeepSeek: DeepSeek V3 Base (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-v3-base:free
  */
  | "deepseek/deepseek-v3-base:free"
  /** Typhoon2 8B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format
  @context_length 8192
  @url https://openrouter.ai/scb10x/llama3.1-typhoon2-8b-instruct
  */
  | "scb10x/llama3.1-typhoon2-8b-instruct"
  /** Typhoon2 70B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format
  @context_length 8192
  @url https://openrouter.ai/scb10x/llama3.1-typhoon2-70b-instruct
  */
  | "scb10x/llama3.1-typhoon2-70b-instruct"
  /** AllenAI: Molmo 7B D (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 4096
  @url https://openrouter.ai/allenai/molmo-7b-d:free
  */
  | "allenai/molmo-7b-d:free"
  /** Bytedance: UI-TARS 72B  (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/bytedance-research/ui-tars-72b:free
  */
  | "bytedance-research/ui-tars-72b:free"
  /** Qwen: Qwen2.5 VL 3B Instruct (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 64000
  @url https://openrouter.ai/qwen/qwen2.5-vl-3b-instruct:free
  */
  | "qwen/qwen2.5-vl-3b-instruct:free"
  /** Google: Gemini 2.5 Pro Experimental
  @capabilities max_tokens, temperature, top_p, tools, tool_choice, stop, seed, response_format, structured_outputs
  @context_length 1000000
  @url https://openrouter.ai/google/gemini-2.5-pro-exp-03-25
  */
  | "google/gemini-2.5-pro-exp-03-25"
  /** Qwen: Qwen2.5 VL 32B Instruct (free)
  @capabilities max_tokens, temperature, top_p, seed, response_format, presence_penalty, stop, frequency_penalty, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 8192
  @url https://openrouter.ai/qwen/qwen2.5-vl-32b-instruct:free
  */
  | "qwen/qwen2.5-vl-32b-instruct:free"
  /** Qwen: Qwen2.5 VL 32B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, response_format, structured_outputs, logit_bias, logprobs, top_logprobs
  @context_length 128000
  @url https://openrouter.ai/qwen/qwen2.5-vl-32b-instruct
  */
  | "qwen/qwen2.5-vl-32b-instruct"
  /** DeepSeek: DeepSeek V3 0324 (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs, top_a
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-chat-v3-0324:free
  */
  | "deepseek/deepseek-chat-v3-0324:free"
  /** DeepSeek: DeepSeek V3 0324
  @capabilities max_tokens, temperature, top_p, presence_penalty, frequency_penalty, repetition_penalty, top_k, stop, tools, tool_choice, seed, min_p, logit_bias, logprobs, top_logprobs, response_format
  @context_length 64000
  @url https://openrouter.ai/deepseek/deepseek-chat-v3-0324
  */
  | "deepseek/deepseek-chat-v3-0324"
  /** Qwerky 72B (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed
  @context_length 32768
  @url https://openrouter.ai/featherless/qwerky-72b:free
  */
  | "featherless/qwerky-72b:free"
  /** OpenAI: o1-pro
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format
  @context_length 200000
  @url https://openrouter.ai/openai/o1-pro
  */
  | "openai/o1-pro"
  /** Mistral: Mistral Small 3.1 24B (free)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 96000
  @url https://openrouter.ai/mistralai/mistral-small-3.1-24b-instruct:free
  */
  | "mistralai/mistral-small-3.1-24b-instruct:free"
  /** Mistral: Mistral Small 3.1 24B
  @capabilities max_tokens, temperature, top_p, presence_penalty, frequency_penalty, repetition_penalty, top_k, tools, tool_choice, stop, response_format, structured_outputs, seed, logit_bias, logprobs, top_logprobs
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-small-3.1-24b-instruct
  */
  | "mistralai/mistral-small-3.1-24b-instruct"
  /** OlympicCoder 32B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/open-r1/olympiccoder-32b:free
  */
  | "open-r1/olympiccoder-32b:free"
  /** SteelSkull: L3.3 Electra R1 70B
  @capabilities max_tokens, temperature, top_p, presence_penalty, frequency_penalty, repetition_penalty, top_k
  @context_length 131072
  @url https://openrouter.ai/steelskull/l3.3-electra-r1-70b
  */
  | "steelskull/l3.3-electra-r1-70b"
  /** Google: Gemma 3 1B (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/google/gemma-3-1b-it:free
  */
  | "google/gemma-3-1b-it:free"
  /** Google: Gemma 3 4B (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 131072
  @url https://openrouter.ai/google/gemma-3-4b-it:free
  */
  | "google/gemma-3-4b-it:free"
  /** Google: Gemma 3 4B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, response_format, top_k, seed, min_p
  @context_length 131072
  @url https://openrouter.ai/google/gemma-3-4b-it
  */
  | "google/gemma-3-4b-it"
  /** AI21: Jamba 1.6 Large
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop
  @context_length 256000
  @url https://openrouter.ai/ai21/jamba-1.6-large
  */
  | "ai21/jamba-1.6-large"
  /** AI21: Jamba Mini 1.6
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop
  @context_length 256000
  @url https://openrouter.ai/ai21/jamba-1.6-mini
  */
  | "ai21/jamba-1.6-mini"
  /** Google: Gemma 3 12B (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 131072
  @url https://openrouter.ai/google/gemma-3-12b-it:free
  */
  | "google/gemma-3-12b-it:free"
  /** Google: Gemma 3 12B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, response_format, top_k, seed, min_p
  @context_length 131072
  @url https://openrouter.ai/google/gemma-3-12b-it
  */
  | "google/gemma-3-12b-it"
  /** Cohere: Command A
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, seed, response_format, structured_outputs
  @context_length 256000
  @url https://openrouter.ai/cohere/command-a
  */
  | "cohere/command-a"
  /** OpenAI: GPT-4o-mini Search Preview
  @capabilities web_search_options, max_tokens, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-mini-search-preview
  */
  | "openai/gpt-4o-mini-search-preview"
  /** OpenAI: GPT-4o Search Preview
  @capabilities web_search_options, max_tokens, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-search-preview
  */
  | "openai/gpt-4o-search-preview"
  /** Reka: Flash 3 (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/rekaai/reka-flash-3:free
  */
  | "rekaai/reka-flash-3:free"
  /** Google: Gemma 3 27B (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs, response_format, structured_outputs
  @context_length 96000
  @url https://openrouter.ai/google/gemma-3-27b-it:free
  */
  | "google/gemma-3-27b-it:free"
  /** Google: Gemma 3 27B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, response_format, top_k, seed, min_p, logit_bias, top_logprobs, logprobs
  @context_length 131072
  @url https://openrouter.ai/google/gemma-3-27b-it
  */
  | "google/gemma-3-27b-it"
  /** TheDrummer: Anubis Pro 105B V1
  @capabilities max_tokens, temperature, top_p, presence_penalty, frequency_penalty, repetition_penalty, top_k
  @context_length 131072
  @url https://openrouter.ai/thedrummer/anubis-pro-105b-v1
  */
  | "thedrummer/anubis-pro-105b-v1"
  /** LatitudeGames: Wayfarer Large 70B Llama 3.3
  @capabilities max_tokens, temperature, top_p, presence_penalty, frequency_penalty, repetition_penalty, top_k
  @context_length 131072
  @url https://openrouter.ai/latitudegames/wayfarer-large-70b-llama-3.3
  */
  | "latitudegames/wayfarer-large-70b-llama-3.3"
  /** TheDrummer: Skyfall 36B V2
  @capabilities max_tokens, temperature, top_p, presence_penalty, frequency_penalty, repetition_penalty, top_k
  @context_length 32768
  @url https://openrouter.ai/thedrummer/skyfall-36b-v2
  */
  | "thedrummer/skyfall-36b-v2"
  /** Microsoft: Phi 4 Multimodal Instruct
  @capabilities max_tokens, temperature, top_p, presence_penalty, frequency_penalty, repetition_penalty, top_k, stop, response_format, seed, min_p
  @context_length 131072
  @url https://openrouter.ai/microsoft/phi-4-multimodal-instruct
  */
  | "microsoft/phi-4-multimodal-instruct"
  /** Perplexity: Sonar Reasoning Pro
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, web_search_options, top_k, frequency_penalty, presence_penalty
  @context_length 128000
  @url https://openrouter.ai/perplexity/sonar-reasoning-pro
  */
  | "perplexity/sonar-reasoning-pro"
  /** Perplexity: Sonar Pro
  @capabilities max_tokens, temperature, top_p, web_search_options, top_k, frequency_penalty, presence_penalty
  @context_length 200000
  @url https://openrouter.ai/perplexity/sonar-pro
  */
  | "perplexity/sonar-pro"
  /** Perplexity: Sonar Deep Research
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, top_k, frequency_penalty, presence_penalty
  @context_length 128000
  @url https://openrouter.ai/perplexity/sonar-deep-research
  */
  | "perplexity/sonar-deep-research"
  /** DeepSeek: DeepSeek R1 Zero (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-r1-zero:free
  */
  | "deepseek/deepseek-r1-zero:free"
  /** Qwen: QwQ 32B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 40000
  @url https://openrouter.ai/qwen/qwq-32b:free
  */
  | "qwen/qwq-32b:free"
  /** Qwen: QwQ 32B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, logprobs, top_logprobs, seed, tools, tool_choice, structured_outputs
  @context_length 131072
  @url https://openrouter.ai/qwen/qwq-32b
  */
  | "qwen/qwq-32b"
  /** Moonshot AI: Moonlight 16B A3B Instruct (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 8192
  @url https://openrouter.ai/moonshotai/moonlight-16b-a3b-instruct:free
  */
  | "moonshotai/moonlight-16b-a3b-instruct:free"
  /** Nous: DeepHermes 3 Llama 3 8B Preview (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 131072
  @url https://openrouter.ai/nousresearch/deephermes-3-llama-3-8b-preview:free
  */
  | "nousresearch/deephermes-3-llama-3-8b-preview:free"
  /** OpenAI: GPT-4.5 (Preview)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4.5-preview
  */
  | "openai/gpt-4.5-preview"
  /** Google: Gemini 2.0 Flash Lite
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, response_format, structured_outputs
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.0-flash-lite-001
  */
  | "google/gemini-2.0-flash-lite-001"
  /** Anthropic: Claude 3.7 Sonnet
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, reasoning, include_reasoning, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.7-sonnet
  */
  | "anthropic/claude-3.7-sonnet"
  /** Anthropic: Claude 3.7 Sonnet (thinking)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, reasoning, include_reasoning, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.7-sonnet:thinking
  */
  | "anthropic/claude-3.7-sonnet:thinking"
  /** Anthropic: Claude 3.7 Sonnet (self-moderated)
  @capabilities max_tokens, temperature, stop, reasoning, include_reasoning, tools, tool_choice
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.7-sonnet:beta
  */
  | "anthropic/claude-3.7-sonnet:beta"
  /** Perplexity: R1 1776
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, top_k, frequency_penalty, presence_penalty
  @context_length 128000
  @url https://openrouter.ai/perplexity/r1-1776
  */
  | "perplexity/r1-1776"
  /** Mistral: Saba
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed, top_logprobs, logprobs, logit_bias
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-saba
  */
  | "mistralai/mistral-saba"
  /** Dolphin3.0 R1 Mistral 24B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/cognitivecomputations/dolphin3.0-r1-mistral-24b:free
  */
  | "cognitivecomputations/dolphin3.0-r1-mistral-24b:free"
  /** Dolphin3.0 Mistral 24B (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/cognitivecomputations/dolphin3.0-mistral-24b:free
  */
  | "cognitivecomputations/dolphin3.0-mistral-24b:free"
  /** Llama Guard 3 8B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, top_logprobs, logprobs, seed
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-guard-3-8b
  */
  | "meta-llama/llama-guard-3-8b"
  /** OpenAI: o3 Mini High
  @capabilities tools, tool_choice, seed, max_tokens, response_format, structured_outputs
  @context_length 200000
  @url https://openrouter.ai/openai/o3-mini-high
  */
  | "openai/o3-mini-high"
  /** DeepSeek: R1 Distill Llama 8B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 32000
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-llama-8b
  */
  | "deepseek/deepseek-r1-distill-llama-8b"
  /** Google: Gemini 2.0 Flash
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, response_format, structured_outputs
  @context_length 1000000
  @url https://openrouter.ai/google/gemini-2.0-flash-001
  */
  | "google/gemini-2.0-flash-001"
  /** Qwen: Qwen VL Plus
  @capabilities max_tokens, temperature, top_p, seed, response_format, presence_penalty
  @context_length 7500
  @url https://openrouter.ai/qwen/qwen-vl-plus
  */
  | "qwen/qwen-vl-plus"
  /** AionLabs: Aion-1.0
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning
  @context_length 131072
  @url https://openrouter.ai/aion-labs/aion-1.0
  */
  | "aion-labs/aion-1.0"
  /** AionLabs: Aion-1.0-Mini
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning
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
  @capabilities max_tokens, temperature, top_p, seed, response_format, presence_penalty
  @context_length 7500
  @url https://openrouter.ai/qwen/qwen-vl-max
  */
  | "qwen/qwen-vl-max"
  /** Qwen: Qwen-Turbo
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, seed, response_format, presence_penalty
  @context_length 1000000
  @url https://openrouter.ai/qwen/qwen-turbo
  */
  | "qwen/qwen-turbo"
  /** Qwen: Qwen2.5 VL 72B Instruct (free)
  @capabilities max_tokens, temperature, top_p, seed, response_format, presence_penalty, stop, frequency_penalty, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 131072
  @url https://openrouter.ai/qwen/qwen2.5-vl-72b-instruct:free
  */
  | "qwen/qwen2.5-vl-72b-instruct:free"
  /** Qwen: Qwen2.5 VL 72B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed, logprobs, top_logprobs
  @context_length 32000
  @url https://openrouter.ai/qwen/qwen2.5-vl-72b-instruct
  */
  | "qwen/qwen2.5-vl-72b-instruct"
  /** Qwen: Qwen-Plus
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, seed, response_format, presence_penalty
  @context_length 131072
  @url https://openrouter.ai/qwen/qwen-plus
  */
  | "qwen/qwen-plus"
  /** Qwen: Qwen-Max 
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, seed, response_format, presence_penalty
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-max
  */
  | "qwen/qwen-max"
  /** OpenAI: o3 Mini
  @capabilities tools, tool_choice, seed, max_tokens, response_format, structured_outputs
  @context_length 200000
  @url https://openrouter.ai/openai/o3-mini
  */
  | "openai/o3-mini"
  /** DeepSeek: R1 Distill Qwen 1.5B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format
  @context_length 131072
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-qwen-1.5b
  */
  | "deepseek/deepseek-r1-distill-qwen-1.5b"
  /** Mistral: Mistral Small 3 (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-small-24b-instruct-2501:free
  */
  | "mistralai/mistral-small-24b-instruct-2501:free"
  /** Mistral: Mistral Small 3
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, response_format, top_k, seed, min_p, tools, tool_choice, structured_outputs, logit_bias, logprobs
  @context_length 28000
  @url https://openrouter.ai/mistralai/mistral-small-24b-instruct-2501
  */
  | "mistralai/mistral-small-24b-instruct-2501"
  /** DeepSeek: R1 Distill Qwen 32B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning
  @context_length 16000
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-qwen-32b:free
  */
  | "deepseek/deepseek-r1-distill-qwen-32b:free"
  /** DeepSeek: R1 Distill Qwen 32B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, repetition_penalty, response_format, top_k, seed, min_p, logit_bias
  @context_length 131072
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-qwen-32b
  */
  | "deepseek/deepseek-r1-distill-qwen-32b"
  /** DeepSeek: R1 Distill Qwen 14B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 64000
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-qwen-14b:free
  */
  | "deepseek/deepseek-r1-distill-qwen-14b:free"
  /** DeepSeek: R1 Distill Qwen 14B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed
  @context_length 64000
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-qwen-14b
  */
  | "deepseek/deepseek-r1-distill-qwen-14b"
  /** Perplexity: Sonar Reasoning
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, web_search_options, top_k, frequency_penalty, presence_penalty
  @context_length 127000
  @url https://openrouter.ai/perplexity/sonar-reasoning
  */
  | "perplexity/sonar-reasoning"
  /** Perplexity: Sonar
  @capabilities max_tokens, temperature, top_p, web_search_options, top_k, frequency_penalty, presence_penalty
  @context_length 127072
  @url https://openrouter.ai/perplexity/sonar
  */
  | "perplexity/sonar"
  /** Liquid: LFM 7B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty
  @context_length 32768
  @url https://openrouter.ai/liquid/lfm-7b
  */
  | "liquid/lfm-7b"
  /** Liquid: LFM 3B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty
  @context_length 32768
  @url https://openrouter.ai/liquid/lfm-3b
  */
  | "liquid/lfm-3b"
  /** DeepSeek: R1 Distill Llama 70B (free)
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed, logprobs, top_logprobs
  @context_length 8192
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-llama-70b:free
  */
  | "deepseek/deepseek-r1-distill-llama-70b:free"
  /** DeepSeek: R1 Distill Llama 70B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, top_k, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, min_p, repetition_penalty, tools, tool_choice, response_format, structured_outputs
  @context_length 131072
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-llama-70b
  */
  | "deepseek/deepseek-r1-distill-llama-70b"
  /** DeepSeek: R1 (free)
  @capabilities max_tokens, reasoning, include_reasoning, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, top_a, logprobs
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-r1:free
  */
  | "deepseek/deepseek-r1:free"
  /** DeepSeek: R1
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, logit_bias, logprobs, top_logprobs, repetition_penalty, response_format, structured_outputs, min_p, tools, tool_choice
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
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 262144
  @url https://openrouter.ai/mistralai/codestral-2501
  */
  | "mistralai/codestral-2501"
  /** Microsoft: Phi 4
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, logit_bias, logprobs, top_logprobs, repetition_penalty, response_format, min_p
  @context_length 16384
  @url https://openrouter.ai/microsoft/phi-4
  */
  | "microsoft/phi-4"
  /** DeepSeek: DeepSeek V3 (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs, top_a
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-chat:free
  */
  | "deepseek/deepseek-chat:free"
  /** DeepSeek: DeepSeek V3
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed, logprobs, top_logprobs, tools, tool_choice, structured_outputs
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-chat
  */
  | "deepseek/deepseek-chat"
  /** Sao10K: Llama 3.3 Euryale 70B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, response_format, top_k, seed, min_p, logit_bias
  @context_length 131072
  @url https://openrouter.ai/sao10k/l3.3-euryale-70b
  */
  | "sao10k/l3.3-euryale-70b"
  /** OpenAI: o1
  @capabilities tools, tool_choice, seed, max_tokens, response_format, structured_outputs
  @context_length 200000
  @url https://openrouter.ai/openai/o1
  */
  | "openai/o1"
  /** EVA Llama 3.33 70B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed
  @context_length 16384
  @url https://openrouter.ai/eva-unit-01/eva-llama-3.33-70b
  */
  | "eva-unit-01/eva-llama-3.33-70b"
  /** xAI: Grok 2 Vision 1212
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logprobs, top_logprobs, response_format
  @context_length 32768
  @url https://openrouter.ai/x-ai/grok-2-vision-1212
  */
  | "x-ai/grok-2-vision-1212"
  /** xAI: Grok 2 1212
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logprobs, top_logprobs, response_format
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-2-1212
  */
  | "x-ai/grok-2-1212"
  /** Cohere: Command R7B (12-2024)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, seed, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r7b-12-2024
  */
  | "cohere/command-r7b-12-2024"
  /** Google: Gemini 2.0 Flash Experimental (free)
  @capabilities max_tokens, temperature, top_p, stop
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.0-flash-exp:free
  */
  | "google/gemini-2.0-flash-exp:free"
  /** Meta: Llama 3.3 70B Instruct (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, repetition_penalty, logit_bias, min_p, response_format
  @context_length 8000
  @url https://openrouter.ai/meta-llama/llama-3.3-70b-instruct:free
  */
  | "meta-llama/llama-3.3-70b-instruct:free"
  /** Meta: Llama 3.3 70B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, top_k, tools, tool_choice, min_p, repetition_penalty, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/meta-llama/llama-3.3-70b-instruct
  */
  | "meta-llama/llama-3.3-70b-instruct"
  /** Amazon: Nova Lite 1.0
  @capabilities tools, max_tokens, temperature, top_p, top_k, stop
  @context_length 300000
  @url https://openrouter.ai/amazon/nova-lite-v1
  */
  | "amazon/nova-lite-v1"
  /** Amazon: Nova Micro 1.0
  @capabilities tools, max_tokens, temperature, top_p, top_k, stop
  @context_length 128000
  @url https://openrouter.ai/amazon/nova-micro-v1
  */
  | "amazon/nova-micro-v1"
  /** Amazon: Nova Pro 1.0
  @capabilities tools, max_tokens, temperature, top_p, top_k, stop
  @context_length 300000
  @url https://openrouter.ai/amazon/nova-pro-v1
  */
  | "amazon/nova-pro-v1"
  /** Qwen: QwQ 32B Preview (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 16384
  @url https://openrouter.ai/qwen/qwq-32b-preview:free
  */
  | "qwen/qwq-32b-preview:free"
  /** Qwen: QwQ 32B Preview
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, logprobs, top_logprobs, seed, logit_bias, top_k, min_p, repetition_penalty
  @context_length 32768
  @url https://openrouter.ai/qwen/qwq-32b-preview
  */
  | "qwen/qwq-32b-preview"
  /** Google: LearnLM 1.5 Pro Experimental (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, response_format, structured_outputs
  @context_length 40960
  @url https://openrouter.ai/google/learnlm-1.5-pro-experimental:free
  */
  | "google/learnlm-1.5-pro-experimental:free"
  /** EVA Qwen2.5 72B
  @capabilities max_tokens, temperature, top_p, presence_penalty, frequency_penalty, repetition_penalty, top_k, stop, min_p, seed
  @context_length 131072
  @url https://openrouter.ai/eva-unit-01/eva-qwen-2.5-72b
  */
  | "eva-unit-01/eva-qwen-2.5-72b"
  /** OpenAI: GPT-4o (2024-11-20)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-2024-11-20
  */
  | "openai/gpt-4o-2024-11-20"
  /** Mistral Large 2411
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-large-2411
  */
  | "mistralai/mistral-large-2411"
  /** Mistral Large 2407
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-large-2407
  */
  | "mistralai/mistral-large-2407"
  /** Mistral: Pixtral Large 2411
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 131072
  @url https://openrouter.ai/mistralai/pixtral-large-2411
  */
  | "mistralai/pixtral-large-2411"
  /** xAI: Grok Vision Beta
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logprobs, top_logprobs, response_format
  @context_length 8192
  @url https://openrouter.ai/x-ai/grok-vision-beta
  */
  | "x-ai/grok-vision-beta"
  /** Infermatic: Mistral Nemo Inferor 12B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed
  @context_length 16384
  @url https://openrouter.ai/infermatic/mn-inferor-12b
  */
  | "infermatic/mn-inferor-12b"
  /** Qwen2.5 Coder 32B Instruct (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2.5-coder-32b-instruct:free
  */
  | "qwen/qwen-2.5-coder-32b-instruct:free"
  /** Qwen2.5 Coder 32B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed, logprobs, top_logprobs, top_a
  @context_length 131072
  @url https://openrouter.ai/qwen/qwen-2.5-coder-32b-instruct
  */
  | "qwen/qwen-2.5-coder-32b-instruct"
  /** SorcererLM 8x22B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, logit_bias, top_k, min_p, seed
  @context_length 16000
  @url https://openrouter.ai/raifle/sorcererlm-8x22b
  */
  | "raifle/sorcererlm-8x22b"
  /** EVA Qwen2.5 32B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed
  @context_length 16384
  @url https://openrouter.ai/eva-unit-01/eva-qwen-2.5-32b
  */
  | "eva-unit-01/eva-qwen-2.5-32b"
  /** Unslopnemo 12B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, logit_bias, top_k, min_p, seed, logprobs
  @context_length 32000
  @url https://openrouter.ai/thedrummer/unslopnemo-12b
  */
  | "thedrummer/unslopnemo-12b"
  /** Anthropic: Claude 3.5 Haiku (self-moderated)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-haiku:beta
  */
  | "anthropic/claude-3.5-haiku:beta"
  /** Anthropic: Claude 3.5 Haiku
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-haiku
  */
  | "anthropic/claude-3.5-haiku"
  /** Anthropic: Claude 3.5 Haiku (2024-10-22) (self-moderated)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-haiku-20241022:beta
  */
  | "anthropic/claude-3.5-haiku-20241022:beta"
  /** Anthropic: Claude 3.5 Haiku (2024-10-22)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-haiku-20241022
  */
  | "anthropic/claude-3.5-haiku-20241022"
  /** NeverSleep: Lumimaid v0.2 70B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, logit_bias, top_k, min_p, seed, top_a
  @context_length 16384
  @url https://openrouter.ai/neversleep/llama-3.1-lumimaid-70b
  */
  | "neversleep/llama-3.1-lumimaid-70b"
  /** Magnum v4 72B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed, logit_bias, top_a
  @context_length 16384
  @url https://openrouter.ai/anthracite-org/magnum-v4-72b
  */
  | "anthracite-org/magnum-v4-72b"
  /** Anthropic: Claude 3.5 Sonnet (self-moderated)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-sonnet:beta
  */
  | "anthropic/claude-3.5-sonnet:beta"
  /** Anthropic: Claude 3.5 Sonnet
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-sonnet
  */
  | "anthropic/claude-3.5-sonnet"
  /** xAI: Grok Beta
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logprobs, top_logprobs, response_format
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-beta
  */
  | "x-ai/grok-beta"
  /** Mistral: Ministral 8B
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 128000
  @url https://openrouter.ai/mistralai/ministral-8b
  */
  | "mistralai/ministral-8b"
  /** Mistral: Ministral 3B
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 131072
  @url https://openrouter.ai/mistralai/ministral-3b
  */
  | "mistralai/ministral-3b"
  /** Qwen2.5 7B Instruct (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2.5-7b-instruct:free
  */
  | "qwen/qwen-2.5-7b-instruct:free"
  /** Qwen2.5 7B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2.5-7b-instruct
  */
  | "qwen/qwen-2.5-7b-instruct"
  /** NVIDIA: Llama 3.1 Nemotron 70B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, top_k, repetition_penalty, min_p, tools, tool_choice
  @context_length 131072
  @url https://openrouter.ai/nvidia/llama-3.1-nemotron-70b-instruct
  */
  | "nvidia/llama-3.1-nemotron-70b-instruct"
  /** Inflection: Inflection 3 Productivity
  @capabilities max_tokens, temperature, top_p, stop
  @context_length 8000
  @url https://openrouter.ai/inflection/inflection-3-productivity
  */
  | "inflection/inflection-3-productivity"
  /** Inflection: Inflection 3 Pi
  @capabilities max_tokens, temperature, top_p, stop
  @context_length 8000
  @url https://openrouter.ai/inflection/inflection-3-pi
  */
  | "inflection/inflection-3-pi"
  /** Google: Gemini 1.5 Flash 8B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, tools, tool_choice, seed, response_format, structured_outputs
  @context_length 1000000
  @url https://openrouter.ai/google/gemini-flash-1.5-8b
  */
  | "google/gemini-flash-1.5-8b"
  /** Rocinante 12B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed, logit_bias
  @context_length 32768
  @url https://openrouter.ai/thedrummer/rocinante-12b
  */
  | "thedrummer/rocinante-12b"
  /** Magnum v2 72B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, logit_bias, top_k, min_p, seed
  @context_length 32768
  @url https://openrouter.ai/anthracite-org/magnum-v2-72b
  */
  | "anthracite-org/magnum-v2-72b"
  /** Liquid: LFM 40B MoE
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias, logprobs, top_logprobs, response_format
  @context_length 32768
  @url https://openrouter.ai/liquid/lfm-40b
  */
  | "liquid/lfm-40b"
  /** Meta: Llama 3.2 3B Instruct (free)
  @capabilities max_tokens, temperature, top_p
  @context_length 20000
  @url https://openrouter.ai/meta-llama/llama-3.2-3b-instruct:free
  */
  | "meta-llama/llama-3.2-3b-instruct:free"
  /** Meta: Llama 3.2 3B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, top_k, min_p, repetition_penalty, tools, tool_choice
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.2-3b-instruct
  */
  | "meta-llama/llama-3.2-3b-instruct"
  /** Meta: Llama 3.2 1B Instruct (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 131000
  @url https://openrouter.ai/meta-llama/llama-3.2-1b-instruct:free
  */
  | "meta-llama/llama-3.2-1b-instruct:free"
  /** Meta: Llama 3.2 1B Instruct
  @capabilities max_tokens, temperature, top_p, top_k, stop, frequency_penalty, presence_penalty, repetition_penalty, response_format, seed, min_p, logit_bias, top_logprobs, logprobs
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.2-1b-instruct
  */
  | "meta-llama/llama-3.2-1b-instruct"
  /** Meta: Llama 3.2 90B Vision Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.2-90b-vision-instruct
  */
  | "meta-llama/llama-3.2-90b-vision-instruct"
  /** Meta: Llama 3.2 11B Vision Instruct (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.2-11b-vision-instruct:free
  */
  | "meta-llama/llama-3.2-11b-vision-instruct:free"
  /** Meta: Llama 3.2 11B Vision Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias, response_format, top_logprobs, logprobs
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.2-11b-vision-instruct
  */
  | "meta-llama/llama-3.2-11b-vision-instruct"
  /** Qwen2.5 72B Instruct (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2.5-72b-instruct:free
  */
  | "qwen/qwen-2.5-72b-instruct:free"
  /** Qwen2.5 72B Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, response_format, structured_outputs, logit_bias, logprobs, top_logprobs, seed, min_p
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2.5-72b-instruct
  */
  | "qwen/qwen-2.5-72b-instruct"
  /** Qwen: Qwen2.5-VL 72B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, logprobs, top_logprobs, seed, logit_bias, top_k, min_p, repetition_penalty
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2.5-vl-72b-instruct
  */
  | "qwen/qwen-2.5-vl-72b-instruct"
  /** NeverSleep: Lumimaid v0.2 8B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed, logit_bias, top_a
  @context_length 32768
  @url https://openrouter.ai/neversleep/llama-3.1-lumimaid-8b
  */
  | "neversleep/llama-3.1-lumimaid-8b"
  /** OpenAI: o1-preview
  @capabilities seed, max_tokens
  @context_length 128000
  @url https://openrouter.ai/openai/o1-preview
  */
  | "openai/o1-preview"
  /** OpenAI: o1-preview (2024-09-12)
  @capabilities seed, max_tokens
  @context_length 128000
  @url https://openrouter.ai/openai/o1-preview-2024-09-12
  */
  | "openai/o1-preview-2024-09-12"
  /** OpenAI: o1-mini
  @capabilities seed, max_tokens
  @context_length 128000
  @url https://openrouter.ai/openai/o1-mini
  */
  | "openai/o1-mini"
  /** OpenAI: o1-mini (2024-09-12)
  @capabilities seed, max_tokens
  @context_length 128000
  @url https://openrouter.ai/openai/o1-mini-2024-09-12
  */
  | "openai/o1-mini-2024-09-12"
  /** Mistral: Pixtral 12B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, logprobs, top_logprobs, seed, logit_bias, top_k, min_p, repetition_penalty, tools, tool_choice, response_format, structured_outputs
  @context_length 32768
  @url https://openrouter.ai/mistralai/pixtral-12b
  */
  | "mistralai/pixtral-12b"
  /** Cohere: Command R+ (08-2024)
  @capabilities tools, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, seed, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-plus-08-2024
  */
  | "cohere/command-r-plus-08-2024"
  /** Cohere: Command R (08-2024)
  @capabilities tools, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, seed, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-08-2024
  */
  | "cohere/command-r-08-2024"
  /** Qwen: Qwen2.5-VL 7B Instruct (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 64000
  @url https://openrouter.ai/qwen/qwen-2.5-vl-7b-instruct:free
  */
  | "qwen/qwen-2.5-vl-7b-instruct:free"
  /** Qwen: Qwen2.5-VL 7B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, logprobs, top_logprobs, seed, logit_bias, top_k, min_p, repetition_penalty
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2.5-vl-7b-instruct
  */
  | "qwen/qwen-2.5-vl-7b-instruct"
  /** Sao10K: Llama 3.1 Euryale 70B v2.2
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias, response_format
  @context_length 131072
  @url https://openrouter.ai/sao10k/l3.1-euryale-70b
  */
  | "sao10k/l3.1-euryale-70b"
  /** Google: Gemini 1.5 Flash 8B Experimental
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, response_format, structured_outputs
  @context_length 1000000
  @url https://openrouter.ai/google/gemini-flash-1.5-8b-exp
  */
  | "google/gemini-flash-1.5-8b-exp"
  /** AI21: Jamba 1.5 Mini
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop
  @context_length 256000
  @url https://openrouter.ai/ai21/jamba-1-5-mini
  */
  | "ai21/jamba-1-5-mini"
  /** AI21: Jamba 1.5 Large
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop
  @context_length 256000
  @url https://openrouter.ai/ai21/jamba-1-5-large
  */
  | "ai21/jamba-1-5-large"
  /** Microsoft: Phi-3.5 Mini 128K Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, logit_bias, logprobs, top_logprobs
  @context_length 131072
  @url https://openrouter.ai/microsoft/phi-3.5-mini-128k-instruct
  */
  | "microsoft/phi-3.5-mini-128k-instruct"
  /** Nous: Hermes 3 70B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, tools, tool_choice, top_k, min_p, repetition_penalty
  @context_length 131072
  @url https://openrouter.ai/nousresearch/hermes-3-llama-3.1-70b
  */
  | "nousresearch/hermes-3-llama-3.1-70b"
  /** Nous: Hermes 3 405B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, top_k, repetition_penalty, min_p
  @context_length 131072
  @url https://openrouter.ai/nousresearch/hermes-3-llama-3.1-405b
  */
  | "nousresearch/hermes-3-llama-3.1-405b"
  /** OpenAI: ChatGPT-4o
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/chatgpt-4o-latest
  */
  | "openai/chatgpt-4o-latest"
  /** Sao10K: Llama 3 8B Lunaris
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias, response_format
  @context_length 8192
  @url https://openrouter.ai/sao10k/l3-lunaris-8b
  */
  | "sao10k/l3-lunaris-8b"
  /** Aetherwiing: Starcannon 12B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed
  @context_length 16384
  @url https://openrouter.ai/aetherwiing/mn-starcannon-12b
  */
  | "aetherwiing/mn-starcannon-12b"
  /** OpenAI: GPT-4o (2024-08-06)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-2024-08-06
  */
  | "openai/gpt-4o-2024-08-06"
  /** Meta: Llama 3.1 405B (base) (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 64000
  @url https://openrouter.ai/meta-llama/llama-3.1-405b:free
  */
  | "meta-llama/llama-3.1-405b:free"
  /** Meta: Llama 3.1 405B (base)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, logprobs, top_logprobs, seed, logit_bias, top_k, min_p, repetition_penalty
  @context_length 32768
  @url https://openrouter.ai/meta-llama/llama-3.1-405b
  */
  | "meta-llama/llama-3.1-405b"
  /** Mistral Nemo 12B Celeste
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed
  @context_length 16384
  @url https://openrouter.ai/nothingiisreal/mn-celeste-12b
  */
  | "nothingiisreal/mn-celeste-12b"
  /** Perplexity: Llama 3.1 Sonar 8B Online
  @capabilities max_tokens, temperature, top_p, top_k, frequency_penalty, presence_penalty
  @context_length 127072
  @url https://openrouter.ai/perplexity/llama-3.1-sonar-small-128k-online
  */
  | "perplexity/llama-3.1-sonar-small-128k-online"
  /** Perplexity: Llama 3.1 Sonar 70B Online
  @capabilities max_tokens, temperature, top_p, top_k, frequency_penalty, presence_penalty
  @context_length 127072
  @url https://openrouter.ai/perplexity/llama-3.1-sonar-large-128k-online
  */
  | "perplexity/llama-3.1-sonar-large-128k-online"
  /** Meta: Llama 3.1 8B Instruct (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.1-8b-instruct:free
  */
  | "meta-llama/llama-3.1-8b-instruct:free"
  /** Meta: Llama 3.1 8B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, top_k, repetition_penalty, structured_outputs, min_p, tools, tool_choice
  @context_length 16384
  @url https://openrouter.ai/meta-llama/llama-3.1-8b-instruct
  */
  | "meta-llama/llama-3.1-8b-instruct"
  /** Meta: Llama 3.1 405B Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, response_format, structured_outputs, logit_bias, logprobs, top_logprobs, min_p, seed
  @context_length 32768
  @url https://openrouter.ai/meta-llama/llama-3.1-405b-instruct
  */
  | "meta-llama/llama-3.1-405b-instruct"
  /** Meta: Llama 3.1 70B Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed, logprobs, top_logprobs, structured_outputs
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.1-70b-instruct
  */
  | "meta-llama/llama-3.1-70b-instruct"
  /** Mistral: Codestral Mamba
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, seed
  @context_length 262144
  @url https://openrouter.ai/mistralai/codestral-mamba
  */
  | "mistralai/codestral-mamba"
  /** Mistral: Mistral Nemo (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 128000
  @url https://openrouter.ai/mistralai/mistral-nemo:free
  */
  | "mistralai/mistral-nemo:free"
  /** Mistral: Mistral Nemo
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, logit_bias, logprobs, top_logprobs, tools, tool_choice, response_format, structured_outputs, repetition_penalty, min_p
  @context_length 98304
  @url https://openrouter.ai/mistralai/mistral-nemo
  */
  | "mistralai/mistral-nemo"
  /** OpenAI: GPT-4o-mini
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs, tools, tool_choice
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-mini
  */
  | "openai/gpt-4o-mini"
  /** OpenAI: GPT-4o-mini (2024-07-18)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-mini-2024-07-18
  */
  | "openai/gpt-4o-mini-2024-07-18"
  /** Google: Gemma 2 27B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed, logprobs, top_logprobs
  @context_length 8192
  @url https://openrouter.ai/google/gemma-2-27b-it
  */
  | "google/gemma-2-27b-it"
  /** Magnum 72B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed
  @context_length 16384
  @url https://openrouter.ai/alpindale/magnum-72b
  */
  | "alpindale/magnum-72b"
  /** Google: Gemma 2 9B (free)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 8192
  @url https://openrouter.ai/google/gemma-2-9b-it:free
  */
  | "google/gemma-2-9b-it:free"
  /** Google: Gemma 2 9B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias, response_format, top_logprobs, logprobs
  @context_length 8192
  @url https://openrouter.ai/google/gemma-2-9b-it
  */
  | "google/gemma-2-9b-it"
  /** 01.AI: Yi Large
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, response_format, structured_outputs, logit_bias, logprobs, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/01-ai/yi-large
  */
  | "01-ai/yi-large"
  /** AI21: Jamba Instruct
  @capabilities max_tokens, temperature, top_p, stop
  @context_length 256000
  @url https://openrouter.ai/ai21/jamba-instruct
  */
  | "ai21/jamba-instruct"
  /** Anthropic: Claude 3.5 Sonnet (2024-06-20) (self-moderated)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-sonnet-20240620:beta
  */
  | "anthropic/claude-3.5-sonnet-20240620:beta"
  /** Anthropic: Claude 3.5 Sonnet (2024-06-20)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-sonnet-20240620
  */
  | "anthropic/claude-3.5-sonnet-20240620"
  /** Sao10k: Llama 3 Euryale 70B v2.1
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 8192
  @url https://openrouter.ai/sao10k/l3-euryale-70b
  */
  | "sao10k/l3-euryale-70b"
  /** Dolphin 2.9.2 Mixtral 8x22B 🐬
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 16000
  @url https://openrouter.ai/cognitivecomputations/dolphin-mixtral-8x22b
  */
  | "cognitivecomputations/dolphin-mixtral-8x22b"
  /** Qwen 2 72B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2-72b-instruct
  */
  | "qwen/qwen-2-72b-instruct"
  /** Mistral: Mistral 7B Instruct (free)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, response_format, top_k, seed, min_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-7b-instruct:free
  */
  | "mistralai/mistral-7b-instruct:free"
  /** Mistral: Mistral 7B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed, logprobs, tools, tool_choice
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-7b-instruct
  */
  | "mistralai/mistral-7b-instruct"
  /** NousResearch: Hermes 2 Pro - Llama-3 8B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, top_k, min_p, repetition_penalty
  @context_length 131072
  @url https://openrouter.ai/nousresearch/hermes-2-pro-llama-3-8b
  */
  | "nousresearch/hermes-2-pro-llama-3-8b"
  /** Mistral: Mistral 7B Instruct v0.3
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed, tools, tool_choice, logprobs
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-7b-instruct-v0.3
  */
  | "mistralai/mistral-7b-instruct-v0.3"
  /** Microsoft: Phi-3 Mini 128K Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p
  @context_length 128000
  @url https://openrouter.ai/microsoft/phi-3-mini-128k-instruct
  */
  | "microsoft/phi-3-mini-128k-instruct"
  /** Microsoft: Phi-3 Medium 128K Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, logit_bias, logprobs, top_logprobs
  @context_length 131072
  @url https://openrouter.ai/microsoft/phi-3-medium-128k-instruct
  */
  | "microsoft/phi-3-medium-128k-instruct"
  /** NeverSleep: Llama 3 Lumimaid 70B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed
  @context_length 8192
  @url https://openrouter.ai/neversleep/llama-3-lumimaid-70b
  */
  | "neversleep/llama-3-lumimaid-70b"
  /** DeepSeek-Coder-V2
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, logit_bias, logprobs, top_logprobs
  @context_length 128000
  @url https://openrouter.ai/deepseek/deepseek-coder
  */
  | "deepseek/deepseek-coder"
  /** Google: Gemini 1.5 Flash 
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, tools, tool_choice, seed, response_format, structured_outputs
  @context_length 1000000
  @url https://openrouter.ai/google/gemini-flash-1.5
  */
  | "google/gemini-flash-1.5"
  /** OpenAI: GPT-4o
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o
  */
  | "openai/gpt-4o"
  /** OpenAI: GPT-4o (extended)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o:extended
  */
  | "openai/gpt-4o:extended"
  /** Meta: LlamaGuard 2 8B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format
  @context_length 8192
  @url https://openrouter.ai/meta-llama/llama-guard-2-8b
  */
  | "meta-llama/llama-guard-2-8b"
  /** OpenAI: GPT-4o (2024-05-13)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-2024-05-13
  */
  | "openai/gpt-4o-2024-05-13"
  /** OLMo 7B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, logit_bias, logprobs, top_logprobs
  @context_length 2048
  @url https://openrouter.ai/allenai/olmo-7b-instruct
  */
  | "allenai/olmo-7b-instruct"
  /** NeverSleep: Llama 3 Lumimaid 8B (extended)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, logit_bias, top_k, min_p, seed, top_a
  @context_length 24576
  @url https://openrouter.ai/neversleep/llama-3-lumimaid-8b:extended
  */
  | "neversleep/llama-3-lumimaid-8b:extended"
  /** NeverSleep: Llama 3 Lumimaid 8B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed, logit_bias, top_a
  @context_length 24576
  @url https://openrouter.ai/neversleep/llama-3-lumimaid-8b
  */
  | "neversleep/llama-3-lumimaid-8b"
  /** Fimbulvetr 11B v2
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed
  @context_length 4096
  @url https://openrouter.ai/sao10k/fimbulvetr-11b-v2
  */
  | "sao10k/fimbulvetr-11b-v2"
  /** Meta: Llama 3 8B Instruct
  @capabilities max_tokens, temperature, top_p, top_k, seed, repetition_penalty, frequency_penalty, presence_penalty, stop, min_p, logit_bias, tools, tool_choice, response_format, top_logprobs, logprobs, top_a
  @context_length 8192
  @url https://openrouter.ai/meta-llama/llama-3-8b-instruct
  */
  | "meta-llama/llama-3-8b-instruct"
  /** Meta: Llama 3 70B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, top_logprobs, logprobs, seed, tools, tool_choice
  @context_length 8192
  @url https://openrouter.ai/meta-llama/llama-3-70b-instruct
  */
  | "meta-llama/llama-3-70b-instruct"
  /** Mistral: Mixtral 8x22B Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed, top_k, repetition_penalty, logit_bias, logprobs, top_logprobs
  @context_length 65536
  @url https://openrouter.ai/mistralai/mixtral-8x22b-instruct
  */
  | "mistralai/mixtral-8x22b-instruct"
  /** WizardLM-2 8x22B
  @capabilities max_tokens, temperature, top_p, presence_penalty, frequency_penalty, repetition_penalty, top_k, stop, seed, min_p, logit_bias, response_format
  @context_length 65536
  @url https://openrouter.ai/microsoft/wizardlm-2-8x22b
  */
  | "microsoft/wizardlm-2-8x22b"
  /** Google: Gemini 1.5 Pro
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, tools, tool_choice, seed, response_format, structured_outputs
  @context_length 2000000
  @url https://openrouter.ai/google/gemini-pro-1.5
  */
  | "google/gemini-pro-1.5"
  /** OpenAI: GPT-4 Turbo
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4-turbo
  */
  | "openai/gpt-4-turbo"
  /** Cohere: Command R+
  @capabilities tools, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, seed, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-plus
  */
  | "cohere/command-r-plus"
  /** Cohere: Command R+ (04-2024)
  @capabilities tools, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, seed, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-plus-04-2024
  */
  | "cohere/command-r-plus-04-2024"
  /** Midnight Rose 70B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 4096
  @url https://openrouter.ai/sophosympatheia/midnight-rose-70b
  */
  | "sophosympatheia/midnight-rose-70b"
  /** Cohere: Command
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, seed, response_format, structured_outputs
  @context_length 4096
  @url https://openrouter.ai/cohere/command
  */
  | "cohere/command"
  /** Cohere: Command R
  @capabilities tools, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, seed, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r
  */
  | "cohere/command-r"
  /** Anthropic: Claude 3 Haiku (self-moderated)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-haiku:beta
  */
  | "anthropic/claude-3-haiku:beta"
  /** Anthropic: Claude 3 Haiku
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-haiku
  */
  | "anthropic/claude-3-haiku"
  /** Anthropic: Claude 3 Opus (self-moderated)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-opus:beta
  */
  | "anthropic/claude-3-opus:beta"
  /** Anthropic: Claude 3 Opus
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-opus
  */
  | "anthropic/claude-3-opus"
  /** Anthropic: Claude 3 Sonnet (self-moderated)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-sonnet:beta
  */
  | "anthropic/claude-3-sonnet:beta"
  /** Anthropic: Claude 3 Sonnet
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-sonnet
  */
  | "anthropic/claude-3-sonnet"
  /** Cohere: Command R (03-2024)
  @capabilities tools, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, seed, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-03-2024
  */
  | "cohere/command-r-03-2024"
  /** Mistral Large
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, response_format, stop, seed, frequency_penalty, presence_penalty, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/mistralai/mistral-large
  */
  | "mistralai/mistral-large"
  /** OpenAI: GPT-3.5 Turbo (older v0613)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 4095
  @url https://openrouter.ai/openai/gpt-3.5-turbo-0613
  */
  | "openai/gpt-3.5-turbo-0613"
  /** OpenAI: GPT-4 Turbo Preview
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4-turbo-preview
  */
  | "openai/gpt-4-turbo-preview"
  /** Nous: Hermes 2 Mixtral 8x7B DPO
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format
  @context_length 32768
  @url https://openrouter.ai/nousresearch/nous-hermes-2-mixtral-8x7b-dpo
  */
  | "nousresearch/nous-hermes-2-mixtral-8x7b-dpo"
  /** Mistral Medium
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-medium
  */
  | "mistralai/mistral-medium"
  /** Mistral Small
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-small
  */
  | "mistralai/mistral-small"
  /** Mistral Tiny
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-tiny
  */
  | "mistralai/mistral-tiny"
  /** Mistral: Mistral 7B Instruct v0.2
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-7b-instruct-v0.2
  */
  | "mistralai/mistral-7b-instruct-v0.2"
  /** Google: Gemini Pro Vision 1.0
  @capabilities max_tokens, temperature, top_p, top_k, stop
  @context_length 16384
  @url https://openrouter.ai/google/gemini-pro-vision
  */
  | "google/gemini-pro-vision"
  /** Mistral: Mixtral 8x7B Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed, logprobs, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/mistralai/mixtral-8x7b-instruct
  */
  | "mistralai/mixtral-8x7b-instruct"
  /** Noromaid 20B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, logit_bias, top_k, min_p, seed, top_a
  @context_length 8192
  @url https://openrouter.ai/neversleep/noromaid-20b
  */
  | "neversleep/noromaid-20b"
  /** Anthropic: Claude v2.1 (self-moderated)
  @capabilities max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-2.1:beta
  */
  | "anthropic/claude-2.1:beta"
  /** Anthropic: Claude v2.1
  @capabilities max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-2.1
  */
  | "anthropic/claude-2.1"
  /** Anthropic: Claude v2 (self-moderated)
  @capabilities max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-2:beta
  */
  | "anthropic/claude-2:beta"
  /** Anthropic: Claude v2
  @capabilities max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-2
  */
  | "anthropic/claude-2"
  /** Toppy M 7B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed
  @context_length 4096
  @url https://openrouter.ai/undi95/toppy-m-7b
  */
  | "undi95/toppy-m-7b"
  /** Goliath 120B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, logit_bias, top_k, min_p, seed, top_a
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
  /** OpenAI: GPT-3.5 Turbo 16k (older v1106)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 16385
  @url https://openrouter.ai/openai/gpt-3.5-turbo-1106
  */
  | "openai/gpt-3.5-turbo-1106"
  /** OpenAI: GPT-4 Turbo (older v1106)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4-1106-preview
  */
  | "openai/gpt-4-1106-preview"
  /** Google: PaLM 2 Chat 32k
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, response_format
  @context_length 32768
  @url https://openrouter.ai/google/palm-2-chat-bison-32k
  */
  | "google/palm-2-chat-bison-32k"
  /** Google: PaLM 2 Code Chat 32k
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, response_format
  @context_length 32768
  @url https://openrouter.ai/google/palm-2-codechat-bison-32k
  */
  | "google/palm-2-codechat-bison-32k"
  /** Airoboros 70B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias
  @context_length 4096
  @url https://openrouter.ai/jondurbin/airoboros-l2-70b
  */
  | "jondurbin/airoboros-l2-70b"
  /** OpenAI: GPT-3.5 Turbo Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format
  @context_length 4095
  @url https://openrouter.ai/openai/gpt-3.5-turbo-instruct
  */
  | "openai/gpt-3.5-turbo-instruct"
  /** Mistral: Mistral 7B Instruct v0.1
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed
  @context_length 2824
  @url https://openrouter.ai/mistralai/mistral-7b-instruct-v0.1
  */
  | "mistralai/mistral-7b-instruct-v0.1"
  /** Pygmalion: Mythalion 13B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, logit_bias, top_k, min_p, seed, top_a
  @context_length 8192
  @url https://openrouter.ai/pygmalionai/mythalion-13b
  */
  | "pygmalionai/mythalion-13b"
  /** OpenAI: GPT-3.5 Turbo 16k
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format
  @context_length 16385
  @url https://openrouter.ai/openai/gpt-3.5-turbo-16k
  */
  | "openai/gpt-3.5-turbo-16k"
  /** OpenAI: GPT-4 32k
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format
  @context_length 32767
  @url https://openrouter.ai/openai/gpt-4-32k
  */
  | "openai/gpt-4-32k"
  /** OpenAI: GPT-4 32k (older v0314)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 32767
  @url https://openrouter.ai/openai/gpt-4-32k-0314
  */
  | "openai/gpt-4-32k-0314"
  /** Mancer: Weaver (alpha)
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, logit_bias, top_k, min_p, seed, top_a
  @context_length 8000
  @url https://openrouter.ai/mancer/weaver
  */
  | "mancer/weaver"
  /** Hugging Face: Zephyr 7B (free)
  @capabilities max_tokens, temperature, top_p, top_k, repetition_penalty, stop
  @context_length 4096
  @url https://openrouter.ai/huggingfaceh4/zephyr-7b-beta:free
  */
  | "huggingfaceh4/zephyr-7b-beta:free"
  /** Anthropic: Claude v2.0 (self-moderated)
  @capabilities max_tokens, temperature, top_p, top_k, stop
  @context_length 100000
  @url https://openrouter.ai/anthropic/claude-2.0:beta
  */
  | "anthropic/claude-2.0:beta"
  /** Anthropic: Claude v2.0
  @capabilities max_tokens, temperature, top_p, top_k, stop
  @context_length 100000
  @url https://openrouter.ai/anthropic/claude-2.0
  */
  | "anthropic/claude-2.0"
  /** ReMM SLERP 13B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, logit_bias, top_k, min_p, seed, top_a
  @context_length 6144
  @url https://openrouter.ai/undi95/remm-slerp-l2-13b
  */
  | "undi95/remm-slerp-l2-13b"
  /** Google: PaLM 2 Chat
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, response_format
  @context_length 9216
  @url https://openrouter.ai/google/palm-2-chat-bison
  */
  | "google/palm-2-chat-bison"
  /** Google: PaLM 2 Code Chat
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, response_format
  @context_length 7168
  @url https://openrouter.ai/google/palm-2-codechat-bison
  */
  | "google/palm-2-codechat-bison"
  /** MythoMax 13B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, logit_bias, top_k, min_p, seed, top_a, response_format
  @context_length 4096
  @url https://openrouter.ai/gryphe/mythomax-l2-13b
  */
  | "gryphe/mythomax-l2-13b"
  /** Meta: Llama 2 70B Chat
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format
  @context_length 4096
  @url https://openrouter.ai/meta-llama/llama-2-70b-chat
  */
  | "meta-llama/llama-2-70b-chat"
  /** OpenAI: GPT-3.5 Turbo
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format
  @context_length 16385
  @url https://openrouter.ai/openai/gpt-3.5-turbo
  */
  | "openai/gpt-3.5-turbo"
  /** OpenAI: GPT-3.5 Turbo 16k
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format
  @context_length 16385
  @url https://openrouter.ai/openai/gpt-3.5-turbo-0125
  */
  | "openai/gpt-3.5-turbo-0125"
  /** OpenAI: GPT-4
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format
  @context_length 8191
  @url https://openrouter.ai/openai/gpt-4
  */
  | "openai/gpt-4"
  /** OpenAI: GPT-4 (older v0314)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 8191
  @url https://openrouter.ai/openai/gpt-4-0314
  */
  | "openai/gpt-4-0314"
  | (string & {});

export const toolCallingModels = [
  /** Qwen: Qwen3 30B A3B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, presence_penalty, frequency_penalty, repetition_penalty, top_k, stop, response_format, seed, min_p, logit_bias, tools, tool_choice, structured_outputs, logprobs, top_logprobs
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-30b-a3b
  */
  "qwen/qwen3-30b-a3b",
  /** Qwen: Qwen3 32B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, repetition_penalty, response_format, top_k, seed, min_p, logit_bias, tools, tool_choice, logprobs, top_logprobs
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-32b
  */
  "qwen/qwen3-32b",
  /** Qwen: Qwen3 235B A22B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, presence_penalty, frequency_penalty, repetition_penalty, top_k, seed, stop, response_format, min_p, tools, tool_choice, logit_bias, structured_outputs, logprobs, top_logprobs
  @context_length 40960
  @url https://openrouter.ai/qwen/qwen3-235b-a22b
  */
  "qwen/qwen3-235b-a22b",
  /** Google: Gemini 2.5 Pro Preview
  @capabilities max_tokens, temperature, top_p, tools, tool_choice, stop, seed, response_format, structured_outputs
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-pro-preview-03-25
  */
  "google/gemini-2.5-pro-preview-03-25",
  /** Google: Gemini 2.5 Flash Preview
  @capabilities max_tokens, temperature, top_p, tools, tool_choice, stop, response_format, structured_outputs
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-flash-preview
  */
  "google/gemini-2.5-flash-preview",
  /** Google: Gemini 2.5 Flash Preview (thinking)
  @capabilities max_tokens, temperature, top_p, tools, tool_choice, stop, response_format, structured_outputs
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.5-flash-preview:thinking
  */
  "google/gemini-2.5-flash-preview:thinking",
  /** OpenAI: o4 Mini High
  @capabilities tools, tool_choice, seed, max_tokens, response_format, structured_outputs
  @context_length 200000
  @url https://openrouter.ai/openai/o4-mini-high
  */
  "openai/o4-mini-high",
  /** OpenAI: o3
  @capabilities tools, tool_choice, seed, max_tokens, response_format, structured_outputs
  @context_length 200000
  @url https://openrouter.ai/openai/o3
  */
  "openai/o3",
  /** OpenAI: o4 Mini
  @capabilities tools, tool_choice, seed, max_tokens, response_format, structured_outputs
  @context_length 200000
  @url https://openrouter.ai/openai/o4-mini
  */
  "openai/o4-mini",
  /** OpenAI: GPT-4.1
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 1047576
  @url https://openrouter.ai/openai/gpt-4.1
  */
  "openai/gpt-4.1",
  /** OpenAI: GPT-4.1 Mini
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 1047576
  @url https://openrouter.ai/openai/gpt-4.1-mini
  */
  "openai/gpt-4.1-mini",
  /** OpenAI: GPT-4.1 Nano
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 1047576
  @url https://openrouter.ai/openai/gpt-4.1-nano
  */
  "openai/gpt-4.1-nano",
  /** xAI: Grok 3 Mini Beta
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, reasoning, include_reasoning, stop, seed, logprobs, top_logprobs, response_format
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-3-mini-beta
  */
  "x-ai/grok-3-mini-beta",
  /** xAI: Grok 3 Beta
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logprobs, top_logprobs, response_format
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-3-beta
  */
  "x-ai/grok-3-beta",
  /** Meta: Llama 4 Maverick
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logit_bias, tools, tool_choice, response_format, logprobs, top_logprobs, structured_outputs
  @context_length 1048576
  @url https://openrouter.ai/meta-llama/llama-4-maverick
  */
  "meta-llama/llama-4-maverick",
  /** Meta: Llama 4 Scout
  @capabilities max_tokens, temperature, top_p, presence_penalty, frequency_penalty, repetition_penalty, top_k, tools, tool_choice, stop, response_format, top_logprobs, logprobs, logit_bias, seed, min_p, structured_outputs
  @context_length 1048576
  @url https://openrouter.ai/meta-llama/llama-4-scout
  */
  "meta-llama/llama-4-scout",
  /** OpenHands LM 32B V0.1
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, top_k, min_p, seed
  @context_length 16384
  @url https://openrouter.ai/all-hands/openhands-lm-32b-v0.1
  */
  "all-hands/openhands-lm-32b-v0.1",
  /** Mistral: Ministral 8B
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 131072
  @url https://openrouter.ai/mistral/ministral-8b
  */
  "mistral/ministral-8b",
  /** Google: Gemini 2.5 Pro Experimental
  @capabilities max_tokens, temperature, top_p, tools, tool_choice, stop, seed, response_format, structured_outputs
  @context_length 1000000
  @url https://openrouter.ai/google/gemini-2.5-pro-exp-03-25
  */
  "google/gemini-2.5-pro-exp-03-25",
  /** DeepSeek: DeepSeek V3 0324
  @capabilities max_tokens, temperature, top_p, presence_penalty, frequency_penalty, repetition_penalty, top_k, stop, tools, tool_choice, seed, min_p, logit_bias, logprobs, top_logprobs, response_format
  @context_length 64000
  @url https://openrouter.ai/deepseek/deepseek-chat-v3-0324
  */
  "deepseek/deepseek-chat-v3-0324",
  /** Mistral: Mistral Small 3.1 24B (free)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, min_p, repetition_penalty, logprobs, logit_bias, top_logprobs
  @context_length 96000
  @url https://openrouter.ai/mistralai/mistral-small-3.1-24b-instruct:free
  */
  "mistralai/mistral-small-3.1-24b-instruct:free",
  /** Mistral: Mistral Small 3.1 24B
  @capabilities max_tokens, temperature, top_p, presence_penalty, frequency_penalty, repetition_penalty, top_k, tools, tool_choice, stop, response_format, structured_outputs, seed, logit_bias, logprobs, top_logprobs
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-small-3.1-24b-instruct
  */
  "mistralai/mistral-small-3.1-24b-instruct",
  /** AI21: Jamba 1.6 Large
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop
  @context_length 256000
  @url https://openrouter.ai/ai21/jamba-1.6-large
  */
  "ai21/jamba-1.6-large",
  /** AI21: Jamba Mini 1.6
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop
  @context_length 256000
  @url https://openrouter.ai/ai21/jamba-1.6-mini
  */
  "ai21/jamba-1.6-mini",
  /** Qwen: QwQ 32B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, logprobs, top_logprobs, seed, tools, tool_choice, structured_outputs
  @context_length 131072
  @url https://openrouter.ai/qwen/qwq-32b
  */
  "qwen/qwq-32b",
  /** OpenAI: GPT-4.5 (Preview)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4.5-preview
  */
  "openai/gpt-4.5-preview",
  /** Google: Gemini 2.0 Flash Lite
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, response_format, structured_outputs
  @context_length 1048576
  @url https://openrouter.ai/google/gemini-2.0-flash-lite-001
  */
  "google/gemini-2.0-flash-lite-001",
  /** Anthropic: Claude 3.7 Sonnet
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, reasoning, include_reasoning, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.7-sonnet
  */
  "anthropic/claude-3.7-sonnet",
  /** Anthropic: Claude 3.7 Sonnet (thinking)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, reasoning, include_reasoning, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.7-sonnet:thinking
  */
  "anthropic/claude-3.7-sonnet:thinking",
  /** Anthropic: Claude 3.7 Sonnet (self-moderated)
  @capabilities max_tokens, temperature, stop, reasoning, include_reasoning, tools, tool_choice
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.7-sonnet:beta
  */
  "anthropic/claude-3.7-sonnet:beta",
  /** Mistral: Saba
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed, top_logprobs, logprobs, logit_bias
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-saba
  */
  "mistralai/mistral-saba",
  /** OpenAI: o3 Mini High
  @capabilities tools, tool_choice, seed, max_tokens, response_format, structured_outputs
  @context_length 200000
  @url https://openrouter.ai/openai/o3-mini-high
  */
  "openai/o3-mini-high",
  /** Google: Gemini 2.0 Flash
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, response_format, structured_outputs
  @context_length 1000000
  @url https://openrouter.ai/google/gemini-2.0-flash-001
  */
  "google/gemini-2.0-flash-001",
  /** Qwen: Qwen-Turbo
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, seed, response_format, presence_penalty
  @context_length 1000000
  @url https://openrouter.ai/qwen/qwen-turbo
  */
  "qwen/qwen-turbo",
  /** Qwen: Qwen-Plus
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, seed, response_format, presence_penalty
  @context_length 131072
  @url https://openrouter.ai/qwen/qwen-plus
  */
  "qwen/qwen-plus",
  /** Qwen: Qwen-Max 
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, seed, response_format, presence_penalty
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-max
  */
  "qwen/qwen-max",
  /** OpenAI: o3 Mini
  @capabilities tools, tool_choice, seed, max_tokens, response_format, structured_outputs
  @context_length 200000
  @url https://openrouter.ai/openai/o3-mini
  */
  "openai/o3-mini",
  /** Mistral: Mistral Small 3
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, response_format, top_k, seed, min_p, tools, tool_choice, structured_outputs, logit_bias, logprobs
  @context_length 28000
  @url https://openrouter.ai/mistralai/mistral-small-24b-instruct-2501
  */
  "mistralai/mistral-small-24b-instruct-2501",
  /** DeepSeek: R1 Distill Llama 70B
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, top_k, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, min_p, repetition_penalty, tools, tool_choice, response_format, structured_outputs
  @context_length 131072
  @url https://openrouter.ai/deepseek/deepseek-r1-distill-llama-70b
  */
  "deepseek/deepseek-r1-distill-llama-70b",
  /** DeepSeek: R1
  @capabilities max_tokens, temperature, top_p, reasoning, include_reasoning, stop, frequency_penalty, presence_penalty, seed, top_k, logit_bias, logprobs, top_logprobs, repetition_penalty, response_format, structured_outputs, min_p, tools, tool_choice
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-r1
  */
  "deepseek/deepseek-r1",
  /** Mistral: Codestral 2501
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 262144
  @url https://openrouter.ai/mistralai/codestral-2501
  */
  "mistralai/codestral-2501",
  /** DeepSeek: DeepSeek V3
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed, logprobs, top_logprobs, tools, tool_choice, structured_outputs
  @context_length 163840
  @url https://openrouter.ai/deepseek/deepseek-chat
  */
  "deepseek/deepseek-chat",
  /** OpenAI: o1
  @capabilities tools, tool_choice, seed, max_tokens, response_format, structured_outputs
  @context_length 200000
  @url https://openrouter.ai/openai/o1
  */
  "openai/o1",
  /** xAI: Grok 2 1212
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logprobs, top_logprobs, response_format
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-2-1212
  */
  "x-ai/grok-2-1212",
  /** Meta: Llama 3.3 70B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, top_k, tools, tool_choice, min_p, repetition_penalty, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/meta-llama/llama-3.3-70b-instruct
  */
  "meta-llama/llama-3.3-70b-instruct",
  /** Amazon: Nova Lite 1.0
  @capabilities tools, max_tokens, temperature, top_p, top_k, stop
  @context_length 300000
  @url https://openrouter.ai/amazon/nova-lite-v1
  */
  "amazon/nova-lite-v1",
  /** Amazon: Nova Micro 1.0
  @capabilities tools, max_tokens, temperature, top_p, top_k, stop
  @context_length 128000
  @url https://openrouter.ai/amazon/nova-micro-v1
  */
  "amazon/nova-micro-v1",
  /** Amazon: Nova Pro 1.0
  @capabilities tools, max_tokens, temperature, top_p, top_k, stop
  @context_length 300000
  @url https://openrouter.ai/amazon/nova-pro-v1
  */
  "amazon/nova-pro-v1",
  /** OpenAI: GPT-4o (2024-11-20)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-2024-11-20
  */
  "openai/gpt-4o-2024-11-20",
  /** Mistral Large 2411
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-large-2411
  */
  "mistralai/mistral-large-2411",
  /** Mistral Large 2407
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 131072
  @url https://openrouter.ai/mistralai/mistral-large-2407
  */
  "mistralai/mistral-large-2407",
  /** Mistral: Pixtral Large 2411
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 131072
  @url https://openrouter.ai/mistralai/pixtral-large-2411
  */
  "mistralai/pixtral-large-2411",
  /** Anthropic: Claude 3.5 Haiku (self-moderated)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-haiku:beta
  */
  "anthropic/claude-3.5-haiku:beta",
  /** Anthropic: Claude 3.5 Haiku
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-haiku
  */
  "anthropic/claude-3.5-haiku",
  /** Anthropic: Claude 3.5 Haiku (2024-10-22) (self-moderated)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-haiku-20241022:beta
  */
  "anthropic/claude-3.5-haiku-20241022:beta",
  /** Anthropic: Claude 3.5 Haiku (2024-10-22)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-haiku-20241022
  */
  "anthropic/claude-3.5-haiku-20241022",
  /** Anthropic: Claude 3.5 Sonnet (self-moderated)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-sonnet:beta
  */
  "anthropic/claude-3.5-sonnet:beta",
  /** Anthropic: Claude 3.5 Sonnet
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-sonnet
  */
  "anthropic/claude-3.5-sonnet",
  /** xAI: Grok Beta
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logprobs, top_logprobs, response_format
  @context_length 131072
  @url https://openrouter.ai/x-ai/grok-beta
  */
  "x-ai/grok-beta",
  /** Mistral: Ministral 8B
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 128000
  @url https://openrouter.ai/mistralai/ministral-8b
  */
  "mistralai/ministral-8b",
  /** Mistral: Ministral 3B
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 131072
  @url https://openrouter.ai/mistralai/ministral-3b
  */
  "mistralai/ministral-3b",
  /** NVIDIA: Llama 3.1 Nemotron 70B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, top_k, repetition_penalty, min_p, tools, tool_choice
  @context_length 131072
  @url https://openrouter.ai/nvidia/llama-3.1-nemotron-70b-instruct
  */
  "nvidia/llama-3.1-nemotron-70b-instruct",
  /** Google: Gemini 1.5 Flash 8B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, tools, tool_choice, seed, response_format, structured_outputs
  @context_length 1000000
  @url https://openrouter.ai/google/gemini-flash-1.5-8b
  */
  "google/gemini-flash-1.5-8b",
  /** Meta: Llama 3.2 3B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, top_k, min_p, repetition_penalty, tools, tool_choice
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.2-3b-instruct
  */
  "meta-llama/llama-3.2-3b-instruct",
  /** Qwen2.5 72B Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, response_format, structured_outputs, logit_bias, logprobs, top_logprobs, seed, min_p
  @context_length 32768
  @url https://openrouter.ai/qwen/qwen-2.5-72b-instruct
  */
  "qwen/qwen-2.5-72b-instruct",
  /** Mistral: Pixtral 12B
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, logprobs, top_logprobs, seed, logit_bias, top_k, min_p, repetition_penalty, tools, tool_choice, response_format, structured_outputs
  @context_length 32768
  @url https://openrouter.ai/mistralai/pixtral-12b
  */
  "mistralai/pixtral-12b",
  /** Cohere: Command R+ (08-2024)
  @capabilities tools, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, seed, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-plus-08-2024
  */
  "cohere/command-r-plus-08-2024",
  /** Cohere: Command R (08-2024)
  @capabilities tools, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, seed, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-08-2024
  */
  "cohere/command-r-08-2024",
  /** Google: Gemini 1.5 Flash 8B Experimental
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, response_format, structured_outputs
  @context_length 1000000
  @url https://openrouter.ai/google/gemini-flash-1.5-8b-exp
  */
  "google/gemini-flash-1.5-8b-exp",
  /** AI21: Jamba 1.5 Mini
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop
  @context_length 256000
  @url https://openrouter.ai/ai21/jamba-1-5-mini
  */
  "ai21/jamba-1-5-mini",
  /** AI21: Jamba 1.5 Large
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop
  @context_length 256000
  @url https://openrouter.ai/ai21/jamba-1-5-large
  */
  "ai21/jamba-1-5-large",
  /** Microsoft: Phi-3.5 Mini 128K Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, logit_bias, logprobs, top_logprobs
  @context_length 131072
  @url https://openrouter.ai/microsoft/phi-3.5-mini-128k-instruct
  */
  "microsoft/phi-3.5-mini-128k-instruct",
  /** Nous: Hermes 3 70B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, tools, tool_choice, top_k, min_p, repetition_penalty
  @context_length 131072
  @url https://openrouter.ai/nousresearch/hermes-3-llama-3.1-70b
  */
  "nousresearch/hermes-3-llama-3.1-70b",
  /** OpenAI: GPT-4o (2024-08-06)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-2024-08-06
  */
  "openai/gpt-4o-2024-08-06",
  /** Meta: Llama 3.1 8B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, top_k, repetition_penalty, structured_outputs, min_p, tools, tool_choice
  @context_length 16384
  @url https://openrouter.ai/meta-llama/llama-3.1-8b-instruct
  */
  "meta-llama/llama-3.1-8b-instruct",
  /** Meta: Llama 3.1 405B Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, response_format, structured_outputs, logit_bias, logprobs, top_logprobs, min_p, seed
  @context_length 32768
  @url https://openrouter.ai/meta-llama/llama-3.1-405b-instruct
  */
  "meta-llama/llama-3.1-405b-instruct",
  /** Meta: Llama 3.1 70B Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed, logprobs, top_logprobs, structured_outputs
  @context_length 131072
  @url https://openrouter.ai/meta-llama/llama-3.1-70b-instruct
  */
  "meta-llama/llama-3.1-70b-instruct",
  /** Mistral: Codestral Mamba
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, seed
  @context_length 262144
  @url https://openrouter.ai/mistralai/codestral-mamba
  */
  "mistralai/codestral-mamba",
  /** Mistral: Mistral Nemo
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, logit_bias, logprobs, top_logprobs, tools, tool_choice, response_format, structured_outputs, repetition_penalty, min_p
  @context_length 98304
  @url https://openrouter.ai/mistralai/mistral-nemo
  */
  "mistralai/mistral-nemo",
  /** OpenAI: GPT-4o-mini
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs, tools, tool_choice
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-mini
  */
  "openai/gpt-4o-mini",
  /** OpenAI: GPT-4o-mini (2024-07-18)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-mini-2024-07-18
  */
  "openai/gpt-4o-mini-2024-07-18",
  /** Anthropic: Claude 3.5 Sonnet (2024-06-20) (self-moderated)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-sonnet-20240620:beta
  */
  "anthropic/claude-3.5-sonnet-20240620:beta",
  /** Anthropic: Claude 3.5 Sonnet (2024-06-20)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3.5-sonnet-20240620
  */
  "anthropic/claude-3.5-sonnet-20240620",
  /** Mistral: Mistral 7B Instruct (free)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, repetition_penalty, response_format, top_k, seed, min_p
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-7b-instruct:free
  */
  "mistralai/mistral-7b-instruct:free",
  /** Mistral: Mistral 7B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed, logprobs, tools, tool_choice
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-7b-instruct
  */
  "mistralai/mistral-7b-instruct",
  /** Mistral: Mistral 7B Instruct v0.3
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed, tools, tool_choice, logprobs
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-7b-instruct-v0.3
  */
  "mistralai/mistral-7b-instruct-v0.3",
  /** Microsoft: Phi-3 Mini 128K Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p
  @context_length 128000
  @url https://openrouter.ai/microsoft/phi-3-mini-128k-instruct
  */
  "microsoft/phi-3-mini-128k-instruct",
  /** Microsoft: Phi-3 Medium 128K Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, top_k, logit_bias, logprobs, top_logprobs
  @context_length 131072
  @url https://openrouter.ai/microsoft/phi-3-medium-128k-instruct
  */
  "microsoft/phi-3-medium-128k-instruct",
  /** Google: Gemini 1.5 Flash 
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, tools, tool_choice, seed, response_format, structured_outputs
  @context_length 1000000
  @url https://openrouter.ai/google/gemini-flash-1.5
  */
  "google/gemini-flash-1.5",
  /** OpenAI: GPT-4o
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o
  */
  "openai/gpt-4o",
  /** OpenAI: GPT-4o (extended)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o:extended
  */
  "openai/gpt-4o:extended",
  /** OpenAI: GPT-4o (2024-05-13)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, web_search_options, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4o-2024-05-13
  */
  "openai/gpt-4o-2024-05-13",
  /** Meta: Llama 3 8B Instruct
  @capabilities max_tokens, temperature, top_p, top_k, seed, repetition_penalty, frequency_penalty, presence_penalty, stop, min_p, logit_bias, tools, tool_choice, response_format, top_logprobs, logprobs, top_a
  @context_length 8192
  @url https://openrouter.ai/meta-llama/llama-3-8b-instruct
  */
  "meta-llama/llama-3-8b-instruct",
  /** Meta: Llama 3 70B Instruct
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, top_logprobs, logprobs, seed, tools, tool_choice
  @context_length 8192
  @url https://openrouter.ai/meta-llama/llama-3-70b-instruct
  */
  "meta-llama/llama-3-70b-instruct",
  /** Mistral: Mixtral 8x22B Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed, top_k, repetition_penalty, logit_bias, logprobs, top_logprobs
  @context_length 65536
  @url https://openrouter.ai/mistralai/mixtral-8x22b-instruct
  */
  "mistralai/mixtral-8x22b-instruct",
  /** Google: Gemini 1.5 Pro
  @capabilities max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, tools, tool_choice, seed, response_format, structured_outputs
  @context_length 2000000
  @url https://openrouter.ai/google/gemini-pro-1.5
  */
  "google/gemini-pro-1.5",
  /** OpenAI: GPT-4 Turbo
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4-turbo
  */
  "openai/gpt-4-turbo",
  /** Cohere: Command R+
  @capabilities tools, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, seed, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-plus
  */
  "cohere/command-r-plus",
  /** Cohere: Command R+ (04-2024)
  @capabilities tools, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, seed, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-plus-04-2024
  */
  "cohere/command-r-plus-04-2024",
  /** Cohere: Command R
  @capabilities tools, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, seed, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r
  */
  "cohere/command-r",
  /** Anthropic: Claude 3 Haiku (self-moderated)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-haiku:beta
  */
  "anthropic/claude-3-haiku:beta",
  /** Anthropic: Claude 3 Haiku
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-haiku
  */
  "anthropic/claude-3-haiku",
  /** Anthropic: Claude 3 Opus (self-moderated)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-opus:beta
  */
  "anthropic/claude-3-opus:beta",
  /** Anthropic: Claude 3 Opus
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-opus
  */
  "anthropic/claude-3-opus",
  /** Anthropic: Claude 3 Sonnet (self-moderated)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-sonnet:beta
  */
  "anthropic/claude-3-sonnet:beta",
  /** Anthropic: Claude 3 Sonnet
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, top_k, stop
  @context_length 200000
  @url https://openrouter.ai/anthropic/claude-3-sonnet
  */
  "anthropic/claude-3-sonnet",
  /** Cohere: Command R (03-2024)
  @capabilities tools, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, seed, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/cohere/command-r-03-2024
  */
  "cohere/command-r-03-2024",
  /** Mistral Large
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, response_format, stop, seed, frequency_penalty, presence_penalty, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/mistralai/mistral-large
  */
  "mistralai/mistral-large",
  /** OpenAI: GPT-3.5 Turbo (older v0613)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 4095
  @url https://openrouter.ai/openai/gpt-3.5-turbo-0613
  */
  "openai/gpt-3.5-turbo-0613",
  /** OpenAI: GPT-4 Turbo Preview
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4-turbo-preview
  */
  "openai/gpt-4-turbo-preview",
  /** Mistral Medium
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-medium
  */
  "mistralai/mistral-medium",
  /** Mistral Small
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-small
  */
  "mistralai/mistral-small",
  /** Mistral Tiny
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, response_format, structured_outputs, seed
  @context_length 32768
  @url https://openrouter.ai/mistralai/mistral-tiny
  */
  "mistralai/mistral-tiny",
  /** Mistral: Mixtral 8x7B Instruct
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed, logprobs, top_logprobs
  @context_length 32768
  @url https://openrouter.ai/mistralai/mixtral-8x7b-instruct
  */
  "mistralai/mixtral-8x7b-instruct",
  /** OpenAI: GPT-3.5 Turbo 16k (older v1106)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 16385
  @url https://openrouter.ai/openai/gpt-3.5-turbo-1106
  */
  "openai/gpt-3.5-turbo-1106",
  /** OpenAI: GPT-4 Turbo (older v1106)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 128000
  @url https://openrouter.ai/openai/gpt-4-1106-preview
  */
  "openai/gpt-4-1106-preview",
  /** Mistral: Mistral 7B Instruct v0.1
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, top_k, repetition_penalty, logit_bias, min_p, response_format, seed
  @context_length 2824
  @url https://openrouter.ai/mistralai/mistral-7b-instruct-v0.1
  */
  "mistralai/mistral-7b-instruct-v0.1",
  /** OpenAI: GPT-3.5 Turbo 16k
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format
  @context_length 16385
  @url https://openrouter.ai/openai/gpt-3.5-turbo-16k
  */
  "openai/gpt-3.5-turbo-16k",
  /** OpenAI: GPT-4 32k
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format
  @context_length 32767
  @url https://openrouter.ai/openai/gpt-4-32k
  */
  "openai/gpt-4-32k",
  /** OpenAI: GPT-4 32k (older v0314)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 32767
  @url https://openrouter.ai/openai/gpt-4-32k-0314
  */
  "openai/gpt-4-32k-0314",
  /** OpenAI: GPT-3.5 Turbo
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format
  @context_length 16385
  @url https://openrouter.ai/openai/gpt-3.5-turbo
  */
  "openai/gpt-3.5-turbo",
  /** OpenAI: GPT-3.5 Turbo 16k
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format
  @context_length 16385
  @url https://openrouter.ai/openai/gpt-3.5-turbo-0125
  */
  "openai/gpt-3.5-turbo-0125",
  /** OpenAI: GPT-4
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format
  @context_length 8191
  @url https://openrouter.ai/openai/gpt-4
  */
  "openai/gpt-4",
  /** OpenAI: GPT-4 (older v0314)
  @capabilities tools, tool_choice, max_tokens, temperature, top_p, stop, frequency_penalty, presence_penalty, seed, logit_bias, logprobs, top_logprobs, response_format, structured_outputs
  @context_length 8191
  @url https://openrouter.ai/openai/gpt-4-0314
  */
  "openai/gpt-4-0314",
] as const;

export type ToolCallingModel =
  | (typeof toolCallingModels)[number]
  | (string & {});
