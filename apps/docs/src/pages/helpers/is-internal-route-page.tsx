import { Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { IsInternalRoutePreview } from './_previews/is-internal-route-previews';

const parameters: PropItem[] = [
  {
    name: 'href',
    types: ['string'],
    defaultValue: null,
  },
];

const returnValue: PropItem[] = [
  {
    name: 'result',
    types: ['boolean'],
    defaultValue: null,
  },
];

export function IsInternalRoutePage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">isInternalRoute</Heading>
        <p className="text-fg-mute text-lg">
          <T k="helpers.isInternalRoute.description" />
        </p>
      </div>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="helpers.common.importTitle" />
        </Heading>
        <CodeBlock
          code="import { isInternalRoute } from '@k8o/arte-odyssey/helpers/is-internal-route';"
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
            code={`isInternalRoute('/about');              // true
isInternalRoute('/docs/getting-started'); // true
isInternalRoute('https://example.com');  // false`}
            lang="ts"
          >
            <IsInternalRoutePreview />
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
