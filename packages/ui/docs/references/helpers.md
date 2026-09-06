# Helpers and types

Utility functions and type definitions that `@k8ordo/ui` provides.

```tsx
import {
  chain,
  cn,
  createSafeContext,
  mergeProps,
  mergeRefs,
} from '@k8ordo/ui';
import type {
  Status,
  Direction,
  Placement,
  ModalSide,
  DrawerSide,
  Option,
} from '@k8ordo/ui';
```

The list below is the complete public helper API: `pnpm check:props` fails
when the headings under "Helper functions" and the exports of
`src/helpers/index.ts` disagree.

## Helper functions

### chain

Combines several callbacks into one that calls each in order with the same
arguments. `undefined` entries are skipped, so an optional user handler can be
passed straight in. The combined function returns nothing.

```tsx
import { chain } from '@k8ordo/ui';

const onClick = chain(props.onClick, () => {
  setOpen(false);
});

<button onClick={onClick} />;
```

Signature:

```ts
const chain: <T extends (...args: never[]) => unknown>(
  ...callbacks: Array<T | undefined>
) => (...args: Parameters<T>) => void;
```

### cn

Merges Tailwind classes (clsx + tailwind-merge). Accepts strings, arrays,
objects, and falsy values, and resolves conflicting utilities with the last
one winning.

```tsx
import { cn } from '@k8ordo/ui';

cn('text-fg-base', isActive && 'bg-primary-bg', className);
cn('flex', undefined, { hidden: false, grow: true }); // → 'flex grow'
cn('px-4 py-2', 'px-6'); // → 'py-2 px-6'
```

Signature:

```ts
const cn: (...inputs: ClassValue[]) => string;
```

### createSafeContext

Creates a context whose hook throws with the given message when there is no
provider above it, instead of handing back `null`. Returns the context (to
render as a provider) and the hook as a tuple.

```tsx
import { createSafeContext } from '@k8ordo/ui';

const [TabsContext, useTabsContext] = createSafeContext<{
  selectedId: string;
}>('Tabs.Tab must be used within <Tabs.Root>');

const Root = ({ children }) => (
  <TabsContext value={{ selectedId }}>{children}</TabsContext>
);

const Tab = () => {
  const { selectedId } = useTabsContext(); // throws outside <Root>
};
```

Signature:

```ts
const createSafeContext: <T>(
  errorMessage: string,
) => readonly [Context<T | null>, () => T];
```

### mergeProps

Merges two props objects the way a `render*` prop expects: `className` goes
through `cn`, `style` is shallow-merged, event handlers (`onClick`,
`onKeyDown`, …) are chained with `chain` so both run, and any other key is
overwritten by `override` unless its value is `undefined`.

```tsx
import { mergeProps } from '@k8ordo/ui';

const merged = mergeProps(
  { className: 'p-2 text-fg-base', onClick: track },
  { className: 'text-fg-mute', onClick: open, id: 'menu' },
);
// merged.className → 'p-2 text-fg-mute'
// merged.onClick() → track(), then open()
```

Signature:

```ts
const mergeProps: <
  A extends Record<string, unknown>,
  B extends Record<string, unknown>,
>(
  base: A,
  override: B,
) => Omit<A, keyof B> & B;
```

### mergeRefs

Combines several refs into one callback ref, so a component can keep an
internal ref while forwarding the caller's. Object refs are assigned, function
refs are called, and `null` / `undefined` are skipped. The returned callback
returns a cleanup (React 19 ref cleanup) that resets object refs to `null` and
runs each function ref's own cleanup — or calls it with `null` when it did not
return one.

```tsx
import { mergeRefs } from '@k8ordo/ui';

const Field = ({ ref, ...rest }: { ref?: Ref<HTMLInputElement> }) => {
  const internalRef = useRef<HTMLInputElement>(null);
  return <input ref={mergeRefs(internalRef, ref)} {...rest} />;
};
```

Signature:

```ts
const mergeRefs: <T>(
  ...refs: ReadonlyArray<Ref<T> | undefined>
) => RefCallback<T>;
```

## Type definitions

### Status

```tsx
type Status = 'success' | 'info' | 'warning' | 'error';
```

Used for the status of Alert, Badge, Toast, and similar components.

### Direction

```tsx
type Direction = 'up' | 'down' | 'right' | 'left';
```

Used to point ChevronIcon and similar icons.

### Placement

```tsx
type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';
```

Placement relative to an anchor element, for Popover, Tooltip, DropdownMenu,
and ListBox (the `placement` prop).

### ModalSide

```tsx
type ModalSide = 'center' | 'bottom' | 'left' | 'right';
```

Which viewport edge a Modal sticks to (the `side` prop). It is a different
idea from `Placement`, which is relative to an anchor, so the prop name differs
too.

### DrawerSide

```tsx
type DrawerSide = Extract<ModalSide, 'left' | 'right'>;
```

The subset of `ModalSide` a Drawer accepts: a drawer always slides in from an
edge, so `center` is excluded.

### Option

```tsx
type Option = Readonly<{ value: string; label: string }>;
```

Used for the choices in Radio, Select, Autocomplete, and similar components.
