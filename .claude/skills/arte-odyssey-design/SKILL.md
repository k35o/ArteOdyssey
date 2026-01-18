---
name: arte-odyssey-design
description: |
  ArteOdyssey デザインシステムに従ったフロントエンドUI作成。
  「静謐で落ち着いた、余白を活かしたUI」を原則とするミニマルなデザイン。

  Use when:
  - ArteOdyssey を使った React コンポーネントやページを作成するとき
  - k8o の Web サイト用の UI を実装するとき
  - ミニマルで統一感のあるインターフェースが必要なとき

  特徴: Teal/Cyan カラー、控えめなアニメーション、ゆったりした余白、日本語最適化
---

# ArteOdyssey Design Skill

ArteOdyssey デザインシステムに沿った UI を作成するためのスキル。

## コアコンセプト

**「静謐で落ち着いた、余白を活かしたUI」**

- **引き算の美学**: 装飾は最小限。必要なものだけ残す
- **余白で語る**: 詰め込まず、空間にゆとりを持たせる
- **静かな変化**: アニメーションは控えめに、繊細なフィードバック
- **穏やかな色**: 目に優しいトーン、グレー系を活かす

## 実装ガイドライン

### インストール

```bash
npm install @k8o/arte-odyssey
```

```tsx
import '@k8o/arte-odyssey/styles.css';
import { ArteOdysseyProvider } from '@k8o/arte-odyssey/providers';
import { Button } from '@k8o/arte-odyssey/button';
```

### カラー

Primary は Teal、Secondary は Cyan。状態色は標準的なセマンティックカラー。

```tsx
// 背景（強度順）
className="bg-bg-base"      // 基本背景（白/黒）
className="bg-bg-subtle"    // 軽い強調
className="bg-bg-mute"      // ホバー状態用
className="bg-bg-emphasize" // アクティブ状態用

// プライマリカラー（強度順）
className="bg-primary-bg"     // 柔らかい（プログレスバー等）
className="border-primary-border" // 中間（アンダーライン等）
className="text-primary-fg"   // 強い（テキスト等）

// テキスト
className="text-fg-base"    // 基本テキスト
className="text-fg-mute"    // 控えめなテキスト

// ボーダー
className="border-border-mute"  // 控えめな区切り
className="border-border-base"  // 標準の区切り
```

### 角丸

**`rounded-lg` を基本とする。**

| 用途 | クラス |
|------|--------|
| Badge 等小さい要素 | `rounded-sm` |
| **Button, Input, Card, Modal** | `rounded-lg` |
| プログレスバー、IconButton | `rounded-full` |

### シャドウ

基本的に使わない。使う場合は `shadow-md` まで。

| 用途 | スタイル |
|------|----------|
| Card | border のみ (`border border-border-mute`) |
| Modal/Dialog/Tooltip | `shadow-md` |
| Dropdown/ListBox | `shadow-md` |
| Button | なし |

### インタラクティブ状態

穏やかな色変化で、強すぎない視覚フィードバックを。

```tsx
// ホバー → bg-bg-mute（強い色を使わない）
className="hover:bg-bg-mute"

// フォーカス → ring で表現
className="focus-visible:ring-2 focus-visible:ring-border-info"

// アクティブ
className="active:bg-bg-emphasize"

// 必ず transition-colors を付ける
className="transition-colors hover:bg-bg-mute"
```

**重要**: ホバーに `bg-primary-bg` など強い色を使わない。`bg-bg-mute` を優先。

### 余白

ゆったりと。

```tsx
// コンポーネント内部
className="p-6"  // 標準
className="p-8"  // ゆったり

// リストアイテム
className="px-3 py-2"

// テキスト間
className="mt-2" // 狭め
className="mt-4" // 標準

// セクション間
className="mt-8"  // 標準
className="mt-12" // 広め
```

### アニメーション

控えめで自然な動き。

```tsx
// 色の変化（基本）
className="transition-colors"

// サイズ変化を伴う場合
className="transition-all"
```

- 150〜200ms を基本
- bounce, spring 系は避ける
- 必要なフィードバックのみ

### フォント

日本語フォント対応（Noto Sans JP, M PLUS 2）。ウェイトは控えめに。

| 用途 | クラス |
|------|--------|
| 本文 | デフォルト |
| 強調 | `font-medium` (450) |
| 見出し | `font-bold` (700) |

## コンポーネント使用例

### Button / LinkButton

`color` と `variant` で統一されたスタイル。

```tsx
import { Button } from '@k8o/arte-odyssey/button';
import { LinkButton } from '@k8o/arte-odyssey/link-button';

// プライマリボタン
<Button color="primary" variant="contained">
  保存する
</Button>

// グレーボタン
<Button color="gray" variant="outlined">
  キャンセル
</Button>

// スケルトン（テキストのみ）
<Button variant="skeleton">
  詳細を見る
</Button>

// リンクボタン（同じ props）
<LinkButton href="/settings" color="gray">
  設定へ
</LinkButton>
```

### IconButton / IconLink

`bg` でスタイルを統一。

```tsx
import { IconButton } from '@k8o/arte-odyssey/icon-button';
import { IconLink } from '@k8o/arte-odyssey/icon-link';
import { CopyIcon } from '@k8o/arte-odyssey/icons';

<IconButton bg="transparent" label="コピー">
  <CopyIcon />
</IconButton>

<IconButton bg="primary" label="送信">
  <SendIcon />
</IconButton>

<IconLink href="/home" bg="base" label="ホーム">
  <HomeIcon />
</IconLink>
```

### Card

シャドウなし、ボーダーのみ。

```tsx
import { Card } from '@k8o/arte-odyssey/card';

<Card title="設定">
  <p>カードのコンテンツ</p>
</Card>
```

### TextField

```tsx
import { TextField } from '@k8o/arte-odyssey/text-field';

<TextField
  id="email"
  defaultValue=""
  placeholder="example@mail.com"
/>
```

### Separator

色を選択可能。

```tsx
import { Separator } from '@k8o/arte-odyssey/separator';

<Separator />                    // base（デフォルト）
<Separator color="mute" />       // より控えめ
<Separator color="subtle" />     // さらに控えめ
<Separator orientation="vertical" />
```

## やってはいけないこと

- グラデーション
- 強いシャドウ (`shadow-xl` 以上)
- ホバーに強い原色 (`bg-primary-bg`)
- 透明度による状態表現 (`/90` など)
- 長いアニメーション (300ms超)
- 情報の詰め込み
- 彩度の高い色の多用

## 詳細リファレンス

- デザイン原則: [DESIGN_PRINCIPLES.md](../../../DESIGN_PRINCIPLES.md)
- デザイントークン一覧: [references/tokens.md](references/tokens.md)
- 利用可能コンポーネント: [references/components.md](references/components.md)
