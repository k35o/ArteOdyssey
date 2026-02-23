import { Anchor, Heading, RangeField, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';

const rangeFieldProps: PropItem[] = [
  { name: 'isInvalid', types: ['boolean'], defaultValue: null },
  { name: 'isDisabled', types: ['boolean'], defaultValue: null },
  { name: 'isRequired', types: ['boolean'], defaultValue: null },
  { name: 'step', types: ['number'], defaultValue: '1' },
  { name: 'max', types: ['number'], defaultValue: '100' },
  { name: 'min', types: ['number'], defaultValue: '0' },
  { name: 'showValue', types: ['boolean'], defaultValue: 'true' },
  { name: 'unit', types: ['string'], defaultValue: null },
  { name: 'value', types: ['number'], defaultValue: null },
  {
    name: 'onChange',
    types: ['(value: number) => void'],
    defaultValue: null,
  },
  { name: 'defaultValue', types: ['number'], defaultValue: null },
];

export function RangeFieldPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">RangeField</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.rangeField.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-form-rangefield--docs`}
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
          code="import { RangeField } from '@k8o/arte-odyssey/range-field';"
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
            code={`<RangeField
  defaultValue={50}
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
/>`}
          >
            <div className="w-full">
              <RangeField
                defaultValue={50}
                isDisabled={false}
                isInvalid={false}
                isRequired={false}
              />
            </div>
          </ComponentPreview>
        </div>

        {/* Min / Max / Step */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.rangeField.minMaxStepTitle" />
          </Heading>
          <ComponentPreview
            code={`<RangeField
  defaultValue={20}
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  max={50}
  min={10}
  step={5}
/>`}
          >
            <div className="w-full">
              <RangeField
                defaultValue={20}
                isDisabled={false}
                isInvalid={false}
                isRequired={false}
                max={50}
                min={10}
                step={5}
              />
            </div>
          </ComponentPreview>
        </div>

        {/* Show Value with Unit */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.rangeField.showValueTitle" />
          </Heading>
          <ComponentPreview
            code={`<RangeField
  defaultValue={50}
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  showValue
  unit="%"
/>`}
          >
            <div className="w-full">
              <RangeField
                defaultValue={50}
                isDisabled={false}
                isInvalid={false}
                isRequired={false}
                showValue
                unit="%"
              />
            </div>
          </ComponentPreview>
        </div>

        {/* Disabled */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.rangeField.disabledTitle" />
          </Heading>
          <ComponentPreview
            code={`<RangeField
  defaultValue={30}
  isDisabled
  isInvalid={false}
  isRequired={false}
/>`}
          >
            <div className="w-full">
              <RangeField
                defaultValue={30}
                isDisabled
                isInvalid={false}
                isRequired={false}
              />
            </div>
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      {/* Props */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={rangeFieldProps} />
      </section>
    </div>
  );
}
