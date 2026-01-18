import type { Meta, StoryObj } from '@storybook/react-vite';
import { DarkModeIcon } from '../icons';
import { DropdownMenu } from './dropdown-menu';

const meta: Meta<typeof DropdownMenu.Root> = {
  title: 'components/dropdown-menu',
  component: DropdownMenu.Root,
  parameters: {
    a11y: {
      options: {
        rules: {
          // https://github.com/floating-ui/floating-ui/pull/2298#issuecomment-1518101512
          'aria-hidden-focus': { enabled: false },
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu.Root>;

export const Default: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger text="操作" />
      <DropdownMenu.Content>
        <DropdownMenu.Item
          label="編集"
          onClick={() => {
            console.log('編集');
          }}
        />
        <DropdownMenu.Item
          label="複製"
          onClick={() => {
            console.log('複製');
          }}
        />
        <DropdownMenu.Item
          label="削除"
          onClick={() => {
            console.log('削除');
          }}
        />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
  play: async ({ canvas, userEvent }) => {
    const trigger = canvas.getByRole('button', {
      name: '操作',
    });
    trigger.focus();
    await userEvent.keyboard('{Enter}');
  },
};

export const TriggerByIcon: Story = {
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.IconTrigger
        icon={<DarkModeIcon size="lg" />}
        label="テーマ切替"
      />
      <DropdownMenu.Content>
        <DropdownMenu.Item
          label="ライト"
          onClick={() => {
            console.log('ライト');
          }}
        />
        <DropdownMenu.Item
          label="ダーク"
          onClick={() => {
            console.log('ダーク');
          }}
        />
        <DropdownMenu.Item
          label="システム"
          onClick={() => {
            console.log('システム');
          }}
        />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
  play: async ({ canvas, userEvent }) => {
    const trigger = canvas.getByRole('button', {
      name: 'テーマ切替',
    });
    trigger.focus();
    await userEvent.keyboard('{Enter}');
  },
};
