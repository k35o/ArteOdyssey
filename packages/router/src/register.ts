import type {
  NavigablePatternOf,
  PatternOf,
  Routes,
  RoutesRecord,
} from './define-routes';
import type { ParamsOf } from './paths';

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

type RegisteredRecord = Register extends {
  routes: Routes<infer R extends RoutesRecord>;
}
  ? R
  : null;

/** Every pattern in the registered table; any `/`-pattern before Register. */
export type RegisteredPattern = RegisteredRecord extends RoutesRecord
  ? PatternOf<RegisteredRecord>
  : `/${string}`;

/** Linkable patterns of the registered table (wildcards excluded). */
export type RegisteredNavigablePattern = RegisteredRecord extends RoutesRecord
  ? NavigablePatternOf<RegisteredRecord>
  : `/${string}`;

type RegisteredParamsMap = Register extends { params: infer M } ? M : null;

/**
 * A pattern's params as a link takes them: the strings the pattern names,
 * except where the registered `params` map — written by the framework from
 * the schemas the route files declared — says a page receives something
 * else, in which case a link takes that same value. A number in, a number's
 * one spelling out.
 */
export type RegisteredParams<P extends string> =
  RegisteredParamsMap extends null
    ? ParamsOf<P>
    : P extends keyof RegisteredParamsMap
      ? Omit<ParamsOf<P>, keyof RegisteredParamsMap[P]> & RegisteredParamsMap[P]
      : ParamsOf<P>;
