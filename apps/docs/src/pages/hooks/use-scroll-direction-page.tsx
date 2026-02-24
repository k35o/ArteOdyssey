import { Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { UseScrollDirectionPreview } from './_previews/use-scroll-direction-previews';

const parameters: PropItem[] = [
  {
    name: 'threshold',
    types: ['number'],
    defaultValue: '50',
  },
];

const returnValue: PropItem[] = [
  {
    name: 'x',
    types: ["'left'", "'right'"],
    defaultValue: null,
  },
  {
    name: 'y',
    types: ["'up'", "'down'"],
    defaultValue: null,
  },
];

export function UseScrollDirectionPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">useScrollDirection</Heading>
        <p className="text-fg-mute text-lg">
          <T k="hooks.useScrollDirection.description" />
        </p>
      </div>
      <Separator color="mute" />

      {/* Import */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="hooks.common.importTitle" />
        </Heading>
        <CodeBlock
          code="import { useScrollDirection } from '@k8o/arte-odyssey/hooks/scroll-direction';"
          lang="ts"
        />
      </section>
      <Separator color="mute" />

      {/* Usage */}
      <section className="flex flex-col gap-8">
        <Heading type="h2">
          <T k="hooks.common.usageTitle" />
        </Heading>
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="hooks.common.basicUsageTitle" />
          </Heading>
          <ComponentPreview
            code={`const { x, y } = useScrollDirection();

return (
  <div>
    <span>Vertical: {y}</span>
    <span>Horizontal: {x}</span>
  </div>
);`}
          >
            <UseScrollDirectionPreview />
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      {/* API */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="hooks.common.parametersTitle" />
        </Heading>
        <PropsTable items={parameters} />
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
