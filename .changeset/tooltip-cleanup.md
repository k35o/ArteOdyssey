---
'@k8o/arte-odyssey': minor
---

`Popover.Trigger` / `Tooltip.Trigger` の `renderItem` の型を緩い `Record<string, unknown>` から固有型 `PopoverTriggerProps` / `TooltipTriggerProps` に置き換え、利用者が型キャストなしで spread できるようにした。

### Type changes

- `PopoverTriggerProps`: `Popover` から export。すべての popover type で必要な props (ref / onClick / onKeyDown / mouse・focus handlers / aria-haspopup / aria-expanded / aria-controls / aria-describedby / role) を optional union として持つ
- `TooltipTriggerProps`: `Tooltip` から export。tooltip type 専用の props (ref / mouse・focus handlers / aria-describedby) のみ
- 各 props の handler は `MouseEventHandler<HTMLElement>` などの汎用型なので、`<button>` / `<a>` / `<div>` など任意の要素に spread 可能

### IconButton の型整理

- 内部の `as unknown as` キャストを撤廃し、`Tooltip.Trigger` の renderItem からそのまま `triggerProps` を取り回せるようになった
- `IconButtonTriggerProps` は `Partial<TooltipTriggerProps>` のエイリアスに

### Default placement の統一

- `Tooltip.Root` のデフォルト `placement` を `'bottom-start'` から `'bottom'` に変更（`IconButton.tooltipPlacement` のデフォルトと揃えた）。アイコンボタン下に中央寄せで表示されるのが視覚的に自然なため
- 以前の挙動が必要な場合は `<Tooltip.Root placement="bottom-start">` を明示
