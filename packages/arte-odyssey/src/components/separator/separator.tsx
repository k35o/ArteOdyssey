import type { FC } from 'react';
import { cn } from './../../helpers/cn';

export const Separator: FC<{
  orientation?: 'horizontal' | 'vertical';
  color?: 'base' | 'mute' | 'subtle';
}> = ({ orientation = 'horizontal', color = 'base' }) => {
  const isVertical = orientation === 'vertical';
  return (
    // biome-ignore lint/a11y/useFocusableInteractive: decorative separator
    // biome-ignore lint/a11y/useSemanticElements: need color prop support
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
      // biome-ignore lint/a11y/useAriaPropsForRole: non-focusable separator
      role="separator"
    />
  );
};
