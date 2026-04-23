---
'@k8o/arte-odyssey': major
---

feat: step toward Async React across Button, Form, hooks, and components

ライブラリ全体を「Async React」の流儀に揃えるための変更。

**Button / IconButton**

- 新設の `onAction?: () => void | Promise<void>` prop を渡すと、内部で `startTransition` に包んで実行する。ペンディング中は `disabled` + `aria-busy` + Spinner（Button のみ）を表示。
- `onClick` は従来どおり同期的な urgent ハンドラで、transition 化されない。非同期処理を扱うときは `onAction` を使う。
- `Button` は `type='submit'` の場合、親 `<form>` の action 実行中にも `useFormStatus` 経由で pending を拾う。`IconButton` は form 内で常に pending を反映。

**Form（新規）**

- `action` prop を受け付ける `<form>` ラッパー `Form` を追加。React 19 の form action パターンと `useActionState` / `useFormStatus` と素直に組み合わせて使える。

**各フォームフィールドの pending 連携**

親 `<form>` が action 実行中のとき、`useFormStatus` 経由で pending を拾って UI を抑制する。

- 入力系 (`TextField` / `Textarea` / `NumberField` / `PasswordInput`) は `readOnly` を立てる。
- 選択系 (`Select` / `Checkbox` / `Radio` / `Switch` / `FileField` / `Autocomplete` / `Slider`) は既存の `isDisabled` と OR して disabled 扱いにする。

**Hooks**

- `useDebouncedTransition` を追加。`startTransition(async)` + `AbortController` で delay 経過後にアクションを実行し、再呼び出し時は前回のアクションに渡した signal を abort する。
- `useDeferredDebounce` を追加。`useDeferredValue` をラップし `[deferredValue, isPending]` を返す。
- `useDebounce` / `useDebouncedCallback` / `useThrottle` / `useThrottledCallback` を削除（**BREAKING**）。代替として上記 2 フックまたは `useDeferredValue` を利用してください。
- `useWindowResize` / `useResize` の `options.debounceMs` を削除（**BREAKING**）。resize イベントの整流は呼び出し側で `useDeferredValue` や `useDebouncedTransition` を使って行う方針へ統一。
- `useTimeout` / `useInterval` が callback の参照変化でタイマーを張り直さないように、ref パターンへ整理（挙動は互換）。

**Components**

- `Autocomplete`: フィルタリングを `useDeferredDebounce` による遅延値に切り替え、ペンディング中はリストに `aria-busy` と opacity を付与。
- `BaselineStatus`: 動的 `import` の完了観測を `useSyncExternalStore` + 可変モジュール変数から、`Suspense` + `use(Promise)` に置き換え。
