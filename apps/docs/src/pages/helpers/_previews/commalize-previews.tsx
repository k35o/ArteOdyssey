'use client';

import { commalize } from '@k8o/arte-odyssey/helpers/number/commalize';

const examples = [100, 1000, 1000000, 1234567.89];

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
