import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Checkbox } from '../checkbox';
import { CheckboxGroup } from './checkbox-group';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'components/form/checkbox-group',
  component: CheckboxGroup,
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

const DefaultRender = () => {
  const [value, setValue] = useState(['react']);

  return (
    <CheckboxGroup name="frameworks" onChange={setValue} value={value}>
      <Checkbox itemValue="react" label="React" />
      <Checkbox itemValue="vue" label="Vue" />
      <Checkbox itemValue="svelte" label="Svelte" />
    </CheckboxGroup>
  );
};

export const Default: Story = {
  render: () => <DefaultRender />,
};

export const Disabled: Story = {
  render: () => (
    <CheckboxGroup defaultValue={['vue']} isDisabled name="frameworks-disabled">
      <Checkbox itemValue="react" label="React" />
      <Checkbox itemValue="vue" label="Vue" />
      <Checkbox itemValue="svelte" label="Svelte" />
    </CheckboxGroup>
  ),
};
