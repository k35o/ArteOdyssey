import type { FC, ReactNode } from 'react';
import { cn } from './../../helpers/cn';

export type BaseIconProps = {
  size: 'sm' | 'md' | 'lg';
};

export const BaseIcon: FC<
  BaseIconProps & {
    renderItem: (arg: { className: string }) => ReactNode;
  }
> = ({ size, renderItem }) => {
  return renderItem({
    className: cn(
      size === 'sm' && 'size-4',
      size === 'md' && 'size-6',
      size === 'lg' && 'size-8',
    ),
  });
};
