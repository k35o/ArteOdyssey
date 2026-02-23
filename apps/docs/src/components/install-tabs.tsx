'use client';

import { Tabs } from '@k8o/arte-odyssey';
import type { FC, ReactNode } from 'react';

export const InstallTabs: FC<{
  npm: ReactNode;
  yarn: ReactNode;
  pnpm: ReactNode;
}> = ({ npm, yarn, pnpm }) => {
  return (
    <Tabs.Root ids={['npm', 'yarn', 'pnpm']}>
      <Tabs.List label="Package manager">
        <Tabs.Tab id="npm">npm</Tabs.Tab>
        <Tabs.Tab id="yarn">yarn</Tabs.Tab>
        <Tabs.Tab id="pnpm">pnpm</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="npm">{npm}</Tabs.Panel>
      <Tabs.Panel id="yarn">{yarn}</Tabs.Panel>
      <Tabs.Panel id="pnpm">{pnpm}</Tabs.Panel>
    </Tabs.Root>
  );
};
