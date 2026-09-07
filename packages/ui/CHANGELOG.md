# @k8ordo/ui

## 2.0.0

### Major Changes

- @k8ordo/ui 2.0。

  - `useLocalStorage` / `useSessionStorage` / `useHash` を削除した。URL・履歴・
    localStorage・メモリなど「場所に住む状態」は `@k8ordo/state`
    （`defineLocalState` など）の仕事で、同じ状態を二つのパッケージが持つと
    アプリに二つの答えを与えてしまう。
  - 複合コンポーネント（Conversation / Dialog / DropdownMenu / FileField /
    ListBox / Message / Popover / PromptInput / Suggestion / Tabs / Tooltip）を
    `'use client'` モジュールの外（index.ts）で合成するようにした。Server
    Component から `Dialog.Root` のように参照しても undefined にならない。
  - `Checkbox` と `Radio` が他のフォーム部品と同じく `invalid` を受け取り、
    `aria-invalid` とエラー枠線に反映する。`FormControl` の `renderInput` に
    そのまま渡せる。
  - `docs/references/helpers.md` が存在しない関数（`between` / `commalize` /
    `uuidV4` など）を載せていたのを、実際の export（`chain` / `cn` /
    `createSafeContext` / `mergeProps` / `mergeRefs`）に合わせて書き直し、
    `check:props` で index.ts の export と見出しの一致を検証するようにした。
  - `Anchor` の hover を不透明度ではなく専用トークン（`text-fg-base`）にした。
  - `zod` の peer を `^4.4.3` にした。
