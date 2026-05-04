'use client';

import type { Placement } from '@floating-ui/react';
import {
  type FC,
  type FocusEvent,
  type FocusEventHandler,
  type MouseEventHandler,
  type PropsWithChildren,
  type ReactElement,
  type RefCallback,
  useMemo,
} from 'react';

import { Popover } from '../popover';
import { usePlacement, usePopoverContext } from '../popover/hooks';

export type TooltipTriggerProps = {
  ref: RefCallback<HTMLElement>;
  onMouseEnter: MouseEventHandler<HTMLElement>;
  onMouseLeave: MouseEventHandler<HTMLElement>;
  onFocus: FocusEventHandler<HTMLElement>;
  onBlur: FocusEventHandler<HTMLElement>;
  'aria-describedby'?: string;
};

const useTooltipTriggerProps = (): TooltipTriggerProps => {
  const popover = usePopoverContext();
  return useMemo(
    () => ({
      ref: popover.setTriggerRef,
      onMouseEnter: popover.onOpen,
      onMouseLeave: popover.onClose,
      onFocus: (e: FocusEvent<HTMLElement>) => {
        if (e.target.matches(':focus-visible')) {
          popover.onOpen();
        }
      },
      onBlur: popover.onClose,
      'aria-describedby': popover.isOpen ? `${popover.rootId}_list` : undefined,
    }),
    [popover],
  );
};

const Root: FC<PropsWithChildren<{ placement?: Placement }>> = ({
  children,
  placement = 'bottom',
}) => (
  <Popover.Root
    closeOnClickAway={false}
    placement={placement}
    trapFocus={false}
    type="dialog"
  >
    {children}
  </Popover.Root>
);

const Trigger: FC<{
  renderItem: (props: TooltipTriggerProps) => ReactElement;
}> = ({ renderItem }) => renderItem(useTooltipTriggerProps());

const Content: FC<PropsWithChildren> = ({ children }) => {
  const placement = usePlacement();
  const popover = usePopoverContext();
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
      renderItem={({ id, ref }) => (
        <div
          className="bg-bg-inverse text-fg-inverse rounded-lg px-4 py-2 shadow-md"
          id={id}
          onBlur={popover.onClose}
          onFocus={popover.onOpen}
          onMouseEnter={popover.onOpen}
          onMouseLeave={popover.onClose}
          ref={ref}
          role="tooltip"
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
