import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useState } from 'react';

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
      <div className="w-lg max-w-full">
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

const DefaultRender = (props: ComponentProps<typeof RadioCard>) => {
  const [value, setValue] = useState('pro');

  return (
    <div>
      <p className="text-fg-base mb-3 font-medium" id="radio-card-label">
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
};

export const Default: Story = {
  render: (props) => <DefaultRender {...props} />,
};

export const DefaultValue: Story = {
  args: {
    defaultValue: 'starter',
  },
  render: (props) => (
    <div>
      <p className="text-fg-base mb-3 font-medium" id="radio-card-label">
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
  ),
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    defaultValue: 'team',
  },
  render: DefaultValue.render,
};
