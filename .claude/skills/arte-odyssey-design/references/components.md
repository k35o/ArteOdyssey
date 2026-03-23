# ArteOdyssey コンポーネント一覧

## インポート方法

```tsx
// スタイルシート（必須）
import '@k8o/arte-odyssey/styles.css';

// プロバイダー（アプリルートで1回）
import { ArteOdysseyProvider } from '@k8o/arte-odyssey';

// 各コンポーネント
import { Button, Card, Dialog } from '@k8o/arte-odyssey';
```

## レイアウト・ナビゲーション

### Accordion

折りたたみ可能なセクション。コンパウンドコンポーネント。

```tsx
import { Accordion } from '@k8o/arte-odyssey';

<Accordion.Root>
  <Accordion.Item defaultOpen>
    <Accordion.Button>セクション1</Accordion.Button>
    <Accordion.Panel>コンテンツ</Accordion.Panel>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Button>セクション2</Accordion.Button>
    <Accordion.Panel>コンテンツ</Accordion.Panel>
  </Accordion.Item>
</Accordion.Root>
```

Props:
- `Accordion.Item`: `defaultOpen?: boolean`

### Breadcrumb

パンくずリスト。コンパウンドコンポーネント。

```tsx
import { Breadcrumb } from '@k8o/arte-odyssey';

<Breadcrumb.List size="md">
  <Breadcrumb.Item>
    <Breadcrumb.Link href="/">ホーム</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Separator />
  <Breadcrumb.Item>
    <Breadcrumb.Link href="/products">製品</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Separator />
  <Breadcrumb.Item>
    <Breadcrumb.Link href="/products/1" current>詳細</Breadcrumb.Link>
  </Breadcrumb.Item>
</Breadcrumb.List>
```

Props:
- `Breadcrumb.List`: `size?: 'sm' | 'md' | 'lg'`
- `Breadcrumb.Link`: `href: string`, `current?: boolean`, `component?: FC`（カスタムリンクコンポーネント）

### Card

コンテンツをグループ化するカード。

```tsx
import { Card } from '@k8o/arte-odyssey';

<Card variant="primary" width="full" appearance="shadow">
  <div className="p-6">コンテンツ</div>
</Card>
```

Props:
- `variant`: `'primary'` | `'secondary'`
- `width`: `'full'` | `'fit'`
- `appearance`: `'shadow'` | `'bordered'` — shadow はシャドウ付き、bordered はボーダーのみ

### InteractiveCard

ホバー・クリック操作可能なカード。Card と同じ Props。

```tsx
import { InteractiveCard } from '@k8o/arte-odyssey';

<InteractiveCard variant="primary">
  <div className="p-6">ホバーでスケールアップ</div>
</InteractiveCard>
```

- `hover:scale-[1.02]`, `active:scale-[0.98]` のスケール変化付き

### Tabs

タブ切り替え。コンパウンドコンポーネント。

```tsx
import { Tabs } from '@k8o/arte-odyssey';

<Tabs.Root ids={['tab1', 'tab2']} defaultSelectedId="tab1">
  <Tabs.List label="タブナビゲーション">
    <Tabs.Tab id="tab1">タブ1</Tabs.Tab>
    <Tabs.Tab id="tab2">タブ2</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel id="tab1">パネル1</Tabs.Panel>
  <Tabs.Panel id="tab2">パネル2</Tabs.Panel>
</Tabs.Root>
```

Props:
- `Tabs.Root`: `ids: [string, ...string[]]`, `defaultSelectedId?: string | null`
- `Tabs.List`: `label: string`
- `Tabs.Tab`: `id: string`
- `Tabs.Panel`: `id: string`

### Separator

区切り線。

```tsx
import { Separator } from '@k8o/arte-odyssey';

<Separator />
<Separator color="mute" />
<Separator color="subtle" />
<Separator orientation="vertical" />
```

### ScrollLinked

スクロール進捗をプログレスバーで表示。

```tsx
import { ScrollLinked } from '@k8o/arte-odyssey';

<ScrollLinked />
// または特定コンテナを指定
<ScrollLinked container={containerRef} />
```

### Table

テーブル。コンパウンドコンポーネント。

```tsx
import { Table } from '@k8o/arte-odyssey';

<Table.Root>
  <Table.Caption>ユーザー一覧</Table.Caption>
  <Table.Head>
    <Table.Row>
      <Table.HeaderCell>名前</Table.HeaderCell>
      <Table.HeaderCell align="center">年齢</Table.HeaderCell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row interactive>
      <Table.Cell>田中</Table.Cell>
      <Table.Cell align="center">25</Table.Cell>
    </Table.Row>
    <Table.EmptyState colSpan={2}>データがありません</Table.EmptyState>
  </Table.Body>
</Table.Root>
```

Props:
- `Table.Row`: `interactive?: boolean`（ホバー効果）
- `Table.HeaderCell`: `align?: 'left' | 'center' | 'right'`
- `Table.Cell`: `align?: 'left' | 'center' | 'right'`, `colSpan?: number`, `tone?: 'default' | 'muted'`
- `Table.EmptyState`: `colSpan: number`（必須）

## ボタン・リンク

### Button

```tsx
import { Button } from '@k8o/arte-odyssey';

<Button
  size="sm" | "md" | "lg"
  color="primary" | "gray"
  variant="contained" | "outlined" | "skeleton"
  fullWidth={false}
  startIcon={<Icon />}
  endIcon={<Icon />}
  disabled={false}
>
  ボタン
</Button>
```

### IconButton

アイコンのみのボタン。`bg` prop でスタイルを制御。

```tsx
import { IconButton } from '@k8o/arte-odyssey';

<IconButton label="閉じる" bg="transparent" size="md">
  <XIcon />
</IconButton>
```

Props:
- `bg`: `'transparent'` | `'base'` | `'primary'`（デフォルト: `'transparent'`）
- `size`: `'sm'` | `'md'` | `'lg'`
- `label`: string（必須、aria-label として使用）

### LinkButton

リンクスタイルのボタン。Button と同じ `color` / `variant` props。

```tsx
import { LinkButton } from '@k8o/arte-odyssey';

<LinkButton href="/page" color="gray" variant="outlined">
  リンク
</LinkButton>
```

### IconLink

アイコンのみのリンク。IconButton と同じ `bg` prop。

```tsx
import { IconLink } from '@k8o/arte-odyssey';

<IconLink href="/home" bg="base" label="ホーム">
  <HomeIcon />
</IconLink>
```

### Anchor

テキストリンク。

```tsx
import { Anchor } from '@k8o/arte-odyssey';

<Anchor href="https://example.com" isExternal>
  外部リンク
</Anchor>
```

## フォーム

### TextField

テキスト入力。

```tsx
import { TextField } from '@k8o/arte-odyssey';

<TextField
  id="email"
  defaultValue=""
  placeholder="example@mail.com"
/>
```

### Textarea

複数行テキスト入力。

```tsx
import { Textarea } from '@k8o/arte-odyssey';

<Textarea
  label="説明"
  rows={4}
  value={value}
  onChange={onChange}
/>
```

### Checkbox

```tsx
import { Checkbox } from '@k8o/arte-odyssey';

<Checkbox checked={checked} onChange={onChange}>
  同意する
</Checkbox>
```

### CheckboxGroup

チェックボックスのグループ。コンパウンドコンポーネント。

```tsx
import { CheckboxGroup } from '@k8o/arte-odyssey';

<CheckboxGroup name="options" value={value} onChange={onChange}>
  <CheckboxGroup.Item value="a">選択肢A</CheckboxGroup.Item>
  <CheckboxGroup.Item value="b">選択肢B</CheckboxGroup.Item>
</CheckboxGroup>
```

Props (Root):
- `name`: string（必須）
- `value?: string[]`, `onChange?: (value: string[]) => void`, `defaultValue?: string[]`
- `isDisabled?: boolean`, `isInvalid?: boolean`, `isRequired?: boolean`

### CheckboxCard

カードスタイルのチェックボックス選択。

```tsx
import { CheckboxCard } from '@k8o/arte-odyssey';

<CheckboxCard
  isDisabled={false}
  options={[
    { value: 'a', label: '選択肢A', description: '説明文' },
    { value: 'b', label: '選択肢B', visual: <Icon /> },
  ]}
  value={value}
  onChange={onChange}
/>
```

Props:
- `isDisabled`: boolean（必須）
- `options`: `ReadonlyArray<{ value: string; label: string; description?: string; visual?: ReactNode; disabled?: boolean }>`
- `value?: string[]`, `onChange?: (value: string[]) => void`, `defaultValue?: string[]`
- `isInvalid?: boolean`

### Radio

```tsx
import { Radio } from '@k8o/arte-odyssey';

<Radio value={value} onChange={onChange}>
  <Radio.Item value="a">選択肢A</Radio.Item>
  <Radio.Item value="b">選択肢B</Radio.Item>
</Radio>
```

### RadioCard

カードスタイルのラジオ選択。

```tsx
import { RadioCard } from '@k8o/arte-odyssey';

<RadioCard
  labelId="plan-label"
  isDisabled={false}
  options={[
    { value: 'free', label: '無料プラン', description: '基本機能' },
    { value: 'pro', label: 'プロプラン', visual: <Icon /> },
  ]}
  value={value}
  onChange={onChange}
/>
```

Props:
- `labelId`: string（必須）
- `isDisabled`: boolean（必須）
- `options`: `ReadonlyArray<{ value: string; label: string; description?: string; visual?: ReactNode; disabled?: boolean }>`
- `value?: string`, `onChange?: ChangeEventHandler`, `defaultValue?: string`
- `isInvalid?: boolean`

### Select

```tsx
import { Select } from '@k8o/arte-odyssey';

<Select
  label="選択"
  options={[
    { value: '1', label: 'オプション1' },
    { value: '2', label: 'オプション2' },
  ]}
  value={value}
  onChange={onChange}
/>
```

### NumberField

数値入力。

```tsx
import { NumberField } from '@k8o/arte-odyssey';

<NumberField
  label="数量"
  min={0}
  max={100}
  value={value}
  onChange={onChange}
/>
```

### Slider

レンジスライダー。

```tsx
import { Slider } from '@k8o/arte-odyssey';

<Slider
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  min={0}
  max={100}
  step={1}
  value={value}
  onChange={onChange}
/>
```

Props:
- `isDisabled`: boolean（必須）, `isInvalid`: boolean（必須）, `isRequired`: boolean（必須）
- `min?: number`, `max?: number`, `step?: number`
- `value?: number`, `onChange?: (value: number) => void`, `defaultValue?: number`

### PasswordInput

パスワード入力（表示/非表示トグル付き）。

```tsx
import { PasswordInput } from '@k8o/arte-odyssey';

<PasswordInput
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  placeholder="パスワードを入力"
  autoComplete="current-password"
/>
```

Props:
- `isDisabled`: boolean（必須）, `isInvalid`: boolean（必須）, `isRequired`: boolean（必須）
- `value?: string`, `onChange?: ChangeEventHandler`, `defaultValue?: string`
- `showLabel?: string`, `hideLabel?: string`

### Switch

トグルスイッチ。

```tsx
import { Switch } from '@k8o/arte-odyssey';

<Switch
  label="通知を有効にする"
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  value={value}
  onChange={onChange}
/>
```

Props:
- `label`: string（必須）
- `isDisabled`: boolean（必須）, `isInvalid`: boolean（必須）, `isRequired`: boolean（必須）
- `value?: boolean`, `onChange?: ChangeEventHandler`, `defaultChecked?: boolean`

### Autocomplete

オートコンプリート入力。

```tsx
import { Autocomplete } from '@k8o/arte-odyssey';

<Autocomplete
  label="検索"
  options={options}
  value={value}
  onChange={onChange}
/>
```

### FileField

ファイルアップロード。コンパウンドコンポーネント。

```tsx
import { FileField } from '@k8o/arte-odyssey';

<FileField.Root accept="image/*" multiple maxFiles={5}>
  <FileField.Trigger>ファイルを選択</FileField.Trigger>
  <FileField.ItemList />
</FileField.Root>
```

Props (Root):
- `accept`: string
- `multiple`: boolean
- `maxFiles`: number
- `isDisabled`, `isInvalid`, `isRequired`: boolean

### FormControl

フォームフィールドのラッパー。

```tsx
import { FormControl } from '@k8o/arte-odyssey';

<FormControl label="ラベル" error="エラーメッセージ" isRequired>
  <input />
</FormControl>
```

## フィードバック

### Alert

```tsx
import { Alert } from '@k8o/arte-odyssey';

<Alert status="info" | "success" | "warning" | "error">
  メッセージ
</Alert>
```

### Toast

```tsx
import { ToastProvider, useToast } from '@k8o/arte-odyssey';

// プロバイダーでラップ
<ToastProvider>
  <App />
</ToastProvider>

// コンポーネント内で使用
const toast = useToast();
toast.onOpen('success', '保存しました');
toast.onClose(id);
toast.onCloseAll();
```

Props (ToastProvider):
- `portalRef?: RefObject<HTMLElement | null>`
- `position?: 'fixed' | 'absolute'`

### Progress

```tsx
import { Progress } from '@k8o/arte-odyssey';

<Progress progress={50} maxProgress={100} />
<Progress progress={75} maxProgress={100} minProgress={0} label="読み込み中" />
```

Props:
- `progress`: number（必須）
- `maxProgress`: number（必須）
- `minProgress?: number`
- `label?: string`

### BaselineStatus

Web API のブラウザサポート状況を表示。

```tsx
import { BaselineStatus } from '@k8o/arte-odyssey';

<BaselineStatus featureId="dialog" />
```

### Badge

バッジ / タグ表示。

```tsx
import { Badge } from '@k8o/arte-odyssey';

<Badge text="新着" tone="info" variant="solid" />
<Badge text="非推奨" tone="warning" variant="outline" size="sm" />
<Badge text="クリック可能" tone="neutral" interactive />
```

Props:
- `text`: string（必須）
- `tone?: 'neutral' | 'info' | 'success' | 'warning' | 'error'`
- `variant?: 'solid' | 'outline'`
- `size?: 'sm' | 'md'`
- `interactive?: boolean`（true の場合 button 要素になる）

## オーバーレイ

### Dialog

コンパウンドコンポーネント。

```tsx
import { Dialog } from '@k8o/arte-odyssey';

<Dialog.Root>
  <Dialog.Header title="確認" onClose={onClose} />
  <Dialog.Content>
    コンテンツ
  </Dialog.Content>
</Dialog.Root>
```

Props:
- `Dialog.Header`: `title: string`, `onClose: () => void`

### Drawer

```tsx
import { Drawer } from '@k8o/arte-odyssey';

<Drawer title="メニュー" isOpen={isOpen} onClose={onClose} side="right">
  コンテンツ
</Drawer>
```

Props:
- `title`: ReactNode（必須）
- `isOpen`: boolean（必須）
- `onClose`: `() => void`（必須）
- `side?: 'left' | 'right'`

### Modal

```tsx
import { Modal } from '@k8o/arte-odyssey';

<Modal isOpen={isOpen} onClose={onClose}>
  コンテンツ
</Modal>
```

Props:
- `isOpen?: boolean`
- `onClose?: () => void`
- `type?: 'center' | 'bottom' | 'right' | 'left'`
- `defaultOpen?: boolean`

### Popover

コンパウンドコンポーネント。

```tsx
import { Popover } from '@k8o/arte-odyssey';

<Popover.Root placement="bottom">
  <Popover.Trigger renderItem={(props) => <Button {...props}>開く</Button>} />
  <Popover.Content renderItem={(props) => <div {...props}>ポップオーバーコンテンツ</div>} />
</Popover.Root>
```

Props:
- `Popover.Root`: `placement?: Placement`, `type?: 'dialog' | 'menu' | 'tooltip' | 'listbox'`, `flipDisabled?: boolean`
- `Popover.Trigger`: `renderItem: (props) => ReactElement`
- `Popover.Content`: `renderItem: (props) => ReactElement`, `motionVariants?: Variants`

### Tooltip

コンパウンドコンポーネント。

```tsx
import { Tooltip } from '@k8o/arte-odyssey';

<Tooltip.Root placement="top">
  <Tooltip.Trigger renderItem={(props) => <Button {...props}>ホバー</Button>} />
  <Tooltip.Content>ヒントテキスト</Tooltip.Content>
</Tooltip.Root>
```

Props:
- `Tooltip.Root`: `placement?: Placement`
- `Tooltip.Trigger`: `renderItem: (props) => ReactElement`

### DropdownMenu

コンパウンドコンポーネント。

```tsx
import { DropdownMenu } from '@k8o/arte-odyssey';

<DropdownMenu.Root placement="bottom">
  <DropdownMenu.Trigger text="メニュー" size="md" />
  <DropdownMenu.Content>
    <DropdownMenu.Item label="アイテム1" onClick={handleClick} />
    <DropdownMenu.Item label="アイテム2" onClick={handleClick} />
  </DropdownMenu.Content>
</DropdownMenu.Root>
```

Props:
- `DropdownMenu.Trigger`: `text: string`, `size?: ButtonSize`, `variant?: ButtonVariant`
- `DropdownMenu.IconTrigger`: `icon: ReactNode`, `label: string`（アイコンのみのトリガー）
- `DropdownMenu.Item`: `label: string`, `onClick: MouseEventHandler`

## データ表示

### Code

コードブロック。

```tsx
import { Code } from '@k8o/arte-odyssey';

<Code>
  {`const x = 1;`}
</Code>
```

Props:
- `children`: string（必須）

### Heading

見出し。

```tsx
import { Heading } from '@k8o/arte-odyssey';

<Heading type="h1">見出し</Heading>
<Heading type="h2" lineClamp={2}>長いテキストは省略...</Heading>
```

Props:
- `type`: `'h1'` | `'h2'` | `'h3'` | `'h4'` | `'h5'` | `'h6'`（必須）
- `id?: string`
- `lineClamp?: number`

### ListBox

リスト選択。コンパウンドコンポーネント。

```tsx
import { ListBox } from '@k8o/arte-odyssey';

<ListBox.Root
  options={[
    { key: '1', label: 'アイテム1' },
    { key: '2', label: 'アイテム2' },
  ]}
  value="1"
  onSelect={(key) => setValue(key)}
>
  <ListBox.Trigger size="md" />
  <ListBox.Content />
</ListBox.Root>
```

Props:
- `ListBox.Root`: `options: Option[]`, `value: Option['key'] | undefined`, `onSelect: (key) => void`, `placement?: Placement`
- `ListBox.Trigger`: `size?: ButtonSize`
- `ListBox.TriggerIcon`: `size?: ButtonSize`, `icon: ReactElement`（アイコンのみのトリガー）
- `ListBox.Content`: `helpContent?: ReactElement`

### Avatar

ユーザーアバター。画像またはイニシャルを表示。

```tsx
import { Avatar } from '@k8o/arte-odyssey';

<Avatar src="/photo.jpg" alt="田中太郎" size="md" />
<Avatar name="田中太郎" size="lg" />
<Avatar fallback="?" size="sm" />
```

Props:
- `src?: string`（画像URL）
- `alt?: string`
- `name?: string`（イニシャル生成用）
- `fallback?: string`
- `size?: 'sm' | 'md' | 'lg'`

### Skeleton

ローディングプレースホルダー。

```tsx
import { Skeleton } from '@k8o/arte-odyssey';

<Skeleton shape="rect" size="md" />
<Skeleton shape="circle" size="lg" />
<Skeleton shape="rect" size="sm" animate={false} />
```

Props:
- `shape?: 'rect' | 'circle'`
- `size?: 'sm' | 'md' | 'lg'`
- `animate?: boolean`

### Spinner

ローディングスピナー。

```tsx
import { Spinner } from '@k8o/arte-odyssey';

<Spinner size="md" label="読み込み中..." />
```

Props:
- `size?: 'sm' | 'md' | 'lg'`
- `label?: string`（aria-live でスクリーンリーダーに通知）

## ユーティリティ

### ArteOdysseyProvider

```tsx
import { ArteOdysseyProvider } from '@k8o/arte-odyssey';

<ArteOdysseyProvider>
  <App />
</ArteOdysseyProvider>
```
