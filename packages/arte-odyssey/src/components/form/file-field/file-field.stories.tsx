import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../../button';
import { FileField } from './file-field';

const meta: Meta<typeof FileField.Root> = {
  title: 'components/form/file-field',
  component: FileField.Root,
  args: {
    id: 'filefield',
  },
  render: (args) => {
    return (
      <FileField.Root {...args}>
        <FileField.Trigger
          renderItem={({ disabled, onClick }) => (
            <Button disabled={disabled} onClick={onClick}>
              ファイルを選択
            </Button>
          )}
        />
        <FileField.ItemList />
      </FileField.Root>
    );
  },
  parameters: {
    a11y: {
      options: {
        rules: {
          // FileField単体ではラベルを付随しない
          'label-title-only': { enabled: false },
          label: { enabled: false },
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileField.Root>;

export const Default: Story = {
  args: {
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
  },
};

export const Multiple: Story = {
  args: {
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    multiple: true,
  },
};

export const MaxFiles: Story = {
  args: {
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    multiple: true,
    maxFiles: 3,
  },
};

export const ImageOnly: Story = {
  args: {
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    accept: 'image/*',
  },
};

export const WebkitDirectory: Story = {
  args: {
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    webkitDirectory: true,
  },
};

export const HasClearButton: Story = {
  args: {
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    multiple: true,
  },
  render: (args) => {
    return (
      <FileField.Root {...args}>
        <FileField.Trigger
          renderItem={({ disabled, onClick }) => (
            <Button disabled={disabled} onClick={onClick}>
              ファイルを追加
            </Button>
          )}
        />
        <FileField.ItemList clearable />
      </FileField.Root>
    );
  },
};

export const ShowWebkitRelativePath: Story = {
  args: {
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
    webkitDirectory: true,
  },
  render: (args) => {
    return (
      <FileField.Root {...args}>
        <FileField.Trigger
          renderItem={({ disabled, onClick }) => (
            <Button disabled={disabled} onClick={onClick} variant="outlined">
              ファイルを選択
            </Button>
          )}
        />
        <FileField.ItemList showWebkitRelativePath />
      </FileField.Root>
    );
  },
};

export const OnlyTrigger: Story = {
  args: {
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
  },
  render: (args) => {
    return (
      <FileField.Root {...args}>
        <FileField.Trigger
          renderItem={({ disabled, onClick }) => (
            <Button disabled={disabled} onClick={onClick} variant="outlined">
              ファイルを選択
            </Button>
          )}
        />
      </FileField.Root>
    );
  },
};
