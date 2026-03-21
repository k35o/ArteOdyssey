import type { FC, PropsWithChildren } from 'react';

export const Accordion: FC<PropsWithChildren> = ({ children }) => {
  return <div className="divide-y divide-border-mute">{children}</div>;
};
