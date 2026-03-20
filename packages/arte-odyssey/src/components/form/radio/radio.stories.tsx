import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Radio } from './radio';

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
] as const;

const meta: Meta<typeof Radio> = {
  title: 'components/form/radio',
  component: Radio,
  args: {
    isDisabled: false,
    labelId: 'radio-story-label',
    name: 'radio-story',
    options,
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: (props) => {
    const [value, setValue] = useState('react');

    return (
      <div className="w-full max-w-md">
        <p className="mb-3 font-medium text-fg-base" id={props.labelId}>
          Framework
        </p>
        <Radio
          {...props}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: 'vue',
    isDisabled: true,
  },
};
