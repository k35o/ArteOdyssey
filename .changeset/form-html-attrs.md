---
'@k8o/arte-odyssey': minor
---

Form 系コンポーネントのカスタム命名 (`isXxx` / `describedbyId` / `labelId`) を廃止し、HTML 標準属性名に揃えた。素直に `<input>` の HTML 属性が渡せるようになる。

### Renamed props

- `isDisabled` → `disabled`（HTML 標準）
- `isRequired` → `required`（HTML 標準）
- `isInvalid` → `invalid`（HTML には native invalid がないため独自、`aria-invalid` を生成）
- `describedbyId` → `aria-describedby`（HTML 標準）
- `labelId` → `aria-labelledby`（HTML 標準）

### HTMLAttributes spread

すべての form 系コンポーネントが対応する `HTMLAttributes` を extend するようになり、HTML 属性 (`name` / `autoComplete` / `inputMode` / `pattern` / `data-*` / `placeholder` etc.) がそのまま渡せる。各コンポーネントが描画する主要な要素に対応する型を選択:

| Component | extend する型 |
|---|---|
| `TextField` / `PasswordInput` / `Checkbox` / `Switch` / `Slider` / `NumberField` / `Autocomplete` / `FileField.Root` | `InputHTMLAttributes<HTMLInputElement>` |
| `Textarea` | `TextareaHTMLAttributes<HTMLTextAreaElement>` |
| `Select` | `SelectHTMLAttributes<HTMLSelectElement>` |
| `Radio` | `HTMLAttributes<HTMLDivElement>` (radiogroup wrapper) |
| `RadioCard` / `CheckboxCard` / `CheckboxGroup` | `FieldsetHTMLAttributes<HTMLFieldSetElement>` |

機能を乱す attrs（独自 controlled API の `value` / `onChange` / `defaultValue` / `defaultChecked`、内部で固定する `type` / `role` / `className` 等）は `Omit` で除外。

### Newly accepted attrs

- `NumberField` に `aria-labelledby` prop を追加（FormControl の `legend` ラベル用）

### FormControl の renderInput slot

```tsx
// Before
renderInput={({ id, describedbyId, labelId, isDisabled, isInvalid, isRequired }) => (
  <TextField
    id={id}
    describedbyId={describedbyId}
    isDisabled={isDisabled}
    isInvalid={isInvalid}
    isRequired={isRequired}
  />
)}

// After (props が HTML 標準名なのでスプレッド一発で済む)
renderInput={(props) => <TextField {...props} />}
```

### Migration

機械的なリネームで対応可能:

```diff
- <TextField isDisabled={...} isInvalid={...} isRequired={...} describedbyId={...} />
+ <TextField disabled={...} invalid={...} required={...} aria-describedby={...} />

- <Radio labelId="..." />
+ <Radio aria-labelledby="..." />
```
