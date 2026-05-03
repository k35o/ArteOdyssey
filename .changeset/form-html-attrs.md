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

以下のコンポーネントは対応する `HTMLAttributes<...>` を extend するようになり、HTML 属性 (`name` / `autoComplete` / `inputMode` / `pattern` / `data-*` / `placeholder` etc.) がそのまま渡せる:

- `TextField` (`InputHTMLAttributes<HTMLInputElement>`)
- `Textarea` (`TextareaHTMLAttributes<HTMLTextAreaElement>`)
- `Select` (`SelectHTMLAttributes<HTMLSelectElement>`)
- `PasswordInput` (`InputHTMLAttributes<HTMLInputElement>`)

`Checkbox` / `Radio` / `Switch` / `Slider` / `NumberField` / `Autocomplete` / `FileField` / `CheckboxCard` / `RadioCard` / `CheckboxGroup` は独自の controlled API があるため一律 spread はしないが、prop 名は HTML 標準に揃えた。

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
