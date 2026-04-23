import type { Meta, StoryObj } from '@storybook/react-vite';
import { CopyIcon } from '../../icons';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'components/buttons/button',
  component: Button,
  args: {
    type: 'button',
    onClick: () => {
      console.log('clicked');
    },
  },
  render: (props) => {
    return <Button {...props}>ボタン</Button>;
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const OutlinedSecondary: Story = {
  args: {
    color: 'secondary',
    variant: 'outlined',
  },
};

export const Skeleton: Story = {
  args: {
    variant: 'skeleton',
  },
};

export const Gray: Story = {
  args: {
    color: 'gray',
  },
};

export const OutlinedGray: Story = {
  args: {
    color: 'gray',
    variant: 'outlined',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
export const DisabledOutlined: Story = {
  args: {
    variant: 'outlined',
    disabled: true,
  },
};

export const DisabledSkeleton: Story = {
  args: {
    variant: 'skeleton',
    disabled: true,
  },
};

export const StartIcon: Story = {
  args: {
    startIcon: <CopyIcon />,
  },
};

export const EndIcon: Story = {
  args: {
    endIcon: <CopyIcon />,
  },
};

export const AsyncAction: Story = {
  args: {
    onAction: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('async action completed');
    },
  },
};
