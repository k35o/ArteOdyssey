import type { FC } from 'react';

type Props = {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
};

export const Spinner: FC<Props> = ({ label = 'Loading', size = 'md' }) => {
  return (
    <output
      aria-label={label}
      aria-live="polite"
      className="inline-flex items-center justify-center"
    >
      <span
        aria-hidden={true}
        className={[
          'inline-block animate-spin rounded-full border-4 border-border-base border-t-primary-border',
          size === 'sm' ? 'size-4' : '',
          size === 'md' ? 'size-6' : '',
          size === 'lg' ? 'size-8' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      />
      <span className="sr-only">{label}</span>
    </output>
  );
};
