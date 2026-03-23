interface NavigationNavigateOptions {
  state?: unknown;
  history?: 'auto' | 'push' | 'replace';
  info?: unknown;
}

interface NavigationResult {
  committed: Promise<NavigationHistoryEntry>;
  finished: Promise<NavigationHistoryEntry>;
}

interface NavigationHistoryEntry extends EventTarget {
  readonly url: string | null;
  readonly key: string;
  readonly id: string;
  readonly index: number;
  readonly sameDocument: boolean;
  getState(): unknown;
}

interface Navigation extends EventTarget {
  readonly currentEntry: NavigationHistoryEntry | null;
  navigate(url: string, options?: NavigationNavigateOptions): NavigationResult;
  back(): NavigationResult;
  forward(): NavigationResult;
}

declare const navigation: Navigation;
