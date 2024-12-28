# @catgirls/env 🐱

Nyaa~! Environment variables, but make them type-safe! •⩊•

## What's This? uwu

A smol but powerful TypeScript library that makes handling environment variables not completely awful. It gives you:

- Full type safety with runtime validation via Zod 🛡️
- Clear separation of client/server env vars to avoid leaking secrets 🤫
- Proper error messages when things go boom 💥
- Zero-config transforms for common types like numbers and bools
- Built-in transformers for quick type conversion 🔄

## Installation

```bash
pnpm add @catgirls/env
# or yarn/npm if you must :3
```

## Usage

_swishes tail excitedly_
First, define your env config schema:

```typescript
import { z } from "zod";
import { createServerEnv, transformers } from "@catgirls/env";

const env = createServerEnv({
  DATABASE_URL: {
    schema: z.string().url(),
  },
  PORT: {
    schema: z.number(),
    transform: transformers.number, // Using built-in transformer!
  },
  DEBUG_MODE: {
    schema: z.boolean().optional(),
    transform: transformers.optionalBoolean, // Optional transformer
  },
  FEATURE_FLAGS: {
    schema: z.object({
      enableNewStuff: z.boolean(),
    }),
    transform: transformers.json, // Type-safe JSON parsing
  },
});

// Typescript knows all the types! *purrs*
env.DATABASE_URL; // string
env.PORT; // number
env.DEBUG_MODE; // boolean | undefined
```

## Built-in Transformers

Meow! We provide several built-in transformers to make your life easier:

```typescript
// Numbers
transformers.number(val: string) => number
transformers.optionalNumber(val?: string) => number | undefined

// Booleans
transformers.boolean(val: string) => boolean
transformers.optionalBoolean(val?: string) => boolean | undefined

// JSON
transformers.json<T>(val: string) => T
```

For client-side envs (like Next.js), use `createClientEnv` instead:

```typescript
const clientEnv = createClientEnv({
  NEXT_PUBLIC_API_URL: {
    schema: z.string().url(),
  },
});
```

## Why This? (｡♥‿♥｡)

Because raw `process.env` makes me hiss. No types, no validation, everything's a string - it's like living in the JavaScript stone age! This little package fixes that with:

- Runtime validation so things fail fast instead of in prod
- Proper TypeScript types that actually match your runtime checks
- Clear error messages when someone forgets required vars
- Client/server separation to avoid accidentally exposing secrets
- Built-in transformers for common type conversions

## API

### `createServerEnv<T>`

Server-side env validator that yells if you try to use it client-side.

### `createClientEnv<T>`

Client-safe env validator that automatically prefixes keys with `NEXT_PUBLIC_`.

### `transformers`

Collection of helper functions for common type conversions.

### `EnvValidationError`

Pretty error when validation fails, with details about what went wrong.

## License

MIT - Go wild! ₍⸍⸌̣ʷ̣̫⸍̣⸌₎

---

_Made with <3 by catgirls from Vatican City_
**purrs contentedly at well-typed environment variables**
