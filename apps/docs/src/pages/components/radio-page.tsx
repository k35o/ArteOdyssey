import { Anchor, Heading, Radio, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';
import {
  RadioBasicPreview,
  RadioDisabledPreview,
} from './_previews/radio-previews';

const radioProps: PropItem[] = [
  { name: 'name', types: ['string'], defaultValue: null },
  { name: 'labelId', types: ['string'], defaultValue: null },
  { name: 'isDisabled', types: ['boolean'], defaultValue: null },
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

export function RadioPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">Radio</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.radio.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-form-radio--docs`}
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
          code="import { Radio } from '@k8o/arte-odyssey/radio';"
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
            code={`const [value, setValue] = useState('apple');

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

<Radio
  isDisabled={false}
  labelId="fruit-label"
  name="fruit"
  onChange={(e) => setValue(e.target.value)}
  options={options}
  value={value}
/>`}
          >
            <RadioBasicPreview />
          </ComponentPreview>
        </div>

        {/* Default Value */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.radio.defaultValueTitle" />
          </Heading>
          <ComponentPreview
            code={`<Radio
  defaultValue="cherry"
  isDisabled={false}
  labelId="fruit-default-label"
  name="fruit-default"
  options={options}
/>`}
          >
            <Radio
              defaultValue="cherry"
              isDisabled={false}
              labelId="fruit-default-label"
              name="fruit-default"
              options={options}
            />
          </ComponentPreview>
        </div>

        {/* Disabled */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.radio.disabledTitle" />
          </Heading>
          <ComponentPreview
            code={`<Radio
  isDisabled
  labelId="fruit-disabled-label"
  name="fruit-disabled"
  onChange={(e) => setValue(e.target.value)}
  options={options}
  value={value}
/>`}
          >
            <RadioDisabledPreview />
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      {/* Props */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={radioProps} />
      </section>
    </div>
  );
}
