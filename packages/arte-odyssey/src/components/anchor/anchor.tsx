import type { ReactNode } from 'react';
import { isInternalRoute } from './../../helpers/is-internal-route';
import { ExternalLinkIcon } from '../icons';

export const Anchor = <T extends string>({
  href,
  children,
  openInNewTab = false,
  renderAnchor = ({ children, ...props }) => <a {...props}>{children}</a>,
}: {
  href: T;
  children: ReactNode;
  openInNewTab?: boolean;
  renderAnchor?: (props: {
    type: 'internal' | 'external';
    href: NoInfer<T>;
    className: string;
    target?: string;
    rel?: string;
    children: ReactNode;
  }) => ReactNode;
}) => {
  const type = isInternalRoute(href) && !openInNewTab ? 'internal' : 'external';
  const baseClassName =
    'text-fg-info underline transition-colors hover:text-fg-info/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-info focus-visible:rounded-sm';
  const props =
    type === 'internal'
      ? {
          className: baseClassName,
          children,
        }
      : {
          className: `${baseClassName} inline-flex items-center gap-0.5`,
          target: '_blank',
          rel: 'noopener noreferrer',
          children: (
            <>
              {children}
              <ExternalLinkIcon size="sm" />
            </>
          ),
        };
  return renderAnchor({
    type,
    href,
    ...props,
  });
};
