# @k8o/arte-odyssey

A modern React UI component library built with TypeScript, Tailwind CSS, and accessibility in mind.

## Installation

```bash
npm install @k8o/arte-odyssey
# or
pnpm add @k8o/arte-odyssey
# or
yarn add @k8o/arte-odyssey
```

## Peer Dependencies

Make sure you have the following peer dependencies installed:

```bash
npm install react react-dom typescript tailwindcss
```

Required versions:
- React ≥19.0.0
- TypeScript ≥5.9.0
- Tailwind CSS ≥4.0.0

## Quick Start

1. Import the CSS and set up the provider:

```css
/* In your main CSS file (recommended for Tailwind CSS 4) */
@import 'tailwindcss';
@import '@k8o/arte-odyssey/styles.css';
```

```tsx
// In your app entry point
import { ArteOdysseyProvider } from '@k8o/arte-odyssey/providers';

function App() {
  return (
    <ArteOdysseyProvider>
      <YourApp />
    </ArteOdysseyProvider>
  );
}
```

2. Use components:

```tsx
import { Button } from '@k8o/arte-odyssey/button';
import { Card } from '@k8o/arte-odyssey/card';

function MyPage() {
  return (
    <Card title="Welcome to ArteOdyssey">
      <Button color="primary" variant="contained" onClick={() => alert('Hello!')}>
        Click me
      </Button>
    </Card>
  );
}
```

## AI Agent Skills

ArteOdyssey provides an Agent Skill for AI coding assistants. It gives your agent knowledge of the design system, component APIs, and design principles.

```bash
npx skills add k35o/ArteOdyssey --skill arte-odyssey-usage
```

Compatible with Claude Code, Cursor, GitHub Copilot, and other [Agent Skills](https://agentskills.io/) compatible tools.

## Component Categories

### Layout & Navigation
- **Accordion** - Collapsible content panels
- **Breadcrumb** - Navigation path indicator
- **Card** / **InteractiveCard** - Flexible content container (with hover interaction)
- **Separator** - Visual content divider
- **Tabs** - Tab-based content organization
- **ScrollLinked** - Scroll progress indicator

### Form Controls
- **Autocomplete** - Search with suggestions
- **Checkbox** - Binary selection input
- **FileField** - File upload with composite pattern
- **FormControl** - Form field wrapper with label and validation
- **NumberField** - Numeric input with controls
- **RadioGroup** - Single selection from options
- **Slider** - Slider input control
- **Select** - Dropdown selection
- **TextField** - Single-line text input
- **Textarea** - Multi-line text input

### Buttons & Links
- **Button** - Primary action button
- **IconButton** - Button with icon only
- **LinkButton** - Button styled as link
- **Anchor** - External link component
- **IconLink** - Link with icon

### Feedback & Status
- **Alert** - Important messages and notifications
- **Toast** - Temporary notification messages
- **Progress** - Progress indication
- **BaselineStatus** - Web standard support indicator

### Overlays & Modals
- **Dialog** - Modal dialog boxes
- **Drawer** - Slide-out panel
- **Modal** - Overlay modal component
- **Popover** - Floating content container
- **Tooltip** - Contextual help text
- **DropdownMenu** - Action menu component

### Data Display
- **Code** - Formatted code display
- **Heading** - Typography heading component
- **ListBox** - Selectable list component

### Utilities
- **ErrorBoundary** - Error handling wrapper
- **ArteOdysseyProvider** - Context providers for the library
- **Icons** - Icon component collection

## Usage Examples

### Button

```tsx
import { Button } from '@k8o/arte-odyssey/button';

// Primary action
<Button color="primary" variant="contained" size="md">
  Save
</Button>

// Secondary action
<Button color="gray" variant="outlined">
  Cancel
</Button>

// Text-only
<Button variant="skeleton">
  Learn more
</Button>
```

### Form with Validation

```tsx
import { FormControl } from '@k8o/arte-odyssey/form-control';
import { TextField } from '@k8o/arte-odyssey/text-field';
import { Button } from '@k8o/arte-odyssey/button';

<form>
  <FormControl
    label="Email"
    isRequired
    errorText={error}
    renderInput={(props) => (
      <TextField
        {...props}
        id="email"
        placeholder="Enter your email"
      />
    )}
  />
  <Button type="submit">Submit</Button>
</form>
```

### Dialog

```tsx
import { Dialog } from '@k8o/arte-odyssey/dialog';
import { Button } from '@k8o/arte-odyssey/button';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Dialog
      </Button>
      {isOpen && (
        <Dialog.Root>
          <Dialog.Header
            title="Confirm Action"
            onClose={() => setIsOpen(false)}
          />
          <Dialog.Content>
            <p>Are you sure you want to continue?</p>
            <Button onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </Dialog.Content>
        </Dialog.Root>
      )}
    </>
  );
}
```

## Granular Imports

ArteOdyssey supports granular imports to optimize your bundle size:

```tsx
// Import specific components
import { Button } from '@k8o/arte-odyssey/button';
import { Card } from '@k8o/arte-odyssey/card';

// Import specific hooks
import { useClickAway } from '@k8o/arte-odyssey/hooks/click-away';
import { useLocalStorage } from '@k8o/arte-odyssey/hooks/local-storage';
```

## Custom Hooks

The library includes several useful hooks:

- **useClickAway** - Detect clicks outside an element
- **useClient** - Client-side rendering detection
- **useClipboard** - Clipboard operations
- **useHash** - URL hash management
- **useInterval** - Interval timer management
- **useLocalStorage** - Local storage with React state
- **useResize** - Element resize detection
- **useScrollDirection** - Scroll direction detection
- **useStep** - Step-based state management
- **useTimeout** - Timeout management
- **useWindowResize** - Window resize events
- **useWindowSize** - Window size tracking

## Accessibility

All components follow WCAG accessibility guidelines:

- Semantic HTML elements
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance

## Styling & Customization

Components are built with Tailwind CSS and support customization through:

- CSS custom properties (semantic design tokens)
- Tailwind utility classes
- Light / Dark mode via semantic color tokens

## Development

For local development and contributing:

```bash
# Install dependencies
pnpm install

# Start Storybook for component development
pnpm storybook

# Run tests
pnpm test

# Build the library
pnpm build

# Type checking
pnpm typecheck

# Linting and formatting
pnpm check:write
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - see [LICENSE](../../LICENSE) for details.

## Contributing

Contributions are welcome! Please see the [main repository](../../README.md) for contribution guidelines.
