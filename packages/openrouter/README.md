# @catgirls/openrouter 🤖

Nyaa~! A TypeScript client for OpenRouter that's both kawaii and powerful! (ﾉ◕ヮ◕)ﾉ\*:･ﾟ✧

## What's This? uwu

A fully typed, streaming-capable OpenRouter API client that makes working with AI models as comfy as curling up in a warm sunbeam! You get:

- Full TypeScript types for all API parameters and responses 📝
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
import { OpenRouterClient } from '@catgirls/openrouter';

const client = new OpenRouterClient('your-api-key', {
  siteName: 'My Kawaii App', // Optional
  siteUrl: 'https://nyaa.example.com' // Optional
  model: 'coolest/catgirl420.69' // Choose now, or later!
});

// Simple completion
const response = await client.chatCompletion({
  messages: [{ role: 'user', content: 'Explain quantum physics!' }],
  model: 'anthropic/claude-3-opus',
});

// Streaming for realtime responses! *purrs*
const stream = await client.chatCompletion({
  messages: [{ role: 'user', content: 'Write me a story!' }],
  model: 'anthropic/claude-3-opus',
  stream: true
});

stream.on('token', (token) => console.log('Nyaa~', token));
stream.on('done', () => console.log('All done! *stretches*'));
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
    // Preferred provider order
    order: ['Anthropic', 'OpenAI', 'Google'],
    // Skip these providers
    ignore: ['DeepInfra'],
    // Only use high-precision models
    quantizations: ['fp16', 'fp32']
  }
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
  }]
});
```

### Response Formats

Force structured outputs:

```typescript
const response = await client.chatCompletion({
  messages: [...],
  response_format: {
    type: 'json_object'
  }
});
```

## Error Handling

We make errors less scary with detailed messages:

```typescript
try {
  await client.chatCompletion({...});
} catch (error) {
  // Pretty error messages with provider details!
  // Example: "Provider error: Claude is taking a cat nap (503)"
  console.error(error.message);
}
```

## API Reference

### OpenRouterClient

```typescript
new OpenRouterClient(
  apiKey: string,
  config?: {
    siteUrl?: string;    // Your site URL
    siteName?: string;   // Your site name
    model?: string;      // Default model
  }
)
```

### chatCompletion Options

All the options you can pass:

```typescript
interface Request {
  messages: Message[]; // Chat messages
  model?: string; // Model ID
  stream?: boolean; // Enable streaming
  max_tokens?: number; // Max response length
  temperature?: number; // Randomness (0-2)
  tools?: Tool[]; // Function calling
  stop?: string | string[]; // Stop sequences
  // ... and many more advanced options!
}
```

## Why This? (=^･ω･^=)

Because talking to AI should be as easy as petting a cat! No more dealing with:

- Manual stream parsing _hisses at raw EventSource_
- Provider-specific error formats
- Complex fallback logic
- Type mismatches

## License

MIT - As free as a cat in a cardboard box! 🐱

---

_made with <3 by catgirls from vatican city_

**purrs contentedly at well-typed API calls**
