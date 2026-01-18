import type { Meta, StoryObj } from '@storybook/react-vite';
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

export const WithTitle: Story = {
  render: () => (
    <Card title="お知らせ">
      <div className="p-4">
        <p>システムメンテナンスのお知らせです。</p>
        <p className="mt-2 text-fg-mute text-sm">2024年1月20日 10:00〜12:00</p>
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
    <InteractiveCard>
      <div className="p-4">
        <h3 className="font-bold">クリック可能なカード</h3>
        <p className="mt-2 text-fg-mute text-sm">
          ホバーで少し拡大、クリックで縮小します。
        </p>
      </div>
    </InteractiveCard>
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
