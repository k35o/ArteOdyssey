# ArteOdyssey デザイン原則

## コアコンセプト

**「静謐で落ち着いた、余白を活かしたUI」**

k8oの個人Webサイト開発のためのUIライブラリ。アクセシビリティとパフォーマンスを前提に、ミニマルで統一感のあるUIを提供する。

---

## デザイン原則

### 1. 引き算の美学
装飾は最小限に。要素を減らし、本当に必要なものだけを残す。

- グラデーションは使わない
- シャドウは控えめに（`shadow-md` まで）
- アイコンや装飾は意味があるときだけ使う
- 情報の優先度を明確にし、不要な要素は削る

### 2. 余白で語る
詰め込まず、空間にゆとりを持たせて読みやすさを確保する。

- コンポーネント間には十分なスペースを取る
- 一画面の情報量は少なめに、スクロールを許容する
- テキストの行間もゆったりと

### 3. 静かな変化
アニメーションは控えめに。派手な動きより、繊細なフィードバックを。

- `transition-colors` を基本とし、滑らかな状態変化を実現
- トランジションは150〜200msを基本とする
- bounce、spring系のアニメーションは避ける

### 4. 穏やかな色
目に優しいトーン。コントラストは必要十分に。

- 彩度は控えめに
- ホバー・フォーカス状態は `bg-bg-mute` など穏やかな色で
- 強い原色（`primary-fg`）より柔らかい色（`primary-bg`）を優先
- 透明度（`/90` など）は使わず、専用のトークンを使用

---

## スタイルトークン

### 角丸
統一感のある `rounded-lg` を基本とする。

| 用途 | トークン | 備考 |
|------|----------|------|
| 小さい要素（Badge等） | `rounded-sm` | |
| **標準（Button、Input、Card等）** | `rounded-lg` | 基本はこれ |
| プログレスバー、スライダー | `rounded-full` | ピル型 |
| 円形ボタン（IconButton等） | `rounded-full` | |

### シャドウ
基本的には使わない。使う場合も `shadow-md` まで。

| 用途 | 使用 |
|------|------|
| Card | border のみ（`border-border-mute`） |
| Modal/Dialog | `shadow-md` |
| Dropdown/Tooltip/ListBox | `shadow-md` |
| Button | なし |
| Popover | `shadow-md` |

### インタラクティブ状態
穏やかな色変化で、強すぎない視覚フィードバックを。

| 状態 | スタイル |
|------|----------|
| ホバー | `hover:bg-bg-mute` または `hover:bg-bg-subtle` |
| フォーカス | `focus-visible:ring-2 focus-visible:ring-border-info` |
| アクティブ | `active:bg-bg-emphasize` |
| 選択済み | `text-fg-success`（チェックマーク等） |

**重要**: 強い原色（`bg-primary-bg`）はホバー状態には使わない。`bg-bg-mute` を優先する。

### トランジション
すべてのインタラクティブ要素に `transition-colors` を付与。

```
transition-colors  // 色の変化
transition-all     // サイズ変化を伴う場合（Progress等）
```

### 余白
ゆったりとした余白を基本とする。

| 用途 | サイズ |
|------|--------|
| コンポーネント内部 | `p-4` 〜 `p-8` |
| テキスト間 | `mt-2` 〜 `mt-4` |
| セクション間 | `mt-8` 〜 `mt-12` |
| リストアイテム | `px-3 py-2` |

### ボーダー
細めで控えめな色を使用。

| 用途 | スタイル |
|------|----------|
| 区切り線（Separator） | `bg-border-base`（色選択可能） |
| カード・ダイアログ | `border border-border-mute` |
| Input | `border border-border-base` |
| フォーカス | `ring-2 ring-border-info` |
| ボタン | `border-2`（outlined時） |

---

## カラーパレット

### ブランドカラー
- **Primary**: Teal（落ち着きと信頼感）
- **Secondary**: Cyan（アクセント）

### プライマリカラーの使い分け

| トークン | 用途 | 強さ |
|----------|------|------|
| `primary-bg` | プログレスバー、アクセント背景 | 柔らかい |
| `primary-border` | ボーダー、アンダーライン | 中間 |
| `primary-fg` | テキスト、重要なアイコン | 強い |

### 背景色の使い分け

| トークン | 用途 |
|----------|------|
| `bg-base` | 基本背景 |
| `bg-subtle` | 軽い強調（ボタン背景等） |
| `bg-mute` | ホバー状態、選択状態 |
| `bg-emphasize` | アクティブ状態 |

---

## コンポーネント設計指針

### プロップの統一

**Button系**
- `Button` と `LinkButton` は同じ `color`・`variant`・`size` を持つ
- `color`: `'primary' | 'gray'`
- `variant`: `'contained' | 'outlined' | 'skeleton'`

**IconButton系**
- `IconButton` と `IconLink` は同じ `bg`・`size` を持つ
- `bg`: `'transparent' | 'base' | 'primary'`

### Do（推奨）
- シンプルなプロップ設計
- セマンティックなHTML要素の使用
- キーボード操作への対応
- 適切なARIA属性の付与
- `transition-colors` で滑らかな状態変化
- 穏やかなホバー色（`bg-bg-mute`）

### Don't（避ける）
- 過度な装飾やアニメーション
- 複雑なネスト構造
- 強すぎるホバー色（`bg-primary-bg` をホバーに使う）
- 透明度による状態表現（`/90` など）
- `shadow-xl` 以上の強いシャドウ
- 情報の詰め込み

---

## Storybook ガイドライン

### 日本語での具体例
ストーリーは日本語で具体的な例を示す。

```tsx
// Good
options={[
  { key: '1', label: 'りんご' },
  { key: '2', label: 'バナナ' },
]}

// Avoid
options={[
  { key: '1', label: 'Option 1' },
  { key: '2', label: 'Option 2' },
]}
```

### Uncontrolled を優先
ストーリーでは `defaultValue` を使用し、シンプルに。

```tsx
// Good
args: {
  defaultValue: 'initial',
}

// Avoid
render: () => {
  const [value, setValue] = useState('');
  return <Input value={value} onChange={setValue} />;
}
```

---

## 参考キーワード

静謐 / ミニマル / 余白 / 控えめ / 落ち着き / 穏やか / 引き算 / 繊細 / 統一感
