/**
 * ブラウザには必ずあるが、単体テスト用の DOM 実装（jsdom / happy-dom）には
 * 欠けていることがある API の入口。テスト環境の欠落はブラウザの欠落ではないので、
 * ここでは polyfill を持たず「無ければ何もしない」に落とすだけにする。判定を
 * 各実装に散らすと欠落のたびに書式が割れるため、一箇所に集める。
 */

export const createResizeObserver = (
  callback: ResizeObserverCallback,
): ResizeObserver | null =>
  typeof ResizeObserver === 'function' ? new ResizeObserver(callback) : null;

export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit,
): IntersectionObserver | null =>
  typeof IntersectionObserver === 'function'
    ? new IntersectionObserver(callback, options)
    : null;

export const matchMedia = (query: string): MediaQueryList | null =>
  typeof window.matchMedia === 'function' ? window.matchMedia(query) : null;

export const showModalDialog = (dialog: HTMLDialogElement): void => {
  if (typeof dialog.showModal !== 'function') {
    return;
  }
  dialog.showModal();
};

export const closeDialog = (dialog: HTMLDialogElement): void => {
  if (typeof dialog.close !== 'function') {
    return;
  }
  dialog.close();
};

/**
 * Popover API の表示状態を isOpen に合わせる。`:popover-open` の照合は
 * showPopover が実在するときだけ行う。セレクタエンジンによっては未知の擬似クラスを
 * SyntaxError で拒むため、Popover API ごと無い環境ではセレクタにも触れない。
 */
export const syncPopover = (element: HTMLElement, isOpen: boolean): void => {
  if (
    typeof element.showPopover !== 'function' ||
    typeof element.hidePopover !== 'function'
  ) {
    return;
  }
  if (isOpen && !element.matches(':popover-open')) {
    element.showPopover();
  } else if (!isOpen && element.matches(':popover-open')) {
    element.hidePopover();
  }
};
