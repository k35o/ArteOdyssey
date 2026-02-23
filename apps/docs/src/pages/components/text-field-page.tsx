import { Anchor, Heading, Separator, TextField } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';

const textFieldProps: PropItem[] = [
  { name: 'isInvalid', types: ['boolean'], defaultValue: null },
  { name: 'isDisabled', types: ['boolean'], defaultValue: null },
  { name: 'isRequired', types: ['boolean'], defaultValue: null },
  { name: 'placeholder', types: ['string'], defaultValue: null },
  { name: 'value', types: ['string'], defaultValue: null },
  {
    name: 'onChange',
    types: ['ChangeEventHandler'],
    defaultValue: null,
  },
  { name: 'defaultValue', types: ['string'], defaultValue: null },
];

export function TextFieldPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">TextField</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.textField.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-form-text-field--docs`}
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
          code="import { TextField } from '@k8o/arte-odyssey/text-field';"
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
            code={`<TextField
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
/>`}
          >
            <TextField
              isDisabled={false}
              isInvalid={false}
              isRequired={false}
            />
          </ComponentPreview>
        </div>

        {/* Placeholder */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.textField.placeholderTitle" />
          </Heading>
          <ComponentPreview
            code={`<TextField
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  placeholder="Enter your name"
/>`}
          >
            <TextField
              isDisabled={false}
              isInvalid={false}
              isRequired={false}
              placeholder="Enter your name"
            />
          </ComponentPreview>
        </div>

        {/* Disabled */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.textField.disabledTitle" />
          </Heading>
          <ComponentPreview
            code={`<TextField
  isDisabled
  isInvalid={false}
  isRequired={false}
  placeholder="Disabled field"
/>`}
          >
            <TextField
              isDisabled
              isInvalid={false}
              isRequired={false}
              placeholder="Disabled field"
            />
          </ComponentPreview>
        </div>

        {/* Invalid */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.textField.invalidTitle" />
          </Heading>
          <ComponentPreview
            code={`<TextField
  isDisabled={false}
  isInvalid
  isRequired={false}
  defaultValue="invalid value"
/>`}
          >
            <TextField
              defaultValue="invalid value"
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
        <PropsTable items={textFieldProps} />
      </section>
    </div>
  );
}
