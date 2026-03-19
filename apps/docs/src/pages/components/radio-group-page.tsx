import { Anchor, Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';
import {
  RadioGroupControlledPreview,
  RadioGroupDisabledPreview,
} from './_previews/radio-group-previews';

const rootProps: PropItem[] = [
  { name: 'name', types: ['string'], defaultValue: null },
  { name: 'labelId', types: ['string'], defaultValue: null },
  { name: 'describedbyId', types: ['string'], defaultValue: null },
  { name: 'isDisabled', types: ['boolean'], defaultValue: 'false' },
  { name: 'isInvalid', types: ['boolean'], defaultValue: 'false' },
  { name: 'isRequired', types: ['boolean'], defaultValue: 'false' },
  { name: 'value', types: ['string'], defaultValue: null },
  {
    name: 'onChange',
    types: ['(value: string) => void'],
    defaultValue: null,
  },
  { name: 'defaultValue', types: ['string'], defaultValue: null },
];

const itemProps: PropItem[] = [
  { name: 'label', types: ['string'], defaultValue: null },
  { name: 'value', types: ['string'], defaultValue: null },
];

export function RadioGroupPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">RadioGroup</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.radioGroup.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-form-radio-group--docs`}
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
          code="import { RadioGroup } from '@k8o/arte-odyssey/radio-group';"
          lang="ts"
        />
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Heading type="h2">
            <T k="components.common.usageTitle" />
          </Heading>
          <ComponentPreview
            code={`<RadioGroup
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  name="framework"
  onChange={setValue}
  value={value}
>
  <RadioGroup.Item label="React" value="react" />
  <RadioGroup.Item label="Vue" value="vue" />
  <RadioGroup.Item label="Svelte" value="svelte" />
</RadioGroup>`}
          >
            <RadioGroupControlledPreview />
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.radio.disabledTitle" />
          </Heading>
          <ComponentPreview
            code={`<RadioGroup
  defaultValue="vue"
  isDisabled
  isInvalid={false}
  isRequired={false}
  name="framework-disabled"
>
  <RadioGroup.Item label="React" value="react" />
  <RadioGroup.Item label="Vue" value="vue" />
  <RadioGroup.Item label="Svelte" value="svelte" />
</RadioGroup>`}
          >
            <RadioGroupDisabledPreview />
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">Root Props</Heading>
        <PropsTable items={rootProps} />
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">Item Props</Heading>
        <PropsTable items={itemProps} />
      </section>
    </div>
  );
}
