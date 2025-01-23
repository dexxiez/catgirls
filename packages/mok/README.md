# @catgirls/mok 🎭
Nyaa~! Let's make test data that doesn't completely suck! ฅ^•ﻌ•^ฅ

NOTE: Currently in alphaaa, not for cat or human consumption yet. xx


## What's This? uwu
A powerful TypeScript mocking library that makes generating test data actually bearable. You get:
- Full type inference right out of the box - no more `as unknown as MyType` 🎯
- Chainable API that doesn't make you want to cry 😿
- Built-in faker.js integration for realistic data 🌟
- Deterministic generation with seedable state 🌱
- Zero runtime dependencies (except faker, but who doesn't love faker?) 

## Installation
```bash
pnpm add -D @catgirls/mok
# or yarn/npm if you're feeling traditional :3
```

## Usage
*wiggles excitedly*
First, let's create some mock data:

```typescript
import { mock } from '@catgirls/mok';

// Generate a simple string
const name = mock.string()
  .firstName()
  .generate(); // TypeScript knows this is a string! *purrs*

// Make an object with multiple fields
const user = mock.object({
  name: mock.string().fullName('female'),
  email: mock.string().email(),
  friends: mock.array(mock.string().firstName())
    .min(1)
    .max(3)
}).generate();

// TypeScript infers everything perfectly! 
user.name; // string
user.email; // string
user.friends; // string[]
```

## Built-in Generators
Meow! We've got several generators ready to go:

```typescript
// Strings with various patterns
mock.string()
  .firstName()
  .lastName()
  .fullName()
  .email()

// Arrays with customizable length
mock.array(elementGenerator)
  .min(1)
  .max(10)

// Objects with whatever schema you want
mock.object({
  whatever: yourGenerator
})
```

## Deterministic Generation ʕ•ᴥ•ʔ
Need the same random data every time? We've got you covered:

```typescript
// Set a seed for reproducible data
mock.setSeed(42);

// Reset to the last seed
mock.reset();

// Go back to random mode
mock.resetState();
```

## Why This? (｡♥‿♥｡)
Because hardcoding test data makes me want to commit sudoku. This package gives you:
- Type inference that actually works (and doesn't need casting)
- Chainable API that's actually pleasant to use
- Realistic data via faker.js integration
- Deterministic generation when you need it
- Super easy array generation with size controls
- Object generation that doesn't make you write 500 lines of setup

## API
### `mock.string()`
String generator with various patterns built-in.

### `mock.array<T>(generator)`
Array generator that creates arrays of whatever type you want.

### `mock.object<T>(schema)`
Object generator that respects your schema's types.

### State Management
- `mock.setSeed(number)`
- `mock.reset()`
- `mock.resetState()`

## License
MIT - Do whatever you want! ₍⸍⸌̣ʷ̣̫⸍̣⸌₎

---
*made with <3 by catgirls from vatican city*
**purrs contentedly at well-typed test data**
