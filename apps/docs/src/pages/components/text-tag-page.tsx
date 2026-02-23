import { Anchor, Heading, Separator, TextTag } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';

const textTagProps: PropItem[] = [
  { name: 'text', types: ['string'], defaultValue: null },
  {
    name: 'size',
    types: ["'sm'", "'md'"],
    defaultValue: "'md'",
  },
  { name: 'clickable', types: ['boolean'], defaultValue: 'false' },
];

export function TextTagPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">TextTag</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.textTag.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-text-tag--docs`}
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
          code="import { TextTag } from '@k8o/arte-odyssey/text-tag';"
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
          <ComponentPreview code='<TextTag text="Tag" />'>
            <TextTag text="Tag" />
          </ComponentPreview>
        </div>

        {/* Sizes */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.textTag.sizesTitle" />
          </Heading>
          <ComponentPreview
            code={`<TextTag size="sm" text="Small" />
<TextTag size="md" text="Medium" />`}
          >
            <TextTag size="sm" text="Small" />
            <TextTag size="md" text="Medium" />
          </ComponentPreview>
        </div>

        {/* Clickable */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.textTag.clickableTitle" />
          </Heading>
          <ComponentPreview
            code={`<TextTag clickable text="Clickable Tag" />
<TextTag text="Non-clickable Tag" />`}
          >
            <TextTag clickable text="Clickable Tag" />
            <TextTag text="Non-clickable Tag" />
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      {/* Props */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={textTagProps} />
      </section>
    </div>
  );
}
