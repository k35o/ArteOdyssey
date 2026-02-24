'use client';

import { cast } from '@k8o/arte-odyssey/helpers/number/cast';

const examples = [
  { value: '1.5', step: 1 },
  { value: '3.14159', step: 0.01 },
  { value: '-19', step: 3 },
  { value: '1e4', step: 1 },
];

export function CastPreview() {
  return (
    <div className="flex flex-col gap-2">
      {examples.map(({ value, step }) => (
        <div className="text-sm" key={`${value}-${step}`}>
          <code>
            cast('{value}', {step})
          </code>{' '}
          → <code className="font-bold">{cast(value, step)}</code>
        </div>
      ))}
    </div>
  );
}
