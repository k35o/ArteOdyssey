import { Anchor, Badge, Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';

const badgeProps: PropItem[] = [
  { name: 'text', types: ['string'], defaultValue: null },
  { name: 'interactive', types: ['boolean'], defaultValue: 'false' },
  { name: 'size', types: ["'sm'", "'md'"], defaultValue: "'md'" },
  {
    name: 'tone',
    types: ["'neutral'", "'info'", "'success'", "'warning'", "'error'"],
    defaultValue: "'neutral'",
  },
  {
    name: 'variant',
    types: ["'solid'", "'outline'"],
    defaultValue: "'solid'",
  },
];

export function BadgePage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">Badge</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.badge.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-badge--docs`}
            openInNewTab
          >
            <T k="components.common.storybookLink" />
          </Anchor>
        </div>
      </div>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.importTitle" />
        </Heading>
        <CodeBlock
          code="import { Badge } from '@k8o/arte-odyssey';"
          lang="ts"
        />
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Heading type="h2">
            <T k="components.common.usageTitle" />
          </Heading>
          <ComponentPreview code='<Badge text="New" />'>
            <Badge text="New" />
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.badge.tonesTitle" />
          </Heading>
          <ComponentPreview
            code={`<Badge text="Neutral" />
<Badge text="Info" tone="info" />
<Badge text="Success" tone="success" />
<Badge text="Warning" tone="warning" />
<Badge text="Error" tone="error" />`}
          >
            <Badge text="Neutral" />
            <Badge text="Info" tone="info" />
            <Badge text="Success" tone="success" />
            <Badge text="Warning" tone="warning" />
            <Badge text="Error" tone="error" />
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.badge.variantsTitle" />
          </Heading>
          <ComponentPreview
            code={`<Badge text="Solid" tone="success" />
<Badge text="Outline" tone="success" variant="outline" />`}
          >
            <Badge text="Solid" tone="success" />
            <Badge text="Outline" tone="success" variant="outline" />
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.badge.interactiveTitle" />
          </Heading>
          <ComponentPreview
            code={`<Badge interactive text="Neutral Solid" />
<Badge interactive text="Neutral Outline" variant="outline" />
<Badge interactive text="Info Solid" tone="info" />
<Badge interactive text="Info Outline" tone="info" variant="outline" />
<Badge interactive text="Success Solid" tone="success" />
<Badge interactive text="Success Outline" tone="success" variant="outline" />
<Badge interactive text="Warning Solid" tone="warning" />
<Badge interactive text="Warning Outline" tone="warning" variant="outline" />
<Badge interactive text="Error Solid" tone="error" />
<Badge interactive text="Error Outline" tone="error" variant="outline" />`}
          >
            <Badge interactive text="Neutral Solid" />
            <Badge interactive text="Neutral Outline" variant="outline" />
            <Badge interactive text="Info Solid" tone="info" />
            <Badge
              interactive
              text="Info Outline"
              tone="info"
              variant="outline"
            />
            <Badge interactive text="Success Solid" tone="success" />
            <Badge
              interactive
              text="Success Outline"
              tone="success"
              variant="outline"
            />
            <Badge interactive text="Warning Solid" tone="warning" />
            <Badge
              interactive
              text="Warning Outline"
              tone="warning"
              variant="outline"
            />
            <Badge interactive text="Error Solid" tone="error" />
            <Badge
              interactive
              text="Error Outline"
              tone="error"
              variant="outline"
            />
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={badgeProps} />
      </section>
    </div>
  );
}
