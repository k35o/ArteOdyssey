import { Router } from '@k8ordo/router';
import type { FC } from 'react';

import { routes } from './routes';

// 表の値を持つのは <Router> だけ。ページは href / useParams をパターン文字列
// だけで使うので、routes を import し返すことがない (循環 import が構造的に
// 存在しない)。
export const App: FC = () => <Router routes={routes} />;
