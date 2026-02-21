import { Outlet } from '@funstack/router';
import type { RouteDefinition } from '@funstack/router/server';
import { route } from '@funstack/router/server';
import { Home } from './pages/Home';
import { Router } from './Router';

const routes: RouteDefinition[] = [
  route({
    path: '/',
    component: <Outlet />,
    children: [
      route({
        path: '/',
        component: <Home />,
      }),
    ],
  }),
];

export default function App() {
  return <Router fallback="static" routes={routes} />;
}
