import type { ErrorProps } from '@k8ordo/router';
import { href } from '@k8ordo/router';
import type { FC } from 'react';

// '/products' branch の error。ProductsFrame の穴の中に描画されるので、
// 枠と nav はそのまま残る。別のページへ移れば失敗は置き去りになる
export const ProductError: FC<ErrorProps> = ({ error, reset }) => (
  <section data-testid="route-error">
    <p>
      something went wrong: {error instanceof Error ? error.message : 'unknown'}
    </p>
    <button onClick={reset} type="button">
      retry
    </button>{' '}
    <a href={href('/products')}>back to the list</a>
  </section>
);
