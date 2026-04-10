# @k8o/arte-odyssey

## 6.0.0

### Major Changes

- [#400](https://github.com/k35o/ArteOdyssey/pull/400) [`92b2dbc`](https://github.com/k35o/ArteOdyssey/commit/92b2dbce81af72c37b5092a8e2ddf2b42b89636c) Thanks [@k35o](https://github.com/k35o)! - useScrollLock と useScrollDirection を任意の要素に適用できるように拡張

  - `useScrollLock(target?)`: 引数に `RefObject<HTMLElement | null>` を受け取り、指定要素の `overflow` を制御できるように。未指定時は従来通り `document.body`
  - `useScrollDirection(options?)`: 引数を `{ threshold?, target? }` の options 形式に変更（破壊的変更）。`target` 指定時はその要素のスクロール方向を検出
  - `fix(form-control)`: `helpText` / `errorText` と input の間に余白を追加
  - `fix(checkbox-card)`: 選択時の枠・インジケータの色を通常 Checkbox に揃える

### Minor Changes

- [#407](https://github.com/k35o/ArteOdyssey/pull/407) [`ed07136`](https://github.com/k35o/ArteOdyssey/commit/ed07136fc00f0216772ecd1b56766586851bc53f) Thanks [@k35o](https://github.com/k35o)! - bg-raised トークンを追加し浮く UI に適用

  - `bg-raised` トークン追加（light: white, dark: gray-800）
  - Card/InteractiveCard: `bg-raised` を適用、secondary variant を削除
  - Modal, Dialog, Tooltip, DropdownMenu, ListBox, AutoComplete: `bg-raised` を適用し border を削除
  - Tooltip: 背景を inverse に変更

- [#404](https://github.com/k35o/ArteOdyssey/pull/404) [`73b62a2`](https://github.com/k35o/ArteOdyssey/commit/73b62a282c30ae9683ca35bc27807c88c9034210) Thanks [@k35o](https://github.com/k35o)! - Button / IconButton / LinkButton / IconLink の hover/active 色を整理し、`secondary` カラーを追加

  - hover/active で opacity ハック (`/90`, `/80`) を使っていた箇所をセマンティックトークン (`*-emphasize`) に置き換え
  - skeleton variant に hover 時の背景色 (`bg-bg-subtle`) を追加して状態を分かりやすく
  - outlined / gray contained の active を 1 段薄く調整
  - `Button` / `LinkButton` の `color` に `secondary` を追加 (cyan ベース)
  - `IconButton` / `IconLink` の `bg` に `secondary` を追加

- [#405](https://github.com/k35o/ArteOdyssey/pull/405) [`aaaf2b4`](https://github.com/k35o/ArteOdyssey/commit/aaaf2b49f8064486a7450eb0e8dd825f37d23fe9) Thanks [@k35o](https://github.com/k35o)! - Pagination コンポーネントを追加

  前後ページ移動と現在位置 (`4 / 10`) を示すミニマルなページネーション。Button (`variant="skeleton" color="gray"`) ベースで実装し、他のナビゲーションコンポーネントと視覚的に統一。

  ```tsx
  <Pagination totalPages={10} currentPage={page} onPageChange={setPage} />
  ```

### Patch Changes

- [#403](https://github.com/k35o/ArteOdyssey/pull/403) [`65e0cd4`](https://github.com/k35o/ArteOdyssey/commit/65e0cd4062e1c9246e76a467bcd63bcd1ca7450e) Thanks [@k35o](https://github.com/k35o)! - NumberField のステッパーボタンのデザインを刷新

  縦並びは維持しつつ、区切り線・グレー背景を撤去してアイコンを `+`/`−` から chevron (`▲`/`▼`) に変更。通常時は枠と一体化し、hover 時のみ薄く背景色が出るように。他の Input 要素と並べた際の視覚的な統一感を改善。

- [#406](https://github.com/k35o/ArteOdyssey/pull/406) [`201cbb6`](https://github.com/k35o/ArteOdyssey/commit/201cbb6888135691013d58d4730803eb5daed1be) Thanks [@k35o](https://github.com/k35o)! - 各コンポーネントの hover・選択状態の色を整理

  - Tabs/Accordion: hover 時に primary カラーを適用
  - CheckboxCard/RadioCard: 選択中カードを primary カラーに統一し、hover 状態を追加
  - Switch: border を削除
  - AutoComplete: ドロップダウンの選択・ハイライト状態を primary カラーに
  - DropdownMenu/ListBox: hover 背景を bg-subtle に統一
  - FormControl: label と helper テキストに左余白を追加

## 5.0.4

### Patch Changes

- [#393](https://github.com/k35o/ArteOdyssey/pull/393) [`fa0a0d1`](https://github.com/k35o/ArteOdyssey/commit/fa0a0d1d4f658c4e9ebb7deeefaefd9398912ab7) Thanks [@k35o](https://github.com/k35o)! - AccordionButton に水平方向の padding を追加

## 5.0.3

### Patch Changes

- [#384](https://github.com/k35o/ArteOdyssey/pull/384) [`971e776`](https://github.com/k35o/ArteOdyssey/commit/971e776f16522bc4e553efa93d448a6077941a1c) Thanks [@k35o](https://github.com/k35o)! - primary / secondary トークンの被りを解消し階調を整理

  - dark の `primary-fg` / `secondary-fg` を 100 → 300 に変更（明るすぎを抑制）
  - light の `bg-emphasize` を 200 → 300 に変更（bg との被りを解消）
  - dark の `bg-subtle` を 900 → 950、`bg-mute` を 800 → 900 に変更（bg との被りを解消）

## 5.0.2

### Patch Changes

- [#382](https://github.com/k35o/ArteOdyssey/pull/382) [`9ad4f24`](https://github.com/k35o/ArteOdyssey/commit/9ad4f2430826d96bfddea8c695e4595c8fb8dd4c) Thanks [@k35o](https://github.com/k35o)! - useScrollDirection・useWindowSize の getServerSnapshot を定数化し無限ループを修正

  `useSyncExternalStore` の `getServerSnapshot` が呼び出しごとに新しいオブジェクトリテラルを返していたため、React が参照の不一致を検出して無限ループが発生する問題を修正。

## 5.0.1

### Patch Changes

- [#380](https://github.com/k35o/ArteOdyssey/pull/380) [`276d607`](https://github.com/k35o/ArteOdyssey/commit/276d607940e72ab59cb3d0d1b1158908da5c1f7c) Thanks [@k35o](https://github.com/k35o)! - Gray パレットの色相を H:235（sky blue tint）に調整し、彩度を極小に抑制

  - H:205 → H:235 に変更し、緑味（苔っぽさ）を解消
  - chroma を半減させ、ほぼニュートラルだがわずかにブランドを感じる程度に

## 5.0.0

### Major Changes

- [#372](https://github.com/k35o/ArteOdyssey/pull/372) [`a1dc58b`](https://github.com/k35o/ArteOdyssey/commit/a1dc58bd6737976599586039636228e549549b36) Thanks [@k35o](https://github.com/k35o)! - feat: add `useIntersectionObserver` and `useInView` hooks, refactor ref-based hooks to accept ref

  BREAKING CHANGE: `useClickAway` and `useResize` now accept a `ref` as the first argument instead of returning one.

### Minor Changes

- [#360](https://github.com/k35o/ArteOdyssey/pull/360) [`eb9d8cf`](https://github.com/k35o/ArteOdyssey/commit/eb9d8cfeeeca41ef0926510120efae62e80f201d) Thanks [@k35o](https://github.com/k35o)! - feat: add `useBreakpoint` hook for Tailwind CSS 4 breakpoint detection

- [#365](https://github.com/k35o/ArteOdyssey/pull/365) [`8762e91`](https://github.com/k35o/ArteOdyssey/commit/8762e91fe17b16014b05e830a042755eff458ebb) Thanks [@k35o](https://github.com/k35o)! - feat: add `useDebounce` and `useThrottle` hooks

  Both hooks support overloaded APIs:

  - Pass a value to get a debounced/throttled value
  - Pass a callback to get a debounced/throttled function

- [#364](https://github.com/k35o/ArteOdyssey/pull/364) [`1e9fb8c`](https://github.com/k35o/ArteOdyssey/commit/1e9fb8c39c372c13440d5fe2bcd246b1ebd3ac90) Thanks [@k35o](https://github.com/k35o)! - feat: add `useDisclosure` hook for open/close/toggle state management

- [#375](https://github.com/k35o/ArteOdyssey/pull/375) [`a7154b7`](https://github.com/k35o/ArteOdyssey/commit/a7154b7d8ff2f9710b7648314c57af1127c7f694) Thanks [@k35o](https://github.com/k35o)! - feat: add `useSessionStorage` hook for sessionStorage state management

- [#379](https://github.com/k35o/ArteOdyssey/pull/379) [`5181edc`](https://github.com/k35o/ArteOdyssey/commit/5181edc1225386f7c85f20fb9359d30f34f44154) Thanks [@k35o](https://github.com/k35o)! - ブランドカラーに寄せた Gray パレットと 950 シェードの追加

  ### カラーパレット

  - Gray の色相を H:265 → H:205（Cyan 寄り）に変更し、ブランドカラーとの統一感を強化
  - Gray の彩度を抑え、より自然なブランドニュートラルに調整
  - 全カラーファミリーに `950` シェードを追加（ダークモード背景用）
  - `bg-surface` トークンを `gray-50` / `gray-950` に統一

- [#377](https://github.com/k35o/ArteOdyssey/pull/377) [`03cbcbc`](https://github.com/k35o/ArteOdyssey/commit/03cbcbc3d963566e828d142860041e029b444ac4) Thanks [@k35o](https://github.com/k35o)! - デザインリフレッシュ: 「触れるものは柔らかく、読むものは端正に」

  ### カラーパレット

  - 全色を OKLCH 色空間に移行（明度統一スケール）
  - セマンティックトークンを穏やかな階調にシフト（WCAG AAA 準拠）
  - ダークモードをより深い暗さに調整

  ### コンポーネントの角丸

  - Button, LinkButton → `rounded-full`（ピル型）
  - TextField, Textarea, Select, NumberField, PasswordInput, Autocomplete, CheckboxCard, RadioCard, FileField → `rounded-xl`
  - Card, InteractiveCard → `rounded-xl`

  ### デザイントークン

  - `rounded-xl` (1rem), `rounded-2xl` (1.25rem) を追加

  ### バグ修正

  - Tabs: 同一ページ内の複数インスタンスでアンダーラインが干渉する問題を修正

### Patch Changes

- [#378](https://github.com/k35o/ArteOdyssey/pull/378) [`35ef6a0`](https://github.com/k35o/ArteOdyssey/commit/35ef6a08d346935f3858f5bef4fa1fb4791dc9fb) Thanks [@k35o](https://github.com/k35o)! - docs: update design system docs to match current component and hook APIs

## 4.2.1

### Patch Changes

- [#351](https://github.com/k35o/ArteOdyssey/pull/351) [`b844daa`](https://github.com/k35o/ArteOdyssey/commit/b844daa5e3555820f47c22d87a794584e1493356) Thanks [@k35o](https://github.com/k35o)! - Allow passing `name` to additional form components, including autocomplete, radio-card, checkbox-card, select, number-field, checkbox, and radio.

## 4.2.0

### Minor Changes

- [#343](https://github.com/k35o/ArteOdyssey/pull/343) [`e2c9259`](https://github.com/k35o/ArteOdyssey/commit/e2c9259231fd89c9ca7e75a2ff2e01c686b45a0e) Thanks [@k35o](https://github.com/k35o)! - ErrorBoundary の re-export を削除。react-error-boundary を直接利用してください。

## 4.1.0

### Minor Changes

- [#339](https://github.com/k35o/ArteOdyssey/pull/339) [`dec8ccb`](https://github.com/k35o/ArteOdyssey/commit/dec8ccba100bc396737e0f1cf2ef512041c099f2) Thanks [@k35o](https://github.com/k35o)! - ArteOdyssey のアイコンを変更

## 4.0.0

### Major Changes

- [#329](https://github.com/k35o/ArteOdyssey/pull/329) [`602125d`](https://github.com/k35o/ArteOdyssey/commit/602125dcd0f80a4c5b3191349155efca53b243b7) Thanks [@k35o](https://github.com/k35o)! - Remove standalone `Content` export from Dialog — use `Dialog.Content` instead.

  Remove `FileFieldProvider` from public exports — it was only used internally.

- [#315](https://github.com/k35o/ArteOdyssey/pull/315) [`cd8edb4`](https://github.com/k35o/ArteOdyssey/commit/cd8edb4f9e1e22f46981d680688f0da4e9641083) Thanks [@k35o](https://github.com/k35o)! - Add new `CheckboxGroup` form components with docs and Storybook
  coverage.

  Allow `Checkbox` to be used directly inside `CheckboxGroup` so grouped
  checkboxes share the same visual API as standalone checkboxes.

- [#313](https://github.com/k35o/ArteOdyssey/pull/313) [`68e9652`](https://github.com/k35o/ArteOdyssey/commit/68e9652037a48390bcd9c91e7f14e5fab667a663) Thanks [@k35o](https://github.com/k35o)! - Add new `Switch`, `Avatar`, `Badge`, `Skeleton`, `Spinner`, and `Slider`
  components, including docs and Storybook coverage.

  Remove `TextTag` and `RangeField` from the public API and docs in favor of
  `Badge` and `Slider`.

  Tighten the public props for `Avatar`, `Skeleton`, and `Spinner` to match the
  library's constrained component API style.

- [#316](https://github.com/k35o/ArteOdyssey/pull/316) [`a97db65`](https://github.com/k35o/ArteOdyssey/commit/a97db651a1151f57c846de5acf253b34a609039f) Thanks [@k35o](https://github.com/k35o)! - Add new `Table`, `PasswordInput`, `RadioCard`, and `CheckboxCard`
  components, including docs and Storybook coverage.

  Fix `Checkbox` disabled handling and stabilize `Checkbox` and `Radio`
  selection behavior, including `Radio` default value handling.

  Remove `RadioGroup` from the public API and docs in favor of the
  options-based `Radio` component.

- [#325](https://github.com/k35o/ArteOdyssey/pull/325) [`970d2ed`](https://github.com/k35o/ArteOdyssey/commit/970d2ed6b265ec8be9171cda90beb9dcf1ff90cf) Thanks [@k35o](https://github.com/k35o)! - Restrict the public JavaScript and TypeScript API to the root
  `@k8o/arte-odyssey` entrypoint.

  Consumers must now import components, hooks, helpers, and types from the
  package root instead of subpath exports.

  Keep `@k8o/arte-odyssey/styles.css` as the only public subpath for stylesheet
  loading.

### Patch Changes

- [#331](https://github.com/k35o/ArteOdyssey/pull/331) [`a9ea042`](https://github.com/k35o/ArteOdyssey/commit/a9ea04278950d1851b63358eb97ed8f67b5ced2b) Thanks [@k35o](https://github.com/k35o)! - Migrate build toolchain from esbuild to Vite+ (vp pack / tsdown).

  Output format changes from `.js` to `.mjs` with `.d.mts` type declarations.

## 3.1.0

### Minor Changes

- [#271](https://github.com/k35o/ArteOdyssey/pull/271) [`3f5cd56`](https://github.com/k35o/ArteOdyssey/commit/3f5cd562c349fab39a269d014b255d625a6b5731) Thanks [@k35o](https://github.com/k35o)! - Drawer コンポーネントの title に ReactNode を受け付けるように変更し、side prop で左右の表示位置を選択可能に。Modal に left タイプを追加。helpers 関数のエクスポートを追加。

- [#274](https://github.com/k35o/ArteOdyssey/pull/274) [`c73c690`](https://github.com/k35o/ArteOdyssey/commit/c73c6904803f17e199e4b862da4d0f5f7337f8aa) Thanks [@k35o](https://github.com/k35o)! - Card / InteractiveCard に `appearance` prop を追加（`'shadow' | 'bordered'`）。HTML 要素を `<section>` から `<div>` に変更。

### Patch Changes

- [#274](https://github.com/k35o/ArteOdyssey/pull/274) [`037d31c`](https://github.com/k35o/ArteOdyssey/commit/037d31cc6500aa2b75725d068dd2c0867af76523) Thanks [@k35o](https://github.com/k35o)! - leading, shadow, inset-shadow, spacing, breakpoints のデザイントークンを @theme inline に明示的に定義

## 3.0.0

### Major Changes

- [#266](https://github.com/k35o/ArteOdyssey/pull/266) [`e905a76`](https://github.com/k35o/ArteOdyssey/commit/e905a76030357520f7da18d050bf5cd86226e01e) Thanks [@k35o](https://github.com/k35o)! - Card/InteractiveCard から overflow-hidden を削除し、子要素の focus ring が表示されるように修正。未使用の title prop を削除（breaking change）。

### Patch Changes

- [#267](https://github.com/k35o/ArteOdyssey/pull/267) [`1c1d27f`](https://github.com/k35o/ArteOdyssey/commit/1c1d27fb69f01b217d0f26ba2f247444103b2fea) Thanks [@k35o](https://github.com/k35o)! - カスタム hooks に'use client'ディレクティブを追加して Next.js App Router 互換性を確保

- [#262](https://github.com/k35o/ArteOdyssey/pull/262) [`70dee44`](https://github.com/k35o/ArteOdyssey/commit/70dee4492e3c2e0d8b16bd79fd544f3e39112f46) Thanks [@k35o](https://github.com/k35o)! - export \*を named exports に変換して RSC 互換性を確保

## 2.0.2

### Patch Changes

- [#215](https://github.com/k35o/ArteOdyssey/pull/215) [`7f95e1e`](https://github.com/k35o/ArteOdyssey/commit/7f95e1e5227373531dc79c9dfa10428deced22ec) Thanks [@k35o](https://github.com/k35o)! - NumberField: +/-ボタンの角丸を親要素に合わせて lg に修正

## 2.0.1

### Patch Changes

- [#212](https://github.com/k35o/ArteOdyssey/pull/212) [`723668d`](https://github.com/k35o/ArteOdyssey/commit/723668dfd319bbe5f5a82d0de4d782adc1d64993) Thanks [@k35o](https://github.com/k35o)! - Card, InteractiveCard: border を shadow-sm に変更し、よりソフトな見た目に

## 2.0.0

### Major Changes

- [#209](https://github.com/k35o/ArteOdyssey/pull/209) [`5b8b434`](https://github.com/k35o/ArteOdyssey/commit/5b8b434d4656887a17d22218a4dae762887cd14c) Thanks [@k35o](https://github.com/k35o)! - デザインシステム全体を「静謐で落ち着いた、余白を活かした UI」原則に基づいて刷新

  ## Breaking Changes

  ### Accordion

  - 外枠のボーダーを削除、区切り線のみに変更
  - motion ライブラリを CSS トランジションに置き換え
  - パネルの強制テキスト色を削除

  ### Alert

  - アイコンサイズを lg → md に変更
  - list-disc を削除、space-y-1 に変更

  ### Button

  - `border-2` をベースクラスに追加（contained/skeleton は border-transparent）
  - 全バリアントでサイズが統一される

  ### Card

  - shadow-md を削除、border のみに変更
  - bg の透明度を削除、solid な bg-bg-base に
  - グラデーションタイトルを bg-primary-bg/10 に変更
  - motion ライブラリを CSS トランジションに置き換え（InteractiveCard）

  ### Dialog

  - shadow-xl → shadow-md に変更

  ### Dropdown Menu

  - shadow-xl → shadow-md に変更
  - ホバー色を primary から bg-bg-mute に変更

  ### Form 全般

  - rounded-lg に統一
  - shadow-xs を削除
  - Autocomplete の選択状態を bg-bg-mute に変更

  ### IconButton / IconLink

  - bg-bg-base の /90 透明度を削除
  - **IconLink に `bg: 'primary'` オプションを追加**

  ### Icons

  - **ZennIcon を削除**

  ### LinkButton

  - **`color` prop を追加** (`'primary' | 'gray'`)
  - `border-2` をベースクラスに追加

  ### ListBox

  - **チェックマークを左から右に移動**
  - アイテムのパディングを px-2 py-1 → px-3 py-2 に増加
  - shadow-xl → shadow-md に変更

  ### Modal

  - shadow-xl → shadow-md に変更

  ### Popover

  - rounded-lg に統一

  ### Progress / ScrollLinked

  - **bg-primary-fg → bg-primary-bg に変更**（色が柔らかくなる）
  - Progress に rounded-full と transition-all を追加

  ### Radio

  - **`name` prop を追加**（ラジオボタンのグループ化に必要）

  ### Separator

  - **`color` prop を追加** (`'base' | 'mute' | 'subtle'`)
  - hr/div から span 要素に変更

  ### Styles

  - **spacing-lg トークンを削除** - 未使用だったカスタムトークン

  ### Tabs

  - rounded-md → rounded-lg に変更

  ### Tooltip

  - shadow-xl → shadow-md に変更

  ## New Features

  ### デザイン原則ドキュメント

  - DESIGN_PRINCIPLES.md を追加
  - Claude スキル（.claude/skills/arte-odyssey-design/）を追加

  ### 共通改善

  - 全インタラクティブ要素に `transition-colors` を追加
  - focus-visible リングをアクセシビリティ向上のため追加
  - Storybook の例を日本語の具体的な内容に更新

  ## デザイン原則

  - **角丸**: `rounded-lg` を基本に統一
  - **シャドウ**: `shadow-md` を最大に制限
  - **ホバー**: `bg-bg-mute` を使用（強い原色を避ける）
  - **トランジション**: `transition-colors` を必須化
  - **透明度**: `/90` などの透明度は使わず、専用トークンを使用

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
