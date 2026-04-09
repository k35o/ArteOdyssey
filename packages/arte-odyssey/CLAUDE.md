# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package Commands

All commands run from this directory (`packages/arte-odyssey`).

```bash
pnpm test                                    # Run all tests
pnpm test -- --project=helpers               # Helper tests only (no browser)
pnpm test -- --project=hooks                 # Hook tests only (Playwright)
pnpm test -- --project=components            # Component tests only (Storybook + Playwright)
pnpm test -- src/helpers/cn.test.ts          # Single test file
pnpm build                                   # vp pack + CSS copy
pnpm typecheck                               # Type check (no emit)
pnpm check                                   # Oxlint/Oxfmt lint/format check
pnpm check:write                             # Oxlint/Oxfmt lint/format auto-fix
pnpm storybook                               # Storybook dev server (port 6006)
```

## Adding a New Component

1. Create directory `src/components/<name>/` with 3 files:

```
src/components/<name>/
  <name>.tsx            # Implementation
  <name>.stories.tsx    # Storybook stories (also used as component tests)
  index.ts              # Re-export: export { ComponentName } from './<name>';
```

2. Add re-export in `src/index.ts` if the component should be available from the root entry point.

## Props Naming Conventions

### Boolean Props

- **状態を表す boolean** → `is` prefix を付ける: `isOpen`, `isDisabled`, `isInvalid`, `isRequired`, `isExternal`
- **モード・バリアントを表す boolean** → prefix なし: `interactive`, `animate`, `current`, `fullWidth`, `multiple`
- **ネイティブ HTML 属性** → そのまま: `disabled`, `checked`, `required`

## Component Authoring Patterns

### Standard Component

```tsx
import type { FC, HTMLProps, ReactNode } from 'react';
import { cn } from '../../helpers/cn';

export const MyComponent: FC<
  { customProp?: string } & Omit<HTMLProps<HTMLDivElement>, 'customProp'>
> = ({ customProp, className, ...rest }) => {
  return <div className={cn('base-classes', className)} {...rest} />;
};
```

### Compound Component (Dialog, Tabs, FileField pattern)

```tsx
const Root: FC<PropsWithChildren> = ({ children }) => (
  <Context value={...}>{children}</Context>
);
const Part: FC = () => { /* use(Context) */ };

export const MyComponent = { Root, Part } as const;
```

- Use `createContext` + `use()` for sharing state between parts
- Use `useId()` for accessible `aria-labelledby`/`aria-describedby` connections
- `'use client'` directive at top when using hooks

## Design Token System

No raw color values — always use semantic tokens in Tailwind classes. The tokens are defined in `src/styles/index.css` via CSS custom properties and mapped to Tailwind's `@theme inline`.

### Token Categories

| Category   | Tokens                                                            | Usage              |
| ---------- | ----------------------------------------------------------------- | ------------------ |
| Foreground | `fg-base`, `fg-mute`, `fg-subtle`, `fg-inverse`                   | Text colors        |
| Background | `bg-base`, `bg-raised`, `bg-subtle`, `bg-mute`, `bg-emphasize`, `bg-inverse` | Surfaces   |
| Border     | `border-base`, `border-subtle`, `border-mute`, `border-emphasize` | Borders            |
| Status     | `{fg,bg,border}-{info,success,warning,error}`                     | Semantic status    |
| Primary    | `primary-{fg,bg,bg-subtle,bg-mute,bg-emphasize,border}`           | Teal accent        |
| Secondary  | `secondary-{fg,bg,bg-subtle,bg-mute,bg-emphasize,border}`         | Cyan accent        |
| Group      | `group-{primary,secondary,tertiary,quaternary}`                   | Data visualization |

### Dark Mode

Dark mode is class-based (`.dark` on `html`). All semantic tokens automatically remap — no manual `dark:` prefixes needed for tokens. Custom variant defined via `@custom-variant dark (&:where(.dark, .dark *))`.

### Focus Style

Standard pattern: `focus-visible:border-transparent focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border-info`

### Custom Utilities

- `grid-cols-auto-fill-*` / `grid-cols-auto-fit-*` — responsive grid columns
- `grid-rows-auto-fill-*` / `grid-rows-auto-fit-*` — responsive grid rows

## Testing

- **Component tests** rely on Storybook stories as test fixtures via `@storybook/addon-vitest`. Writing a story IS writing a test.
- **Hook tests** use `vitest-browser-react` for rendering hooks in a real browser.
- **Helper tests** are standard unit tests, no browser needed.
- Storybook preview wraps all stories in `ArteOdysseyProvider` with light/dark theme toggle.
- a11y addon is configured with `color-contrast` check disabled (trusts design token contrast).
- Mock date is set to `2023-01-02 12:34:56` in Storybook.

## Build Pipeline

1. `vp pack` — tsdown bundles `src/index.ts` → ESM with `.d.mts` type declarations
2. `build:css` — copies `src/styles/index.css` → `dist/styles/index.css`

## Export Structure

```
@k8o/arte-odyssey              → dist/index.mjs       (all components)
@k8o/arte-odyssey/styles.css   → dist/styles/index.css
```
