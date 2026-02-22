import type { RouteDefinition } from '@funstack/router/server';
import { route } from '@funstack/router/server';
import { LocaleLayout } from './layouts/locale-layout';
import { Components } from './pages/components';
import { GetStarted } from './pages/get-started';
import { Home } from './pages/Home';
import { Helpers } from './pages/helpers';
import { HooksPage } from './pages/hooks-page';
import { RootRedirect } from './pages/root-redirect';
import { Theming } from './pages/theming';
import { Router } from './Router';

const routes: RouteDefinition[] = [
  route({
    path: '/',
    component: <RootRedirect />,
  }),
  route({
    path: '/:locale',
    component: LocaleLayout,
    children: [
      route({
        path: '/',
        component: <Home />,
      }),
      route({
        path: '/get-started',
        component: <GetStarted />,
      }),
      route({
        path: '/components',
        component: <Components />,
      }),
      route({
        path: '/theming',
        component: <Theming />,
      }),
      route({
        path: '/hooks',
        component: <HooksPage />,
      }),
      route({
        path: '/helpers',
        component: <Helpers />,
      }),
    ],
  }),
];

export default function App() {
  return <Router fallback="static" routes={routes} />;
}
