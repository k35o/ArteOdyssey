import type { Meta, StoryObj } from '@storybook/react-vite';

import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
  title: 'components/form/slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    a11y: {
      options: {
        rules: {
          'label-title-only': { enabled: false },
          label: { enabled: false },
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  args: {
    min: 0,
    max: 100,
    step: 1,
    invalid: false,
    disabled: false,
    required: false,
    defaultValue: 50,
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 30,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    defaultValue: 90,
  },
};
