import type { PropsWithChildren } from 'react';

export type CardProps = PropsWithChildren<{
  variant?: 'primary' | 'secondary';
  width?: 'full' | 'fit';
}>;
