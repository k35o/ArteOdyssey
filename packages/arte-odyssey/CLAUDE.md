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
pnpm build                                   # clean + esbuild + tsc declarations + CSS copy
pnpm typecheck                               # Type check (no emit)
pnpm check                                   # Biome lint/format check
pnpm check:write                             # Biome lint/format auto-fix
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

2. Add export entry in `package.json` under `exports` field:
   - **Component**: the wildcard `./*` pattern handles it automatically — no change needed.
   - **Hook**: add `"./hooks/<name>"` entry with `types` and `default` pointing to `./dist/hooks/<name>/index.{d.ts,js}`.
   - **Helper**: add `"./helpers/<name>"` entry with `types` and `default` pointing to `./dist/helpers/<name>.{d.ts,js}`.

3. Add re-export in `src/index.ts` if the component should be available from the root entry point.

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
| Category | Tokens | Usage |
|----------|--------|-------|
| Foreground | `fg-base`, `fg-mute`, `fg-subtle`, `fg-inverse` | Text colors |
| Background | `bg-base`, `bg-subtle`, `bg-mute`, `bg-emphasize`, `bg-inverse` | Surfaces |
| Border | `border-base`, `border-subtle`, `border-mute`, `border-emphasize` | Borders |
| Status | `{fg,bg,border}-{info,success,warning,error}` | Semantic status |
| Primary | `primary-{fg,bg,bg-subtle,bg-mute,bg-emphasize,border}` | Teal accent |
| Secondary | `secondary-{fg,bg,bg-subtle,bg-mute,bg-emphasize,border}` | Cyan accent |
| Group | `group-{primary,secondary,tertiary,quaternary}` | Data visualization |

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

1. `build:clean` — removes `dist/`
2. `build:js` — esbuild bundles `src/**/*.ts*` → ESM (es2020), then `tsc` emits `.d.ts` declarations
3. `build:css` — copies `src/styles/index.css` → `dist/styles/index.css`
4. esbuild also generates `dist/package.json` with `{ type: "module", sideEffects: ["*.css"] }`

## Export Structure

```
@k8o/arte-odyssey              → dist/index.js        (all components)
@k8o/arte-odyssey             → dist/index.js
@k8o/arte-odyssey/styles.css   → dist/styles/index.css
```

Helpers have explicit export entries; components use a wildcard `./*` pattern; hooks use `./hooks/*`.
