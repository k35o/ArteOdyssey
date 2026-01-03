# @k8o/arte-odyssey

## 1.4.3

### Patch Changes

- [#185](https://github.com/k35o/ArteOdyssey/pull/185) [`c94af38`](https://github.com/k35o/ArteOdyssey/commit/c94af38854c72a30eacebc79a992d3372ea17f9a) Thanks [@k35o](https://github.com/k35o)! - フォームコンポーネントの value と defaultValue を排他的な型に変更

  制御コンポーネント（value + onChange）と非制御コンポーネント（defaultValue）を同時に指定できないように型定義を修正しました。これにより、React の警告や予期しない動作を防ぎます。

  対象コンポーネント:

  - TextField, Textarea, Select
  - Radio, Checkbox
  - NumberField, RangeField
  - Autocomplete

  また、RangeField と FileField に `w-full` を追加し、親要素の幅に合わせて伸びるようにしました。

## 1.4.2

### Patch Changes

- [#165](https://github.com/k35o/ArteOdyssey/pull/165) [`a118369`](https://github.com/k35o/ArteOdyssey/commit/a118369846e35c21ec2cc11a64f2860650819005) Thanks [@k35o](https://github.com/k35o)! - Update React and Next.js dependencies to address security vulnerabilities (DoS and source code exposure in React Server Components)

## 1.4.1

### Patch Changes

- [#152](https://github.com/k35o/ArteOdyssey/pull/152) [`d51d977`](https://github.com/k35o/ArteOdyssey/commit/d51d9771289174eb8b9e7ffb673b3e679745fd38) Thanks [@k35o](https://github.com/k35o)! - React CVE 55182 対応

## 1.4.0

### Minor Changes

- [#150](https://github.com/k35o/ArteOdyssey/pull/150) [`b6c9066`](https://github.com/k35o/ArteOdyssey/commit/b6c9066d7f28f388f54be0f02a5ee3dd35cc6c5c) Thanks [@k35o](https://github.com/k35o)! - ScrollLinked コンポーネントに container prop を追加

  ScrollLinked コンポーネントにオプショナルな container prop を追加しました。

  主な機能:

  - container prop で特定のコンテナ要素のスクロール進捗を追跡可能
  - RefObject<HTMLElement | null>型で TypeScript の型安全性を確保
  - Storybook に新しい WithContainer ストーリーを追加してデモを提供
  - デフォルトでは window のスクロールを追跡（既存の動作を維持）

## 1.3.0

### Minor Changes

- [#141](https://github.com/k35o/ArteOdyssey/pull/141) [`f44ac3f`](https://github.com/k35o/ArteOdyssey/commit/f44ac3f5f9f8cd020e2ec53fd6e421de7d01a7ec) Thanks [@k35o](https://github.com/k35o)! - useResize と useWindowResize フックを追加

  要素と window のリサイズを検知する 2 つのフックを追加しました。

  ## useResize

  ResizeObserver を使用して要素のリサイズを検知するフックです。

  主な機能:

  - ResizeObserver による要素のリサイズ検知
  - コールバックで ResizeObserverEntry を受け取り可能
  - enabled パラメータで監視の有効/無効を切り替え可能
  - debounceMs パラメータで任意の間隔で debounce 処理が可能

  ## useWindowResize

  window のリサイズを検知するフックです。

  主な機能:

  - window のリサイズイベントを検知
  - コールバックで window サイズ（width, height）を受け取り可能
  - enabled パラメータで監視の有効/無効を切り替え可能
  - debounceMs パラメータで任意の間隔で debounce 処理が可能
  - 初回のレンダリング時にはコールバックを呼び出さない

### Patch Changes

- [#139](https://github.com/k35o/ArteOdyssey/pull/139) [`5a54eb4`](https://github.com/k35o/ArteOdyssey/commit/5a54eb4d377fe1c9629d3fa02984b7d280aacd68) Thanks [@k35o](https://github.com/k35o)! - IconButton に cursor-pointer を追加

  IconButton コンポーネントに cursor-pointer クラスを追加し、ホバー時のカーソル表示を改善しました。

## 1.2.0

### Minor Changes

- [#138](https://github.com/k35o/ArteOdyssey/pull/138) [`70e4952`](https://github.com/k35o/ArteOdyssey/commit/70e495257ac35abbfb92a7e8777c5a46b1a8e6e1) Thanks [@k35o](https://github.com/k35o)! - FileField コンポーネントを追加

  ファイル選択 UI を提供する新しい FileField コンポーネントを追加しました。

  主な機能:

  - Root、Trigger、ItemList の 3 つのサブコンポーネントによる柔軟な構成
  - ファイルの選択、表示、削除機能
  - 複数ファイル選択のサポート
  - 最大ファイル数制限
  - webkitDirectory 対応でフォルダ選択が可能
  - ref を使って acceptedFiles にアクセス可能
  - Button コンポーネントと組み合わせて使用可能

- [#136](https://github.com/k35o/ArteOdyssey/pull/136) [`f08b0c5`](https://github.com/k35o/ArteOdyssey/commit/f08b0c5bdfe9b72e28f500fa7598f0f52cc52cd7) Thanks [@k35o](https://github.com/k35o)! - Fix code color display issue where consecutive strings containing colors were incorrectly displayed

## 1.1.0

### Minor Changes

- [#108](https://github.com/k35o/ArteOdyssey/pull/108) [`3bc361a`](https://github.com/k35o/ArteOdyssey/commit/3bc361a2705a9177831f90d529cdff26c658398c) Thanks [@renovate](https://github.com/apps/renovate)! - bump dependencies

## 1.0.0

### Major Changes

- [#57](https://github.com/k35o/ArteOdyssey/pull/57) [`df367e3`](https://github.com/k35o/ArteOdyssey/commit/df367e3040785ee177191a7769b8aea5d5197dc9) Thanks [@k35o](https://github.com/k35o)! - Rename ComponentProvider to ArteOdysseyProvider

  BREAKING CHANGE: ComponentProvider has been renamed to ArteOdysseyProvider. Update your imports from `import { ComponentProvider }` to `import { ArteOdysseyProvider }`.

## 0.1.0

### Minor Changes

- [#50](https://github.com/k35o/ArteOdyssey/pull/50) [`b1cb256`](https://github.com/k35o/ArteOdyssey/commit/b1cb256d6f034e7a7e4694c2b8b1b21baf1abcd2) Thanks [@k35o](https://github.com/k35o)! - Add defaultValue support to form components

  Add defaultValue prop to form components to enable uncontrolled usage:

  - Checkbox: add defaultChecked prop
  - NumberField: add defaultValue prop with proper state initialization
  - RangeField: add defaultValue prop
  - Select: add defaultValue prop
  - Radio: add defaultValue prop (defaultChecked for individual options)
  - Autocomplete: add defaultValue prop with controlled/uncontrolled state management

  This allows components to work in both controlled (value + onChange) and uncontrolled (defaultValue + onChange) modes for better flexibility.

### Patch Changes

- [#43](https://github.com/k35o/ArteOdyssey/pull/43) [`3d89a22`](https://github.com/k35o/ArteOdyssey/commit/3d89a2255d5647080f2e15a8631576db163a2185) Thanks [@k35o](https://github.com/k35o)! - nextjs の examples を追加

## 0.0.6

### Patch Changes

- [#33](https://github.com/k35o/ArteOdyssey/pull/33) [`d048c79`](https://github.com/k35o/ArteOdyssey/commit/d048c7991c94134aaa66b14d876ef03003100835) Thanks [@k35o](https://github.com/k35o)! - link に自由な型を渡せるように

## 0.0.5

### Patch Changes

- [#31](https://github.com/k35o/ArteOdyssey/pull/31) [`c33eb31`](https://github.com/k35o/ArteOdyssey/commit/c33eb316796a5441004ca1a85a0514efc366fa93) Thanks [@k35o](https://github.com/k35o)! - Accordion オブジェクトからコンポーネントを提供するようにする

- [#32](https://github.com/k35o/ArteOdyssey/pull/32) [`7659205`](https://github.com/k35o/ArteOdyssey/commit/76592057ec2caa384aad5e0403de09fccd03bfbf) Thanks [@k35o](https://github.com/k35o)! - Component をまとめて出荷する値の型の強化

- [#29](https://github.com/k35o/ArteOdyssey/pull/29) [`5ddfb06`](https://github.com/k35o/ArteOdyssey/commit/5ddfb06ee6b15271d5fb14bfd4b6c17a8fdbe9b3) Thanks [@k35o](https://github.com/k35o)! - peerDeps の範囲を拡大

## 0.0.4

### Patch Changes

- [#27](https://github.com/k35o/ArteOdyssey/pull/27) [`f4e0adc`](https://github.com/k35o/ArteOdyssey/commit/f4e0adcc07a8387b4bacf411138c8e8a5dbef071) Thanks [@k35o](https://github.com/k35o)! - React のバージョンアップ

- [#23](https://github.com/k35o/ArteOdyssey/pull/23) [`042190c`](https://github.com/k35o/ArteOdyssey/commit/042190ce06e868362e7045724e83f2be7e774a27) Thanks [@k35o](https://github.com/k35o)! - パッケージのバージョンアップ

## 0.0.3

### Patch Changes

- [#7](https://github.com/k35o/ArteOdyssey/pull/7) [`199e831`](https://github.com/k35o/ArteOdyssey/commit/199e8313bb81cc8ed34e8d3dddb3bf0cf90f34cf) Thanks [@k35o](https://github.com/k35o)! - ReactErrorBoundary を依存に加える

## 0.0.2

### Patch Changes

- [`bf31ae8`](https://github.com/k35o/ArteOdyssey/commit/bf31ae86fadfef8a2324e2dcabb95f099a32aac8) Thanks [@k35o](https://github.com/k35o)! - dummy

## 0.0.1

### Patch Changes

- [#2](https://github.com/k35o/ArteOdyssey/pull/2) [`f16a84d`](https://github.com/k35o/ArteOdyssey/commit/f16a84daf78714238247d53b854a4d9311e63693) Thanks [@k35o](https://github.com/k35o)! - ファーストリリース
