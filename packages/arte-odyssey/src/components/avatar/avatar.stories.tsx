import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'components/avatar',
  component: Avatar,
  args: {
    name: 'Arte Odyssey',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    alt: 'Arte Odyssey',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};
