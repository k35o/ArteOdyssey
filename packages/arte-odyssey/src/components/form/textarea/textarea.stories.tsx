import type { Meta, StoryObj } from '@storybook/react-vite';

import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'components/form/textarea',
  component: Textarea,
  decorators: [
    (Story) => (
      <div className="h-screen">
        <Story />
      </div>
    ),
  ],
  args: {
    id: 'textarea',
    'aria-describedby': 'textarea-feedback',
  },
  parameters: {
    a11y: {
      options: {
        rules: {
          // TextArea単体ではラベルを付随しない
          label: { enabled: false },
          'label-title-only': { enabled: false },
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    disabled: false,
    invalid: false,
    required: false,
  },
};

export const FullHeight: Story = {
  args: {
    disabled: false,
    invalid: false,
    required: false,
    fullHeight: true,
  },
};

export const AutoResize: Story = {
  args: {
    disabled: false,
    invalid: false,
    required: false,
    autoResize: true,
  },
};

export const Rows: Story = {
  args: {
    disabled: false,
    invalid: false,
    required: false,
    rows: 10,
  },
};

export const Placeholder = {
  args: {
    disabled: false,
    invalid: false,
    required: false,
    placeholder: '10進数',
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
