---
"@k8ordo/form": patch
---

zod 4.5 で `z.iso.datetime({ local: true })` が JSON Schema に `format` を出さなくなり、datetime-local を導出できず type="text" に落ちていた。zod 側の format を見て補うようにした。
