---
'@k8o/arte-odyssey': minor
---

デザインリフレッシュ: 「触れるものは柔らかく、読むものは端正に」

### カラーパレット
- 全色をOKLCH色空間に移行（明度統一スケール）
- セマンティックトークンを穏やかな階調にシフト（WCAG AAA準拠）
- ダークモードをより深い暗さに調整

### コンポーネントの角丸
- Button, LinkButton → `rounded-full`（ピル型）
- TextField, Textarea, Select, NumberField, PasswordInput, Autocomplete, CheckboxCard, RadioCard, FileField → `rounded-xl`
- Card, InteractiveCard → `rounded-xl`

### デザイントークン
- `rounded-xl` (1rem), `rounded-2xl` (1.25rem) を追加

### バグ修正
- Tabs: 同一ページ内の複数インスタンスでアンダーラインが干渉する問題を修正
