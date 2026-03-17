import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  title: 'components/form/switch',
  component: Switch,
  args: {
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    label: 'Enable notifications',
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (props) => {
    const [value, setValue] = useState(false);

    return (
      <Switch
        id={props.id}
        isDisabled={props.isDisabled}
        isInvalid={props.isInvalid}
        isRequired={props.isRequired}
        label={props.label}
        name={props.name}
        onChange={(event) => {
          setValue(event.target.checked);
        }}
        value={value}
      />
    );
  },
};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    label: 'Automatic updates',
  },
};

export const Disabled: Story = {
  args: {
    defaultChecked: true,
    isDisabled: true,
    isInvalid: false,
    isRequired: false,
    label: 'Location services',
  },
};
