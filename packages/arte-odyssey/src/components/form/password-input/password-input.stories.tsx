import type { Meta, StoryObj } from '@storybook/react-vite';

import { PasswordInput } from './password-input';

const meta: Meta<typeof PasswordInput> = {
  title: 'components/form/password-input',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  args: {
    isInvalid: false,
    isDisabled: false,
    isRequired: false,
    placeholder: 'Enter your password',
    defaultValue: 'secret-password',
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    defaultValue: undefined,
  },
};

export const Invalid: Story = {
  args: {
    isInvalid: true,
    defaultValue: 'too-short',
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};
