'use client';

import { ScrollLinked } from '@k8o/arte-odyssey';
import { useRef } from 'react';

export function ScrollLinkedBasicPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full">
      <section
        aria-label="Scroll demo container"
        className="relative h-64 overflow-y-scroll rounded-lg border border-border-mute"
        ref={containerRef}
        // biome-ignore lint/a11y/noNoninteractiveTabindex: Scrollable region requires keyboard access
        tabIndex={0}
      >
        <ScrollLinked container={containerRef} />
        <div className="h-[800px] p-4">
          <p className="mb-4 font-bold text-lg">Scroll this container</p>
          <p className="mb-4 text-fg-mute">
            The progress bar at the top tracks your scroll position.
          </p>
          <div className="space-y-4">
            {Array.from({ length: 15 }, (_, i) => (
              <p
                className="rounded-lg bg-bg-mute p-4"
                // biome-ignore lint/suspicious/noArrayIndexKey: Static demo content
                key={`block-${i}`}
              >
                Content block {i + 1}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
