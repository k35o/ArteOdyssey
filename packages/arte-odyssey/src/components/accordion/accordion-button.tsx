'use client';

import type { FC, PropsWithChildren } from 'react';
import { cn } from './../../helpers/cn';
import { ChevronIcon } from '../icons';
import { useItemId, useOpen, useToggleOpen } from './context';

export const AccordionButton: FC<PropsWithChildren> = ({ children }) => {
  const id = useItemId();
  const open = useOpen();
  const toggleOpen = useToggleOpen();

  return (
    <button
      aria-controls={`${id}-panel`}
      aria-expanded={open}
      className={cn(
        'flex w-full cursor-pointer items-center justify-between rounded-md py-4 text-fg-base',
        'hover:text-primary-fg',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-info',
      )}
      id={`${id}-button`}
      onClick={toggleOpen}
      type="button"
    >
      {children}
      <span
        className={cn(
          'transition-transform duration-150',
          open && 'rotate-180',
        )}
      >
        <ChevronIcon direction="down" />
      </span>
    </button>
  );
};
