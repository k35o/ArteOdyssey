import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextField } from './text-field';

const meta: Meta<typeof TextField> = {
  title: 'components/form/text-field',
  component: TextField,
  args: {
    id: 'textfield',
    'aria-describedby': 'textfield-feedback',
  },
  parameters: {
    a11y: {
      options: {
        rules: {
          // TextField単体ではラベルを付随しない
          'label-title-only': { enabled: false },
          label: { enabled: false },
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    disabled: false,
    invalid: false,
    required: false,
  },
};

export const Placeholder: Story = {
  args: {
    disabled: false,
    invalid: false,
    required: false,
    placeholder: 'ID',
  },
};

export const Invalid: Story = {
  args: {
    disabled: false,
    invalid: true,
    required: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    invalid: false,
    required: false,
  },
};
