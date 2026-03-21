'use client';

import { between } from '@k8o/arte-odyssey';

const examples = [
  { value: 5, min: 0, max: 10 },
  { value: -5, min: 0, max: 10 },
  { value: 15, min: 0, max: 10 },
];

export function BetweenPreview() {
  return (
    <div className="flex flex-col gap-2">
      {examples.map(({ value, min, max }) => (
        <div className="text-sm" key={value}>
          <code>
            between({value}, {min}, {max})
          </code>{' '}
          → <code className="font-bold">{between(value, min, max)}</code>
        </div>
      ))}
    </div>
  );
}
