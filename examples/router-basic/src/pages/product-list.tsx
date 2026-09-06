import { href } from '@k8ordo/router';
import type { FC } from 'react';

import { products } from '../data/products';

export const ProductList: FC = () => (
  <ul data-testid="product-list">
    {products.map((product) => (
      <li key={product.id}>
        <a href={href('/products/:id', { id: product.id })}>{product.name}</a>
      </li>
    ))}
    <li>
      <a href={href('/products/broken')}>a broken product</a>
    </li>
  </ul>
);
