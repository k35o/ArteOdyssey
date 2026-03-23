# カラーシステム

ArteOdyssey のカラーは「穏やかさ」を第一に設計されている。

## 設計思想

- **60-30-10 ルール**: 60% ニュートラル（グレー系）、30% サポート（bg-subtle 等）、10% アクセント（primary/secondary）
- Primary に Teal、Secondary に Cyan を使用
- ダークモードは「ライトモードの反転」ではなく、独立したトーンで設計

## セマンティックカラー（前景）

| Tailwind クラス | Light | Dark | 用途 |
|-----------------|-------|------|------|
| `text-fg-base` | gray-900 | gray-50 | 基本テキスト |
| `text-fg-subtle` | gray-400 | gray-500 | プレースホルダー |
| `text-fg-mute` | gray-700 | gray-300 | 補足テキスト |
| `text-fg-inverse` | gray-50 | gray-900 | 反転テキスト |
| `text-fg-info` | blue-700 | blue-300 | 情報 |
| `text-fg-success` | green-700 | green-300 | 成功 |
| `text-fg-warning` | yellow-700 | yellow-300 | 警告 |
| `text-fg-error` | red-700 | red-300 | エラー |

## セマンティックカラー（背景）

| Tailwind クラス | Light | Dark | 用途 |
|-----------------|-------|------|------|
| `bg-bg-base` | white | gray-900 | 基本背景 |
| `bg-bg-subtle` | gray-100 | gray-800 | 控えめな背景 |
| `bg-bg-mute` | gray-200 | gray-700 | ホバー状態用 |
| `bg-bg-emphasize` | gray-300 | gray-600 | アクティブ状態用 |
| `bg-bg-inverse` | gray-900 | white | 反転背景 |
| `bg-bg-info` | blue-100 | blue-900 | 情報背景 |
| `bg-bg-success` | green-100 | green-900 | 成功背景 |
| `bg-bg-warning` | yellow-100 | yellow-900 | 警告背景 |
| `bg-bg-error` | red-100 | red-900 | エラー背景 |

## セマンティックカラー（ボーダー）

| Tailwind クラス | Light | Dark | 用途 |
|-----------------|-------|------|------|
| `border-border-base` | gray-400 | gray-600 | 標準ボーダー |
| `border-border-subtle` | gray-100 | gray-900 | 薄いボーダー |
| `border-border-mute` | gray-200 | gray-800 | 控えめボーダー |
| `border-border-emphasize` | gray-500 | gray-500 | 強調ボーダー |
| `border-border-inverse` | gray-700 | gray-300 | 反転ボーダー |
| `border-border-info` | blue-500 | blue-500 | 情報ボーダー |
| `border-border-success` | green-500 | green-500 | 成功ボーダー |
| `border-border-warning` | yellow-500 | yellow-500 | 警告ボーダー |
| `border-border-error` | red-500 | red-500 | エラーボーダー |

## ブランドカラー（Primary: Teal）

| Tailwind クラス | Light | Dark | 用途 |
|-----------------|-------|------|------|
| `text-primary-fg` | teal-700 | teal-300 | Primary テキスト |
| `bg-primary-bg` | teal-300 | teal-700 | Primary 背景 |
| `bg-primary-bg-subtle` | teal-100 | teal-900 | 薄い Primary 背景 |
| `bg-primary-bg-mute` | teal-200 | teal-800 | 控えめ Primary 背景 |
| `bg-primary-bg-emphasize` | teal-300 | teal-700 | 強調 Primary 背景 |
| `border-primary-border` | teal-600 | teal-600 | Primary ボーダー |

## ブランドカラー（Secondary: Cyan）

| Tailwind クラス | Light | Dark | 用途 |
|-----------------|-------|------|------|
| `text-secondary-fg` | cyan-700 | cyan-300 | Secondary テキスト |
| `bg-secondary-bg` | cyan-300 | cyan-700 | Secondary 背景 |
| `bg-secondary-bg-subtle` | cyan-100 | cyan-900 | 薄い Secondary 背景 |
| `bg-secondary-bg-mute` | cyan-200 | cyan-800 | 控えめ Secondary 背景 |
| `bg-secondary-bg-emphasize` | cyan-300 | cyan-700 | 強調 Secondary 背景 |
| `border-secondary-border` | cyan-600 | cyan-600 | Secondary ボーダー |

## グループカラー（データ可視化用）

| Tailwind クラス | Light | Dark | 用途 |
|-----------------|-------|------|------|
| `text-group-primary` | teal-700 | teal-300 | グループ1 |
| `text-group-secondary` | cyan-700 | cyan-300 | グループ2 |
| `text-group-tertiary` | pink-700 | pink-300 | グループ3 |
| `text-group-quaternary` | purple-700 | purple-300 | グループ4 |

## やってはいけないこと

- グラデーション背景（`bg-gradient-to-*`）
- 彩度の高い色の広範囲使用（アクセントは小面積で）
- 透明度による状態表現（`/90`, `/80` など）— 専用のセマンティックカラーを使う
- ホバーに `bg-primary-bg` を使う — `bg-bg-mute` を優先
- ダークモードで単純にカラーを反転させる
