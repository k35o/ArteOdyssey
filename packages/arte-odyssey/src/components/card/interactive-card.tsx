import type { FC } from 'react';
import { cn } from './../../helpers/cn';
import type { CardProps } from './type';

export const InteractiveCard: FC<CardProps> = ({
  children,
  variant = 'primary',
  width = 'full',
  appearance = 'shadow',
}) => (
  <div
    className={cn(
      'rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98]',
      appearance === 'shadow' && 'shadow-sm',
      appearance === 'bordered' && 'border border-border-mute',
      width === 'full' && 'w-full',
      width === 'fit' && 'w-fit',
      variant === 'primary' && 'bg-bg-base',
      variant === 'secondary' && 'bg-bg-mute',
    )}
  >
    {children}
  </div>
);
