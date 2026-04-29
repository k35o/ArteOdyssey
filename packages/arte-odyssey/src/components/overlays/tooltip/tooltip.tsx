'use client';

import type { Placement } from '@floating-ui/react';
import type { FC, PropsWithChildren, ReactElement } from 'react';

import { Popover } from '../popover';
import { usePlacement } from '../popover/hooks';

const Root: FC<PropsWithChildren<{ placement?: Placement }>> = ({
  children,
  placement = 'bottom-start',
}) => (
  <Popover.Root placement={placement} type="tooltip">
    {children}
  </Popover.Root>
);

const Trigger: FC<{
  renderItem: (props: Record<string, unknown>) => ReactElement;
}> = ({ renderItem }) => (
  <Popover.Trigger renderItem={(props) => renderItem({ ...props })} />
);

const Content: FC<PropsWithChildren> = ({ children }) => {
  const placement = usePlacement();
  const translate = {
    top: { translateY: 5 },
    bottom: { translateY: -5 },
    left: { translateX: 5 },
    right: { translateX: -5 },
  }[
    placement.includes('-') ? (placement.split('-')[0] ?? 'bottom') : placement
  ];

  return (
    <Popover.Content
      motionVariants={{
        closed: {
          ...translate,
          opacity: 0,
          transition: {
            duration: 0.3,
          },
        },
        open: {
          translate: 0,
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: 'easeOut',
          },
        },
      }}
      renderItem={(props) => (
        <div
          {...props}
          className="bg-bg-inverse text-fg-inverse rounded-lg px-4 py-2 shadow-md"
        >
          {children}
        </div>
      )}
    />
  );
};

export const Tooltip = {
  Root,
  Trigger,
  Content,
} as const;
