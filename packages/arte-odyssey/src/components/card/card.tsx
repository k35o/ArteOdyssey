import type { FC } from 'react';
import { cn } from './../../helpers/cn';
import type { CardProps } from './type';

export const Card: FC<CardProps> = ({
  children,
  variant = 'primary',
  width = 'full',
}) => (
  <section
    className={cn(
      'rounded-lg shadow-sm',
      width === 'full' && 'w-full',
      width === 'fit' && 'w-fit',
      variant === 'primary' && 'bg-bg-base',
      variant === 'secondary' && 'bg-bg-mute',
    )}
  >
    {children}
  </section>
);
