# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

ArteOdyssey is a monorepo React UI library (`@k8o/arte-odyssey`) built with:
- **Turborepo** for monorepo orchestration
- **pnpm** for package management (v10.30.3, Node.js >=24.13.0)
- **TypeScript** (strict mode, `noUncheckedIndexedAccess: true`)
- **Biome** for linting and formatting (no ESLint/Prettier)
- **Vitest** for testing with browser mode (Playwright/Chromium)
- **Storybook** for component documentation
- **Tailwind CSS 4** with semantic design tokens
- **esbuild** for bundling, TypeScript for declaration generation
- **Changesets** for versioning and publishing

### Project Structure
```
packages/
  arte-odyssey/          # Main UI library package (@k8o/arte-odyssey)
    src/
      components/        # React components
      hooks/            # Custom React hooks
      helpers/          # Utility functions
      styles/           # Tailwind CSS entry (index.css)
    .storybook/         # Storybook config
    scripts/            # Build scripts (esbuild.js)
examples/
  vite/                # Example Vite app
  nextjs/              # Example Next.js app
skills/
  arte-odyssey-usage/  # AI agent skill for library consumers
```

## Development Commands

All commands run from the repository root unless noted.

### Building
```bash
pnpm build              # Build all packages (clean + esbuild + tsc declarations + CSS)
pnpm typecheck          # Type checking across all packages
```

### Testing
```bash
pnpm test                                    # Run all tests
pnpm test -- --project=helpers               # Run only helper tests (no browser)
pnpm test -- --project=hooks                 # Run only hook tests (Playwright)
pnpm test -- --project=components            # Run only component tests (Storybook + Playwright)
pnpm test -- src/helpers/cn.test.ts          # Run a single test file
pnpm test:ui                                 # Run tests with Vitest UI
pnpm test:coverage                           # Run tests with Istanbul coverage
```

Tests are split into 3 Vitest projects:
- **components**: Browser tests via Storybook `addon-vitest` (stories are the test fixtures)
- **hooks**: Browser tests for custom hooks (Playwright)
- **helpers**: Standard unit tests (no browser needed)

### Code Quality
```bash
pnpm check             # Run Biome linting/formatting checks
pnpm check:write       # Run Biome checks and auto-fix issues
```

### Storybook
```bash
cd packages/arte-odyssey
pnpm storybook         # Start Storybook dev server on port 6006
```

## Code Conventions

### Formatting & Linting
- Biome with **single quotes**, 2-space indentation
- Use `type` keyword, not `interface` (enforced by `useConsistentTypeDefinitions`)
- Tailwind classes must be sorted (enforced by Biome `useSortedClasses`)
- No `@ts-ignore` (use `@ts-expect-error` with explanation if needed)
- No skipped tests (`test.skip`, `describe.skip`)
- Git pre-commit hook: Lefthook runs `biome check --write` and auto-stages fixes

### Component Pattern
Each component lives in its own directory with 3 files:
```
components/button/
  button.tsx          # Implementation (arrow function with FC type)
  button.stories.tsx  # Storybook stories (also serve as component tests)
  index.ts            # Re-export: export { Button } from './button';
```

- Components use arrow functions with `FC` type annotation
- Props extend native HTML element props where appropriate
- Use `cn()` helper (clsx + tailwind-merge) for className composition
- **Compound components** (Dialog, Tabs, FileField) use dot notation: `Dialog.Root`, `Dialog.Header`, `Dialog.Content`
- Use `useId()` for accessible ID generation and `aria-labelledby`/`aria-describedby`

### Exports
Granular exports via package.json exports field:
```ts
import { Button } from '@k8o/arte-odyssey';
import { useClickAway } from '@k8o/arte-odyssey';
import { cn } from '@k8o/arte-odyssey';
```

### Styling & Design Tokens
- **No raw color values** — always use semantic Tailwind tokens: `bg-bg-base`, `text-fg-mute`, `border-border-info`, `bg-primary-bg`
- Dark mode via CSS variables on `html.dark`
- Japanese-first typography: Noto Sans JP / M PLUS 2, max 3 font weights
- Storybook preview wraps all stories in `ArteOdysseyProvider` with theme toggle

## Key Dependencies

- **React 19** (peer dependency)
- **Tailwind CSS 4** with `@tailwindcss/postcss`
- **@floating-ui/react** for popover positioning
- **motion** for animations
- **lucide-react** for icons
- **clsx** and **tailwind-merge** for className utilities
- **react-error-boundary** for error handling

## Publishing

Uses Changesets for version management:
```bash
pnpm release           # Build and publish to npm
```

Package is published as `@k8o/arte-odyssey` with public access to npm registry.
