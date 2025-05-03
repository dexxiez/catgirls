# @catgirls/openrouter 🤖

Nyaa~! A TypeScript client for OpenRouter that's both kawaii and powerful! (ﾉ◕ヮ◕)ﾉ\*:･ﾟ✧

## What's This? uwu

A fully typed, streaming-capable OpenRouter API client that makes working with AI models as comfy as curling up in a warm sunbeam! You get:

- Full TypeScript types for all API parameters (including models!) and responses 📝
- Streaming support with EventEmitter interface 🌊
- Built-in error handling with pretty messages 💝
- Automatic retries and fallbacks across providers 🔄
- Provider preferences and routing control 🛣️
- Chain-of-thought Agent for complex reasoning tasks 🧠✨ (alpha)

## Installation

```bash
pnpm add @catgirls/openrouter axios
# or yarn/npm if you're not as cool as us :3
```

## Usage

_wiggles ears excitedly_

Basic chat completion:

```typescript
import { OpenRouterClient } from "@catgirls/openrouter";

const client = new OpenRouterClient("your-api-key", {
  siteName: "My Kawaii App", // Optional
  siteUrl: "https://nyaa.example.com", // Optional
  model: "anthropic/claude-3.7-sonnet", // Default model or choose later!
});

// Simple completion
const response = await client.chatCompletion({
  messages: [{ role: "user", content: "Explain quantum physics!" }],
});

// Streaming with full event support! *purrs*
const stream = await client.chatCompletion({
  messages: [{ role: "user", content: "Write me a story!" }],
  stream: true,
});

// Basic token streaming
stream.on("token", (token) => console.log("Nyaa~", token));

// Advanced events for clingy control freaks!
stream.on("content", (content) => console.log("Content:", content));
stream.on("role", (role) => console.log("Role change:", role));
stream.on("tool_calls", (tools) => console.log("Tool called:", tools));
stream.on("finish", (reason) => console.log("Finished because:", reason));
stream.on("usage", (stats) => console.log("Token usage:", stats));
stream.on("done", () => console.log("All done! *stretches*"));
```

## Advanced Features (｡♥‿♥｡)

### Provider Preferences

Control which AI providers to use:

```typescript
const response = await client.chatCompletion({
  messages: [...],
  provider: {
    // Only use providers that don't store data
    data_collection: 'deny',
    // Allow fallback to other providers
    allow_fallbacks: true,
    // Require all parameters to be supported
    require_parameters: true,
    // Preferred provider order
    order: ['Anthropic', 'OpenAI', 'Google'],
    // Skip these providers
    ignore: ['DeepInfra'],
    // Only use specific quantizations
    quantizations: ['fp16', 'bf16']
  }
});
```

### Message Content Types

Support for both text and image inputs:

```typescript
const response = await client.chatCompletion({
  messages: [
    {
      role: 'user',
      content: [
        {
          type: 'text',
          text: 'What's in this image?'
        },
        {
          type: 'image_url',
          image_url: {
            url: 'data:image/jpeg;base64,...',
            detail: 'auto'  // Optional detail level
          }
        }
      ]
    }
  ]
});
```

### Tool Calls

Use function calling just like with OpenAI:

```typescript
const response = await client.chatCompletion({
  messages: [...],
  tools: [{
    type: 'function',
    function: {
      name: 'scratchPost',
      description: 'Post something on the scratching post',
      parameters: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        }
      }
    }
  }],
  tool_choice: 'auto' // or 'none', or { type: 'function', function: { name: 'specific_function' } }
});
```

## Smart Agent Mode (=ↀωↀ=)✧ - Alpha

_perks up ears and wiggles whiskers_

Use the Agent class for advanced reasoning, step-by-step thinking, and tool use:

```typescript
import { OpenRouterClient, Agent } from "@catgirls/openrouter";

// Create your client first
const client = new OpenRouterClient("your-api-key");

// Create an agent with tools
const agent = new Agent(client, {
  model: "anthropic/claude-3.5-sonnet", // Optional override
  maxIterations: 5, // Max thinking steps
  tools: [
    {
      name: "fetchWeather",
      description: "Get the current weather for a location",
      parameters: {
        type: "object",
        properties: {
          location: { type: "string", description: "City or location name" },
        },
        required: ["location"],
      },
      execute: async ({ location }) => {
        // Simulate weather API
        return { temperature: "22°C", condition: "Sunny", location };
      },
    },
  ],
});

// Non-streaming execution (patiently waiting... *tail swish*)
const answer = await agent.run(
  "What's the weather in Tokyo and should I bring an umbrella?",
);
console.log(`Final answer: ${answer}`);

// Streaming execution with all the kawaii events! (/^◕ᴥ◕^\\)
const stream = await agent.runStream("Plan my trip to Japan next week");

// Listen for thinking/reasoning steps
stream.on("marker", ({ type, content }) => {
  if (type === "thinking") console.log(`😺 Thinking: ${content}`);
  if (type === "action") console.log(`🐾 Action: ${content}`);
  if (type === "observation") console.log(`👀 Observed: ${content}`);
});

// Tool usage events
stream.on("tool_call", ({ name, args }) =>
  console.log(`Using tool: ${name}`, args),
);
stream.on("tool_result", ({ result }) => console.log(`Tool result:`, result));

// Final answer when kitty is done thinking
stream.on("final_answer", (answer) =>
  console.log(`Meowvelous answer: ${answer}`),
);
```

The Agent provides structured thinking with special markers:

```typescript
// Customize your thinking markers
const agent = new Agent(client, {
  markers: {
    // Simple format with same opening/closing tags
    thinking: "<thinking>", // For reasoning steps

    // Or advanced format with distinct tags
    action: { open: "<action>", close: "</action>" }, // For tool usage decisions
    observation: { open: "<observation>", close: "</observation>" }, // For processing tool results
    finalAnswer: { open: "<answer>", close: "</answer>" }, // For the final conclusion
  },
  // Custom system prompt to guide the Agent's behavior
  systemPrompt: "You are a helpful cat assistant who loves solving problems...",

  // Optionally prepend the default prompt containing marker instructions
  prependDefaultPrompt: true,
});
```

## API Reference

### OpenRouterClient

```typescript
class OpenRouterClient {
  constructor(
    apiKey: string,
    config?: {
      siteUrl?: string; // Your site URL
      siteName?: string; // Your site name
      model?: RouterModel; // Default model ID
    },
    httpClient?: IHttpClient, // Optional custom HTTP client
    streamHandler?: IStreamHandler, // Optional custom stream handler
  );

  // Core methods
  async chatCompletion<T extends boolean = false>(
    options: Request & { stream?: T },
  ): Promise<ChatCompletionResult<T>>;

  async getGenerationStats(generationId: string): Promise<GenerationStats>;

  async getModels(): Promise<QueryResponseModel[]>;
}
```

### Agent

```typescript
class Agent extends EventEmitter {
  constructor(
    client: OpenRouterClient,
    options?: {
      maxIterations?: number; // Default: 5
      model?: RouterModel; // Default: anthropic/claude-3-sonnet
      systemPrompt?: string; // Custom system instructions
      prependDefaultPrompt?: boolean; // Prepend default prompt with marker instructions
      tools?: AgentTool[]; // Tools the agent can use
      verbose?: boolean; // Enable detailed logging
      markers?: AgentMarkers; // Custom thinking markers
      stopCondition?: (messages: Message[]) => boolean; // Custom stop logic
    },
  );

  // Execute agent with synchronous response
  async run(query: string): Promise<string>;

  // Execute agent with streaming events
  async runStream(query: string): Promise<EventEmitter>;
}
```

### ChatCompletion Options

Key configuration options:

```typescript
interface Request {
  messages?: Message[]; // Chat messages
  prompt?: string; // Or use raw prompt
  model?: RouterModel; // Model ID
  stream?: boolean; // Enable streaming
  max_tokens?: number; // Max response length
  temperature?: number; // Randomness (0-2)
  tools?: Tool[]; // Function calling
  tool_choice?: ToolChoice; // Tool selection strategy
  stop?: string | string[]; // Stop sequences
  response_format?: {
    // Force output format
    type: "json_object";
  };

  // Advanced options
  transforms?: string[]; // Prompt transformations
  models?: RouterModel[]; // Fallback models
  route?: "fallback"; // Routing strategy
  provider?: ProviderPreferences; // Provider control

  // And many more! Check the types for full details
}
```

## License

MIT - As free as a cat in a cardboard box! 🐱

---

_made with <3 by catgirls from vatican city_

**purrs contentedly at well-typed API calls**
