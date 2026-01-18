# ArteOdyssey デザイントークン

## カラートークン

### ベースカラー

| 変数 | Light | Dark | 用途 |
|------|-------|------|------|
| `--gray-50` | #fafafa | - | 最も明るいグレー |
| `--gray-100` | #f4f4f5 | - | |
| `--gray-200` | #e4e4e7 | - | |
| `--gray-300` | #d4d4d8 | - | |
| `--gray-400` | #a1a1aa | - | |
| `--gray-500` | #71717a | - | |
| `--gray-600` | #52525b | - | |
| `--gray-700` | #3f3f46 | - | |
| `--gray-800` | #27272a | - | |
| `--gray-900` | #18181b | - | 最も暗いグレー |

### セマンティックカラー（前景）

| Tailwind クラス | Light | Dark | 用途 |
|-----------------|-------|------|------|
| `text-fg-base` | gray-900 | gray-50 | 基本テキスト |
| `text-fg-subtle` | gray-400 | gray-500 | プレースホルダー等 |
| `text-fg-mute` | gray-700 | gray-300 | 補足テキスト |
| `text-fg-inverse` | gray-50 | gray-900 | 反転テキスト |
| `text-fg-info` | blue-700 | blue-300 | 情報 |
| `text-fg-success` | green-700 | green-300 | 成功 |
| `text-fg-warning` | yellow-700 | yellow-300 | 警告 |
| `text-fg-error` | red-700 | red-300 | エラー |

### セマンティックカラー（背景）

| Tailwind クラス | Light | Dark | 用途 |
|-----------------|-------|------|------|
| `bg-bg-base` | white | gray-900 | 基本背景 |
| `bg-bg-subtle` | gray-100 | gray-800 | 控えめな背景 |
| `bg-bg-mute` | gray-200 | gray-700 | さらに控えめ |
| `bg-bg-emphasize` | gray-300 | gray-600 | 強調背景 |
| `bg-bg-inverse` | gray-900 | white | 反転背景 |

### セマンティックカラー（ボーダー）

| Tailwind クラス | Light | Dark | 用途 |
|-----------------|-------|------|------|
| `border-border-base` | gray-400 | gray-600 | 標準ボーダー |
| `border-border-subtle` | gray-100 | gray-900 | 薄いボーダー |
| `border-border-mute` | gray-200 | gray-800 | 控えめボーダー |
| `border-border-emphasize` | gray-500 | gray-500 | 強調ボーダー |

### ブランドカラー（Primary: Teal）

| Tailwind クラス | Light | Dark | 用途 |
|-----------------|-------|------|------|
| `text-primary-fg` | teal-700 | teal-300 | Primary テキスト |
| `bg-primary-bg` | teal-300 | teal-700 | Primary 背景 |
| `bg-primary-bg-subtle` | teal-100 | teal-900 | 薄い Primary 背景 |
| `bg-primary-bg-mute` | teal-200 | teal-800 | 控えめ Primary 背景 |
| `border-primary-border` | teal-600 | teal-600 | Primary ボーダー |

### ブランドカラー（Secondary: Cyan）

| Tailwind クラス | Light | Dark | 用途 |
|-----------------|-------|------|------|
| `text-secondary-fg` | cyan-700 | cyan-300 | Secondary テキスト |
| `bg-secondary-bg` | cyan-300 | cyan-700 | Secondary 背景 |
| `bg-secondary-bg-subtle` | cyan-100 | cyan-900 | 薄い Secondary 背景 |
| `border-secondary-border` | cyan-600 | cyan-600 | Secondary ボーダー |

## サイズトークン

### 角丸

| Tailwind クラス | 値 | 用途 |
|-----------------|-----|------|
| `rounded-sm` | 0.375rem (6px) | Badge, Tag 等 |
| `rounded-md` | 0.5rem (8px) | Button, Input |
| `rounded-lg` | 0.75rem (12px) | Card, Modal |

### フォントサイズ

| Tailwind クラス | 値 | 用途 |
|-----------------|-----|------|
| `text-xs` | 0.75rem | 注釈 |
| `text-sm` | 0.875rem | 補足テキスト |
| `text-md` | 1rem | 本文（デフォルト） |
| `text-lg` | 1.125rem | 小見出し |
| `text-xl` | 1.25rem | 見出し |
| `text-2xl` | 1.5rem | 大見出し |
| `text-3xl` | 1.875rem | タイトル |

### フォントウェイト

| Tailwind クラス | 値 | 用途 |
|-----------------|-----|------|
| `font-normal` | 400 | 本文 |
| `font-medium` | 450 | 強調テキスト |
| `font-bold` | 700 | 見出し、ボタン |

## トランジション

| 用途 | 推奨設定 |
|------|----------|
| ホバー色変化 | `transition-colors duration-150 ease-out` |
| 透過度変化 | `transition-opacity duration-200 ease-out` |
| 全般 | `transition-all duration-150 ease-out` |

## フォーカススタイル

```tsx
className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border-info"
```
