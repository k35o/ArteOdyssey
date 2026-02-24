'use client';

import { type FC, type PropsWithChildren, useId } from 'react';
import { cn } from '../../helpers/cn';
import { Heading } from '../heading';
import { IconButton } from '../icon-button';
import { CloseIcon } from '../icons';
import { Modal } from '../modal';

export const Drawer: FC<
  PropsWithChildren<{
    title: string;
    isOpen: boolean;
    onClose: () => void;
    side?: 'left' | 'right';
  }>
> = ({ title, isOpen, onClose, side = 'right', children }) => {
  const rootId = useId();

  return (
    <Modal isOpen={isOpen} onClose={onClose} type={side}>
      <section
        aria-describedby={`${rootId}-content`}
        aria-labelledby={`${rootId}-header`}
        className="flex h-full flex-col"
        id={rootId}
      >
        <div
          className="flex shrink-0 items-center justify-center p-4 pb-2"
          id={`${rootId}-header`}
        >
          <Heading type="h3">{title}</Heading>
          <div
            className={cn(
              'absolute top-2',
              side === 'left' ? 'left-2' : 'right-2',
            )}
          >
            <IconButton
              label="閉じる"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              <CloseIcon size="sm" />
            </IconButton>
          </div>
        </div>
        {/** biome-ignore lint/a11y/noStaticElementInteractions:　propagationなので */}
        {/** biome-ignore lint/a11y/useKeyWithClickEvents: propagationなので */}
        <div
          className="flex-1 overflow-y-auto overscroll-contain p-4"
          id={`${rootId}-content`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </section>
    </Modal>
  );
};
