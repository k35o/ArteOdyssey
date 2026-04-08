---
'@k8o/arte-odyssey': minor
---

Button / IconButton / LinkButton / IconLink の hover/active 色を整理し、`secondary` カラーを追加

- hover/active で opacity ハック (`/90`, `/80`) を使っていた箇所をセマンティックトークン (`*-emphasize`) に置き換え
- skeleton variant に hover 時の背景色 (`bg-bg-subtle`) を追加して状態を分かりやすく
- outlined / gray contained の active を 1 段薄く調整
- `Button` / `LinkButton` の `color` に `secondary` を追加 (cyan ベース)
- `IconButton` / `IconLink` の `bg` に `secondary` を追加
