# カラーシステム

ArteOdyssey のカラーは OKLCH 色空間で定義され、穏やかなトーンでUIに出る。

## 設計思想

- **OKLCH パレット**: 全色を OKLCH で定義。明度（L）を全色相で統一し、同じステップ番号同士のコントラストが揃う
- **鮮やかなパレット、穏やかなトークン**: パレット自体は鮮やかに保ち、セマンティックトークンで抑えたトーンにマッピング
- **WCAG AAA 準拠**: fg/bg の組み合わせで 7:1 以上のコントラスト比を確保
- **60-30-10 ルール**: 60% ニュートラル（グレー系）、30% サポート（bg-subtle 等）、10% アクセント（primary）
- Primary に Teal（H:180）、Secondary に Cyan（H:210）を使用
- ダークモードは「ライトモードの反転」ではなく、独立したトーンで設計

## OKLCH パレット設計

明度スケール（全色相で共通）:

| Step | L | 用途 |
|------|------|------|
| 50 | 0.975 | 最も薄い背景 |
| 100 | 0.945 | 薄い背景 |
| 200 | 0.900 | 控えめな背景 |
| 300 | 0.840 | サポートカラー |
| 400 | 0.750 | 中間トーン |
| 500 | 0.660 | コアカラー |
| 600 | 0.575 | やや暗い |
| 700 | 0.490 | 暗いトーン |
| 800 | 0.410 | テキスト用（AAA on white） |
| 900 | 0.370 | 最も暗い |

Chroma は色相ごとに最適化（gamut 内で最大化）。

## セマンティックカラー（前景）

| Tailwind クラス | Light | Dark | 用途 |
|-----------------|-------|------|------|
| `text-fg-base` | gray-900 | gray-50 | 基本テキスト |
| `text-fg-subtle` | gray-400 | gray-500 | プレースホルダー |
| `text-fg-mute` | gray-700 | gray-300 | 補足テキスト |
| `text-fg-inverse` | gray-50 | gray-900 | 反転テキスト |
| `text-fg-info` | blue-800 | blue-200 | 情報 |
| `text-fg-success` | green-800 | green-200 | 成功 |
| `text-fg-warning` | yellow-800 | yellow-200 | 警告 |
| `text-fg-error` | red-800 | red-200 | エラー |

## セマンティックカラー（背景）

| Tailwind クラス | Light | Dark | 用途 |
|-----------------|-------|------|------|
| `bg-bg-base` | white | gray-900 | カード背景 |
| `bg-bg-subtle` | gray-100 | gray-800 | ページ背景 |
| `bg-bg-mute` | gray-200 | gray-700 | ホバー状態用 |
| `bg-bg-emphasize` | gray-300 | gray-600 | アクティブ状態用 |
| `bg-bg-inverse` | gray-900 | white | 反転背景 |
| `bg-bg-info` | blue-100 | blue-900 | 情報背景 |
| `bg-bg-success` | green-100 | green-900 | 成功背景 |
| `bg-bg-warning` | yellow-100 | yellow-900 | 警告背景 |
| `bg-bg-error` | red-100 | red-900 | エラー背景 |

## ブランドカラー（Primary: Teal H:180）

| Tailwind クラス | Light | Dark | 用途 |
|-----------------|-------|------|------|
| `text-primary-fg` | teal-800 | teal-100 | Primary テキスト |
| `bg-primary-bg` | teal-200 | teal-800 | Primary 背景 |
| `bg-primary-bg-subtle` | teal-50 | teal-900 | 薄い Primary 背景 |
| `bg-primary-bg-mute` | teal-100 | teal-800 | 控えめ Primary 背景 |
| `bg-primary-bg-emphasize` | teal-200 | teal-700 | 強調 Primary 背景 |
| `border-primary-border` | teal-500 | teal-500 | Primary ボーダー |

## やってはいけないこと

- グラデーション背景（`bg-gradient-to-*`）
- 彩度の高い色の広範囲使用（アクセントは小面積で）
- 透明度による状態表現（`/90`, `/80` など）— 専用のセマンティックカラーを使う
- ホバーに `bg-primary-bg` を使う — `bg-bg-mute` を優先
- ダークモードで単純にカラーを反転させる
- 生のパレット色（`bg-teal-500`）を直接使う — セマンティックトークンを使う
