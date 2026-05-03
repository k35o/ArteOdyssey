---
'@k8o/arte-odyssey': major
---

`IconButton` と `IconLink` にホバー/フォーカス時の `Tooltip` を内蔵し、`label` を視覚的にも確認できるようにした。

### Breaking changes

- **`IconLink` の `label` を必須化**（旧: optional）
- **`IconLink` の `renderAnchor` シグネチャを変更**: 旧来の `{ href, className, target, rel, children }` に加えて `'aria-label': string` と `triggerProps: IconLinkTriggerProps`（Tooltip 連携用の `ref` / `aria-describedby` / mouse・focus handlers）を渡すようになった。カスタム `renderAnchor` を提供している場合は `triggerProps` を `<a>` にスプレッドする必要がある:

  ```tsx
  // Before
  renderAnchor={(props) => <a {...props}>{props.children}</a>}

  // After
  renderAnchor={({ triggerProps, children, ...rest }) => (
    <a {...rest} {...triggerProps}>{children}</a>
  )}
  ```

- **`IconLink` が client component になった**（`'use client'` 追加）。Tooltip 内蔵に伴う変更で、React Server Component として render できなくなる。Tooltip 不要なら `tooltipDisabled` を指定しても client 化は避けられない点に注意。

### Additions

- 別の Popover のトリガーとして使う場合（`DropdownMenu.IconTrigger` / `ListBox.IconTrigger` など）に Tooltip を抑止できる `tooltipDisabled` prop を追加
- Tooltip の表示位置を制御する `tooltipPlacement` prop を追加（デフォルト `'bottom'`、`Tooltip.Root` のデフォルト `'bottom-start'` とは異なる）
- ユーザーが `aria-describedby` を渡した場合、Tooltip の describedby とスペース区切りでマージされるようになった

### Internal fixes

- `Popover` の `tooltip` タイプにおいて `aria-describedby` が存在しない `_content` ID を参照していたバグを `_list` に修正、加えて `isOpen` 時のみ set する形に変更
