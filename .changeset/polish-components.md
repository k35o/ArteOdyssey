---
"@k8o/arte-odyssey": major
---

デザインシステム全体を「静謐で落ち着いた、余白を活かしたUI」原則に基づいて刷新

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
