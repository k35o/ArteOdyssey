---
'@k8ordo/form': patch
---

レンダー中に ref を読んでいた2か所を state に置き換えた。`HiddenValue` の
`data-initial`（初回レンダーの値を汚れ判定の基準にする）と、`useForm` の
`isDirty` が使う行数の基準。どちらもレンダーに現れる値なので、コミットされない
レンダーの値が残らない形にした。挙動は変わらない。
