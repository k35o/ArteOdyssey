'use client';

import { Component, createElement, Suspense, use } from 'react';
import type { ComponentType, ReactNode } from 'react';

import { NavigationGeneration } from './navigation';

/**
 * What a route table's `error` component receives: what was thrown, and a
 * way to try the subtree again in place.
 */
export type ErrorProps = {
  readonly error: unknown;
  readonly reset: () => void;
};

export type ErrorComponent = ComponentType<ErrorProps>;

type CatchProps = {
  readonly fallback: ErrorComponent;
  readonly children?: ReactNode;
};

type CatchState = { readonly error: unknown; readonly failed: boolean };

class Catch extends Component<CatchProps, CatchState> {
  override state: CatchState = { error: undefined, failed: false };

  static getDerivedStateFromError(error: unknown): CatchState {
    return { error, failed: true };
  }

  private readonly reset = (): void => {
    this.setState({ error: undefined, failed: false });
  };

  override render(): ReactNode {
    if (!this.state.failed) return this.props.children;
    return createElement(this.props.fallback, {
      error: this.state.error,
      reset: this.reset,
    });
  }
}

/**
 * The boundary a table's `error` component renders inside. Keyed by the
 * navigation that put the tree on screen, so leaving the page that failed
 * leaves the failure behind — and not by the pathname, which commits before
 * the tree arrives and would remount the boundary onto the old tree.
 */
export const RouteErrorBoundary = ({
  fallback,
  children,
}: CatchProps): ReactNode => {
  const generation = use(NavigationGeneration);
  // Under a Suspense boundary because a server render has no error
  // boundaries: what it has is the rule that a subtree which throws inside
  // Suspense is left for the browser to render. The browser then throws at
  // the same place and the boundary here catches it — so the error component
  // shows after hydration, with the frame around it already on screen.
  return createElement(
    Suspense,
    { fallback: null },
    createElement(Catch, { key: generation, fallback }, children),
  );
};
