type NavigationNavigateOptions = {
  state?: unknown;
  history?: 'auto' | 'push' | 'replace';
  info?: unknown;
};

type NavigationResult = {
  committed: Promise<NavigationHistoryEntry>;
  finished: Promise<NavigationHistoryEntry>;
};

type NavigationHistoryEntry = {
  readonly url: string | null;
  readonly key: string;
  readonly id: string;
  readonly index: number;
  readonly sameDocument: boolean;
  getState(): unknown;
} & EventTarget;

type Navigation = {
  readonly currentEntry: NavigationHistoryEntry | null;
  navigate(url: string, options?: NavigationNavigateOptions): NavigationResult;
  back(): NavigationResult;
  forward(): NavigationResult;
} & EventTarget;

declare const navigation: Navigation;
