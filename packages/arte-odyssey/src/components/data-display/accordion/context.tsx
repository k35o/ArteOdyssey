'use client';

import { createContext, type FC, type PropsWithChildren, use } from 'react';
import { useDisclosure } from '../../../hooks/disclosure';

const OpenContext = createContext(false);

type ToggleOpen = () => void;
const ToggleOpenContext = createContext<ToggleOpen | undefined>(undefined);
const ItemIdContext = createContext<string | undefined>(undefined);

export const useOpen = (): boolean => use(OpenContext);

export const useToggleOpen = (): ToggleOpen => {
  const toggleOpen = use(ToggleOpenContext);
  if (!toggleOpen) {
    throw new Error('useToggleOpen must be used within AccordionProvider');
  }
  return toggleOpen;
};

export const useItemId = (): string => {
  const id = use(ItemIdContext);
  if (!id) {
    throw new Error('useItemId must be used within AccordionProvider');
  }
  return id;
};

export const AccordionItemProvider: FC<
  PropsWithChildren<{
    defaultOpen?: boolean;
    id: string;
  }>
> = ({ defaultOpen = false, id, children }) => {
  const { isOpen, toggle } = useDisclosure(defaultOpen);

  return (
    <OpenContext value={isOpen}>
      <ToggleOpenContext value={toggle}>
        <ItemIdContext value={id}>{children}</ItemIdContext>
      </ToggleOpenContext>
    </OpenContext>
  );
};
