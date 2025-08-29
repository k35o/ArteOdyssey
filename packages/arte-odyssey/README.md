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

1. Install the package and import the CSS:

```tsx
// In your main CSS file or component
import '@k8o/arte-odyssey/styles.css';
```

2. Use components in your React app:

```tsx
import { Button, Card } from '@k8o/arte-odyssey';

function App() {
  return (
    <Card>
      <h1>Welcome to ArteOdyssey</h1>
      <Button variant="primary" onClick={() => alert('Hello!')}>
        Click me
      </Button>
    </Card>
  );
}
```

## Component Categories

### Layout & Navigation
- **Accordion** - Collapsible content panels
- **Breadcrumb** - Navigation path indicator
- **Card** - Flexible content container
- **Separator** - Visual content divider
- **Tabs** - Tab-based content organization

### Form Controls
- **Autocomplete** - Search with suggestions
- **Checkbox** - Multi-selection input
- **Form Control** - Form field wrapper with label and validation
- **Number Field** - Numeric input with controls
- **Radio** - Single selection from options
- **Range Field** - Slider input control
- **Select** - Dropdown selection
- **Text Field** - Single-line text input
- **Textarea** - Multi-line text input

### Buttons & Links
- **Button** - Primary action button
- **Icon Button** - Button with icon only
- **Link Button** - Button styled as link
- **Anchor** - External link component
- **Icon Link** - Link with icon

### Feedback & Status
- **Alert** - Important messages and notifications
- **Toast** - Temporary notification messages
- **Progress** - Progress indication
- **Baseline Status** - Web standard support indicator

### Overlays & Modals
- **Dialog** - Modal dialog boxes
- **Drawer** - Slide-out panel
- **Modal** - Overlay modal component
- **Popover** - Floating content container
- **Tooltip** - Contextual help text
- **Dropdown Menu** - Action menu component

### Data Display
- **Code** - Formatted code display
- **Heading** - Typography heading component
- **List Box** - Selectable list component
- **Text Tag** - Labeled text elements

### Utilities
- **Error Boundary** - Error handling wrapper
- **Providers** - Context providers for the library
- **Scroll Linked** - Scroll-triggered animations
- **Icons** - Icon component collection

## Usage Examples

### Basic Button

```tsx
import { Button } from '@k8o/arte-odyssey';

<Button variant="primary" size="medium">
  Primary Button
</Button>
```

### Form with Validation

```tsx
import { FormControl, TextField, Button } from '@k8o/arte-odyssey';

<form>
  <FormControl label="Email" required>
    <TextField
      type="email"
      placeholder="Enter your email"
      required
    />
  </FormControl>
  <Button type="submit">Submit</Button>
</form>
```

### Modal Dialog

```tsx
import { Dialog, Button } from '@k8o/arte-odyssey';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open Dialog
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Action"
      >
        <p>Are you sure you want to continue?</p>
        <Button onClick={() => setIsOpen(false)}>
          Confirm
        </Button>
      </Dialog>
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
- **useClipboard** - Clipboard operations
- **useHash** - URL hash management
- **useInterval** - Interval timer management
- **useLocalStorage** - Local storage with React state
- **useScrollDirection** - Scroll direction detection
- **useStep** - Step-based state management
- **useTimeout** - Timeout management
- **useWindowSize** - Window size tracking

## TypeScript Support

All components are fully typed with TypeScript. The library exports comprehensive type definitions for all props and APIs.

```tsx
import type { ButtonProps } from '@k8o/arte-odyssey';

const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

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

- CSS custom properties
- Tailwind utility classes
- Theme configuration
- Style overrides

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

---

Built with ❤️ using React, TypeScript, and Tailwind CSS.