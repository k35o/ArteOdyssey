'use client';

import { TextField, useDebouncedTransition } from '@k8o/arte-odyssey';
import { useState } from 'react';

const toAbortError = (reason: unknown): Error =>
  reason instanceof Error ? reason : new DOMException('aborted', 'AbortError');

const sleep = (ms: number, signal: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    if (signal.aborted) {
      reject(toAbortError(signal.reason));
      return;
    }
    const timer = setTimeout(resolve, ms);
    signal.addEventListener(
      'abort',
      () => {
        clearTimeout(timer);
        reject(toAbortError(signal.reason));
      },
      { once: true },
    );
  });

export function UseDebouncedTransitionPreview() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [isPending, run] = useDebouncedTransition(500);

  return (
    <div className="flex flex-col gap-3">
      <TextField
        aria-describedby={undefined}
        id="debounced-transition-demo"
        disabled={false}
        invalid={false}
        required={false}
        onChange={(e) => {
          const next = e.target.value;
          setQuery(next);
          run(async (signal) => {
            await sleep(800, signal);
            setResult(next === '' ? '' : `"${next}" の結果`);
          });
        }}
        placeholder="検索語を入力"
        value={query}
      />
      <p
        aria-busy={isPending || undefined}
        className={`text-fg-mute text-sm transition-opacity ${isPending ? 'opacity-60' : ''}`}
      >
        {isPending
          ? '通信中…'
          : result || '（入力すると 500ms デバウンス後に疑似 API が走ります）'}
      </p>
    </div>
  );
}
