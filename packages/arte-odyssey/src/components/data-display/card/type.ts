import type { PropsWithChildren } from 'react';

export type CardProps = PropsWithChildren<{
  width?: 'full' | 'fit';
  appearance?: 'shadow' | 'bordered';
}>;
