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

## デザインの方向性

まず、作ろうとしている UI の**目的**・**トーン**・**制約**を明確にする。

- **目的**: このページ/コンポーネントは何を達成するのか？
- **トーン**: 静謐で落ち着いた雰囲気。「図書館の読書スペース」のような空気感
- **制約**: ArteOdyssey デザインシステムのトークンとコンポーネントを使う
- **差別化**: 量産型の「AIが作った感」のあるUIとは一線を画す

## コアコンセプト

**「静謐で落ち着いた、余白を活かしたUI」**

### 引き算の美学
- 装飾は最小限。必要なものだけ残す
- 要素を追加する前に「これは本当に必要か？」と問う
- 3つのカードより、1つの明確なコンテンツブロックの方がいい場合がある

### 余白で語る
- 詰め込まず、空間にゆとりを持たせる
- 余白の差で情報の関連度と階層を表現する（[スペーシング詳細](references/spatial-design.md)）

### 静かな変化
- アニメーションは控えめに、繊細なフィードバック
- 150–200ms のトランジション、bounce/spring は使わない（[インタラクション詳細](references/interaction-design.md)）

### 穏やかな色
- 目に優しいトーン、グレー系を活かす
- Primary は Teal、アクセントは控えめに使う（[カラー詳細](references/color.md)）

## クイックスタート

```bash
npm install @k8o/arte-odyssey
```

```tsx
import '@k8o/arte-odyssey/styles.css';
import { ArteOdysseyProvider } from '@k8o/arte-odyssey/providers';
import { Button } from '@k8o/arte-odyssey/button';
```

## 美学ガイドライン

### タイポグラフィ

**DO:**
- 日本語フォント（Noto Sans JP, M PLUS 2）を使う
- フォントウェイトは 3種類まで（normal, medium, bold）
- `font-medium` が 450 であることを活かした繊細な強調

**DON'T:**
- Inter / Roboto / Open Sans を使う
- 4種類以上のフォントサイズを1画面で使う
- テキストにグラデーションをかける

→ [タイポグラフィ詳細](references/typography.md)

### カラー

**DO:**
- 60-30-10 ルール（ニュートラル60%, サポート30%, アクセント10%）
- セマンティックカラートークンを使う（`bg-bg-subtle`, `text-fg-mute` 等）
- ダークモードを独立したトーンで設計する

**DON'T:**
- グラデーション背景
- ホバーに `bg-primary-bg` — `bg-bg-mute` を使う
- 透明度(`/90`)で状態表現 — 専用トークンを使う

→ [カラー詳細](references/color.md)

### スペーシング

**DO:**
- `p-6` を標準パディングとする
- 余白の差で関連度を表す（`mt-2` 近い、`mt-4` 標準、`mt-8` セクション間）
- Separator でセクションを区切る

**DON'T:**
- すべてを Card に入れる
- Card を入れ子にする
- `gap-1` のような極端に狭いスペーシング

→ [スペーシング詳細](references/spatial-design.md)

### インタラクション

**DO:**
- `transition-colors` を基本にする
- `focus-visible:ring-2 focus-visible:ring-border-info` でフォーカス表現
- `hover:bg-bg-mute` で穏やかなホバー

**DON'T:**
- bounce / spring 系のイージング
- 300ms を超えるアニメーション
- ホバーに強い原色を使う

→ [インタラクション詳細](references/interaction-design.md)

## アンチパターン: 「AI スロップ」を避ける

以下は AI が生成したと一目でわかる特徴。ArteOdyssey ではこれらを避ける。

| アンチパターン | ArteOdyssey での代替 |
|---------------|---------------------|
| パープルグラデーション | Teal/Cyan のフラットカラー |
| Card in Card（入れ子カード） | Separator + 余白で区切り |
| グレー背景にグレーテキスト | `text-fg-base` / `text-fg-mute` のコントラスト確保 |
| すべてに `rounded-2xl` | `rounded-lg` を基本、用途で使い分け |
| bounce / spring アニメーション | `transition-colors duration-150 ease-out` |
| Inter フォント | Noto Sans JP / M PLUS 2 |
| 過剰な glassmorphism | border + subtle な背景色 |
| 装飾的な絵文字やアイコン | lucide-react の線画アイコンを控えめに |
| 情報の詰め込み | 余白を活かした疎な配置 |

### AI スロップテスト

> このUIを誰かに見せて「AIが作った」と言ったら、すぐに信じるだろうか？
> もし「はい」なら、それが問題だ。

## コンポーネント使用の原則

### Button / LinkButton

`color` と `variant` で統一されたスタイル。

```tsx
// プライマリアクション
<Button color="primary" variant="contained">保存する</Button>

// セカンダリアクション
<Button color="gray" variant="outlined">キャンセル</Button>

// テキストのみ
<Button variant="skeleton">詳細を見る</Button>
```

### IconButton / IconLink

`bg` prop でスタイルを制御（`variant` ではない）。

```tsx
<IconButton bg="transparent" label="コピー"><CopyIcon /></IconButton>
<IconButton bg="primary" label="送信"><SendIcon /></IconButton>
<IconLink href="/home" bg="base" label="ホーム"><HomeIcon /></IconLink>
```

### Card

シャドウまたはボーダーで区切り。`appearance` prop で切り替え。

```tsx
<Card title="設定" appearance="bordered">
  <p>カードのコンテンツ</p>
</Card>

// クリック可能なカード
<InteractiveCard title="記事" appearance="shadow">
  <p>ホバーでスケールアップ</p>
</InteractiveCard>
```

### フォーム

```tsx
<TextField id="email" placeholder="example@mail.com" />
<Separator className="my-8" />
<FileField.Root accept="image/*" multiple>
  <FileField.Trigger>ファイルを選択</FileField.Trigger>
  <FileField.ItemList />
</FileField.Root>
```

## 実装の原則

- **既存コンポーネントを使う**: カスタムUIの前にまず ArteOdyssey コンポーネントを探す
- **セマンティックトークンを使う**: 生のカラー値（`bg-teal-500`）ではなくトークン（`bg-primary-bg`）
- **クリエイティブに解釈する**: デザインシステムの範囲内で、視覚的に面白い組み合わせを探る
- **よくある選択に収束しない**: コードの複雑さがビジョンに見合うなら、それは正しい判断

## 詳細リファレンス

- タイポグラフィ: [references/typography.md](references/typography.md)
- カラーシステム: [references/color.md](references/color.md)
- スペーシング・レイアウト: [references/spatial-design.md](references/spatial-design.md)
- インタラクション: [references/interaction-design.md](references/interaction-design.md)
- コンポーネント一覧: [references/components.md](references/components.md)
