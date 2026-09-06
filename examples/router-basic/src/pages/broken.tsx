import type { FC } from 'react';

// 表の error 境界を見せるためのページ。描画すると必ず throw する
export const Broken: FC = () => {
  throw new Error('this product page is broken');
};
