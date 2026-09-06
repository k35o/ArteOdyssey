'use client';

import { useAppState } from '@k8ordo/state';
import { createContext, use, useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';

import type { WritingMode } from './state';
import { writingModeState } from './state';

type WritingModeContextValue = {
  writingMode: WritingMode;
  toggleWritingMode: () => void;
};

const WritingModeContext = createContext<WritingModeContextValue | null>(null);

export function WritingModeProvider({ children }: { children: ReactNode }) {
  const [{ mode }, update] = useAppState(writingModeState);
  const writingMode: WritingMode = mode ?? 'horizontal';

  const toggleWritingMode = useCallback(() => {
    update({ mode: writingMode === 'horizontal' ? 'vertical' : 'horizontal' });
  }, [update, writingMode]);

  const value = useMemo(
    () => ({ writingMode, toggleWritingMode }),
    [writingMode, toggleWritingMode],
  );

  return <WritingModeContext value={value}>{children}</WritingModeContext>;
}

export function useWritingMode(): WritingModeContextValue {
  const context = use(WritingModeContext);
  if (context === null) {
    throw new Error('useWritingMode must be used within a WritingModeProvider');
  }
  return context;
}
