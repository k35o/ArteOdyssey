---
"@k8ordo/ui": patch
"@k8ordo/state": patch
"@k8ordo/router": patch
---

新しい React lint ルール（react/refs・react/immutability）に合わせた。useInterceptedNavigation の最新ハンドラ保持は描画中の代入をやめて effect に移した。残りは代入のタイミングを変えると壊れるため、理由つきで個別に無効化している。
