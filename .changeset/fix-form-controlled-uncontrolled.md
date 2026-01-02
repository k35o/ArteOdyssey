---
"@k8o/arte-odyssey": patch
---

フォームコンポーネントの value と defaultValue を排他的な型に変更

制御コンポーネント（value + onChange）と非制御コンポーネント（defaultValue）を同時に指定できないように型定義を修正しました。これにより、React の警告や予期しない動作を防ぎます。

対象コンポーネント:
- TextField, Textarea, Select
- Radio, Checkbox
- NumberField, RangeField
- Autocomplete

また、RangeField と FileField に `w-full` を追加し、親要素の幅に合わせて伸びるようにしました。
