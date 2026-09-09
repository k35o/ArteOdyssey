---
'@k8ordo/ui': minor
---

`Button` / `IconButton` の `renderItem` が、既定の `<button>` に渡すのと同じ props を丸ごと受け取るようになりました。

これまで `renderItem` に渡していたのは `className` と `children`（`IconButton` はさらに `aria-label` と `triggerProps`）だけで、`ref`・`disabled`・クリックハンドラ・保留中のスピナー・`aria-*` / `data-*` などの受け取った属性は捨てられていました。そのため `<Button renderItem={...} onClick={...} disabled>` は、`onClick` も `onAction` も発火せず無効にもならない要素を、警告なしに描画していました。`className` / `style` を全コンポーネントで受け取らない以上 `renderItem` が唯一の逃げ道なので、ここが欠けていると回避手段がありません。

- `renderItem` と既定の要素に**同じオブジェクト**を渡すようにし、両者がずれない形にしました。
- 束の中身は `className`（無効時のスタイルを含む）・`children`（保留中はスピナー入り）・`ref`・`type`・`disabled`・`aria-disabled`・`aria-busy`・`onClick`・その他の受け取った属性です。
- `<a>` などにも展開できるよう、ハンドラと `ref` の要素型を `HTMLElement` にしました。`<button>` 専用の `disabled` / `type` だけ分割代入で外してから展開してください。無効状態は同梱の `aria-disabled` で表せ、`onClick` は無効なら `preventDefault()` して何もしないので、無効なリンクは遷移しません。
- `IconButton` は tooltip の配線を引き続き `triggerProps` にまとめます。合成済みの `ref` と、利用者が渡した `onMouseEnter` / `onMouseLeave` / `onFocus` / `onBlur` もそこに連結されるようになりました（これまでは `renderItem` 経路で捨てられていました）。
- 合成した `ref` は合成元が変わらない限り同じ関数を使い回します。毎レンダー作り直すと React が ref の付け外しを繰り返し、コールバック ref に副作用があると再実行されてしまうためです。
- 型 `ButtonRenderItemProps` と `IconButtonRenderItemProps` を公開しました。
