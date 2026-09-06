import type { RouteOf } from '@k8ordo/router';

/**
 * The app-side hook for typed route paths. An application augments this once,
 * with the same line its `@k8ordo/router` augmentation uses:
 *
 * ```ts
 * import type { routes } from './routes';
 * declare module '@k8ordo/state' {
 *   interface Register { routes: typeof routes }
 * }
 * ```
 *
 * and every `href()` in the app is constrained to the table's linkable paths.
 * A router that is not `@k8ordo/router` registers its path union directly —
 * `interface Register { path: Route }` with `Route` from `next` — which is
 * also what the framework's generator emitted before `routes` existed.
 * Declared as an interface — the one exception to the repository's type-only
 * rule — because declaration merging is the entire mechanism.
 */
// oxlint-disable-next-line typescript/consistent-type-definitions, typescript/no-empty-object-type -- augmentation needs a merge-open interface
export interface Register {}

/**
 * The path union a `Register` shape yields: the table's linkable paths when
 * it carries `routes`, the union as given when it carries `path`, and any
 * `/`-path when it carries neither. `RouteOf` is imported as a type only, so
 * `@k8ordo/router` is never loaded at runtime and stays an optional peer.
 */
export type PathFrom<R> = R extends { routes: infer Routes }
  ? RouteOf<Routes>
  : R extends { path: infer P extends string }
    ? P
    : `/${string}`;

/** `href()`'s path constraint: the registered route type, or any `/`-path. */
export type RegisteredPath = PathFrom<Register>;
