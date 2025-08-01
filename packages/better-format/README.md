# @catgirls/better-format ✨

Nyaa~! Let's make strings that don't look like garbage! ฅ^•ﻌ•^ฅ

NOTE: Currently in alphaaa, not for cat or human consumption yet. xx

## What's This? uwu

A proper title case formatter that actually knows grammar rules! You get:

- Proper title case formatting that follows English grammar rules 🎯
- Smart handling of articles, conjunctions, and prepositions 😿
- Dash and underscore cleaning (because who wants ugly separators?) 🌟
- Custom word exclusion for special cases 🌱
- Zero runtime dependencies (because we're minimalists!)

## Installation

```bash
pnpm add @catgirls/better-format
# or yarn/npm if you're feeling traditional :3
```

## Usage

_wiggles excitedly_
First, let's make some ugly strings pretty:

```typescript
import formatBetter from "@catgirls/better-format";

// Basic title case - so easy!
formatBetter("hello world"); // "Hello World"
formatBetter("THE QUICK BROWN FOX"); // "The Quick Brown Fox"

// Smart grammar handling - articles stay lowercase!
formatBetter("a tale of two cities"); // "A Tale of Two Cities"
formatBetter("lord of the rings"); // "Lord of the Rings"

// Handles punctuation like a boss
formatBetter("mr. smith goes to washington"); // "Mr. Smith Goes to Washington"
formatBetter("title: subtitle here"); // "Title: Subtitle Here"

// Even works with contractions! *purrs*
formatBetter("don't stop believing"); // "Don't Stop Believing"
```

## Smart Grammar Rules

Meow! We follow proper English title case rules:

```typescript
// Articles (a, an, the) stay lowercase
formatBetter("the lord of the rings"); // "The Lord of the Rings"

// Conjunctions (and, or, but, etc.) stay lowercase
formatBetter("fast and furious"); // "Fast and Furious"

// Prepositions (of, to, in, etc.) stay lowercase
formatBetter("journey to the center"); // "Journey to the Center"

// BUT they get capitalized at the end!
formatBetter("something to live for"); // "Something to Live For"
```

## Options ʕ•ᴥ•ʔ

Need more control? We've got options:

```typescript
// Keep specific words exactly as they are
formatBetter("this API stays uppercase", {
  excludeWords: ["API"],
}); // "This API Stays Uppercase"

// Disable dash cleaning
formatBetter("test-case-here", {
  enableDashCleaning: false,
}); // "Test-case-here"

// Disable underscore cleaning
formatBetter("snake_case_string", {
  enableUnderscoreCleaning: false,
}); // "Snake_case_string"
```

## Why This? (｡♥‿♥｡)

Because `toUpperCase()` on every word makes you look like a caveman. This package gives you:

- Proper English grammar rules (not just CAPITALIZE EVERYTHING)
- Smart punctuation handling for real-world text
- Automatic dash/underscore cleaning for slugs and filenames
- Custom exclusions for brand names, acronyms, etc.
- Zero dependencies because bloat is bad

## API

### `formatBetter(str, options?)`

The main function that makes strings actually readable.

**Parameters:**

- `str: string` - The string to format
- `options?: FormatterOptions` - Optional formatting options

**Options:**

- `excludeWords?: string[]` - Words to keep exactly as provided
- `enableDashCleaning?: boolean` - Replace dashes with spaces (default: true)
- `enableUnderscoreCleaning?: boolean` - Replace underscores with spaces (default: true)

## License

MIT - Do whatever you want! ₍⸍⸌̣ʷ̣̫⸍̣⸌₎

---

_made with <3 by catgirls from vatican city_
**purrs contentedly at properly formatted text**
