/// <reference types="vite/client" />
/// <reference types="@vitejs/plugin-rsc/types" />

declare module 'virtual:k8ordo/routes' {
  import type { Routes } from '@k8ordo/router';

  export const routes: Routes;
  /**
   * Per full pattern, the schemas along its stack — layouts first. Spelled
   * out rather than imported from `./params`: a relative import inside an
   * ambient module declaration resolves loosely, and the handler wants the
   * real shape.
   */
  export const paramSchemas: Readonly<
    Record<
      string,
      ReadonlyArray<{
        readonly '~standard': {
          readonly validate: (
            value: unknown,
          ) =>
            | { readonly value: unknown; readonly issues?: undefined }
            | { readonly issues: readonly unknown[] }
            | Promise<
                | { readonly value: unknown; readonly issues?: undefined }
                | { readonly issues: readonly unknown[] }
              >;
        };
      }>
    >
  >;
}
