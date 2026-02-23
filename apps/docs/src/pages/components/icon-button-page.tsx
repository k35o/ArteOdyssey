import {
  Anchor,
  CloseIcon,
  Heading,
  IconButton,
  Separator,
} from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';

const iconButtonProps: PropItem[] = [
  {
    name: 'size',
    types: ["'sm'", "'md'", "'lg'"],
    defaultValue: "'md'",
  },
  {
    name: 'bg',
    types: ["'transparent'", "'base'", "'primary'"],
    defaultValue: "'transparent'",
  },
  { name: 'label', types: ['string'], defaultValue: null },
  { name: 'disabled', types: ['boolean'], defaultValue: 'false' },
  { name: 'children', types: ['ReactNode'], defaultValue: null },
];

export function IconButtonPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">IconButton</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.iconButton.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-button-icon-button--docs`}
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
          code="import { IconButton } from '@k8o/arte-odyssey/icon-button';"
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
            code={`import { CloseIcon } from '@k8o/arte-odyssey';

<IconButton label="Close">
  <CloseIcon size="sm" />
</IconButton>`}
          >
            <IconButton label="Close">
              <CloseIcon size="sm" />
            </IconButton>
          </ComponentPreview>
        </div>

        {/* Sizes */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.iconButton.sizesTitle" />
          </Heading>
          <ComponentPreview
            code={`<IconButton label="Close" size="sm">
  <CloseIcon size="sm" />
</IconButton>
<IconButton label="Close" size="md">
  <CloseIcon size="sm" />
</IconButton>
<IconButton label="Close" size="lg">
  <CloseIcon size="sm" />
</IconButton>`}
          >
            <IconButton label="Close" size="sm">
              <CloseIcon size="sm" />
            </IconButton>
            <IconButton label="Close" size="md">
              <CloseIcon size="sm" />
            </IconButton>
            <IconButton label="Close" size="lg">
              <CloseIcon size="sm" />
            </IconButton>
          </ComponentPreview>
        </div>

        {/* Backgrounds */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.iconButton.backgroundsTitle" />
          </Heading>
          <ComponentPreview
            code={`<IconButton bg="transparent" label="Close">
  <CloseIcon size="sm" />
</IconButton>
<IconButton bg="base" label="Close">
  <CloseIcon size="sm" />
</IconButton>
<IconButton bg="primary" label="Close">
  <CloseIcon size="sm" />
</IconButton>`}
          >
            <IconButton bg="transparent" label="Close">
              <CloseIcon size="sm" />
            </IconButton>
            <IconButton bg="base" label="Close">
              <CloseIcon size="sm" />
            </IconButton>
            <IconButton bg="primary" label="Close">
              <CloseIcon size="sm" />
            </IconButton>
          </ComponentPreview>
        </div>

        {/* Disabled */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.iconButton.disabledTitle" />
          </Heading>
          <ComponentPreview
            code={`<IconButton disabled label="Close">
  <CloseIcon size="sm" />
</IconButton>`}
          >
            <IconButton disabled label="Close">
              <CloseIcon size="sm" />
            </IconButton>
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      {/* Props */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={iconButtonProps} />
      </section>
    </div>
  );
}
