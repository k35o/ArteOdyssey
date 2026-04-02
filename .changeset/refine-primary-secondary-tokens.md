---
'@k8o/arte-odyssey': patch
---

primary / secondary トークンの被りを解消し階調を整理

- dark の `primary-fg` / `secondary-fg` を 100 → 300 に変更（明るすぎを抑制）
- light の `bg-emphasize` を 200 → 300 に変更（bg との被りを解消）
- dark の `bg-subtle` を 900 → 950、`bg-mute` を 800 → 900 に変更（bg との被りを解消）
