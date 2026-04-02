---
'@k8o/arte-odyssey': patch
---

useScrollDirection・useWindowSize の getServerSnapshot を定数化し無限ループを修正

`useSyncExternalStore` の `getServerSnapshot` が呼び出しごとに新しいオブジェクトリテラルを返していたため、React が参照の不一致を検出して無限ループが発生する問題を修正。
