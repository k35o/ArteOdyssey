import { href, navigateTo } from '@k8ordo/router';
import type { FC } from 'react';

export const Home: FC = () => (
  <div data-testid="home">
    <h1>home</h1>
    <p>
      rendered in the browser from a hand-written route table — no server, no
      route files.
    </p>
    <p>
      <a href={href('/products/:id', { id: '2' })}>straight to product 2</a>
    </p>
    {/* ページを変えるのは navigateTo (push なので戻るボタンで戻れる) */}
    <button
      onClick={() => {
        navigateTo('/products/:id', { id: '1' });
      }}
      type="button"
    >
      open product 1
    </button>
  </div>
);
