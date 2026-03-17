'use client';

import type { FC, ImgHTMLAttributes } from 'react';
import { cn } from '../../helpers/cn';

type Props = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'alt' | 'children' | 'src'
> & {
  alt?: string;
  fallback?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
  src?: string;
};

const getInitials = (name?: string) => {
  if (!name) {
    return '?';
  }

  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');

  return initials || '?';
};

export const Avatar: FC<Props> = ({
  alt,
  className,
  fallback,
  name,
  size = 'md',
  src,
  ...props
}) => {
  const showImage = Boolean(src);
  const label = alt ?? name ?? 'Avatar';

  return (
    <span
      aria-label={label}
      className={cn(
        'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-border-base bg-bg-mute font-medium text-fg-base',
        size === 'sm' && 'size-8 text-xs',
        size === 'md' && 'size-10 text-sm',
        size === 'lg' && 'size-14 text-lg',
        className,
      )}
      role="img"
    >
      {showImage ? (
        <span
          {...props}
          aria-hidden={true}
          className="size-full bg-center bg-cover"
          onError={undefined}
          style={{ backgroundImage: `url(${src})` }}
        />
      ) : (
        <span aria-hidden={true}>{fallback ?? getInitials(name)}</span>
      )}
    </span>
  );
};
