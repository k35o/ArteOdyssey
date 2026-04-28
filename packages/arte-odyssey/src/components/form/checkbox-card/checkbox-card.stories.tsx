import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ComponentProps, useState } from 'react';

import { CheckboxCard } from './checkbox-card';

const OPTIONS = [
  {
    value: 'history',
    label: 'Version history',
    description: 'Keep a restorable timeline of changes for each document.',
  },
  {
    value: 'comments',
    label: 'Inline comments',
    description: 'Collect contextual feedback directly on each section.',
  },
  {
    value: 'share',
    label: 'Share links',
    description: 'Allow reviewers to open read-only previews instantly.',
  },
] as const;

const meta: Meta<typeof CheckboxCard> = {
  title: 'components/form/checkbox-card',
  component: CheckboxCard,
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
    labelId: 'checkbox-card-label',
    isDisabled: false,
    isInvalid: false,
    options: OPTIONS,
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxCard>;
type StoryArgs = ComponentProps<typeof CheckboxCard>;

const DefaultRender = (props: StoryArgs) => {
  const [value, setValue] = useState<string[]>(['comments']);

  return (
    <div>
      <p className="text-fg-base mb-3 font-medium" id="checkbox-card-label">
        Enable collaboration features
      </p>
      <CheckboxCard
        isDisabled={props.isDisabled}
        isInvalid={props.isInvalid}
        labelId={props.labelId}
        onChange={setValue}
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
    defaultValue: ['history', 'share'],
  },
  render: (props) => (
    <div>
      <p className="text-fg-base mb-3 font-medium" id="checkbox-card-label">
        Enable collaboration features
      </p>
      <CheckboxCard
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
    defaultValue: ['comments'],
  },
  render: DefaultValue.render,
};
