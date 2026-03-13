# ArteOdyssey

A modern, TypeScript-first React UI component library built with performance and developer experience in mind.

## Features

- **Modern Stack**: Built with React 19, TypeScript 5.9+, and Tailwind CSS 4+
- **Accessible**: WCAG compliant components with full keyboard navigation
- **Performant**: Optimized bundle size with tree-shakeable components
- **Developer Friendly**: Comprehensive TypeScript support and Storybook documentation
- **Customizable**: Built on Tailwind CSS with semantic design tokens for easy theming

## Installation

```bash
npm install @k8o/arte-odyssey
# or
pnpm add @k8o/arte-odyssey
# or
yarn add @k8o/arte-odyssey
```

## AI Agent Skills

ArteOdyssey provides an [Agent Skill](https://agentskills.io/) for AI coding assistants. It gives your agent knowledge of the design system, component APIs, and design principles.

```bash
npx skills add k35o/ArteOdyssey --skill arte-odyssey-usage
```

Compatible with Claude Code, Cursor, GitHub Copilot, and other Agent Skills compatible tools.

## Development

This is a monorepo managed with Turborepo and pnpm.

### Prerequisites

- Node.js ≥24.13.0
- pnpm 10.30.3

### Setup

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run type checking
pnpm typecheck

# Run tests
pnpm test

# Run linting and formatting
pnpm check:write
```

### Project Structure

```
packages/
  arte-odyssey/          # Main UI library package
examples/
  vite/                  # Vite example application
  nextjs/                # Next.js example application
skills/
  arte-odyssey-usage/    # AI agent skill for library users
```

### Available Scripts

- `pnpm build` - Build all packages
- `pnpm test` - Run all tests
- `pnpm test:ui` - Run tests with UI
- `pnpm test:coverage` - Run tests with coverage
- `pnpm typecheck` - Type check all packages
- `pnpm check` - Run linting checks
- `pnpm check:write` - Run linting checks and auto-fix
- `pnpm release` - Build and publish packages

## Documentation

- [Component Documentation](packages/arte-odyssey/README.md)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details.

## Author

**k8o** ([GitHub](https://github.com/k35o))
