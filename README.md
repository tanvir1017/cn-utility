![npm version](https://img.shields.io/npm/v/cn-utility)

````mdx:README.mdx
## Installation

```bash
npm install cn-utility
# or
yarn add cn-utility
# or
pnpm add cn-utility
````

## Features

- 🎯 Combines conditional class names using `clsx`
- 🔄 Merges and deduplicates Tailwind CSS classes
- 📦 Tiny footprint
- 💪 Fully typed with TypeScript
- 🚫 Zero dependencies (except peer dependencies)

## Usage

```tsx
import { cn } from "cn-utility";

// Basic usage
cn("px-2 py-1", "bg-blue-500");
// => "px-2 py-1 bg-blue-500"

// With conditional classes
cn("px-2 py-1", "bg-blue-500", {
  "text-white": true,
  "font-bold": false,
});
// => "px-2 py-1 bg-blue-500 text-white"

// Merging conflicting Tailwind classes
cn("px-2 py-1 bg-red-500", "bg-blue-500");
// => "px-2 py-1 bg-blue-500"

// Real-world example with React
function Button({ className, variant = "default", ...props }) {
  return (
    <button
      className={cn(
        "rounded-lg px-4 py-2 font-medium",
        {
          "bg-blue-500 text-white hover:bg-blue-600": variant === "default",
          "bg-red-500 text-white hover:bg-red-600": variant === "destructive",
          "bg-gray-100 text-gray-900 hover:bg-gray-200": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
```

## API

### `cn(...classes: ClassValue[]): string`

Combines multiple class names or conditional class names and merges Tailwind CSS classes efficiently.

#### Parameters

- `classes` - Rest parameter of class names. Each argument can be:
  - A string of class names
  - An object where keys are class names and values are booleans
  - An array of class names
  - Falsy values (these will be ignored)

#### Returns

A string of merged and deduplicated class names.

## Why use this?

1. **Conditional Classes**: Using `clsx`, you can easily add conditional classes based on props or state.
2. **Tailwind Deduplication**: `tailwind-merge` ensures that conflicting Tailwind classes are properly handled, with later classes taking precedence.
3. **Type Safety**: Full TypeScript support means you get type checking and autocompletion.

## Requirements

This package has the following peer dependencies:

```json
{
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0"
}
```

## License

MIT
