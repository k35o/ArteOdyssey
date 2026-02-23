import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './../button';
import { LinkButton } from './../link-button';
import { Card } from './card';
import { InteractiveCard } from './interactive-card';

const meta: Meta<typeof Card> = {
  title: 'components/card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  render: () => (
    <Card>
      <div className="p-4">
        <h3 className="font-bold text-lg">記事タイトル</h3>
        <p className="mt-2 text-fg-mute">
          これはカードコンポーネントの説明文です。コンテンツを囲んで視覚的にグループ化します。
        </p>
      </div>
    </Card>
  ),
};

export const Secondary: Story = {
  render: () => (
    <Card variant="secondary">
      <div className="p-4">
        <p className="text-fg-mute">
          セカンダリバリエーションは背景色が少し暗くなります。
        </p>
      </div>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InteractiveCard>
        <a className="block p-4" href="https://example.com">
          <h3 className="font-bold">カード全体がリンク</h3>
          <p className="mt-2 text-fg-mute text-sm">
            カード全体をクリックして遷移します。
          </p>
        </a>
      </InteractiveCard>
      <InteractiveCard>
        <div className="flex flex-col gap-3 p-4">
          <h3 className="font-bold">カード内にボタンとリンク</h3>
          <p className="text-fg-mute text-sm">
            カード内にインタラクティブ要素を配置できます。
          </p>
          <nav className="flex gap-2">
            <LinkButton href="https://example.com" size="sm">
              詳細を見る
            </LinkButton>
            <Button color="gray" size="sm" variant="outlined">
              保存
            </Button>
          </nav>
        </div>
      </InteractiveCard>
    </div>
  ),
};

export const FitWidth: Story = {
  render: () => (
    <Card width="fit">
      <div className="p-4">
        <p>幅がコンテンツに合わせて調整されます。</p>
      </div>
    </Card>
  ),
};
