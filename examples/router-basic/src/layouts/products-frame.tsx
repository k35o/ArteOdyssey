import { Outlet } from '@k8ordo/router';
import type { FC } from 'react';

// products 配下を包む枠。下のページが throw しても、この枠は生き残る
// (表の error がこの layout の内側で受け止める)。
export const ProductsFrame: FC = () => (
  <section data-testid="products-frame">
    <h1>products</h1>
    <Outlet />
  </section>
);
