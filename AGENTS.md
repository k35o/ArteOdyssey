# AGENTS.md

Guidance for AI coding agents working in the ArteOdyssey repository.

## Project Overview

ArteOdyssey is a React UI component library monorepo published as `@k8o/arte-odyssey`.

**Tech Stack:**
- Turborepo (monorepo orchestration)
- pnpm v10.26.2 (package manager)
- Node.js 22.18.0+
- React 19 (peer dependency)
- TypeScript 5.9+
- Biome (linting/formatting - NO ESLint/Prettier)
- Vitest with browser mode (testing)
- Tailwind CSS 4+ (styling)
- Storybook (component documentation)

## Build/Lint/Test Commands

### Root Commands (run from repository root)
```bash
pnpm build              # Build all packages
pnpm typecheck          # Type checking across all packages
pnpm test               # Run all tests
pnpm test:ui            # Run tests with UI
pnpm test:coverage      # Run tests with coverage
pnpm check              # Run Biome linting/formatting checks
pnpm check:write        # Auto-fix Biome issues
```

### Running a Single Test
```bash
# Run a specific test file
cd packages/arte-odyssey
pnpm vitest run src/hooks/click-away/index.test.tsx

# Run tests matching a pattern
pnpm vitest run --testNamePattern="callback"

# Run tests in watch mode for a specific file
pnpm vitest src/hooks/click-away/index.test.tsx

# Run tests for a specific project (hooks, helpers, or components)
pnpm vitest --project=hooks
pnpm vitest --project=helpers
pnpm vitest --project=components
```

### Package-Specific Commands (in `packages/arte-odyssey/`)
```bash
pnpm storybook          # Start Storybook dev server on port 6006
pnpm build:js           # Build JavaScript with esbuild
pnpm build:js:types     # Generate TypeScript declarations
pnpm build:css          # Copy CSS files to dist
```

## Project Structure
```
packages/
  arte-odyssey/           # Main UI library
    src/
      components/         # React components
      hooks/              # Custom React hooks
      helpers/            # Utility functions
      styles/             # CSS files
examples/
  vite/                   # Example Vite app
  nextjs/                 # Example Next.js app
```

## Code Style Guidelines

### Formatting (Biome)
- **Indentation:** 2 spaces
- **Quotes:** Single quotes for JavaScript/TypeScript
- **Semicolons:** Required (default Biome behavior)
- **Trailing commas:** Required in multi-line structures

### Imports
- Use ES modules only (`import`/`export`, NO CommonJS)
- Order: external packages first, then internal modules
- Use `type` keyword for type-only imports: `import type { FC } from 'react'`
- Prefer named exports over default exports (exception: Storybook meta)

```typescript
// Correct import order and style
import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { cn } from './../../helpers/cn';
```

### TypeScript
- Use `type` over `interface` (enforced by Biome: `useConsistentTypeDefinitions`)
- Enable strict mode with `noUncheckedIndexedAccess`
- Use explicit return types for exported functions
- Avoid `any` - use `unknown` and narrow types
- No enums - use union types or `as const` objects
- No namespaces

```typescript
// Correct: use type
type Props = {
  variant: 'primary' | 'secondary';
};

// Incorrect: don't use interface or enum
interface Props { ... }
enum Variant { Primary, Secondary }
```

### React Components
- Use `FC` type for functional components
- Use `'use client'` directive for client-side hooks/components
- Prefer compound components pattern for complex UI (e.g., `Popover.Root`, `Popover.Trigger`)
- Use `forwardRef` when ref forwarding is needed
- JSX attributes should be sorted alphabetically (enforced by Biome)

```typescript
'use client';

import type { FC, PropsWithChildren } from 'react';

export const MyComponent: FC<PropsWithChildren<{
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}>> = ({ children, variant = 'primary', disabled = false }) => {
  return (
    <div className={cn('base-class', variant === 'primary' && 'primary-class')}>
      {children}
    </div>
  );
};
```

### Naming Conventions
- **Files:** kebab-case (`text-field.tsx`, `use-click-away.ts`)
- **Components:** PascalCase (`Button`, `TextField`)
- **Hooks:** camelCase with `use` prefix (`useClickAway`, `useLocalStorage`)
- **Types:** PascalCase (`Props`, `ButtonVariant`)
- **Constants:** camelCase or SCREAMING_SNAKE_CASE for truly static values
- **Boolean props:** Use `is`/`has` prefix (`isDisabled`, `isRequired`, `hasError`)

### Component File Structure
Each component has its own directory:
```
button/
  button.tsx          # Component implementation
  button.stories.tsx  # Storybook stories
  index.ts            # Re-exports (export * from './button')
```

### Styling (Tailwind CSS)
- Use `cn()` helper for conditional class merging (combines `clsx` + `tailwind-merge`)
- Tailwind classes should be sorted (enforced by Biome: `useSortedClasses`)
- Prefer Tailwind utilities over custom CSS

```typescript
import { cn } from './../../helpers/cn';

<div className={cn(
  'base-class rounded-lg p-4',
  isActive && 'bg-primary-bg',
  isDisabled && 'cursor-not-allowed opacity-50',
)} />
```

### Testing
- Test files: `*.test.ts` or `*.test.tsx` alongside source files
- Use `vitest` globals (no imports needed for `describe`, `it`, `expect`, `vi`)
- Use `vitest-browser-react` for component testing
- Use `userEvent` from `vitest/browser` for user interactions

```typescript
import { userEvent } from 'vitest/browser';
import { render } from 'vitest-browser-react';

describe('ComponentName', () => {
  it('should handle click events', async () => {
    const fn = vi.fn();
    const { getByText } = await render(<Component onClick={fn} />);
    await userEvent.click(getByText('Click me'));
    expect(fn).toHaveBeenCalledOnce();
  });
});
```

### Storybook
- Story files: `*.stories.tsx`
- Export `meta` as default, individual stories as named exports
- Use descriptive story names reflecting component states

```typescript
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'components/button',
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Disabled: Story = { args: { disabled: true } };
```

### Error Handling
- Use `react-error-boundary` for React error boundaries
- Throw `Error` objects, not primitives (enforced: `useThrowOnlyError`)
- Always include error messages (enforced: `useErrorMessage`)

### Git Commits
- Follow Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, etc.
- Commitlint enforces `@commitlint/config-conventional`
- Pre-commit hook runs Biome checks via Lefthook

## Key Dependencies
- `@floating-ui/react` - Popover/tooltip positioning
- `motion` - Animations
- `lucide-react` - Icons
- `clsx` + `tailwind-merge` - Class name utilities
- `react-error-boundary` - Error handling

## Publishing
```bash
pnpm release            # Build and publish to npm
```
Uses Changesets for version management. Package published as `@k8o/arte-odyssey`.
