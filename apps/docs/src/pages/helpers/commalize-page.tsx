import { Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { CommalizePreview } from './_previews/commalize-previews';

const parameters: PropItem[] = [
  {
    name: 'num',
    types: ['number'],
    defaultValue: null,
  },
];

const returnValue: PropItem[] = [
  {
    name: 'result',
    types: ['string'],
    defaultValue: null,
  },
];

export function CommalizePage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">commalize</Heading>
        <p className="text-fg-mute text-lg">
          <T k="helpers.commalize.description" />
        </p>
      </div>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="helpers.common.importTitle" />
        </Heading>
        <CodeBlock
          code="import { commalize } from '@k8o/arte-odyssey/helpers/number/commalize';"
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
            code={`commalize(100);         // '100'
commalize(1000);        // '1,000'
commalize(1000000);     // '1,000,000'
commalize(1234567.89);  // '1,234,568'`}
            lang="ts"
          >
            <CommalizePreview />
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
