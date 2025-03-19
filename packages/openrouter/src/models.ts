// ! Generated file, do not modify by hand. See packages/openrouter/scripts/generate-models.ts

export type RouterModel =
  /** Mistral: Mistral Small 3.1 24B */
  | "mistralai/mistral-small-3.1-24b-instruct"
  /** OlympicCoder 7B (free) */
  | "open-r1/olympiccoder-7b:free"
  /** OlympicCoder 32B (free) */
  | "open-r1/olympiccoder-32b:free"
  /** SteelSkull: L3.3 Electra R1 70B */
  | "steelskull/l3.3-electra-r1-70b"
  /** AllenAI: Olmo 2 32B Instruct */
  | "allenai/olmo-2-0325-32b-instruct"
  /** Google: Gemma 3 1B (free) */
  | "google/gemma-3-1b-it:free"
  /** Google: Gemma 3 4B (free) */
  | "google/gemma-3-4b-it:free"
  /** AI21: Jamba 1.6 Large */
  | "ai21/jamba-1.6-large"
  /** AI21: Jamba Mini 1.6 */
  | "ai21/jamba-1.6-mini"
  /** Google: Gemma 3 12B (free) */
  | "google/gemma-3-12b-it:free"
  /** Cohere: Command A */
  | "cohere/command-a"
  /** OpenAI: GPT-4o-mini Search Preview */
  | "openai/gpt-4o-mini-search-preview"
  /** OpenAI: GPT-4o Search Preview */
  | "openai/gpt-4o-search-preview"
  /** Swallow: Llama 3.1 Swallow 70B Instruct V0.3 */
  | "tokyotech-llm/llama-3.1-swallow-70b-instruct-v0.3"
  /** Reka: Flash 3 (free) */
  | "rekaai/reka-flash-3:free"
  /** Google: Gemma 3 27B (free) */
  | "google/gemma-3-27b-it:free"
  /** Google: Gemma 3 27B */
  | "google/gemma-3-27b-it"
  /** TheDrummer: Anubis Pro 105B V1 */
  | "thedrummer/anubis-pro-105b-v1"
  /** LatitudeGames: Wayfarer Large 70B Llama 3.3 */
  | "latitudegames/wayfarer-large-70b-llama-3.3"
  /** TheDrummer: Skyfall 36B V2 */
  | "thedrummer/skyfall-36b-v2"
  /** Microsoft: Phi 4 Multimodal Instruct */
  | "microsoft/phi-4-multimodal-instruct"
  /** Perplexity: Sonar Reasoning Pro */
  | "perplexity/sonar-reasoning-pro"
  /** Perplexity: Sonar Pro */
  | "perplexity/sonar-pro"
  /** Perplexity: Sonar Deep Research */
  | "perplexity/sonar-deep-research"
  /** DeepSeek: DeepSeek R1 Zero (free) */
  | "deepseek/deepseek-r1-zero:free"
  /** Qwen: QwQ 32B (free) */
  | "qwen/qwq-32b:free"
  /** Qwen: QwQ 32B */
  | "qwen/qwq-32b"
  /** Qwen: Qwen2.5 32B Instruct */
  | "qwen/qwen2.5-32b-instruct"
  /** Moonshot AI: Moonlight 16B A3B Instruct (free) */
  | "moonshotai/moonlight-16b-a3b-instruct:free"
  /** Nous: DeepHermes 3 Llama 3 8B Preview (free) */
  | "nousresearch/deephermes-3-llama-3-8b-preview:free"
  /** OpenAI: GPT-4.5 (Preview) */
  | "openai/gpt-4.5-preview"
  /** Google: Gemini 2.0 Flash Lite */
  | "google/gemini-2.0-flash-lite-001"
  /** Anthropic: Claude 3.7 Sonnet (self-moderated) */
  | "anthropic/claude-3.7-sonnet:beta"
  /** Anthropic: Claude 3.7 Sonnet */
  | "anthropic/claude-3.7-sonnet"
  /** Anthropic: Claude 3.7 Sonnet (thinking) */
  | "anthropic/claude-3.7-sonnet:thinking"
  /** Perplexity: R1 1776 */
  | "perplexity/r1-1776"
  /** Mistral: Saba */
  | "mistralai/mistral-saba"
  /** Dolphin3.0 R1 Mistral 24B (free) */
  | "cognitivecomputations/dolphin3.0-r1-mistral-24b:free"
  /** Dolphin3.0 Mistral 24B (free) */
  | "cognitivecomputations/dolphin3.0-mistral-24b:free"
  /** Llama Guard 3 8B */
  | "meta-llama/llama-guard-3-8b"
  /** OpenAI: o3 Mini High */
  | "openai/o3-mini-high"
  /** Llama 3.1 Tulu 3 405B */
  | "allenai/llama-3.1-tulu-3-405b"
  /** DeepSeek: R1 Distill Llama 8B */
  | "deepseek/deepseek-r1-distill-llama-8b"
  /** Google: Gemini Flash 2.0 */
  | "google/gemini-2.0-flash-001"
  /** Google: Gemini Flash Lite 2.0 Preview (free) */
  | "google/gemini-2.0-flash-lite-preview-02-05:free"
  /** Google: Gemini Pro 2.0 Experimental (free) */
  | "google/gemini-2.0-pro-exp-02-05:free"
  /** Qwen: Qwen VL Plus */
  | "qwen/qwen-vl-plus"
  /** AionLabs: Aion-1.0 */
  | "aion-labs/aion-1.0"
  /** AionLabs: Aion-1.0-Mini */
  | "aion-labs/aion-1.0-mini"
  /** AionLabs: Aion-RP 1.0 (8B) */
  | "aion-labs/aion-rp-llama-3.1-8b"
  /** Qwen: Qwen VL Max */
  | "qwen/qwen-vl-max"
  /** Qwen: Qwen-Turbo */
  | "qwen/qwen-turbo"
  /** Qwen: Qwen2.5 VL 72B Instruct (free) */
  | "qwen/qwen2.5-vl-72b-instruct:free"
  /** Qwen: Qwen2.5 VL 72B Instruct */
  | "qwen/qwen2.5-vl-72b-instruct"
  /** Qwen: Qwen-Plus */
  | "qwen/qwen-plus"
  /** Qwen: Qwen-Max  */
  | "qwen/qwen-max"
  /** OpenAI: o3 Mini */
  | "openai/o3-mini"
  /** DeepSeek: R1 Distill Qwen 1.5B */
  | "deepseek/deepseek-r1-distill-qwen-1.5b"
  /** Mistral: Mistral Small 3 (free) */
  | "mistralai/mistral-small-24b-instruct-2501:free"
  /** Mistral: Mistral Small 3 */
  | "mistralai/mistral-small-24b-instruct-2501"
  /** DeepSeek: R1 Distill Qwen 32B (free) */
  | "deepseek/deepseek-r1-distill-qwen-32b:free"
  /** DeepSeek: R1 Distill Qwen 32B */
  | "deepseek/deepseek-r1-distill-qwen-32b"
  /** DeepSeek: R1 Distill Qwen 14B (free) */
  | "deepseek/deepseek-r1-distill-qwen-14b:free"
  /** DeepSeek: R1 Distill Qwen 14B */
  | "deepseek/deepseek-r1-distill-qwen-14b"
  /** Perplexity: Sonar Reasoning */
  | "perplexity/sonar-reasoning"
  /** Perplexity: Sonar */
  | "perplexity/sonar"
  /** Liquid: LFM 7B */
  | "liquid/lfm-7b"
  /** Liquid: LFM 3B */
  | "liquid/lfm-3b"
  /** DeepSeek: R1 Distill Llama 70B (free) */
  | "deepseek/deepseek-r1-distill-llama-70b:free"
  /** DeepSeek: R1 Distill Llama 70B */
  | "deepseek/deepseek-r1-distill-llama-70b"
  /** Google: Gemini 2.0 Flash Thinking Experimental 01-21 (free) */
  | "google/gemini-2.0-flash-thinking-exp:free"
  /** DeepSeek: R1 (free) */
  | "deepseek/deepseek-r1:free"
  /** DeepSeek: R1 */
  | "deepseek/deepseek-r1"
  /** Rogue Rose 103B v0.2 (free) */
  | "sophosympatheia/rogue-rose-103b-v0.2:free"
  /** MiniMax: MiniMax-01 */
  | "minimax/minimax-01"
  /** Mistral: Codestral 2501 */
  | "mistralai/codestral-2501"
  /** Microsoft: Phi 4 */
  | "microsoft/phi-4"
  /** Sao10K: Llama 3.1 70B Hanami x1 */
  | "sao10k/l3.1-70b-hanami-x1"
  /** DeepSeek: DeepSeek V3 (free) */
  | "deepseek/deepseek-chat:free"
  /** DeepSeek: DeepSeek V3 */
  | "deepseek/deepseek-chat"
  /** Google: Gemini 2.0 Flash Thinking Experimental (free) */
  | "google/gemini-2.0-flash-thinking-exp-1219:free"
  /** Sao10K: Llama 3.3 Euryale 70B */
  | "sao10k/l3.3-euryale-70b"
  /** OpenAI: o1 */
  | "openai/o1"
  /** EVA Llama 3.33 70B */
  | "eva-unit-01/eva-llama-3.33-70b"
  /** xAI: Grok 2 Vision 1212 */
  | "x-ai/grok-2-vision-1212"
  /** xAI: Grok 2 1212 */
  | "x-ai/grok-2-1212"
  /** Cohere: Command R7B (12-2024) */
  | "cohere/command-r7b-12-2024"
  /** Google: Gemini Flash 2.0 Experimental (free) */
  | "google/gemini-2.0-flash-exp:free"
  /** Google: Gemini Experimental 1206 (free) */
  | "google/gemini-exp-1206:free"
  /** Meta: Llama 3.3 70B Instruct (free) */
  | "meta-llama/llama-3.3-70b-instruct:free"
  /** Meta: Llama 3.3 70B Instruct */
  | "meta-llama/llama-3.3-70b-instruct"
  /** Amazon: Nova Lite 1.0 */
  | "amazon/nova-lite-v1"
  /** Amazon: Nova Micro 1.0 */
  | "amazon/nova-micro-v1"
  /** Amazon: Nova Pro 1.0 */
  | "amazon/nova-pro-v1"
  /** Qwen: QwQ 32B Preview (free) */
  | "qwen/qwq-32b-preview:free"
  /** Qwen: QwQ 32B Preview */
  | "qwen/qwq-32b-preview"
  /** Google: LearnLM 1.5 Pro Experimental (free) */
  | "google/learnlm-1.5-pro-experimental:free"
  /** EVA Qwen2.5 72B */
  | "eva-unit-01/eva-qwen-2.5-72b"
  /** OpenAI: GPT-4o (2024-11-20) */
  | "openai/gpt-4o-2024-11-20"
  /** Mistral Large 2411 */
  | "mistralai/mistral-large-2411"
  /** Mistral Large 2407 */
  | "mistralai/mistral-large-2407"
  /** Mistral: Pixtral Large 2411 */
  | "mistralai/pixtral-large-2411"
  /** xAI: Grok Vision Beta */
  | "x-ai/grok-vision-beta"
  /** Infermatic: Mistral Nemo Inferor 12B */
  | "infermatic/mn-inferor-12b"
  /** Qwen2.5 Coder 32B Instruct (free) */
  | "qwen/qwen-2.5-coder-32b-instruct:free"
  /** Qwen2.5 Coder 32B Instruct */
  | "qwen/qwen-2.5-coder-32b-instruct"
  /** SorcererLM 8x22B */
  | "raifle/sorcererlm-8x22b"
  /** EVA Qwen2.5 32B */
  | "eva-unit-01/eva-qwen-2.5-32b"
  /** Unslopnemo 12B */
  | "thedrummer/unslopnemo-12b"
  /** Anthropic: Claude 3.5 Haiku (2024-10-22) (self-moderated) */
  | "anthropic/claude-3.5-haiku-20241022:beta"
  /** Anthropic: Claude 3.5 Haiku (2024-10-22) */
  | "anthropic/claude-3.5-haiku-20241022"
  /** Anthropic: Claude 3.5 Haiku (self-moderated) */
  | "anthropic/claude-3.5-haiku:beta"
  /** Anthropic: Claude 3.5 Haiku */
  | "anthropic/claude-3.5-haiku"
  /** Anthropic: Claude 3.5 Sonnet (self-moderated) */
  | "anthropic/claude-3.5-sonnet:beta"
  /** Anthropic: Claude 3.5 Sonnet */
  | "anthropic/claude-3.5-sonnet"
  /** Magnum v4 72B */
  | "anthracite-org/magnum-v4-72b"
  /** NeverSleep: Lumimaid v0.2 70B */
  | "neversleep/llama-3.1-lumimaid-70b"
  /** xAI: Grok Beta */
  | "x-ai/grok-beta"
  /** Mistral: Ministral 3B */
  | "mistralai/ministral-3b"
  /** Mistral: Ministral 8B */
  | "mistralai/ministral-8b"
  /** Qwen2.5 7B Instruct */
  | "qwen/qwen-2.5-7b-instruct"
  /** NVIDIA: Llama 3.1 Nemotron 70B Instruct (free) */
  | "nvidia/llama-3.1-nemotron-70b-instruct:free"
  /** NVIDIA: Llama 3.1 Nemotron 70B Instruct */
  | "nvidia/llama-3.1-nemotron-70b-instruct"
  /** Inflection: Inflection 3 Productivity */
  | "inflection/inflection-3-productivity"
  /** Inflection: Inflection 3 Pi */
  | "inflection/inflection-3-pi"
  /** Google: Gemini Flash 1.5 8B */
  | "google/gemini-flash-1.5-8b"
  /** Liquid: LFM 40B MoE */
  | "liquid/lfm-40b"
  /** Rocinante 12B */
  | "thedrummer/rocinante-12b"
  /** Magnum v2 72B */
  | "anthracite-org/magnum-v2-72b"
  /** Meta: Llama 3.2 1B Instruct (free) */
  | "meta-llama/llama-3.2-1b-instruct:free"
  /** Meta: Llama 3.2 1B Instruct */
  | "meta-llama/llama-3.2-1b-instruct"
  /** Meta: Llama 3.2 90B Vision Instruct */
  | "meta-llama/llama-3.2-90b-vision-instruct"
  /** Meta: Llama 3.2 3B Instruct (free) */
  | "meta-llama/llama-3.2-3b-instruct:free"
  /** Meta: Llama 3.2 3B Instruct */
  | "meta-llama/llama-3.2-3b-instruct"
  /** Meta: Llama 3.2 11B Vision Instruct (free) */
  | "meta-llama/llama-3.2-11b-vision-instruct:free"
  /** Meta: Llama 3.2 11B Vision Instruct */
  | "meta-llama/llama-3.2-11b-vision-instruct"
  /** Qwen2.5 72B Instruct (free) */
  | "qwen/qwen-2.5-72b-instruct:free"
  /** Qwen2.5 72B Instruct */
  | "qwen/qwen-2.5-72b-instruct"
  /** Qwen: Qwen2.5-VL 72B Instruct */
  | "qwen/qwen-2.5-vl-72b-instruct"
  /** NeverSleep: Lumimaid v0.2 8B */
  | "neversleep/llama-3.1-lumimaid-8b"
  /** OpenAI: o1-preview */
  | "openai/o1-preview"
  /** OpenAI: o1-mini */
  | "openai/o1-mini"
  /** OpenAI: o1-preview (2024-09-12) */
  | "openai/o1-preview-2024-09-12"
  /** OpenAI: o1-mini (2024-09-12) */
  | "openai/o1-mini-2024-09-12"
  /** Mistral: Pixtral 12B */
  | "mistralai/pixtral-12b"
  /** Cohere: Command R+ (08-2024) */
  | "cohere/command-r-plus-08-2024"
  /** Cohere: Command R (08-2024) */
  | "cohere/command-r-08-2024"
  /** Qwen: Qwen2.5-VL 7B Instruct */
  | "qwen/qwen-2.5-vl-7b-instruct"
  /** Sao10K: Llama 3.1 Euryale 70B v2.2 */
  | "sao10k/l3.1-euryale-70b"
  /** Google: Gemini Flash 1.5 8B Experimental */
  | "google/gemini-flash-1.5-8b-exp"
  /** AI21: Jamba 1.5 Large */
  | "ai21/jamba-1-5-large"
  /** AI21: Jamba 1.5 Mini */
  | "ai21/jamba-1-5-mini"
  /** Microsoft: Phi-3.5 Mini 128K Instruct */
  | "microsoft/phi-3.5-mini-128k-instruct"
  /** Nous: Hermes 3 70B Instruct */
  | "nousresearch/hermes-3-llama-3.1-70b"
  /** Nous: Hermes 3 405B Instruct */
  | "nousresearch/hermes-3-llama-3.1-405b"
  /** OpenAI: ChatGPT-4o */
  | "openai/chatgpt-4o-latest"
  /** Aetherwiing: Starcannon 12B */
  | "aetherwiing/mn-starcannon-12b"
  /** Sao10K: Llama 3 8B Lunaris */
  | "sao10k/l3-lunaris-8b"
  /** OpenAI: GPT-4o (2024-08-06) */
  | "openai/gpt-4o-2024-08-06"
  /** Mistral Nemo 12B Celeste */
  | "nothingiisreal/mn-celeste-12b"
  /** Meta: Llama 3.1 405B (base) */
  | "meta-llama/llama-3.1-405b"
  /** Perplexity: Llama 3.1 Sonar 70B */
  | "perplexity/llama-3.1-sonar-large-128k-chat"
  /** Perplexity: Llama 3.1 Sonar 8B Online */
  | "perplexity/llama-3.1-sonar-small-128k-online"
  /** Perplexity: Llama 3.1 Sonar 70B Online */
  | "perplexity/llama-3.1-sonar-large-128k-online"
  /** Perplexity: Llama 3.1 Sonar 8B */
  | "perplexity/llama-3.1-sonar-small-128k-chat"
  /** Meta: Llama 3.1 405B Instruct */
  | "meta-llama/llama-3.1-405b-instruct"
  /** Meta: Llama 3.1 70B Instruct */
  | "meta-llama/llama-3.1-70b-instruct"
  /** Meta: Llama 3.1 8B Instruct (free) */
  | "meta-llama/llama-3.1-8b-instruct:free"
  /** Meta: Llama 3.1 8B Instruct */
  | "meta-llama/llama-3.1-8b-instruct"
  /** Mistral: Mistral Nemo (free) */
  | "mistralai/mistral-nemo:free"
  /** Mistral: Mistral Nemo */
  | "mistralai/mistral-nemo"
  /** Mistral: Codestral Mamba */
  | "mistralai/codestral-mamba"
  /** OpenAI: GPT-4o-mini (2024-07-18) */
  | "openai/gpt-4o-mini-2024-07-18"
  /** OpenAI: GPT-4o-mini */
  | "openai/gpt-4o-mini"
  /** Qwen 2 7B Instruct (free) */
  | "qwen/qwen-2-7b-instruct:free"
  /** Qwen 2 7B Instruct */
  | "qwen/qwen-2-7b-instruct"
  /** Google: Gemma 2 27B */
  | "google/gemma-2-27b-it"
  /** Magnum 72B */
  | "alpindale/magnum-72b"
  /** Google: Gemma 2 9B (free) */
  | "google/gemma-2-9b-it:free"
  /** Google: Gemma 2 9B */
  | "google/gemma-2-9b-it"
  /** AI21: Jamba Instruct */
  | "ai21/jamba-instruct"
  /** 01.AI: Yi Large */
  | "01-ai/yi-large"
  /** Anthropic: Claude 3.5 Sonnet (2024-06-20) (self-moderated) */
  | "anthropic/claude-3.5-sonnet-20240620:beta"
  /** Anthropic: Claude 3.5 Sonnet (2024-06-20) */
  | "anthropic/claude-3.5-sonnet-20240620"
  /** Sao10k: Llama 3 Euryale 70B v2.1 */
  | "sao10k/l3-euryale-70b"
  /** Dolphin 2.9.2 Mixtral 8x22B 🐬 */
  | "cognitivecomputations/dolphin-mixtral-8x22b"
  /** Qwen 2 72B Instruct */
  | "qwen/qwen-2-72b-instruct"
  /** NousResearch: Hermes 2 Pro - Llama-3 8B */
  | "nousresearch/hermes-2-pro-llama-3-8b"
  /** Mistral: Mistral 7B Instruct (free) */
  | "mistralai/mistral-7b-instruct:free"
  /** Mistral: Mistral 7B Instruct */
  | "mistralai/mistral-7b-instruct"
  /** Mistral: Mistral 7B Instruct v0.3 */
  | "mistralai/mistral-7b-instruct-v0.3"
  /** Microsoft: Phi-3 Mini 128K Instruct (free) */
  | "microsoft/phi-3-mini-128k-instruct:free"
  /** Microsoft: Phi-3 Mini 128K Instruct */
  | "microsoft/phi-3-mini-128k-instruct"
  /** Microsoft: Phi-3 Medium 128K Instruct (free) */
  | "microsoft/phi-3-medium-128k-instruct:free"
  /** Microsoft: Phi-3 Medium 128K Instruct */
  | "microsoft/phi-3-medium-128k-instruct"
  /** NeverSleep: Llama 3 Lumimaid 70B */
  | "neversleep/llama-3-lumimaid-70b"
  /** Google: Gemini Flash 1.5 */
  | "google/gemini-flash-1.5"
  /** OpenAI: GPT-4o (2024-05-13) */
  | "openai/gpt-4o-2024-05-13"
  /** Meta: LlamaGuard 2 8B */
  | "meta-llama/llama-guard-2-8b"
  /** OpenAI: GPT-4o */
  | "openai/gpt-4o"
  /** OpenAI: GPT-4o (extended) */
  | "openai/gpt-4o:extended"
  /** NeverSleep: Llama 3 Lumimaid 8B (extended) */
  | "neversleep/llama-3-lumimaid-8b:extended"
  /** NeverSleep: Llama 3 Lumimaid 8B */
  | "neversleep/llama-3-lumimaid-8b"
  /** Fimbulvetr 11B v2 */
  | "sao10k/fimbulvetr-11b-v2"
  /** Meta: Llama 3 8B Instruct (free) */
  | "meta-llama/llama-3-8b-instruct:free"
  /** Meta: Llama 3 8B Instruct */
  | "meta-llama/llama-3-8b-instruct"
  /** Meta: Llama 3 70B Instruct */
  | "meta-llama/llama-3-70b-instruct"
  /** Mistral: Mixtral 8x22B Instruct */
  | "mistralai/mixtral-8x22b-instruct"
  /** WizardLM-2 8x22B */
  | "microsoft/wizardlm-2-8x22b"
  /** WizardLM-2 7B */
  | "microsoft/wizardlm-2-7b"
  /** OpenAI: GPT-4 Turbo */
  | "openai/gpt-4-turbo"
  /** Google: Gemini Pro 1.5 */
  | "google/gemini-pro-1.5"
  /** Cohere: Command R+ */
  | "cohere/command-r-plus"
  /** Cohere: Command R+ (04-2024) */
  | "cohere/command-r-plus-04-2024"
  /** Midnight Rose 70B */
  | "sophosympatheia/midnight-rose-70b"
  /** Cohere: Command R */
  | "cohere/command-r"
  /** Cohere: Command */
  | "cohere/command"
  /** Anthropic: Claude 3 Haiku (self-moderated) */
  | "anthropic/claude-3-haiku:beta"
  /** Anthropic: Claude 3 Haiku */
  | "anthropic/claude-3-haiku"
  /** Anthropic: Claude 3 Sonnet (self-moderated) */
  | "anthropic/claude-3-sonnet:beta"
  /** Anthropic: Claude 3 Sonnet */
  | "anthropic/claude-3-sonnet"
  /** Anthropic: Claude 3 Opus (self-moderated) */
  | "anthropic/claude-3-opus:beta"
  /** Anthropic: Claude 3 Opus */
  | "anthropic/claude-3-opus"
  /** Cohere: Command R (03-2024) */
  | "cohere/command-r-03-2024"
  /** Mistral Large */
  | "mistralai/mistral-large"
  /** Google: Gemma 7B */
  | "google/gemma-7b-it"
  /** OpenAI: GPT-3.5 Turbo (older v0613) */
  | "openai/gpt-3.5-turbo-0613"
  /** OpenAI: GPT-4 Turbo Preview */
  | "openai/gpt-4-turbo-preview"
  /** Nous: Hermes 2 Mixtral 8x7B DPO */
  | "nousresearch/nous-hermes-2-mixtral-8x7b-dpo"
  /** Mistral Small */
  | "mistralai/mistral-small"
  /** Mistral Tiny */
  | "mistralai/mistral-tiny"
  /** Mistral Medium */
  | "mistralai/mistral-medium"
  /** Mistral: Mistral 7B Instruct v0.2 */
  | "mistralai/mistral-7b-instruct-v0.2"
  /** Dolphin 2.6 Mixtral 8x7B 🐬 */
  | "cognitivecomputations/dolphin-mixtral-8x7b"
  /** Google: Gemini Pro 1.0 */
  | "google/gemini-pro"
  /** Google: Gemini Pro Vision 1.0 */
  | "google/gemini-pro-vision"
  /** Mistral: Mixtral 8x7B (base) */
  | "mistralai/mixtral-8x7b"
  /** Mistral: Mixtral 8x7B Instruct */
  | "mistralai/mixtral-8x7b-instruct"
  /** OpenChat 3.5 7B (free) */
  | "openchat/openchat-7b:free"
  /** OpenChat 3.5 7B */
  | "openchat/openchat-7b"
  /** Noromaid 20B */
  | "neversleep/noromaid-20b"
  /** Anthropic: Claude v2 (self-moderated) */
  | "anthropic/claude-2:beta"
  /** Anthropic: Claude v2 */
  | "anthropic/claude-2"
  /** Anthropic: Claude v2.1 (self-moderated) */
  | "anthropic/claude-2.1:beta"
  /** Anthropic: Claude v2.1 */
  | "anthropic/claude-2.1"
  /** OpenHermes 2.5 Mistral 7B */
  | "teknium/openhermes-2.5-mistral-7b"
  /** Toppy M 7B (free) */
  | "undi95/toppy-m-7b:free"
  /** Toppy M 7B */
  | "undi95/toppy-m-7b"
  /** Goliath 120B */
  | "alpindale/goliath-120b"
  /** Auto Router */
  | "openrouter/auto"
  /** OpenAI: GPT-3.5 Turbo 16k (older v1106) */
  | "openai/gpt-3.5-turbo-1106"
  /** OpenAI: GPT-4 Turbo (older v1106) */
  | "openai/gpt-4-1106-preview"
  /** Google: PaLM 2 Code Chat 32k */
  | "google/palm-2-codechat-bison-32k"
  /** Google: PaLM 2 Chat 32k */
  | "google/palm-2-chat-bison-32k"
  /** Airoboros 70B */
  | "jondurbin/airoboros-l2-70b"
  /** Xwin 70B */
  | "xwin-lm/xwin-lm-70b"
  /** Mistral: Mistral 7B Instruct v0.1 */
  | "mistralai/mistral-7b-instruct-v0.1"
  /** OpenAI: GPT-3.5 Turbo Instruct */
  | "openai/gpt-3.5-turbo-instruct"
  /** Pygmalion: Mythalion 13B */
  | "pygmalionai/mythalion-13b"
  /** OpenAI: GPT-3.5 Turbo 16k */
  | "openai/gpt-3.5-turbo-16k"
  /** OpenAI: GPT-4 32k */
  | "openai/gpt-4-32k"
  /** OpenAI: GPT-4 32k (older v0314) */
  | "openai/gpt-4-32k-0314"
  /** Nous: Hermes 13B */
  | "nousresearch/nous-hermes-llama2-13b"
  /** Mancer: Weaver (alpha) */
  | "mancer/weaver"
  /** Hugging Face: Zephyr 7B (free) */
  | "huggingfaceh4/zephyr-7b-beta:free"
  /** Anthropic: Claude v2.0 (self-moderated) */
  | "anthropic/claude-2.0:beta"
  /** Anthropic: Claude v2.0 */
  | "anthropic/claude-2.0"
  /** ReMM SLERP 13B */
  | "undi95/remm-slerp-l2-13b"
  /** Google: PaLM 2 Chat */
  | "google/palm-2-chat-bison"
  /** Google: PaLM 2 Code Chat */
  | "google/palm-2-codechat-bison"
  /** MythoMax 13B (free) */
  | "gryphe/mythomax-l2-13b:free"
  /** MythoMax 13B */
  | "gryphe/mythomax-l2-13b"
  /** Meta: Llama 2 13B Chat */
  | "meta-llama/llama-2-13b-chat"
  /** Meta: Llama 2 70B Chat */
  | "meta-llama/llama-2-70b-chat"
  /** OpenAI: GPT-4 */
  | "openai/gpt-4"
  /** OpenAI: GPT-4 (older v0314) */
  | "openai/gpt-4-0314"
  /** OpenAI: GPT-3.5 Turbo */
  | "openai/gpt-3.5-turbo"
  /** OpenAI: GPT-3.5 Turbo 16k */
  | "openai/gpt-3.5-turbo-0125"
  | (string & {});
