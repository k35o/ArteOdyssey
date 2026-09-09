---
"@k8ordo/ui": major
---

生成 UI の peer 範囲に 0.x の上限を付けた。`@json-render/core` / `@json-render/react` は `>=0.20.0 <0.21.0`、`@openuidev/lang-core` は `>=0.2.10 <0.3.0`、`@openuidev/react-lang` は `>=0.2.9 <0.3.0`。0.x の minor は破壊的リリースなので、検証していないバージョンまで互換を約束するのをやめた。json-render は下限も 0.20 に上げている（0.19 は別の minor で、もう検証していない）。あわせて json-render の未知 prop 検出を `instanceof z.ZodObject` から `.shape` の有無に変え、利用者の zod が別コピーになっても検出が止まらないようにした。

あわせて README と `docs/references/generative-ui.md` の install 手順を直した。`@openuidev/lang-core` は `@k8ordo/ui/openui/prompt` だけでなく `@k8ordo/ui/openui` 本体が直接 import しているので、`@openuidev/react-lang` と一緒に入れる必要がある（pnpm は依存の依存を解決してくれない）。
