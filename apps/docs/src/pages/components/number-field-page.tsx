import { Anchor, Heading, NumberField, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';

const numberFieldProps: PropItem[] = [
  { name: 'isInvalid', types: ['boolean'], defaultValue: null },
  { name: 'isDisabled', types: ['boolean'], defaultValue: null },
  { name: 'isRequired', types: ['boolean'], defaultValue: null },
  { name: 'step', types: ['number'], defaultValue: '1' },
  { name: 'precision', types: ['number'], defaultValue: '0' },
  { name: 'max', types: ['number'], defaultValue: null },
  { name: 'min', types: ['number'], defaultValue: null },
  { name: 'placeholder', types: ['string'], defaultValue: null },
  { name: 'value', types: ['number'], defaultValue: null },
  {
    name: 'onChange',
    types: ['(value: number) => void'],
    defaultValue: null,
  },
  { name: 'defaultValue', types: ['number'], defaultValue: null },
];

export function NumberFieldPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">NumberField</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.numberField.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-form-number-field--docs`}
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
          code="import { NumberField } from '@k8o/arte-odyssey/number-field';"
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
            code={`<NumberField
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
/>`}
          >
            <NumberField
              isDisabled={false}
              isInvalid={false}
              isRequired={false}
            />
          </ComponentPreview>
        </div>

        {/* Step & Precision */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.numberField.stepPrecisionTitle" />
          </Heading>
          <ComponentPreview
            code={`<NumberField
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  precision={2}
  step={0.25}
/>`}
          >
            <NumberField
              isDisabled={false}
              isInvalid={false}
              isRequired={false}
              precision={2}
              step={0.25}
            />
          </ComponentPreview>
        </div>

        {/* Min / Max */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.numberField.minMaxTitle" />
          </Heading>
          <ComponentPreview
            code={`<NumberField
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  max={10}
  min={0}
  step={1}
/>`}
          >
            <NumberField
              isDisabled={false}
              isInvalid={false}
              isRequired={false}
              max={10}
              min={0}
              step={1}
            />
          </ComponentPreview>
        </div>

        {/* Disabled */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.numberField.disabledTitle" />
          </Heading>
          <ComponentPreview
            code={`<NumberField
  isDisabled
  isInvalid={false}
  isRequired={false}
/>`}
          >
            <NumberField isDisabled isInvalid={false} isRequired={false} />
          </ComponentPreview>
        </div>

        {/* Invalid */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.numberField.invalidTitle" />
          </Heading>
          <ComponentPreview
            code={`<NumberField
  isDisabled={false}
  isInvalid
  isRequired={false}
/>`}
          >
            <NumberField isDisabled={false} isInvalid isRequired={false} />
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      {/* Props */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={numberFieldProps} />
      </section>
    </div>
  );
}
