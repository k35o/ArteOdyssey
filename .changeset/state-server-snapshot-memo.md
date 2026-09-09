---
'@k8ordo/state': patch
---

`useAppState` の `getServerSnapshot` を、呼び出し時に埋める可変キャッシュから
メモ化した値に置き換えた。`useSyncExternalStore` が同一性で比較するための安定性は
変わらないが、レンダーが自分の外側の変数を書き換えなくなる。
