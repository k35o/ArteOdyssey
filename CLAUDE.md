# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture

ArteOdyssey is a monorepo React UI library built with:
- **Turborepo** for monorepo orchestration
- **pnpm** for package management (v10.14.0, Node.js 22.18.0)
- **TypeScript** for type safety
- **Biome** for linting and formatting (no ESLint/Prettier)
- **Vitest** for testing with browser mode
- **Storybook** for component documentation
- **Tailwind CSS** for styling
- **esbuild** for fast bundling
- **Changesets** for versioning and publishing

### Project Structure
```
packages/
  arte-odyssey/          # Main UI library package
    src/
      components/        # React components (accordion, button, form, etc.)
      hooks/            # Custom React hooks
      helpers/          # Utility functions
      styles/           # CSS files
examples/
  vite/                # Example Vite app using the library
```

## Development Commands

### Building
```bash
pnpm build              # Build all packages
pnpm typecheck          # Type checking across all packages
```

### Testing
```bash
pnpm test              # Run tests
pnpm test:ui           # Run tests with UI
pnpm test:coverage     # Run tests with coverage
```

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

### Package-Specific Commands
In `packages/arte-odyssey/`:
```bash
pnpm build:js          # Build JavaScript with esbuild
pnpm build:js:types    # Generate TypeScript declarations
pnpm build:css         # Copy CSS files to dist
```

## Code Conventions

- **Formatting**: Uses Biome with single quotes, 2-space indentation
- **Components**: Each component has its own directory with `.tsx`, `.stories.tsx`, and `index.ts`
- **Exports**: Components use granular exports via package.json exports field
- **Styling**: Uses Tailwind CSS with `tailwind-merge` for class composition
- **Testing**: Uses Vitest with React Testing Library and browser mode
- **Git Hooks**: Lefthook runs Biome checks on pre-commit

## Key Dependencies

- **React 19** (peer dependency)
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