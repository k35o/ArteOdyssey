import type { FC } from 'react';
import { cn } from './../../../helpers/cn';
import type { CardProps } from './type';

export const InteractiveCard: FC<CardProps> = ({
  children,
  width = 'full',
  appearance = 'shadow',
}) => (
  <div
    className={cn(
      'rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98]',
      appearance === 'shadow' && 'shadow-sm dark:border dark:border-border-mute',
      appearance === 'bordered' && 'border border-border-mute',
      width === 'full' && 'w-full',
      width === 'fit' && 'w-fit',
      'bg-bg-raised',
    )}
  >
    {children}
  </div>
);
