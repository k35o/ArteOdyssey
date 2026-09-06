import { normalizePathname } from '@k8ordo/router';

/**
 * Where a page's RSC payload lives. It has to be a plain path, not a header
 * or a query, because static hosting varies on neither — the same convention
 * then works for a directory of files and for a running server.
 *
 * `/` → `/index.rsc`, `/products/42` → `/products/42/index.rsc`.
 */
const SUFFIX = '/index.rsc';

export const payloadPathFor = (pathname: string): string => {
  // The router's own reading of a pathname, so the two never disagree about
  // a trailing slash; the root is the one pathname that is only a slash.
  const page = normalizePathname(pathname);
  return `${page === '/' ? '' : page}${SUFFIX}`;
};

export const isPayloadPath = (pathname: string): boolean =>
  pathname.endsWith(SUFFIX);

export const pagePathFor = (payloadPath: string): string => {
  const page = payloadPath.slice(0, -SUFFIX.length);
  return page === '' ? '/' : page;
};
