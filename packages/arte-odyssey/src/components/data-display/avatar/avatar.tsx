'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { cn } from '../../../helpers/cn';

type Props = {
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

export const Avatar: FC<Props> = ({ alt, fallback, name, size = 'md', src }) => {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const showImage = Boolean(src) && failedSrc !== src;
  const label = alt ?? name ?? 'Avatar';
  const imageSize = size === 'sm' ? 32 : size === 'md' ? 40 : 56;

  return (
    <span
      aria-label={label}
      className={cn(
        'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-border-base bg-bg-mute font-medium text-fg-base',
        size === 'sm' && 'size-8 text-xs',
        size === 'md' && 'size-10 text-sm',
        size === 'lg' && 'size-14 text-lg',
      )}
      role="img"
    >
      {showImage ? (
        // biome-ignore lint/performance/noImgElement: This UI library must render a standard img element for framework-agnostic usage.
        <img
          alt={alt ?? ''}
          className="size-full object-cover"
          height={imageSize}
          onError={() => {
            setFailedSrc(src ?? null);
          }}
          src={src}
          width={imageSize}
        />
      ) : (
        <span aria-hidden={true}>{fallback ?? getInitials(name)}</span>
      )}
    </span>
  );
};
