/**
 * The type half of the route table: everything here is derived from the
 * pattern strings by inference alone — no code generation. A pattern like
 * `'/:locale/products/:id'` yields its params (`{ locale, id }`), its
 * concrete-path type (`` `/${string}/products/${string}` ``), and its place
 * in the app-wide route union.
 */

type SegParam<Segment extends string> = Segment extends `:${infer Name}`
  ? Record<Name, string>
  : Record<never, never>;

type SegListParams<Rest extends string> =
  Rest extends `${infer Segment}/${infer Tail}`
    ? SegParam<Segment> & SegListParams<Tail>
    : SegParam<Rest>;

/** `'/:locale/products/:id'` → `{ locale: string; id: string }` */
export type ParamsOf<Pattern extends string> = Pattern extends `/${infer Rest}`
  ? SegListParams<Rest>
  : Record<never, never>;

/**
 * The shape every validation library agrees on (Standard Schema): a value
 * under `~standard` whose `types` carry the input and output. Only the
 * output is read here — the router itself never runs a schema; the framework
 * does, and this package only has to type what comes out.
 */
export type StandardSchemaLike<Output = unknown> = {
  readonly '~standard': {
    readonly types?: { readonly output: Output } | undefined;
  };
};

/** What a schema produces. */
export type SchemaOutput<Schema> =
  Schema extends StandardSchemaLike<infer Output> ? Output : never;

/**
 * A schema a route file may declare for the params its pattern names: its
 * output is an object whose keys are a subset of those params — a key the
 * pattern does not name has nothing to validate.
 */
export type ParamsSchemaFor<Pattern extends string> = StandardSchemaLike<
  Partial<Record<keyof ParamsOf<Pattern> & string, unknown>>
>;

type MergedOutput<Schemas extends readonly unknown[]> =
  Schemas extends readonly [infer Head, ...infer Tail]
    ? Omit<MergedOutput<Tail>, keyof SchemaOutput<Head>> & SchemaOutput<Head>
    : Record<never, never>;

/**
 * A pattern's params after the schemas along its stack have run — outer
 * layouts first, the page last — each replacing the strings it names with
 * what it produced. Params no schema names stay strings.
 */
export type ParsedParams<
  Pattern extends string,
  Schemas extends readonly unknown[],
> = Omit<ParamsOf<Pattern>, keyof MergedOutput<Schemas>> &
  MergedOutput<Schemas>;

/** `{ '/products/:id': [schema, …] }` → `{ '/products/:id': { id: number } }` */
export type ParsedParamsMap<
  Schemas extends Record<string, readonly unknown[]>,
> = {
  [Pattern in keyof Schemas & string]: ParsedParams<Pattern, Schemas[Pattern]>;
};

type SegPath<Segment extends string> = Segment extends `:${string}`
  ? string
  : Segment;

type SegListPath<Rest extends string> =
  Rest extends `${infer Segment}/${infer Tail}`
    ? `${SegPath<Segment>}/${SegListPath<Tail>}`
    : SegPath<Rest>;

/** `'/:locale/products/:id'` → `` `/${string}/products/${string}` `` */
export type PathFor<Pattern extends string> = Pattern extends `/${infer Rest}`
  ? `/${SegListPath<Rest>}`
  : never;

/**
 * Keys that address the parent's own place instead of a place below it:
 * `'/'` (the branch's index) and `'/(name)'` (a group, which structures the
 * table — its own layout, its own subtree — without touching the URL).
 */
type Transparent<Key extends string> = Key extends '/'
  ? true
  : Key extends `/(${string})`
    ? true
    : false;

/** Composes a parent prefix with a child key. */
export type Join<Prefix extends string, Key extends string> =
  Transparent<Key> extends true
    ? Prefix extends ''
      ? '/'
      : Prefix
    : `${Prefix}${Key}`;

export const isGroupKey = (key: string): boolean => /^\/\([^)]+\)$/u.test(key);

export const joinPattern = (prefix: string, key: string): string =>
  key === '/' || isGroupKey(key)
    ? prefix === ''
      ? '/'
      : prefix
    : `${prefix}${key}`;

/**
 * URLPattern treats `/products` and `/products/` as different pathnames; the
 * router does not. Everything is matched against the slashless canonical
 * form, root excepted.
 */
export const normalizePathname = (pathname: string): string => {
  // 末尾を走査で落とす。`/\/+$/` は「/」だけの長い pathname に対して
  // 開始位置ごとに末尾まで走るので、URL から来る入力には二乗の穴になる。
  let end = pathname.length;
  while (end > 1 && pathname.charAt(end - 1) === '/') {
    end -= 1;
  }
  return pathname.slice(0, end);
};

/** What a param value may be on the way into a link: anything with one spelling. */
export type ParamValue = string | number | bigint | boolean;

export const buildHref = (
  pattern: string,
  params: Readonly<Record<string, unknown>> | undefined,
): string => {
  if (pattern.includes('*')) {
    throw new TypeError(`"${pattern}" is a wildcard — it has no href`);
  }
  return pattern
    .split('/')
    .map((segment) => {
      if (!segment.startsWith(':')) return segment;
      const name = segment.slice(1);
      const value = params?.[name];
      if (value === undefined) {
        throw new TypeError(`"${pattern}" needs a value for ":${name}"`);
      }
      // A schema-typed param arrives as what the page received — a number,
      // a boolean — and a segment is its one spelling, which is what the
      // schema will read back.
      if (
        typeof value !== 'string' &&
        typeof value !== 'number' &&
        typeof value !== 'bigint' &&
        typeof value !== 'boolean'
      ) {
        throw new TypeError(
          `"${pattern}" got a value for ":${name}" that has no URL spelling`,
        );
      }
      return encodeURIComponent(String(value));
    })
    .join('/');
};
