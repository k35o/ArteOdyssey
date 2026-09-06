import { href, useParams } from '@k8ordo/router';
import type { FC } from 'react';

import { findProduct } from '../data/products';

export const ProductPage: FC = () => {
  // パターン文字列から params の型が決まり、Register で表にあることも
  // 検証される。別のパターンの下で描画されたら throw する
  const { id } = useParams('/products/:id');
  const product = findProduct(id);
  return (
    <article data-testid="product">
      <h2>
        {product === undefined ? `no product ${id}` : `${id}:${product.name}`}
      </h2>
      {product === undefined ? null : <p>{product.description}</p>}
      <a href={href('/products')}>back to the list</a>
    </article>
  );
};
