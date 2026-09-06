import { Outlet } from '@k8ordo/router';
import type { FC } from 'react';

// route group '/(docs)' のレイアウト。URL に docs という区画は現れない
export const DocsLayout: FC = () => (
  <section data-testid="docs-shell">
    <p>docs</p>
    <Outlet />
  </section>
);
