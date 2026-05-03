'use client';

import type { Placement } from '@floating-ui/react';
import type {
  FocusEventHandler,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  Ref,
} from 'react';

import { Tooltip } from '../../overlays/tooltip';
import { cn } from './../../../helpers/cn';
import { isInternalRoute } from './../../../helpers/is-internal-route';

type AnchorTriggerProps = {
  ref: Ref<HTMLAnchorElement>;
  'aria-describedby': string | undefined;
  onMouseEnter: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave: MouseEventHandler<HTMLAnchorElement>;
  onFocus: FocusEventHandler<HTMLAnchorElement>;
  onBlur: FocusEventHandler<HTMLAnchorElement>;
};

export const IconLink = <T extends string>({
  size = 'md',
  bg = 'transparent',
  label,
  href,
  children,
  openInNewTab = false,
  tooltipPlacement = 'bottom',
  tooltipDisabled = false,
  renderAnchor = ({ children: anchorChildren, ...rest }) => (
    <a {...rest}>{anchorChildren}</a>
  ),
}: PropsWithChildren<{
  size?: 'sm' | 'md' | 'lg';
  bg?: 'transparent' | 'base' | 'primary' | 'secondary';
  label: string;
  href: T;
  openInNewTab?: boolean;
  tooltipPlacement?: Placement;
  tooltipDisabled?: boolean;
  renderAnchor?: (props: {
    href: NoInfer<T>;
    className: string;
    target?: string;
    rel?: string;
    children: ReactNode;
    'aria-label': string;
    'aria-describedby': string | undefined;
    ref: Ref<HTMLAnchorElement> | undefined;
    onMouseEnter: MouseEventHandler<HTMLAnchorElement> | undefined;
    onMouseLeave: MouseEventHandler<HTMLAnchorElement> | undefined;
    onFocus: FocusEventHandler<HTMLAnchorElement> | undefined;
    onBlur: FocusEventHandler<HTMLAnchorElement> | undefined;
  }) => ReactNode;
}>) => {
  const type = isInternalRoute(href) && !openInNewTab ? 'internal' : 'external';
  const externalProps =
    type === 'internal'
      ? {}
      : {
          target: '_blank',
          rel: 'noopener noreferrer',
        };

  const className = cn(
    'inline-flex rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-border-info',
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
  );

  const renderAnchorWith = (triggerProps?: AnchorTriggerProps): ReactNode =>
    renderAnchor({
      href,
      className,
      ...externalProps,
      'aria-label': label,
      'aria-describedby': triggerProps?.['aria-describedby'],
      ref: triggerProps?.ref,
      onMouseEnter: triggerProps?.onMouseEnter,
      onMouseLeave: triggerProps?.onMouseLeave,
      onFocus: triggerProps?.onFocus,
      onBlur: triggerProps?.onBlur,
      children,
    });

  if (tooltipDisabled) {
    return <>{renderAnchorWith()}</>;
  }

  return (
    <Tooltip.Root placement={tooltipPlacement}>
      <Tooltip.Trigger
        renderItem={(rawTriggerProps) => (
          <>
            {renderAnchorWith(rawTriggerProps as unknown as AnchorTriggerProps)}
          </>
        )}
      />
      <Tooltip.Content>{label}</Tooltip.Content>
    </Tooltip.Root>
  );
};
