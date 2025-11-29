---
'@k8o/arte-odyssey': minor
---

ScrollLinkedコンポーネントにcontainer propを追加

ScrollLinkedコンポーネントにオプショナルなcontainer propを追加しました。

主な機能:
- container propで特定のコンテナ要素のスクロール進捗を追跡可能
- RefObject<HTMLElement | null>型でTypeScriptの型安全性を確保
- Storybookに新しいWithContainerストーリーを追加してデモを提供
- デフォルトではwindowのスクロールを追跡（既存の動作を維持）
