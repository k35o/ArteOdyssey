import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { RadioGroup } from './radio-group';

const meta: Meta<typeof RadioGroup> = {
  title: 'components/form/radio-group',
  component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('react');

    return (
      <RadioGroup name="framework" onChange={setValue} value={value}>
        <RadioGroup.Item label="React" value="react" />
        <RadioGroup.Item label="Vue" value="vue" />
        <RadioGroup.Item label="Svelte" value="svelte" />
      </RadioGroup>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="vue" isDisabled name="framework-disabled">
      <RadioGroup.Item label="React" value="react" />
      <RadioGroup.Item label="Vue" value="vue" />
      <RadioGroup.Item label="Svelte" value="svelte" />
    </RadioGroup>
  ),
};
