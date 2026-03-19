# ArteOdyssey 不足コンポーネント分析

shadcn/ui, Radix UI, Chakra UI, React Aria との比較に基づく。

## 現在の ArteOdyssey コンポーネント一覧

### 一般コンポーネント (36)
Accordion, Alert, Anchor, Avatar, Badge, BaselineStatus, Breadcrumb, Button,
Card (+ InteractiveCard), Code, Dialog, Drawer, DropdownMenu, ErrorBoundary,
Heading, IconButton, IconLink, Icons, LinkButton, ListBox, Modal, Popover,
Progress, Providers, ScrollLinked, Separator, Skeleton, Spinner, Tabs, Toast,
Tooltip

### フォームコンポーネント (12)
Autocomplete, Checkbox, CheckboxGroup, FileField, FormControl, NumberField,
RadioGroup, Select, Slider, Switch, TextField, Textarea

### カスタムフック (12)
useClickAway, useClient, useClipboard, useHash, useInterval, useLocalStorage,
useResize, useScrollDirection, useStep, useTimeout, useWindowResize, useWindowSize

---

## 不足コンポーネント

### 優先度: 高 (3ライブラリ以上が提供)

| コンポーネント | shadcn | Radix | Chakra | React Aria | 概要 |
|---|---|---|---|---|---|
| **Switch** | o | o | o | o | On/Off トグル。Checkbox と似ているが意味的に異なる |
| **Avatar** | o | o | o | - | ユーザープロフィール画像 + フォールバック表示 |
| **Badge** | o | - | o | - | ステータスやカテゴリを示すラベル |
| **Slider** | o | o | o | o | 値の範囲選択（RangeField とは別のUI） |
| **Toggle / ToggleGroup** | o | o | o | o | 押下状態を持つボタン / そのグループ |
| **Skeleton** | o | - | o | - | ローディング中のプレースホルダー |
| **Label** | o | o | o | o | フォームフィールドのラベル（単独コンポーネント） |
| **AlertDialog** | o | o | - | - | 確認ダイアログ（Dialog のバリアント） |
| **ScrollArea** | o | o | o | - | カスタムスクロールバー付きスクロール領域 |
| **Table** | o | - | o | o | データテーブル |
| **ContextMenu** | o | o | o | - | 右クリックメニュー |
| **Menubar** | o | o | - | - | 水平メニューバー |
| **NavigationMenu** | o | o | - | - | ドロップダウン付きサイトナビゲーション |
| **HoverCard** | o | o | o | - | ホバーで表示されるカード |
| **Collapsible** | o | o | o | o | 開閉可能なセクション（Disclosure） |
| **RadioGroup** | o | o | o | o | 単一選択のラジオグループ |
| **CheckboxGroup** | - | - | - | o | Checkbox のグループラッパー |

### 優先度: 中 (2ライブラリが提供)

| コンポーネント | shadcn | Radix | Chakra | React Aria | 概要 |
|---|---|---|---|---|---|
| **Pagination** | o | - | o | - | ページネーション |
| **AspectRatio** | o | o | o | - | アスペクト比を維持するコンテナ |
| **Toolbar** | - | o | - | o | コントロール群をまとめるコンテナ |
| **Spinner** | o | - | o | - | ローディングスピナー |
| **Calendar** | o | - | o | o | カレンダー表示 |
| **DatePicker** | o | - | o | o | 日付入力 |
| **Combobox** | o | - | o | o | 検索可能な Select |
| **Sheet** | o | - | - | - | スライドアウトパネル（Drawer の別名的） |
| **Command** | o | - | - | - | コマンドパレット / 検索UI |
| **InputOTP / PinInput** | o | o | o | - | ワンタイムパスワード入力 |
| **TagsInput / TagGroup** | - | - | o | o | タグ入力 / タググループ |
| **SearchField** | - | - | - | o | 検索入力（クリアボタン付き） |
| **Carousel** | o | - | o | - | スライドショー |
| **Steps / Stepper** | - | - | o | - | ステップインジケータ |
| **Resizable** | o | - | o | - | リサイズ可能パネル |

### 優先度: 低 (1ライブラリのみ or ニッチ)

| コンポーネント | 提供元 | 概要 |
|---|---|---|
| **ColorPicker / ColorSwatch** | Chakra, React Aria | カラーピッカー |
| **Meter** | React Aria | メーター（Progress に似ているが意味が異なる） |
| **TreeView** | Chakra, React Aria | ツリー表示 |
| **GridList** | React Aria | グリッドレイアウトのリスト |
| **DataList / DataTable** | shadcn, Chakra | データ一覧表示 |
| **Stat** | Chakra | 統計値の表示 |
| **Timeline** | Chakra | タイムライン表示 |
| **QR Code** | Chakra | QRコード |
| **Marquee** | Chakra | マーキー（スクロールテキスト） |
| **EmptyState** | shadcn, Chakra | 空状態の表示 |
| **Rating** | Chakra | 星評価 |
| **Editable** | Chakra | インライン編集可能テキスト |
| **SegmentedControl** | Chakra | セグメントコントロール |
| **Kbd** | shadcn, Chakra | キーボードショートカット表示 |
| **Blockquote** | Chakra | 引用ブロック |
| **DropZone** | React Aria | ドラッグ&ドロップゾーン |
| **VisuallyHidden** | Radix, Chakra, React Aria | スクリーンリーダー向けのみ表示 |
| **PasswordInput** | Radix, Chakra | パスワード入力（表示/非表示トグル） |
| **ProgressCircle** | Chakra | 円形プログレス |
| **SkipNav** | Chakra | ナビゲーションスキップ |
| **Clipboard** | Chakra | クリップボードコピー（UI コンポーネントとして） |

---

## 不足フック

| フック | 提供元 | 概要 |
|---|---|---|
| **usePrevious** | Radix | 前回の値を保持 |
| **useControllableState** | Radix | Controlled/Uncontrolled 両対応の state |
| **useMediaQuery** | 一般的 | メディアクエリの監視 |
| **useFocusTrap** | Radix (FocusScope) | フォーカストラップ |
| **useEscapeKeydown** | Radix | Escape キーの監視 |
| **useDragAndDrop** | React Aria | ドラッグ&ドロップ |

## 実装状況サマリ

- Phase 1 は完了
- `TextTag` は `Badge` に統合して削除済み
- `RangeField` は `Slider` に置き換えて削除済み

### 完了済み

- Switch
- Avatar
- Badge
- Skeleton
- Spinner
- Slider

### 未着手

- Toggle / ToggleGroup
- Label
- AlertDialog
- ScrollArea
- Table
- ContextMenu
- Menubar
- NavigationMenu
- HoverCard
- Collapsible
- CheckboxGroup
- Pagination
- AspectRatio
- Toolbar
- Calendar
- DatePicker
- Combobox
- Sheet
- Command
- InputOTP / PinInput
- TagsInput / TagGroup
- SearchField
- Carousel
- Steps / Stepper

各コンポーネントは以下の 3 ステップで実装する。

### コンポーネント実装手順（各コンポーネント共通）

#### Step 1: コンポーネント作成 (arte-odyssey-design スキルを使用)

`/arte-odyssey-design` スキルを呼び出してコンポーネントを作成する。
スキルが参照するデザインガイドライン:

- **色**: セマンティックトークンのみ使用（`bg-bg-base`, `text-fg-mute` など）、60-30-10 ルール
- **余白**: 4pt 刻み（Tailwind: p-4/p-6/p-8）、余白で階層を表現
- **タイポグラフィ**: Noto Sans JP / M PLUS 2、最大 3 ウェイト
- **インタラクション**: "quiet change" 原則、8 つのインタラクティブ状態を網羅
- **アンチパターン**: グラデーション、高彩度色、opacity ベースの状態、過剰なアニメーション禁止

ファイル構成（CLAUDE.md のコンポーネントパターンに従う）:

```
packages/arte-odyssey/src/components/{component-name}/
  {component-name}.tsx          # 実装（アロー関数 + FC 型）
  {component-name}.stories.tsx  # Storybook ストーリー（テスト兼用）
  index.ts                      # re-export
```

- `cn()` ヘルパーで className を合成
- Props は native HTML 要素を extend
- compound component は dot notation（例: `Toggle.Group`）
- `useId()` でアクセシブルな ID 生成

#### Step 2: ライブラリのエクスポート設定

- `packages/arte-odyssey/package.json` の `exports` フィールドに追加
- `packages/arte-odyssey/src/components/index.ts` にエクスポート追加（必要に応じて）

#### Step 3: apps/docs のドキュメントページ作成

各コンポーネントのドキュメントページを以下の手順で追加する:

1. **ページファイル作成**: `apps/docs/src/pages/components/{component-name}-page.tsx`
   - 構成: Header → Import → Usage（ComponentPreview で複数例） → Props（PropsTable）
   - `<Heading>`, `<Separator>`, `<ComponentPreview>`, `<CodeBlock>`, `<PropsTable>`, `<T>` を使用

2. **プレビューファイル作成**（複雑なデモの場合）:
   `apps/docs/src/pages/components/_previews/{component-name}-previews.tsx`

3. **ルート追加**: `apps/docs/src/app.tsx` にルート定義を追加
   ```tsx
   { path: '/:locale/components/{component-name}', element: <ComponentNamePage /> }
   ```

4. **ナビゲーション追加**: `apps/docs/src/data/components-nav.ts` の適切なカテゴリに追加
   ```tsx
   { name: 'ComponentName', path: '/components/{component-name}' }
   ```

5. **i18n 追加**: `apps/docs/src/i18n/messages/en.ts` と `ja.ts` に翻訳キーを追加
   - `components.{componentName}.description`
   - 各セクション見出しの翻訳

---

### Phase 1: 基本 UI パーツ

完了

| # | コンポーネント | Status | Step 1 | Step 2 | Step 3 | 備考 |
|---|---|---|---|---|---|---|
| 1 | Switch | 完了 | `components/form/switch/` | exports 追加済み | switch-page.tsx | form カテゴリに追加済み |
| 2 | Avatar | 完了 | `components/avatar/` | exports 追加済み | avatar-page.tsx | data display カテゴリに追加済み |
| 3 | Badge | 完了 | `components/badge/` | exports 追加済み | badge-page.tsx | data display カテゴリに追加済み |
| 4 | Skeleton | 完了 | `components/skeleton/` | exports 追加済み | skeleton-page.tsx | feedback カテゴリに追加済み |
| 5 | Spinner | 完了 | `components/spinner/` | exports 追加済み | spinner-page.tsx | feedback カテゴリに追加済み |

### Phase 2: フォーム強化

| # | コンポーネント | Status | Step 1 | Step 2 | Step 3 | 備考 |
|---|---|---|---|---|---|---|
| 6 | Slider | 完了 | `components/form/slider/` | exports 追加済み | slider-page.tsx | form カテゴリに追加済み |
| 7 | RadioGroup | 完了 | `components/form/radio-group/` | exports 追加済み | radio-group-page.tsx | form カテゴリに追加済み |
| 8 | CheckboxGroup | 完了 | `components/form/checkbox-group/` | exports 追加済み | checkbox-page.tsx に統合 | form カテゴリに追加済み |
| 9 | Label | 未着手 | `components/form/label/` | exports 追加 | label-page.tsx | form カテゴリに追加 |
| 10 | SearchField | 未着手 | `components/form/search-field/` | exports 追加 | search-field-page.tsx | form カテゴリに追加 |

### Phase 3: ナビゲーション & レイアウト

| # | コンポーネント | Step 1 | Step 2 | Step 3 | 備考 |
|---|---|---|---|---|---|
| 11 | Pagination | `components/pagination/` | exports 追加 | pagination-page.tsx | navigation カテゴリに追加 |
| 12 | Table | `components/table/` | exports 追加 | table-page.tsx | data display カテゴリに追加 |
| 13 | ContextMenu | `components/context-menu/` | exports 追加 | context-menu-page.tsx | overlay カテゴリに追加 |
| 14 | NavigationMenu | `components/navigation-menu/` | exports 追加 | navigation-menu-page.tsx | navigation カテゴリに追加 |
| 15 | Collapsible | `components/collapsible/` | exports 追加 | collapsible-page.tsx | disclosure カテゴリに追加 |

### Phase 4: 高度なコンポーネント

| # | コンポーネント | Step 1 | Step 2 | Step 3 | 備考 |
|---|---|---|---|---|---|
| 16 | AlertDialog | `components/alert-dialog/` | exports 追加 | alert-dialog-page.tsx | overlay カテゴリに追加 |
| 17 | Combobox | `components/form/combobox/` | exports 追加 | combobox-page.tsx | Autocomplete と差別化 |
| 18 | Calendar | `components/calendar/` | exports 追加 | calendar-page.tsx | date/time カテゴリ新設 |
| 19 | Toggle / ToggleGroup | `components/toggle/` | exports 追加 | toggle-page.tsx | buttons カテゴリに追加 |
| 20 | HoverCard | `components/hover-card/` | exports 追加 | hover-card-page.tsx | overlay カテゴリに追加 |

### Phase 5: 補助的コンポーネント

| # | コンポーネント | Step 1 | Step 2 | Step 3 | 備考 |
|---|---|---|---|---|---|
| 21 | ScrollArea | `components/scroll-area/` | exports 追加 | scroll-area-page.tsx | layout カテゴリに追加 |
| 22 | Toolbar | `components/toolbar/` | exports 追加 | toolbar-page.tsx | layout カテゴリに追加 |
| 23 | TagsInput | `components/form/tags-input/` | exports 追加 | tags-input-page.tsx | form カテゴリに追加 |
| 24 | InputOTP | `components/form/input-otp/` | exports 追加 | input-otp-page.tsx | form カテゴリに追加 |
| 25 | Steps | `components/steps/` | exports 追加 | steps-page.tsx | navigation カテゴリに追加 |

---

## apps/docs ナビゲーションカテゴリ更新計画

`apps/docs/src/data/components-nav.ts` に以下のカテゴリ追加・更新が必要:

### 新規追加アイテム（既存カテゴリへ）

- **Buttons**: Toggle, ToggleGroup
- **Forms**: Switch, Slider, Label, SearchField, Combobox, TagsInput, InputOTP
  - RadioGroup / CheckboxGroup を group API として追加
- **Feedback**: Skeleton, Spinner
- **Overlays**: AlertDialog, ContextMenu, HoverCard
- **Data Display**: Avatar, Badge, Table
- **Navigation**: Pagination, NavigationMenu, Steps

### 新規カテゴリ

- **Layout**: ScrollArea, Toolbar, Collapsible
- **Date & Time**: Calendar（将来的に DatePicker も追加）

### i18n 対応

各コンポーネントにつき以下の翻訳キーを `en.ts` / `ja.ts` に追加:
- `components.{name}.description` — コンポーネントの説明
- 各 usage セクションの見出し
- カテゴリ名（新規カテゴリの場合）
