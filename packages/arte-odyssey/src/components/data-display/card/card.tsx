import type { FC } from 'react';

import { cn } from './../../../helpers/cn';
import type { CardProps } from './type';

export const Card: FC<CardProps> = ({
  children,
  width = 'full',
  appearance = 'shadow',
  className,
  ...rest
}) => (
  <div
    {...rest}
    className={cn(
      'rounded-xl',
      appearance === 'shadow' && 'shadow-sm',
      appearance === 'bordered' && 'border border-border-mute',
      width === 'full' && 'w-full',
      width === 'fit' && 'w-fit',
      'bg-bg-base',
      className,
    )}
  >
    {children}
  </div>
);
