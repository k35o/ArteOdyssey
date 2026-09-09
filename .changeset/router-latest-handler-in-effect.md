---
'@k8ordo/router': patch
---

`useInterceptedNavigation` が最新のハンドラを覚える書き込みを、レンダー中の代入から
エフェクトに移した。コミットされないレンダーのハンドラを次の遷移が読むことがなくなり、
React Compiler の `react(refs)` にも当たらなくなる。イベント時に読む値であることは
変わらないので、呼び出し側のメモ化は引き続き不要。
