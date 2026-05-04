---
'@k8o/arte-odyssey': minor
---

`Popover.Trigger` / `Tooltip.Trigger` の `renderItem` の型を緩い `Record<string, unknown>` から固有型 `PopoverTriggerProps` / `TooltipTriggerProps` に置き換え、利用者が型キャストなしで spread できるようにした。

### Type changes

- `PopoverTriggerProps`: `Popover` から export。すべての popover type で必要な props (ref / onClick / onKeyDown / mouse・focus handlers / aria-haspopup / aria-expanded / aria-controls / aria-describedby / role) を optional union として持つ
- `PopoverContentProps`: `Popover` から export。content の props (id / ref / role / aria-orientation / mouse・focus handlers) を持つ
- `TooltipTriggerProps`: `Tooltip` から export。tooltip type 専用の props (ref / mouse・focus handlers / aria-describedby) のみ
- 各 props の handler は `MouseEventHandler<HTMLElement>` などの汎用型なので、`<button>` / `<a>` / `<div>` など任意の要素に spread 可能
- `DropdownMenu` / `ListBox` の `getTriggerProps` / `getContentProps` / `getItemProps` の return 型を `Record<string, unknown>` から `HTMLAttributes<HTMLElement>` に変更

### IconButton の型整理

- 内部の `as unknown as` キャストを撤廃し、`Tooltip.Trigger` の renderItem からそのまま `triggerProps` を取り回せるようになった
- `IconButtonTriggerProps` は `Partial<TooltipTriggerProps>` のエイリアスに

### Default placement の統一

- `Tooltip.Root` のデフォルト `placement` を `'bottom-start'` から `'bottom'` に変更（`IconButton.tooltipPlacement` のデフォルトと揃えた）。アイコンボタン下に中央寄せで表示されるのが視覚的に自然なため
- 以前の挙動が必要な場合は `<Tooltip.Root placement="bottom-start">` を明示

### Popover を tooltip 知識から切り離し

- `Popover.Root` の `type` union から `'tooltip'` を削除（`'dialog' | 'menu' | 'listbox'` のみ）
- 旧 `type='tooltip'` で暗黙的に切り替えていた挙動を `Popover.Root` の専用 props として明示化:
  - `closeOnClickAway?: boolean` (デフォルト `true`) — 外側クリックで閉じるか
  - `trapFocus?: boolean` (デフォルト `true`) — `FloatingFocusManager` の focus trap
- `Tooltip` 関連の型 (`TooltipTriggerProps`) と hook (`useTooltipTriggerProps`) を popover モジュールから tooltip モジュールへ移動
- `Tooltip.Root` は `<Popover.Root closeOnClickAway={false} trapFocus={false}>` を内部で利用しつつ、自前で trigger / content 要素を組み立てる形に
- これにより Popover が generic な primitive として綺麗になり、Tooltip-specific な分岐が popover/hooks.ts から消えた

### Migration

利用者は `<Popover.Root type="tooltip">` を直接使っていなければ影響なし。直接使っていた場合は `<Tooltip.Root>` への置き換えを推奨。
