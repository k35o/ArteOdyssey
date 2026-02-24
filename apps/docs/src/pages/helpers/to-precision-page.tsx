import { Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { ToPrecisionPreview } from './_previews/to-precision-previews';

const parameters: PropItem[] = [
  {
    name: 'value',
    types: ['number'],
    defaultValue: null,
  },
  {
    name: 'precision',
    types: ['number'],
    defaultValue: '10',
  },
];

const returnValue: PropItem[] = [
  {
    name: 'result',
    types: ['number'],
    defaultValue: null,
  },
];

export function ToPrecisionPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">toPrecision</Heading>
        <p className="text-fg-mute text-lg">
          <T k="helpers.toPrecision.description" />
        </p>
      </div>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="helpers.common.importTitle" />
        </Heading>
        <CodeBlock
          code="import { toPrecision } from '@k8o/arte-odyssey/helpers/number/to-precision';"
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
            code={`toPrecision(1.2345, 0);  // 1
toPrecision(1.2345, 1);  // 1.2
toPrecision(1.2345, 2);  // 1.23
toPrecision(1.2345, 3);  // 1.235`}
            lang="ts"
          >
            <ToPrecisionPreview />
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
