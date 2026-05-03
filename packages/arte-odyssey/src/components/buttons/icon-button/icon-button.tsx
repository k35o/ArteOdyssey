'use client';

import type { Placement } from '@floating-ui/react';
import type {
  FC,
  FocusEventHandler,
  HTMLProps,
  MouseEvent,
  MouseEventHandler,
  Ref,
} from 'react';
import { useTransition } from 'react';
import { useFormStatus } from 'react-dom';

import { Tooltip } from '../../overlays/tooltip';
import { cn } from './../../../helpers/cn';
import { mergeRefs } from './../../../helpers/merge-refs';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  bg?: 'transparent' | 'base' | 'primary' | 'secondary';
  label: string;
  tooltipPlacement?: Placement;
  tooltipDisabled?: boolean;
  onAction?: () => void | Promise<void>;
} & Omit<HTMLProps<HTMLButtonElement>, 'size' | 'type'>;

type ButtonTriggerProps = {
  ref: Ref<HTMLButtonElement>;
  'aria-describedby': string | undefined;
  onMouseEnter: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave: MouseEventHandler<HTMLButtonElement>;
  onFocus: FocusEventHandler<HTMLButtonElement>;
  onBlur: FocusEventHandler<HTMLButtonElement>;
};

const joinIds = (
  ...ids: ReadonlyArray<string | undefined>
): string | undefined => {
  const filtered = ids.filter(Boolean);
  return filtered.length === 0 ? undefined : filtered.join(' ');
};

export const IconButton: FC<Props> = ({
  ref,
  size = 'md',
  bg = 'transparent',
  label,
  tooltipPlacement = 'bottom',
  tooltipDisabled = false,
  children,
  onAction,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  disabled,
  'aria-describedby': describedBy,
  ...props
}) => {
  const [transitionPending, startTransition] = useTransition();
  const { pending: formPending } = useFormStatus();
  const isPending = transitionPending || formPending;
  const isDisabled = Boolean(disabled) || isPending;

  const handleClick =
    onClick || onAction
      ? (event: MouseEvent<HTMLButtonElement>) => {
          onClick?.(event);
          if (event.defaultPrevented) return;
          if (onAction) {
            startTransition(async () => {
              await onAction();
            });
          }
        }
      : undefined;

  const className = cn(
    'inline-flex cursor-pointer rounded-full transition-colors',
    'focus-visible:border-transparent focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border-info',
    (bg === 'transparent' || bg === 'base') &&
      'hover:bg-bg-subtle active:bg-bg-mute',
    bg === 'base' && 'bg-bg-base',
    bg === 'transparent' && 'bg-transparent',
    bg === 'primary' &&
      'bg-primary-bg hover:bg-primary-bg-emphasize/80 active:bg-primary-bg-emphasize',
    bg === 'secondary' &&
      'bg-secondary-bg hover:bg-secondary-bg-emphasize/80 active:bg-secondary-bg-emphasize',
    size === 'sm' && 'p-1',
    size === 'md' && 'p-2',
    size === 'lg' && 'p-3',
    isDisabled &&
      'cursor-not-allowed opacity-50 hover:bg-transparent active:bg-transparent',
  );

  if (tooltipDisabled) {
    return (
      <button
        {...props}
        aria-busy={isPending || undefined}
        aria-describedby={describedBy}
        aria-label={label}
        className={className}
        disabled={isDisabled}
        onBlur={onBlur}
        onClick={handleClick}
        onFocus={onFocus}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        type="button"
      >
        {children}
      </button>
    );
  }

  return (
    <Tooltip.Root placement={tooltipPlacement}>
      <Tooltip.Trigger
        renderItem={(rawTriggerProps) => {
          const triggerProps = rawTriggerProps as unknown as ButtonTriggerProps;
          return (
            <button
              {...props}
              aria-busy={isPending || undefined}
              aria-describedby={joinIds(
                describedBy,
                triggerProps['aria-describedby'],
              )}
              aria-label={label}
              className={className}
              disabled={isDisabled}
              onBlur={(e) => {
                triggerProps.onBlur(e);
                onBlur?.(e);
              }}
              onClick={handleClick}
              onFocus={(e) => {
                triggerProps.onFocus(e);
                onFocus?.(e);
              }}
              onMouseEnter={(e) => {
                triggerProps.onMouseEnter(e);
                onMouseEnter?.(e);
              }}
              onMouseLeave={(e) => {
                triggerProps.onMouseLeave(e);
                onMouseLeave?.(e);
              }}
              ref={mergeRefs(ref, triggerProps.ref)}
              type="button"
            >
              {children}
            </button>
          );
        }}
      />
      <Tooltip.Content>{label}</Tooltip.Content>
    </Tooltip.Root>
  );
};
