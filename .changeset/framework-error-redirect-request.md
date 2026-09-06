---
'@k8ordo/static': minor
'@k8ordo/server': minor
'@k8ordo/router': minor
---

route ファイルに `error.tsx` と `redirect.ts` が加わる。error.tsx は下の
部分木が throw したとき layout の内側でそれを描く（router の表では branch の
`error`）。redirect.ts は表より先に答え、server では 307/308、static では
meta refresh のページとして書き出される。server は Server Action から
`redirect()` で終われる（JS なしは 303、あれば遷移の指示）。server では
page と layout が読み取り専用の `request`（headers と cookies）を受け取り、
生成される型も server のときだけその項目を持つ。static はビルド時に throw した
ページを書き出さず、ページ名を挙げて止まる。
