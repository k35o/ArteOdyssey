import { getPluginApi } from '@vitejs/plugin-rsc';
import type { ResolvedConfig } from 'vite';

/**
 * The modules that declared `'use server'`, as the RSC pipeline found them —
 * relative to the project root, in a stable order.
 *
 * A Server Action is compiled the same way in both modes, so "static has no
 * Server Actions" cannot be true by construction; it has to be checked.
 * `getPluginApi` is marked experimental by `@vitejs/plugin-rsc`, which is why
 * this package pins that dependency to an exact version rather than a range:
 * the surface cannot move underneath us without a deliberate bump.
 */
export const serverActionModules = (
  config: Pick<ResolvedConfig, 'plugins'>,
): string[] => {
  const api = getPluginApi(config);
  if (api === undefined) return [];
  return [...api.manager.serverReferences.metaMap.keys()]
    .map((id) => api.manager.toRelativeId(id))
    .toSorted();
};

/**
 * Whether the RSC pipeline compiled this one module as a Server Action.
 *
 * The same registry `serverActionModules` reads, asked one module at a time,
 * so a mode that refuses actions refuses the same set while `vite dev` is
 * running as it does at the end of a build. Reading the module's own text
 * instead cannot work: this is asked from a transform hook ordered after
 * `rsc:use-server`, and by then that transform has prepended its runtime
 * import, so the file no longer begins with the directive.
 *
 * `claimMap` rather than `metaMap` because it is keyed by the id the
 * transform was handed, where `metaMap` is keyed by an id normalised for
 * `node_modules`; the question here is about the id in hand.
 */
export const isServerActionModule = (
  config: Pick<ResolvedConfig, 'plugins'>,
  id: string,
): boolean =>
  getPluginApi(config)?.manager.serverReferences.claimMap.has(id) ?? false;
