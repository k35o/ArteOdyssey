---
'@k8o/arte-odyssey': minor
---

`LinkButton` と `IconLink` を廃止し、`Button` / `IconButton` の `renderItem` render prop に統合した。

### Breaking changes

- **`LinkButton` を削除**: `Button` の `renderItem` で `<a>` を返す形に置き換える。

  ```tsx
  // Before
  <LinkButton href="/foo" variant="contained">Go</LinkButton>

  // After
  <Button
    renderItem={({ className, children }) => (
      <a className={className} href="/foo">{children}</a>
    )}
    variant="contained"
  >
    Go
  </Button>
  ```

- **`IconLink` を削除**: `IconButton` の `renderItem` で `<a>` を返す形に置き換える。Tooltip 連携用の props は `triggerProps` で渡される。

  ```tsx
  // Before
  <IconLink href="/foo" label="Go"><Icon /></IconLink>

  // After
  <IconButton
    label="Go"
    renderItem={({ className, children, 'aria-label': ariaLabel, triggerProps }) => (
      <a
        aria-label={ariaLabel}
        className={className}
        href="/foo"
        {...triggerProps}
      >
        {children}
      </a>
    )}
  >
    <Icon />
  </IconButton>
  ```

### Additions

- `Button` に `active?: boolean` prop を追加（旧 `LinkButton` のアクティブ状態スタイル）
- `Button` に `renderItem?: (props: { className, children }) => ReactNode` prop を追加
- `IconButton` に `renderItem?: (props: { className, children, 'aria-label', triggerProps }) => ReactNode` prop を追加
- `IconButtonTriggerProps` 型を export

### Cleanups

- `Tooltip` の `onFocus` を `:focus-visible` チェック付きに変更。プログラマティック focus やマウスクリックで tooltip が auto-open しなくなった
- 上記に伴い `Dialog.Header` / `Drawer` / `DropdownMenu.IconTrigger` / `ListBox` の `IconButton` から `tooltipDisabled` 指定を削除（不要になったため）
- `Button` の `active` prop を `isActive` に rename（CLAUDE.md の命名規約に合わせる）

### Notes

- `renderItem` を指定した場合、`disabled` / `onAction` / Spinner などのボタン専用機能は適用されない（リンクには無関係なため）
- `renderItem` 内で適切な `href` / `target` / `rel` 等のリンク属性を指定する責任は利用者側にある
