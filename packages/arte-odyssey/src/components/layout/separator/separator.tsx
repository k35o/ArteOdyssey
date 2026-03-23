import type { FC } from 'react';
import { cn } from './../../../helpers/cn';

export const Separator: FC<{
  orientation?: 'horizontal' | 'vertical';
  color?: 'base' | 'mute' | 'subtle';
}> = ({ orientation = 'horizontal', color = 'base' }) => {
  const isVertical = orientation === 'vertical';
  return (
    <span
      aria-orientation={orientation}
      className={cn(
        'block',
        {
          'h-full w-px': isVertical,
          'h-px w-full': !isVertical,
        },
        color === 'base' && 'bg-border-base',
        color === 'mute' && 'bg-border-mute',
        color === 'subtle' && 'bg-border-subtle',
      )}
      role="separator"
    />
  );
};
