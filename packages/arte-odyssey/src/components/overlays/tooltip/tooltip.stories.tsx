import type { Meta, StoryObj } from '@storybook/react-vite';
import { screen, waitFor } from 'storybook/test';

import { Button } from '../../buttons/button';
import { Tooltip } from './tooltip';

const meta: Meta<typeof Tooltip.Root> = {
  title: 'components/overlays/tooltip',
  component: Tooltip.Root,
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
type Story = StoryObj<typeof Tooltip.Root>;

export const Default: Story = {
  render: () => (
    <Tooltip.Root placement="bottom-start">
      <Tooltip.Trigger
        renderItem={(props) => (
          <Button type="button" {...props}>
            ヘルプ
          </Button>
        )}
      />
      <Tooltip.Content>
        <p>ここに補足情報が表示されます</p>
      </Tooltip.Content>
    </Tooltip.Root>
  ),
  play: async ({ canvas, userEvent }) => {
    const trigger = canvas.getByRole('button', {
      name: 'ヘルプ',
    });
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      const tooltip = screen.getByRole('tooltip');
      const animated = tooltip.closest('[style*="opacity"]') ?? tooltip;
      if (getComputedStyle(animated).opacity !== '1') {
        throw new Error('waiting for animation');
      }
    });
  },
};
