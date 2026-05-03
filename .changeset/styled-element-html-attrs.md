---
'@k8o/arte-odyssey': minor
---

Styled element 系コンポーネントが `HTMLAttributes` を受けるようになった。`id` / `data-*` / `aria-*` / `style` / event handlers / `className` 等が普通に渡せるようになり、テストや analytics の attrs を component 編集なしで追加できる。

### 対象

| Component | 受ける attrs |
|---|---|
| `Avatar` | `HTMLAttributes<HTMLSpanElement>` |
| `Badge` | `HTMLAttributes<HTMLElement>` (interactive モードでは `<button>` に渡る) |
| `Card` / `InteractiveCard` | `HTMLAttributes<HTMLDivElement>` |
| `Code` | `HTMLAttributes<HTMLElement>` |
| `Heading` | `HTMLAttributes<HTMLHeadingElement>` |
| `Spinner` | `OutputHTMLAttributes<HTMLOutputElement>` |
| `Skeleton` | `HTMLAttributes<HTMLDivElement>` |
| `Progress` | `HTMLAttributes<HTMLDivElement>` |
| `Alert` | `HTMLAttributes<HTMLDivElement>` |
| `Separator` | `HTMLAttributes<HTMLSpanElement>` |
| `Anchor` | `AnchorHTMLAttributes<HTMLAnchorElement>` |

`className` を渡した場合はコンポーネント内部の class とマージされる。`role` / `aria-orientation` / `aria-label` (component が責任を持つもの) は `Omit` で除外。

### 例

```tsx
<Avatar id="user" data-testid="avatar" name="k8o" />
<Heading id="section-1" type="h2">タイトル</Heading>
<Card onClick={...} className="custom-class">...</Card>
```

### Anchor の `renderAnchor` シグネチャ拡張

`renderAnchor` のコールバック引数に `AnchorHTMLAttributes` の rest props が含まれるようになった。デフォルト実装は spread するので影響なし。カスタム `renderAnchor` を提供している場合、追加された attrs を `<a>` (or `<Link>`) にスプレッドし忘れないよう注意。
