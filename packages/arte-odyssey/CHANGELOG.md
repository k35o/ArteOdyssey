# @k8o/arte-odyssey

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
