import type { Meta, StoryObj } from '@storybook/react-vite';
import { RangeField } from './range-field';

const meta: Meta<typeof RangeField> = {
  title: 'components/form/RangeField',
  component: RangeField,
  parameters: {
    layout: 'centered',
    a11y: {
      options: {
        rules: {
          // RangeField単体ではラベルを付随しない
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
    isInvalid: false,
    isDisabled: false,
    isRequired: false,
    showValue: true,
    defaultValue: 50,
  },
};

export default meta;
type Story = StoryObj<typeof RangeField>;

export const Default: Story = {};

export const WithUnit: Story = {
  args: {
    min: 100,
    max: 500,
    step: 10,
    unit: 'px',
    defaultValue: 200,
  },
};

export const WithoutValue: Story = {
  args: {
    step: 5,
    showValue: false,
    defaultValue: 75,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    defaultValue: 30,
  },
};

export const Invalid: Story = {
  args: {
    isInvalid: true,
    defaultValue: 90,
  },
};
