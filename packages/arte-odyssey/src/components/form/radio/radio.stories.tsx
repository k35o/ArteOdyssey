import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './radio';

const meta: Meta<typeof Radio> = {
  title: 'components/form/radio',
  component: Radio,
  args: {
    labelId: 'radio',
    options: [
      { value: '0', label: 'はい' },
      { value: '1', label: 'いいえ' },
    ],
    defaultValue: '0',
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    isDisabled: false,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
