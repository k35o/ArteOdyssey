'use client';

import type { FC, PropsWithChildren } from 'react';
import { cn } from './../../helpers/cn';
import { useItemId, useOpen } from './context';

export const AccordionPanel: FC<PropsWithChildren> = ({ children }) => {
  const id = useItemId();
  const open = useOpen();
  return (
    <section
      aria-labelledby={`${id}-button`}
      className={cn({ hidden: !open }, 'p-2')}
      hidden={!open}
      id={`${id}-panel`}
    >
      {children}
    </section>
  );
};
