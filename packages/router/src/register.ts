import type {
  NavigablePatternOf,
  PatternOf,
  Routes,
  RoutesRecord,
} from './define-routes';
import type { ParamsOf, ParamValue } from './paths';

/**
 * The app-side hook for the route table's type. An application augments this
 * once:
 *
 * ```ts
 * declare module '@k8ordo/router' {
 *   interface Register { routes: typeof routes }
 * }
 * ```
 *
 * and `href` / `navigateTo` / `useParams` verify their pattern against the
 * table everywhere — without any component importing the table's value.
 * Only `<Router>` touches the value; everything else needs just the string
 * pattern, so the routes-module → pages → routes-module import cycle never
 * forms. Declared as an interface — the one exception to the repository's
 * type-only rule — because declaration merging is the entire mechanism.
 */
// oxlint-disable-next-line typescript/consistent-type-definitions, typescript/no-empty-object-type -- augmentation needs a merge-open interface
export interface Register {}

// Applied to the `infer` variable directly rather than through an alias of
// it: under TypeScript 7 `PatternOf<Alias>` stays deferred and never reduces
// to the union, which leaves every pattern rejected where the union is
// compared against (`useMatch`), while `href` only survives through generic
// inference taking another path.

/** Every pattern in the registered table; any `/`-pattern before Register. */
export type RegisteredPattern = Register extends {
  routes: Routes<infer R extends RoutesRecord>;
}
  ? PatternOf<R>
  : `/${string}`;

/** Linkable patterns of the registered table (wildcards excluded). */
export type RegisteredNavigablePattern = Register extends {
  routes: Routes<infer R extends RoutesRecord>;
}
  ? NavigablePatternOf<R>
  : `/${string}`;

type RegisteredParamsMap = Register extends { params: infer M } ? M : null;

/** The pattern's params as anything with one spelling, before any schema. */
type LooseParamsOf<P extends string> = {
  [K in keyof ParamsOf<P>]: ParamValue;
};

/**
 * A pattern's params as a link takes them: where the registered `params`
 * map — written by the framework from the schemas the route files declared
 * — says a page receives something, a link takes that same value (a number
 * in, a number's one spelling out); a param no schema covers takes anything
 * with one spelling. Before `Register` is augmented — a client application
 * that has not, or the framework's generated file not yet written — the
 * same loose shape applies, so a link written for a schema still compiles.
 */
export type RegisteredParams<P extends string> =
  RegisteredParamsMap extends null
    ? LooseParamsOf<P>
    : P extends keyof RegisteredParamsMap
      ? Omit<LooseParamsOf<P>, keyof RegisteredParamsMap[P]> &
          RegisteredParamsMap[P]
      : LooseParamsOf<P>;
