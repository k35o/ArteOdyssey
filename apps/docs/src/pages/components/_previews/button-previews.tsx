'use client';

import { Button } from '@k8o/arte-odyssey';

export function ButtonAsLinkPreview() {
  return (
    <Button
      renderItem={({ className, children }) => (
        <a className={className} href="https://example.com">
          {children}
        </a>
      )}
    >
      Visit
    </Button>
  );
}
