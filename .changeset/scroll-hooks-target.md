---
'@k8o/arte-odyssey': major
---

useScrollLock と useScrollDirection を任意の要素に適用できるように拡張

- `useScrollLock(target?)`: 引数に `RefObject<HTMLElement | null>` を受け取り、指定要素の `overflow` を制御できるように。未指定時は従来通り `document.body`
- `useScrollDirection(options?)`: 引数を `{ threshold?, target? }` の options 形式に変更（破壊的変更）。`target` 指定時はその要素のスクロール方向を検出
- `fix(form-control)`: `helpText` / `errorText` と input の間に余白を追加
- `fix(checkbox-card)`: 選択時の枠・インジケータの色を通常 Checkbox に揃える
