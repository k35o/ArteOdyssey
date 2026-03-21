'use client';

import { toPrecision } from '@k8o/arte-odyssey';

const examples = [
  { value: 1.2345, precision: 0 },
  { value: 1.2345, precision: 1 },
  { value: 1.2345, precision: 2 },
  { value: 1.2345, precision: 3 },
];

export function ToPrecisionPreview() {
  return (
    <div className="flex flex-col gap-2">
      {examples.map(({ value, precision }) => (
        <div className="text-sm" key={precision}>
          <code>
            toPrecision({value}, {precision})
          </code>{' '}
          → <code className="font-bold">{toPrecision(value, precision)}</code>
        </div>
      ))}
    </div>
  );
}
