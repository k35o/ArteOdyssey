/**
 * jsdom（単体テスト用の DOM 実装）で mount できることの保証。
 *
 * このファイルにはスタブを一切置かない。ResizeObserver / matchMedia /
 * HTMLDialogElement.showModal / Element.showPopover が無いまま描画し、
 * 欠けた API を踏んでも例外を投げないことを確かめる。実ブラウザでの
 * 見た目と挙動は components / hooks プロジェクト（実 Chromium）が担保する。
 */
import { act } from 'react';
import type { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import type { Root } from 'react-dom/client';

import { Tabs } from './navigation/tabs';
import { Drawer } from './overlays/drawer';
import { DropdownMenu } from './overlays/dropdown-menu';
import { Modal } from './overlays/modal';
import { Popover } from './overlays/popover';
import { Tooltip } from './overlays/tooltip';

(
  globalThis as typeof globalThis & { IS_REACT_ACT_ENVIRONMENT?: boolean }
).IS_REACT_ACT_ENVIRONMENT = true;

// 1 テストにつき 1 マウント。後片付けは afterEach が引き取る。
let mounted: { container: HTMLElement; root: Root } | undefined;

const mount = (ui: ReactNode): HTMLElement => {
  const container = document.createElement('div');
  document.body.append(container);
  const root = createRoot(container);
  act(() => {
    root.render(ui);
  });
  mounted = { container, root };
  return container;
};

afterEach(() => {
  const current = mounted;
  mounted = undefined;
  if (!current) {
    return;
  }
  act(() => {
    current.root.unmount();
  });
  current.container.remove();
});

describe('jsdom での描画', () => {
  it('Modal を開いた状態で mount できる', () => {
    const container = mount(
      <Modal aria-label="設定" isOpen>
        <p>モーダルの本文</p>
      </Modal>,
    );

    expect(container.querySelector('dialog')?.textContent).toContain(
      'モーダルの本文',
    );
  });

  it('Drawer を開いた状態で mount できる', () => {
    const container = mount(
      <Drawer isOpen title="メニュー">
        <p>ドロワーの本文</p>
      </Drawer>,
    );

    expect(container.querySelector('dialog')?.textContent).toContain(
      'ドロワーの本文',
    );
  });

  it('Popover を開いた状態で mount できる', () => {
    const container = mount(
      <Popover.Root defaultOpen role="dialog">
        <Popover.Trigger
          renderItem={(props) => (
            <button type="button" {...props}>
              開く
            </button>
          )}
        />
        <Popover.Content
          renderItem={(props) => <div {...props}>ポップオーバーの本文</div>}
        />
      </Popover.Root>,
    );

    expect(container.querySelector('[role="dialog"]')?.textContent).toBe(
      'ポップオーバーの本文',
    );
  });

  it('Tooltip を mount できる', () => {
    const container = mount(
      <Tooltip.Root defaultOpen>
        <Tooltip.Trigger
          renderItem={(props) => (
            <button type="button" {...props}>
              ヘルプ
            </button>
          )}
        />
        <Tooltip.Content>
          <p>ここに補足情報が表示されます</p>
        </Tooltip.Content>
      </Tooltip.Root>,
    );

    expect(container.querySelector('[role="tooltip"]')?.textContent).toContain(
      'ここに補足情報が表示されます',
    );
  });

  it('DropdownMenu を開いた状態で mount できる', () => {
    const container = mount(
      <DropdownMenu.Root defaultOpen>
        <DropdownMenu.Trigger label="操作" />
        <DropdownMenu.Content>
          <DropdownMenu.Item
            label="編集"
            onAction={() => {
              /* noop */
            }}
          />
          <DropdownMenu.Item
            label="削除"
            onAction={() => {
              /* noop */
            }}
          />
        </DropdownMenu.Content>
      </DropdownMenu.Root>,
    );

    expect(container.querySelectorAll('[role="menuitem"]')).toHaveLength(2);
  });

  it('Tabs を mount できる', () => {
    const container = mount(
      <Tabs.Root ids={['overview', 'settings']}>
        <Tabs.List label="設定メニュー">
          <Tabs.Tab id="overview">概要</Tabs.Tab>
          <Tabs.Tab id="settings">設定</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="overview">
          <p>ここに概要が表示されます。</p>
        </Tabs.Panel>
        <Tabs.Panel id="settings">
          <p>ここに設定項目が表示されます。</p>
        </Tabs.Panel>
      </Tabs.Root>,
    );

    expect(container.querySelectorAll('[role="tab"]')).toHaveLength(2);
    expect(container.querySelector('[role="tabpanel"]')?.textContent).toContain(
      'ここに概要が表示されます。',
    );
  });
});
