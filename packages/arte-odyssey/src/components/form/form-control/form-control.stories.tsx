import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { TextField } from '../text-field';
import { FormControl } from './form-control';

type RenderInputProps = {
  id: string;
  'aria-describedby': string | undefined;
  'aria-labelledby': string;
  disabled: boolean;
  invalid: boolean;
  required: boolean;
};

const RenderInput = (props: RenderInputProps) => {
  const [state, setState] = useState('');
  return (
    <TextField
      {...props}
      onChange={(e) => {
        setState(e.target.value);
      }}
      value={state}
    />
  );
};

const meta: Meta<typeof FormControl> = {
  title: 'components/form/form-control',
  component: FormControl,
  args: {
    renderInput: (props) => <RenderInput {...props} />,
  },
};

export default meta;
type Story = StoryObj<typeof FormControl>;

export const Default: Story = {
  args: {
    label: 'メールアドレス',
  },
};

export const HelpText: Story = {
  args: {
    label: 'メールアドレス',
    helpText: 'RFCに準拠したメールアドレスを入力してください。',
  },
};

export const Required: Story = {
  args: {
    label: 'メールアドレス',
    helpText: 'RFCに準拠したメールアドレスを入力してください。',
    required: true,
  },
};

export const Error: Story = {
  args: {
    label: 'メールアドレス',
    helpText: 'RFCに準拠したメールアドレスを入力してください。',
    invalid: true,
    errorText: 'メールアドレスが正しくありません。',
    required: true,
  },
};

export const ErrorWithoutText: Story = {
  args: {
    label: 'メールアドレス',
    helpText: 'RFCに準拠したメールアドレスを入力してください。',
    invalid: true,
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'メールアドレス',
    helpText: 'RFCに準拠したメールアドレスを入力してください。',
    disabled: true,
  },
};

export const Legend: Story = {
  args: {
    label: 'メールアドレス',
    helpText: 'RFCに準拠したメールアドレスを入力してください。',
    labelAs: 'legend',
  },
  parameters: {
    a11y: {
      options: {
        rules: {
          // labelが不要なケースに使うのでoffにする
          label: { enabled: false },
          'label-title-only': { enabled: false },
        },
      },
    },
  },
};
