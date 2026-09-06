'use client';

// 下のページが throw したとき、layout の内側でこれが描画される
export default function RouteError({
  error,
  reset,
}: {
  error: unknown;
  reset: () => void;
}) {
  return (
    <section data-testid="route-error">
      <p>
        something went wrong:{' '}
        {error instanceof Error ? error.message : 'unknown'}
      </p>
      <button onClick={reset} type="button">
        retry
      </button>
    </section>
  );
}
