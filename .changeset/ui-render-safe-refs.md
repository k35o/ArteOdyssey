---
'@k8ordo/ui': patch
---

レンダー中に ref を読み書きしていた箇所を整理した。`useControllableState` は
セッターの同一性を保つための ref 更新をエフェクトに移し、`Toast.Provider` は
ポータル先をエフェクトで解決するようにした。後者は `portalRef` が同じコミットで
付いた場合にこれまで `document.body` に落ちていたのが、渡されたノードに載る。
