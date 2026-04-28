'use client';

import { MotionConfig } from 'motion/react';
import type { FC, PropsWithChildren } from 'react';

import { ToastProvider } from '../feedback/toast';

export const ArteOdysseyProvider: FC<PropsWithChildren> = ({ children }) => (
  <MotionConfig reducedMotion="user">
    <ToastProvider>{children}</ToastProvider>
  </MotionConfig>
);
