---
'@k8o/arte-odyssey': patch
---

Adopt the shared `@k8o/oxc-config` oxlint+oxfmt preset and apply the resulting cleanup. Mostly internal refactors with no public API changes:

- Compound component context value memoization (`Tabs.Root`, `Dialog.Root`, `CheckboxGroup.Root`)
- `Toast` provider/hook split into `toast/context.ts` and `toast/provider.tsx` to break a circular import
- `ChevronIcon` / `AlertIcon` rewritten as record-lookup so the underlying component is determined eagerly instead of in a `switch`
- Various conditional truthy checks made explicit (`string \| undefined`, `boolean \| undefined`)
- `Checkbox` / `Radio` / `RadioCard` / `Switch` controlled state branching switched to spreading `{ checked }` or `{ defaultChecked }` instead of passing both
