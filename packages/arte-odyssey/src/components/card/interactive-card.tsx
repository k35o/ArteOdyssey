import type { FC } from 'react';
import { cn } from './../../helpers/cn';
import type { CardProps } from './type';

export const InteractiveCard: FC<CardProps> = ({
  children,
  variant = 'primary',
  width = 'full',
}) => (
  <section
    className={cn(
      'rounded-lg shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]',
      width === 'full' && 'w-full',
      width === 'fit' && 'w-fit',
      variant === 'primary' && 'bg-bg-base',
      variant === 'secondary' && 'bg-bg-mute',
    )}
  >
    {children}
  </section>
);
