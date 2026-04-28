import type { FC, PropsWithChildren } from 'react';

export const Accordion: FC<PropsWithChildren> = ({ children }) => (
  <div className="divide-border-mute divide-y">{children}</div>
);
