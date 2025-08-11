import type { FC } from 'react';
import { cn } from './../../helpers/cn';

export const Separator: FC<{
  orientation?: 'horizontal' | 'vertical';
}> = ({ orientation = 'horizontal' }) => {
  const isVertical = orientation === 'vertical';
  const Element = isVertical ? 'div' : 'hr';
  return (
    <Element
      aria-orientation={isVertical ? 'vertical' : undefined}
      className={cn('bg-border-base', {
        'h-full w-px': isVertical,
        'h-px w-full': !isVertical,
      })}
      role={isVertical ? 'separator' : undefined}
    />
  );
};
