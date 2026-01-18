import type { PropsWithChildren, ReactNode } from 'react';
import { cn } from './../../helpers/cn';
import { isInternalRoute } from './../../helpers/is-internal-route';

export const IconLink = <T extends string>({
  size = 'md',
  bg = 'transparent',
  label,
  href,
  children,
  openInNewTab = false,
  renderAnchor = ({ children, ...props }) => <a {...props}>{children}</a>,
}: PropsWithChildren<{
  size?: 'sm' | 'md' | 'lg';
  bg?: 'transparent' | 'base' | 'primary';
  label?: string;
  href: T;
  openInNewTab?: boolean;
  renderAnchor?: (props: {
    href: NoInfer<T>;
    className: string;
    target?: string;
    rel?: string;
    children: ReactNode;
  }) => ReactNode;
}>) => {
  const type = isInternalRoute(href) && !openInNewTab ? 'internal' : 'external';
  const props =
    type === 'internal'
      ? {}
      : {
          target: '_blank',
          rel: 'noopener noreferrer',
        };
  return renderAnchor({
    href,
    className: cn(
      'inline-flex rounded-full transition-colors hover:bg-bg-subtle active:bg-bg-emphasize focus-visible:ring-2 focus-visible:ring-border-info',
      bg === 'base' && 'bg-bg-base',
      bg === 'transparent' && 'bg-transparent',
      bg === 'primary' &&
        'bg-primary-bg hover:bg-primary-bg/90 active:bg-primary-bg-emphasize',
      size === 'sm' && 'p-1',
      size === 'md' && 'p-2',
      size === 'lg' && 'p-3',
    ),
    ...props,
    children: (
      <>
        <span className="sr-only">{label}</span>
        {children}
      </>
    ),
  });
};
