import type { FC } from 'react';
import { cn } from './../../helpers/cn';
import type { CardProps } from './type';

export const InteractiveCard: FC<CardProps> = ({
  children,
  variant = 'primary',
  width = 'full',
  title,
}) => (
  <section
    className={cn(
      'overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]',
      width === 'full' && 'w-full',
      width === 'fit' && 'w-fit',
      variant === 'primary' && 'bg-bg-base',
      variant === 'secondary' && 'bg-bg-mute',
    )}
  >
    {title && (
      <div className="bg-primary-bg/10 px-4 py-3">
        <p className="font-bold">{title}</p>
      </div>
    )}
    {children}
  </section>
);
