import { Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';

const parameters: PropItem[] = [
  {
    name: 'callback',
    types: ['(size: { width: number; height: number }) => void'],
    defaultValue: null,
  },
  {
    name: 'options.enabled',
    types: ['boolean'],
    defaultValue: 'true',
  },
  {
    name: 'options.debounceMs',
    types: ['number'],
    defaultValue: '-',
  },
];

export function UseWindowResizePage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">useWindowResize</Heading>
        <p className="text-fg-mute text-lg">
          <T k="hooks.useWindowResize.description" />
        </p>
      </div>
      <Separator color="mute" />

      {/* Import */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="hooks.common.importTitle" />
        </Heading>
        <CodeBlock
          code="import { useWindowResize } from '@k8o/arte-odyssey/hooks/window-resize';"
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
          <CodeBlock
            code={`useWindowResize(
  (size) => {
    console.log(\`Window: \${size.width}x\${size.height}\`);
  },
  { debounceMs: 200 },
);`}
            lang="tsx"
          />
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
    </div>
  );
}
