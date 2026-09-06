import { href, usePathname } from '@k8ordo/router';
import type { FC } from 'react';

// '/*' は表のどのパターンにも合わなかった pathname を受ける。表を持たない
// usePathname で、ブラウザが今いる場所をそのまま見せる
export const NotFound: FC = () => (
  <div data-testid="not-found">
    <p>not found: {usePathname()}</p>
    <a href={href('/')}>home</a>
  </div>
);
