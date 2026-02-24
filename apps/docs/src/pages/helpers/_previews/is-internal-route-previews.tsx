'use client';

import { isInternalRoute } from '@k8o/arte-odyssey/helpers/is-internal-route';

const examples = ['/about', '/docs/getting-started', 'https://example.com'];

export function IsInternalRoutePreview() {
  return (
    <div className="flex flex-col gap-2">
      {examples.map((href) => (
        <div className="text-sm" key={href}>
          <code>isInternalRoute('{href}')</code> →{' '}
          <code className="font-bold">
            {isInternalRoute(href) ? 'true' : 'false'}
          </code>
        </div>
      ))}
    </div>
  );
}
