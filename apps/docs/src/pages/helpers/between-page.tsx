import { Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { BetweenPreview } from './_previews/between-previews';

const parameters: PropItem[] = [
  {
    name: 'value',
    types: ['number'],
    defaultValue: null,
  },
  {
    name: 'min',
    types: ['number'],
    defaultValue: null,
  },
  {
    name: 'max',
    types: ['number'],
    defaultValue: null,
  },
];

const returnValue: PropItem[] = [
  {
    name: 'result',
    types: ['number'],
    defaultValue: null,
  },
];

export function BetweenPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">between</Heading>
        <p className="text-fg-mute text-lg">
          <T k="helpers.between.description" />
        </p>
      </div>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="helpers.common.importTitle" />
        </Heading>
        <CodeBlock
          code="import { between } from '@k8o/arte-odyssey/helpers/number/between';"
          lang="ts"
        />
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-8">
        <Heading type="h2">
          <T k="helpers.common.usageTitle" />
        </Heading>
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="helpers.common.basicUsageTitle" />
          </Heading>
          <ComponentPreview
            code={`between(5, 0, 10);   // 5
between(-5, 0, 10);  // 0
between(15, 0, 10);  // 10`}
            lang="ts"
          >
            <BetweenPreview />
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="helpers.common.parametersTitle" />
        </Heading>
        <PropsTable items={parameters} />
      </section>
      <Separator color="mute" />
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="helpers.common.returnValueTitle" />
        </Heading>
        <PropsTable items={returnValue} />
      </section>
    </div>
  );
}
