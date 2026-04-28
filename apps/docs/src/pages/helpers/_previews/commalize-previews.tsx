'use client';

import { commalize } from '@k8o/arte-odyssey';

const examples = [100, 1000, 1_000_000, 1_234_567.89];

export function CommalizePreview() {
  return (
    <div className="flex flex-col gap-2">
      {examples.map((value) => (
        <div className="text-sm" key={value}>
          <code>commalize({value})</code> →{' '}
          <code className="font-bold">{commalize(value)}</code>
        </div>
      ))}
    </div>
  );
}
