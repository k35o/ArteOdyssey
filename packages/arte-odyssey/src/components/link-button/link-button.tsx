import type { ReactNode } from 'react';
import { cn } from './../../helpers/cn';
import { isInternalRoute } from './../../helpers/is-internal-route';

export const LinkButton = <T extends string>({
  children,
  size = 'md',
  color = 'primary',
  variant = 'contained',
  href,
  startIcon,
  endIcon,
  active = false,
  openInNewTab = false,
  renderAnchor = ({ children, ...props }) => <a {...props}>{children}</a>,
}: {
  variant?: 'contained' | 'outlined' | 'skeleton';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'gray';
  href: T;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  active?: boolean;
  openInNewTab?: boolean;
  children: string;
  renderAnchor?: (props: {
    'aria-label'?: string;
    href: NoInfer<T>;
    className: string;
    target?: string;
    rel?: string;
    children: ReactNode;
  }) => ReactNode;
}) => {
  const type = isInternalRoute(href) && !openInNewTab ? 'internal' : 'external';
  const props =
    type === 'internal' ? {} : { target: '_blank', rel: 'noopener noreferrer' };
  const className = cn(
    'rounded-lg border-2 text-center font-bold transition-colors',
    {
      'border-transparent bg-primary-bg text-fg hover:bg-primary-bg/90 active:bg-primary-bg/80':
        variant === 'contained' && color === 'primary',
      'border-transparent bg-bg-subtle text-fg-base hover:bg-bg-mute active:bg-bg-emphasize':
        variant === 'contained' && color === 'gray',
      'border-primary-border bg-bg-base text-primary-fg hover:bg-bg-subtle active:bg-bg-emphasize':
        variant === 'outlined' && color === 'primary',
      'border-border-base bg-bg-base text-fg-base hover:bg-bg-subtle active:bg-bg-emphasize':
        variant === 'outlined' && color === 'gray',
      'border-transparent bg-transparent text-fg-mute hover:text-fg-base active:text-fg-base':
        variant === 'skeleton',
    },
    'focus-visible:border-transparent focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border-info',
    size === 'sm' && 'px-3 py-1 text-sm',
    size === 'md' && 'px-4 py-2 text-md',
    size === 'lg' && 'px-6 py-3 text-lg',
    Boolean(startIcon ?? endIcon) && 'flex items-center gap-2',
    Boolean(endIcon) && 'justify-between',
    active && 'text-fg-info hover:text-fg-info active:text-fg-info',
  );
  return renderAnchor({
    href,
    className,
    'aria-label': children,
    ...props,
    children: (
      <>
        {startIcon}
        {children}
        {endIcon}
      </>
    ),
  });
};
