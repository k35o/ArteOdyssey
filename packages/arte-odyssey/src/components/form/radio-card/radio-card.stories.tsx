import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { RadioCard } from './radio-card';

const OPTIONS = [
  {
    value: 'starter',
    label: 'Starter',
    description: 'For simple personal projects and early drafts.',
  },
  {
    value: 'pro',
    label: 'Pro',
    description: 'For active products that need richer editing workflows.',
  },
  {
    value: 'team',
    label: 'Team',
    description: 'For shared libraries, review flows, and collaboration.',
  },
] as const;

const meta: Meta<typeof RadioCard> = {
  title: 'components/form/radio-card',
  component: RadioCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[32rem] max-w-full">
        <Story />
      </div>
    ),
  ],
  args: {
    labelId: 'radio-card-label',
    isDisabled: false,
    isInvalid: false,
    options: OPTIONS,
  },
};

export default meta;
type Story = StoryObj<typeof RadioCard>;

export const Default: Story = {
  render: (props) => {
    const [value, setValue] = useState('pro');

    return (
      <div>
        <p className="mb-3 font-medium text-fg-base" id="radio-card-label">
          Choose a plan
        </p>
        <RadioCard
          isDisabled={props.isDisabled}
          isInvalid={props.isInvalid}
          labelId={props.labelId}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          options={props.options}
          value={value}
        />
      </div>
    );
  },
};

export const DefaultValue: Story = {
  args: {
    defaultValue: 'starter',
  },
  render: (props) => {
    return (
      <div>
        <p className="mb-3 font-medium text-fg-base" id="radio-card-label">
          Choose a plan
        </p>
        <RadioCard
          defaultValue={props.defaultValue}
          isDisabled={props.isDisabled}
          isInvalid={props.isInvalid}
          labelId={props.labelId}
          options={props.options}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    defaultValue: 'team',
  },
  render: DefaultValue.render,
};
