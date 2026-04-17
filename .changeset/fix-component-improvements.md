---
"@k8o/arte-odyssey": patch
---

fix: Textarea・BaselineStatus・Modalの修正

- Textarea: autoResizeのuseEffectに依存配列を追加し、onInputハンドラでuncontrolled対応
- BaselineStatus: スケルトンの高さをレスポンシブ対応しCLS軽減
- Modal: MutationObserverで外部ref操作時のstate同期を実装
