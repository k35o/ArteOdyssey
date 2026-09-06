---
'@k8ordo/form': patch
---

`formFields` が `dropped`（HTML の制約属性に落ちず、ブラウザでは検査されない
チェック）を返すとき、production 以外ではスキーマごとに一度 `console.warn`
でも同じ一覧を出す。戻り値を読まなくても気づけるようにするため。あわせて
`DroppedCheck` 型をクライアント側エントリ `@k8ordo/form` からも export する
（`FormFields` の一部としてクライアントの props に現れる型のため）。
