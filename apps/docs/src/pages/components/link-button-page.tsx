import {
  Anchor,
  ChevronIcon,
  ExternalLinkIcon,
  Heading,
  LinkButton,
  MailIcon,
  Separator,
} from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';

const linkButtonProps: PropItem[] = [
  {
    name: 'variant',
    types: ["'contained'", "'outlined'", "'skeleton'"],
    defaultValue: "'contained'",
  },
  {
    name: 'size',
    types: ["'sm'", "'md'", "'lg'"],
    defaultValue: "'md'",
  },
  {
    name: 'color',
    types: ["'primary'", "'gray'"],
    defaultValue: "'primary'",
  },
  { name: 'href', types: ['string'], defaultValue: null },
  { name: 'startIcon', types: ['ReactNode'], defaultValue: null },
  { name: 'endIcon', types: ['ReactNode'], defaultValue: null },
  { name: 'active', types: ['boolean'], defaultValue: 'false' },
  { name: 'openInNewTab', types: ['boolean'], defaultValue: 'false' },
  { name: 'children', types: ['string'], defaultValue: null },
];

export function LinkButtonPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">LinkButton</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.linkButton.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-link-button--docs`}
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
          code="import { LinkButton } from '@k8o/arte-odyssey/link-button';"
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
            code={`<LinkButton href="#">Get Started</LinkButton>`}
          >
            <LinkButton href="#">Get Started</LinkButton>
          </ComponentPreview>
        </div>

        {/* Variants */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.linkButton.variantsTitle" />
          </Heading>
          <ComponentPreview
            code={`<LinkButton href="#" variant="contained">Contained</LinkButton>
<LinkButton href="#" variant="outlined">Outlined</LinkButton>
<LinkButton href="#" variant="skeleton">Skeleton</LinkButton>`}
          >
            <LinkButton href="#" variant="contained">
              Contained
            </LinkButton>
            <LinkButton href="#" variant="outlined">
              Outlined
            </LinkButton>
            <LinkButton href="#" variant="skeleton">
              Skeleton
            </LinkButton>
          </ComponentPreview>
        </div>

        {/* Colors */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.linkButton.colorsTitle" />
          </Heading>
          <ComponentPreview
            code={`<LinkButton color="primary" href="#">Primary</LinkButton>
<LinkButton color="gray" href="#">Gray</LinkButton>`}
          >
            <LinkButton color="primary" href="#">
              Primary
            </LinkButton>
            <LinkButton color="gray" href="#">
              Gray
            </LinkButton>
          </ComponentPreview>
        </div>

        {/* Sizes */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.linkButton.sizesTitle" />
          </Heading>
          <ComponentPreview
            code={`<LinkButton href="#" size="sm">Small</LinkButton>
<LinkButton href="#" size="md">Medium</LinkButton>
<LinkButton href="#" size="lg">Large</LinkButton>`}
          >
            <LinkButton href="#" size="sm">
              Small
            </LinkButton>
            <LinkButton href="#" size="md">
              Medium
            </LinkButton>
            <LinkButton href="#" size="lg">
              Large
            </LinkButton>
          </ComponentPreview>
        </div>

        {/* With Icons */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.linkButton.iconsTitle" />
          </Heading>
          <ComponentPreview
            code={`import { MailIcon, ChevronIcon } from '@k8o/arte-odyssey';

<LinkButton href="#" startIcon={<MailIcon size="sm" />}>
  Send Email
</LinkButton>
<LinkButton
  endIcon={<ChevronIcon direction="right" size="sm" />}
  href="#"
>
  Next
</LinkButton>`}
          >
            <LinkButton href="#" startIcon={<MailIcon size="sm" />}>
              Send Email
            </LinkButton>
            <LinkButton
              endIcon={<ChevronIcon direction="right" size="sm" />}
              href="#"
            >
              Next
            </LinkButton>
          </ComponentPreview>
        </div>

        {/* Active State */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.linkButton.activeTitle" />
          </Heading>
          <ComponentPreview
            code={`<LinkButton active href="#" variant="skeleton">
  Active Link
</LinkButton>`}
          >
            <LinkButton active href="#" variant="skeleton">
              Active Link
            </LinkButton>
          </ComponentPreview>
        </div>

        {/* Open in New Tab */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.linkButton.openInNewTabTitle" />
          </Heading>
          <ComponentPreview
            code={`import { ExternalLinkIcon } from '@k8o/arte-odyssey';

<LinkButton
  endIcon={<ExternalLinkIcon size="sm" />}
  href="https://example.com"
  openInNewTab
>
  External Link
</LinkButton>`}
          >
            <LinkButton
              endIcon={<ExternalLinkIcon size="sm" />}
              href="https://example.com"
              openInNewTab
            >
              External Link
            </LinkButton>
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      {/* Props */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={linkButtonProps} />
      </section>
    </div>
  );
}
