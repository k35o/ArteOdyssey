---
'@k8o/arte-odyssey': patch
---

`BaselineStatus` を Next.js の SSG/SSR 環境で render したときに `ReferenceError: window is not defined` で build が落ちる問題を修正した。

`baseline-status` パッケージは module top-level で `window.customElements.define(...)` を実行するため、`use(import('baseline-status'))` の Promise が server で解決されると window 未定義エラーになっていた。`loadBaselineStatus` に `typeof window === 'undefined'` ガードを入れ、server では never-resolve な Promise を返して Suspense fallback (`BaselineStatusSkeleton`) を維持するようにした。

これにより SSG の static HTML には skeleton が出力され、client hydration 後に本物の `<baseline-status>` 要素に差し替わる。
