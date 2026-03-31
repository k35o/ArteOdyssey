import { Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { UseScrollLockPreview } from './_previews/use-scroll-lock-previews';

const returnValue: PropItem[] = [
  {
    name: 'lock',
    types: ['() => void'],
    defaultValue: null,
  },
  {
    name: 'unlock',
    types: ['() => void'],
    defaultValue: null,
  },
];

export function UseScrollLockPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">useScrollLock</Heading>
        <p className="text-fg-mute text-lg">
          <T k="hooks.useScrollLock.description" />
        </p>
      </div>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="hooks.common.importTitle" />
        </Heading>
        <CodeBlock code="import { useScrollLock } from '@k8o/arte-odyssey';" lang="ts" />
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-8">
        <Heading type="h2">
          <T k="hooks.common.usageTitle" />
        </Heading>
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="hooks.common.basicUsageTitle" />
          </Heading>
          <ComponentPreview
            code={`const { lock, unlock } = useScrollLock();

return (
  <div>
    <button onClick={lock}>Lock</button>
    <button onClick={unlock}>Unlock</button>
  </div>
);`}
          >
            <UseScrollLockPreview />
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="hooks.common.returnValueTitle" />
        </Heading>
        <PropsTable items={returnValue} />
      </section>
    </div>
  );
}
