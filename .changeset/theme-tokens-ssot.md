---
'@k8o/arte-odyssey': minor
---

refactor(tokens): テーマ定義を tokens.ts に集約して index.css を自動生成

- デザイントークン（パレット、セマンティックマッピング、typography、radius、shadow、spacing、breakpoint）を `src/styles/tokens.ts` に集約し single source of truth 化
- 新しいエントリポイント `@k8o/arte-odyssey/tokens` から型付きでトークンを参照可能に
- `index.css` は `tokens.ts` + `base.css` + `utilities.css` からビルド時に自動生成される
