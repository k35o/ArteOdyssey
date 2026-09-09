---
'@k8ordo/form': patch
---

`z.iso.datetime({ local: true })` が `type="datetime-local"` に戻るようにした。zod は
ローカル時刻を RFC 3339 の date-time とみなさなくなり、JSON Schema に `format` を
出さず `pattern` だけを返す。format 引きが外れて `datetime-local` が使える唯一の
スキーマが `type="text"` に落ちていたので、内部 def の format を読んで補う。
