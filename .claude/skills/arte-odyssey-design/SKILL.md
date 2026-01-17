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
// 背景
className="bg-bg-base"      // 基本背景（白/黒）
className="bg-bg-subtle"    // 控えめな背景
className="bg-bg-mute"      // さらに控えめ

// テキスト
className="text-fg-base"    // 基本テキスト
className="text-fg-mute"    // 控えめなテキスト
className="text-primary-fg" // アクセント

// ボーダー
className="border-border-mute"  // 控えめな区切り
```

### 角丸

控えめな丸み。

| 用途 | クラス |
|------|--------|
| Badge 等小さい要素 | `rounded-sm` (0.375rem) |
| Button, Input | `rounded-md` (0.5rem) |
| Card, Modal | `rounded-lg` (0.75rem) |

### シャドウ

基本的に使わない。使う場合は薄く。

- Card: `shadow-sm` または border のみ
- Modal/Dialog: `shadow-md`
- Button: なし

### 余白

ゆったりと。

```tsx
// コンポーネント内部
className="p-6"  // 標準
className="p-8"  // ゆったり

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
className="transition-colors duration-150 ease-out"  // ホバー
className="transition-opacity duration-200 ease-out" // フェード
```

- 150ms 以下を基本
- bounce, spring 系は避ける
- 必要なフィードバックのみ

### フォント

日本語フォント対応（Noto Sans JP, M PLUS 2）。ウェイトは控えめに。

| 用途 | クラス |
|------|--------|
| 本文 | `font-normal` |
| 強調 | `font-medium` (450) |
| 見出し | `font-bold` (700) |

## コンポーネント使用例

### Button

```tsx
import { Button } from '@k8o/arte-odyssey/button';

<Button size="md" color="primary" variant="contained">
  保存する
</Button>

<Button variant="outlined" color="gray">
  キャンセル
</Button>

<Button variant="skeleton">
  詳細を見る
</Button>
```

### Card

```tsx
import { Card } from '@k8o/arte-odyssey/card';

<Card title="設定">
  <div className="p-6">
    {/* コンテンツ */}
  </div>
</Card>
```

### TextField

```tsx
import { TextField } from '@k8o/arte-odyssey/text-field';

<TextField
  label="メールアドレス"
  placeholder="example@mail.com"
  value={value}
  onChange={onChange}
/>
```

## やってはいけないこと

- 過度なグラデーション
- 派手なシャドウ (shadow-lg, shadow-xl)
- 長いアニメーション (300ms超)
- 情報の詰め込み
- 彩度の高い色の多用

## 詳細リファレンス

- デザイントークン一覧: [references/tokens.md](references/tokens.md)
- 利用可能コンポーネント: [references/components.md](references/components.md)
