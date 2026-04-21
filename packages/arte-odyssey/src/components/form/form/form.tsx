'use client';

import type { FC, FormHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../../helpers/cn';

type Props = {
  action?: ((formData: FormData) => void | Promise<void>) | string;
  children: ReactNode;
} & Omit<FormHTMLAttributes<HTMLFormElement>, 'action' | 'children'>;

export const Form: FC<Props> = ({ action, className, children, ...rest }) => {
  return (
    <form action={action} className={cn('flex flex-col gap-6', className)} {...rest}>
      {children}
    </form>
  );
};
