import type { FC, HTMLProps } from 'react';
import { cn } from './../../../helpers/cn';

type Props = {
  size?: 'sm' | 'md' | 'lg';
  bg?: 'transparent' | 'base' | 'primary' | 'secondary';
  label: string;
} & Omit<HTMLProps<HTMLButtonElement>, 'size' | 'type'>;

export const IconButton: FC<Props> = ({
  ref,
  size = 'md',
  bg = 'transparent',
  label,
  children,
  ...props
}) => {
  return (
    <button
      aria-label={props.role ? label : undefined}
      className={cn(
        'inline-flex cursor-pointer rounded-full transition-colors',
        'focus-visible:border-transparent focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border-info',
        (bg === 'transparent' || bg === 'base') && 'hover:bg-bg-subtle active:bg-bg-mute',
        bg === 'base' && 'bg-bg-base',
        bg === 'transparent' && 'bg-transparent',
        bg === 'primary' &&
          'bg-primary-bg hover:bg-primary-bg-emphasize/80 active:bg-primary-bg-emphasize',
        bg === 'secondary' &&
          'bg-secondary-bg hover:bg-secondary-bg-emphasize/80 active:bg-secondary-bg-emphasize',
        size === 'sm' && 'p-1',
        size === 'md' && 'p-2',
        size === 'lg' && 'p-3',
        props.disabled &&
          'cursor-not-allowed opacity-50 hover:bg-transparent active:bg-transparent',
      )}
      ref={ref}
      {...props}
    >
      {!props.role && <span className="sr-only">{label}</span>}
      {children}
    </button>
  );
};
