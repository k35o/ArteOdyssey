import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Drawer } from './drawer';

const meta: Meta<typeof Drawer> = {
  title: 'components/drawer',
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    title: 'メニュー',
    children: (
      <nav className="flex flex-col gap-2">
        <a className="rounded-md px-3 py-2 hover:bg-bg-mute" href="/">
          ホーム
        </a>
        <a className="rounded-md px-3 py-2 hover:bg-bg-mute" href="/about">
          このサイトについて
        </a>
        <a className="rounded-md px-3 py-2 hover:bg-bg-mute" href="/blog">
          ブログ
        </a>
        <a className="rounded-md px-3 py-2 hover:bg-bg-mute" href="/contact">
          お問い合わせ
        </a>
      </nav>
    ),
  },
};
