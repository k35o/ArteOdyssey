import type { FC } from 'react';
import { cn } from './../../helpers/cn';
import type { CardProps } from './type';

export const Card: FC<CardProps> = ({
  children,
  variant = 'primary',
  title,
  width = 'full',
}) => (
  <section
    className={cn(
      'overflow-hidden rounded-lg border border-border-mute',
      width === 'full' && 'w-full',
      width === 'fit' && 'w-fit',
      variant === 'primary' && 'bg-bg-base',
      variant === 'secondary' && 'bg-bg-mute',
    )}
  >
    {title && (
      <div className="border-border-mute border-b bg-primary-bg/10 px-4 py-3">
        <p className="font-bold">{title}</p>
      </div>
    )}
    {children}
  </section>
);
