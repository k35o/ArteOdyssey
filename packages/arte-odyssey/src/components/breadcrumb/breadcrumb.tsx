import type { FC, PropsWithChildren } from 'react';
import { cn } from './../../helpers/cn';
import { ChevronIcon } from '../icons';

const List: FC<
  PropsWithChildren<{
    size?: 'sm' | 'md' | 'lg';
  }>
> = ({ children, size = 'md' }) => {
  return (
    <nav aria-label="パンクズリスト">
      <ol
        className={cn(
          'flex list-none items-center gap-1 text-fg-mute',
          size === 'sm' && 'text-xs',
          size === 'md' && 'text-xs md:text-md',
          size === 'lg' && 'text-xl md:text-2xl',
        )}
      >
        {children}
      </ol>
    </nav>
  );
};

const Item: FC<PropsWithChildren> = ({ children }) => {
  return <li className="inline-flex items-center">{children}</li>;
};

const Separator: FC = () => {
  return (
    <li className="text-fg-mute">
      <ChevronIcon direction="right" size="sm" />
    </li>
  );
};

const _Link = <T extends string>({
  href,
  current = false,
  children,
  component,
}: PropsWithChildren<{
  href: T;
  current?: boolean;
  component?: FC<{ href: T; className: string }>;
}>) => {
  const Link = component ?? 'a';
  return current ? (
    <span className="text-fg-base">{children}</span>
  ) : (
    <Link
      className="underline transition-colors hover:text-fg-base focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-info"
      href={href}
    >
      {children}
    </Link>
  );
};

export const Breadcrumb = {
  List,
  Item,
  Separator,
  Link: _Link,
} as const;
