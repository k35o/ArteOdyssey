import type { Ref, RefCallback } from 'react';

export const mergeRefs =
  <T>(...refs: ReadonlyArray<Ref<T> | undefined>): RefCallback<T> =>
  (value) => {
    const cleanups: Array<() => void> = [];
    for (const ref of refs) {
      if (typeof ref === 'function') {
        const result = ref(value);
        if (typeof result === 'function') {
          cleanups.push(() => {
            result();
          });
        } else {
          cleanups.push(() => {
            ref(null);
          });
        }
      } else if (ref !== null && ref !== undefined) {
        ref.current = value;
        cleanups.push(() => {
          ref.current = null;
        });
      }
    }
    return () => {
      for (const cleanup of cleanups) cleanup();
    };
  };
