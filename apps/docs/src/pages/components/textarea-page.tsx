import { Anchor, Heading, Separator, Textarea } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';

const textareaProps: PropItem[] = [
  { name: 'id', types: ['string'], defaultValue: null },
  { name: 'describedbyId', types: ['string | undefined'], defaultValue: null },
  { name: 'isInvalid', types: ['boolean'], defaultValue: null },
  { name: 'isDisabled', types: ['boolean'], defaultValue: null },
  { name: 'isRequired', types: ['boolean'], defaultValue: null },
  { name: 'placeholder', types: ['string'], defaultValue: null },
  { name: 'rows', types: ['number'], defaultValue: null },
  { name: 'fullHeight', types: ['boolean'], defaultValue: 'false' },
  { name: 'autoResize', types: ['boolean'], defaultValue: 'false' },
  { name: 'value', types: ['string'], defaultValue: null },
  {
    name: 'onChange',
    types: ['ChangeEventHandler'],
    defaultValue: null,
  },
  { name: 'defaultValue', types: ['string'], defaultValue: null },
];

export function TextareaPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">Textarea</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.textarea.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-form-textarea--docs`}
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
          code="import { Textarea } from '@k8o/arte-odyssey/textarea';"
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
            code={`<Textarea
  id="textarea-basic"
  describedbyId={undefined}
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  placeholder="Enter text"
/>`}
          >
            <Textarea
              describedbyId={undefined}
              id="textarea-basic"
              isDisabled={false}
              isInvalid={false}
              isRequired={false}
              placeholder="Enter text"
            />
          </ComponentPreview>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.textarea.rowsTitle" />
          </Heading>
          <ComponentPreview
            code={`<Textarea
  id="textarea-rows"
  describedbyId={undefined}
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  placeholder="6 rows"
  rows={6}
/>`}
          >
            <Textarea
              describedbyId={undefined}
              id="textarea-rows"
              isDisabled={false}
              isInvalid={false}
              isRequired={false}
              placeholder="6 rows"
              rows={6}
            />
          </ComponentPreview>
        </div>

        {/* Auto Resize */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.textarea.autoResizeTitle" />
          </Heading>
          <ComponentPreview
            code={`<Textarea
  id="textarea-auto"
  describedbyId={undefined}
  autoResize
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  placeholder="Type to auto-resize"
  rows={2}
/>`}
          >
            <Textarea
              autoResize
              describedbyId={undefined}
              id="textarea-auto"
              isDisabled={false}
              isInvalid={false}
              isRequired={false}
              placeholder="Type to auto-resize"
              rows={2}
            />
          </ComponentPreview>
        </div>

        {/* Disabled */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.textarea.disabledTitle" />
          </Heading>
          <ComponentPreview
            code={`<Textarea
  id="textarea-disabled"
  describedbyId={undefined}
  isDisabled
  isInvalid={false}
  isRequired={false}
  placeholder="Disabled"
/>`}
          >
            <Textarea
              describedbyId={undefined}
              id="textarea-disabled"
              isDisabled
              isInvalid={false}
              isRequired={false}
              placeholder="Disabled"
            />
          </ComponentPreview>
        </div>

        {/* Invalid */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.textarea.invalidTitle" />
          </Heading>
          <ComponentPreview
            code={`<Textarea
  id="textarea-invalid"
  describedbyId={undefined}
  isDisabled={false}
  isInvalid
  isRequired={false}
  defaultValue="invalid value"
/>`}
          >
            <Textarea
              defaultValue="invalid value"
              describedbyId={undefined}
              id="textarea-invalid"
              isDisabled={false}
              isInvalid
              isRequired={false}
            />
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      {/* Props */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={textareaProps} />
      </section>
    </div>
  );
}
