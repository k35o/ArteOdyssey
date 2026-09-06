import { defineLocalState } from '@k8ordo/state';
import * as z from 'zod/mini';

// 定義はディレクティブ無しのモジュールに置く。`'use client'` のファイルから
// export すると、Server Component 側（routes/layout.tsx の初期化スクリプト）
// には client reference の代理しか届かず、`inlineRead()` が呼べない。

// mode が未設定のあいだはシステム設定に追従する。過去の `sepia` のような
// 未知の値はスキーマのサルベージが未設定に落とすので、手動の正規化は無い。
// 保存先は localStorage の `themeState.storageKey`（routes/layout.tsx の
// 初期化スクリプトは `inlineRead()` で同じ行を読む）。
export const themeState = defineLocalState(
  'theme',
  z.object({ mode: z.optional(z.enum(['light', 'dark'])) }),
);

export const WRITING_MODES = ['horizontal', 'vertical'] as const;

export type WritingMode = (typeof WRITING_MODES)[number];

// 未設定と未知の値はどちらも横書き（既定）に落ちる。
export const writingModeState = defineLocalState(
  'writing-mode',
  z.object({ mode: z.optional(z.enum(WRITING_MODES)) }),
);
