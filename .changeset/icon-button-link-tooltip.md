---
'@k8o/arte-odyssey': major
---

`IconButton` と `IconLink` にホバー/フォーカス時の `Tooltip` を内蔵し、`label` を視覚的にも確認できるようにした。

- `IconLink` の `label` を必須化（旧: optional）
- `IconLink` の `renderAnchor` シグネチャに `aria-label` / `aria-describedby` / `ref` / `onMouseEnter` / `onMouseLeave` / `onFocus` / `onBlur` を追加。カスタム `renderAnchor` を提供している場合はこれらを `<a>` にスプレッドする必要がある
- 別の Popover のトリガーとして使う場合（`DropdownMenu.IconTrigger` / `ListBox.IconTrigger` など）に Tooltip を抑止できる `tooltipDisabled` prop を追加
- Tooltip の表示位置を制御する `tooltipPlacement` prop を追加（デフォルト `bottom`）
- 内部修正: `Popover` の `tooltip` タイプにおいて `aria-describedby` が存在しない ID を参照していたバグを修正
