import { Anchor, Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';

const anchorProps: PropItem[] = [
  { name: 'href', types: ['string'], defaultValue: null },
  { name: 'openInNewTab', types: ['boolean'], defaultValue: 'false' },
  { name: 'children', types: ['ReactNode'], defaultValue: null },
];

export function AnchorPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">Anchor</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.anchor.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-anchor--docs`}
            openInNewTab
          >
            <T k="components.common.storybookLink" />
          </Anchor>
        </div>
      </div>
      <Separator color="mute" />

      {/* Import */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.importTitle" />
        </Heading>
        <CodeBlock
          code="import { Anchor } from '@k8o/arte-odyssey/anchor';"
          lang="ts"
        />
      </section>
      <Separator color="mute" />

      {/* Usage */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Heading type="h2">
            <T k="components.common.usageTitle" />
          </Heading>
          <ComponentPreview
            code={`<Anchor href="https://example.com" openInNewTab>
  External Link
</Anchor>`}
          >
            <Anchor href="https://example.com" openInNewTab>
              External Link
            </Anchor>
          </ComponentPreview>
        </div>

        {/* Open in New Tab */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.anchor.openInNewTabTitle" />
          </Heading>
          <ComponentPreview
            code={`<Anchor href="#">
  Same Tab Link
</Anchor>
<Anchor href="https://example.com" openInNewTab>
  New Tab Link
</Anchor>`}
          >
            <Anchor href="#">Same Tab Link</Anchor>
            <Anchor href="https://example.com" openInNewTab>
              New Tab Link
            </Anchor>
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      {/* Props */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={anchorProps} />
      </section>
    </div>
  );
}
