# @catgirls/openrouter 🤖

Nyaa~! A TypeScript client for OpenRouter that's both kawaii and powerful! (ﾉ◕ヮ◕)ﾉ\*:･ﾟ✧

## What's This? uwu

A fully typed, streaming-capable OpenRouter API client that makes working with AI models as comfy as curling up in a warm sunbeam! You get:

- Full TypeScript types for all API parameters (including models!) and responses 📝
- Streaming support with EventEmitter interface 🌊
- Built-in error handling with pretty messages 💝
- Automatic retries and fallbacks across providers 🔄
- Provider preferences and routing control 🛣️

## Installation

```bash
pnpm add @catgirls/openrouter
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
  model: "anthropic/claude-3-opus", // Default model or choose later!
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
