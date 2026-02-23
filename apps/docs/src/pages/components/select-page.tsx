import { Anchor, Heading, Select, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';

const selectProps: PropItem[] = [
  { name: 'id', types: ['string'], defaultValue: null },
  { name: 'describedbyId', types: ['string | undefined'], defaultValue: null },
  { name: 'isInvalid', types: ['boolean'], defaultValue: null },
  { name: 'isDisabled', types: ['boolean'], defaultValue: null },
  { name: 'isRequired', types: ['boolean'], defaultValue: null },
  { name: 'options', types: ['Option[]'], defaultValue: null },
  { name: 'value', types: ['string'], defaultValue: null },
  {
    name: 'onChange',
    types: ['ChangeEventHandler'],
    defaultValue: null,
  },
  { name: 'defaultValue', types: ['string'], defaultValue: null },
];

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

export function SelectPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">Select</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.select.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-form-select--docs`}
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
          code="import { Select } from '@k8o/arte-odyssey/select';"
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
            code={`const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

<Select
  id="select-basic"
  describedbyId={undefined}
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  options={options}
/>`}
          >
            <Select
              describedbyId={undefined}
              id="select-basic"
              isDisabled={false}
              isInvalid={false}
              isRequired={false}
              options={options}
            />
          </ComponentPreview>
        </div>

        {/* Required */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.select.requiredTitle" />
          </Heading>
          <ComponentPreview
            code={`<Select
  id="select-required"
  describedbyId={undefined}
  isDisabled={false}
  isInvalid={false}
  isRequired
  options={options}
/>`}
          >
            <Select
              describedbyId={undefined}
              id="select-required"
              isDisabled={false}
              isInvalid={false}
              isRequired
              options={options}
            />
          </ComponentPreview>
        </div>

        {/* Default Value */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.select.defaultValueTitle" />
          </Heading>
          <ComponentPreview
            code={`<Select
  id="select-default-value"
  defaultValue="cherry"
  describedbyId={undefined}
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  options={options}
/>`}
          >
            <Select
              defaultValue="cherry"
              describedbyId={undefined}
              id="select-default-value"
              isDisabled={false}
              isInvalid={false}
              isRequired={false}
              options={options}
            />
          </ComponentPreview>
        </div>

        {/* Disabled */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.select.disabledTitle" />
          </Heading>
          <ComponentPreview
            code={`<Select
  id="select-disabled"
  describedbyId={undefined}
  isDisabled
  isInvalid={false}
  isRequired={false}
  options={options}
/>`}
          >
            <Select
              describedbyId={undefined}
              id="select-disabled"
              isDisabled
              isInvalid={false}
              isRequired={false}
              options={options}
            />
          </ComponentPreview>
        </div>

        {/* Invalid */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.select.invalidTitle" />
          </Heading>
          <ComponentPreview
            code={`<Select
  id="select-invalid"
  describedbyId={undefined}
  isDisabled={false}
  isInvalid
  isRequired={false}
  options={options}
/>`}
          >
            <Select
              describedbyId={undefined}
              id="select-invalid"
              isDisabled={false}
              isInvalid
              isRequired={false}
              options={options}
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
        <PropsTable items={selectProps} />
      </section>
    </div>
  );
}
