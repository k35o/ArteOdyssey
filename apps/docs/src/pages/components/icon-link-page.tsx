import {
  Anchor,
  CopyIcon,
  Heading,
  IconLink,
  Separator,
} from '@k8o/arte-odyssey';

import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';

const iconLinkProps: PropItem[] = [
  {
    name: 'size',
    types: ["'sm'", "'md'", "'lg'"],
    defaultValue: "'md'",
  },
  {
    name: 'bg',
    types: ["'transparent'", "'base'", "'primary'", "'secondary'"],
    defaultValue: "'transparent'",
  },
  { name: 'label', types: ['string'], defaultValue: null },
  { name: 'href', types: ['string'], defaultValue: null },
  { name: 'openInNewTab', types: ['boolean'], defaultValue: 'false' },
  { name: 'renderAnchor', types: ['(props) => ReactNode'], defaultValue: null },
  { name: 'children', types: ['ReactNode'], defaultValue: null },
];

export function IconLinkPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">IconLink</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.iconLink.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-buttons-icon-link--docs`}
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
          code="import { IconLink } from '@k8o/arte-odyssey';"
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
            code={`import { CopyIcon } from '@k8o/arte-odyssey';

<IconLink href="https://example.com" label="Copy">
  <CopyIcon />
</IconLink>`}
          >
            <IconLink href="https://example.com" label="Copy">
              <CopyIcon />
            </IconLink>
          </ComponentPreview>
        </div>

        {/* Sizes */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.iconLink.sizesTitle" />
          </Heading>
          <ComponentPreview
            code={`<IconLink href="https://example.com" label="Copy" size="sm">
  <CopyIcon />
</IconLink>
<IconLink href="https://example.com" label="Copy" size="md">
  <CopyIcon />
</IconLink>
<IconLink href="https://example.com" label="Copy" size="lg">
  <CopyIcon />
</IconLink>`}
          >
            <IconLink href="https://example.com" label="Copy" size="sm">
              <CopyIcon />
            </IconLink>
            <IconLink href="https://example.com" label="Copy" size="md">
              <CopyIcon />
            </IconLink>
            <IconLink href="https://example.com" label="Copy" size="lg">
              <CopyIcon />
            </IconLink>
          </ComponentPreview>
        </div>

        {/* Backgrounds */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.iconLink.backgroundsTitle" />
          </Heading>
          <ComponentPreview
            code={`<IconLink bg="transparent" href="https://example.com" label="Copy">
  <CopyIcon />
</IconLink>
<IconLink bg="base" href="https://example.com" label="Copy">
  <CopyIcon />
</IconLink>
<IconLink bg="primary" href="https://example.com" label="Copy">
  <CopyIcon />
</IconLink>
<IconLink bg="secondary" href="https://example.com" label="Copy">
  <CopyIcon />
</IconLink>`}
          >
            <IconLink bg="transparent" href="https://example.com" label="Copy">
              <CopyIcon />
            </IconLink>
            <IconLink bg="base" href="https://example.com" label="Copy">
              <CopyIcon />
            </IconLink>
            <IconLink bg="primary" href="https://example.com" label="Copy">
              <CopyIcon />
            </IconLink>
            <IconLink bg="secondary" href="https://example.com" label="Copy">
              <CopyIcon />
            </IconLink>
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      {/* Props */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={iconLinkProps} />
      </section>
    </div>
  );
}
