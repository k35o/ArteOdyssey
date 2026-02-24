import { Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { CastPreview } from './_previews/cast-previews';

const parameters: PropItem[] = [
  {
    name: 'value',
    types: ['string'],
    defaultValue: null,
  },
  {
    name: 'step',
    types: ['number'],
    defaultValue: null,
  },
  {
    name: 'precision',
    types: ['number'],
    defaultValue: 'undefined',
  },
];

const returnValue: PropItem[] = [
  {
    name: 'result',
    types: ['number'],
    defaultValue: null,
  },
];

export function CastPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">cast</Heading>
        <p className="text-fg-mute text-lg">
          <T k="helpers.cast.description" />
        </p>
      </div>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="helpers.common.importTitle" />
        </Heading>
        <CodeBlock
          code="import { cast } from '@k8o/arte-odyssey/helpers/number/cast';"
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
            code={`cast('1.5', 1);       // 1.5
cast('3.14159', 0.01); // 3.14
cast('-19', 3);        // -19
cast('1e4', 1);        // 10000`}
            lang="ts"
          >
            <CastPreview />
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
