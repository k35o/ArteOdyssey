import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useState } from 'react';

import { Checkbox } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'components/form/checkbox',
  component: Checkbox,
  args: {
    isDisabled: false,
    label: 'checkbox',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const DefaultRender = (props: ComponentProps<typeof Checkbox>) => {
  const [value, setValue] = useState(false);

  return (
    <Checkbox
      isDisabled={props.isDisabled}
      label={props.label}
      onChange={(e) => {
        setValue(e.target.checked);
      }}
      value={value}
    />
  );
};

export const Default: Story = {
  render: (props) => <DefaultRender {...props} />,
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    defaultChecked: true,
    label: 'disabled checkbox',
  },
};
