---
'@k8ordo/form': patch
'@k8ordo/router': patch
'@k8ordo/ui': patch
---

React の新しい lint ルールが指摘した点を直す。

`@k8ordo/form` は `z.iso.datetime({ local: true })` に `type="datetime-local"`
を戻す。zod が local 版の JSON Schema から `format` を落とすようになり、
`type="text"` に落ちてブラウザの日時ピッカーが出なくなっていた。あわせて
`HiddenValue` の初期値と `useForm` の行数ベースラインを ref から state に移す。

`@k8ordo/ui` は Toast の描画先をレンダー中の ref 読みではなくマウント後の state
から決める。`useControllableState` と `@k8ordo/router` の
`useInterceptedNavigation` は、最新値を持つ ref への書き込みをレンダー中から
`useInsertionEffect` に移す。いずれも setter の同一性は保つ。
