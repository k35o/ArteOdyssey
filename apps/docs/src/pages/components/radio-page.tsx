import { Anchor, Heading, Radio, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';
import { RadioControlledPreview } from './_previews/radio-previews';

const radioProps: PropItem[] = [
  { name: 'name', types: ['string'], defaultValue: null },
  { name: 'labelId', types: ['string'], defaultValue: null },
  { name: 'isDisabled', types: ['boolean'], defaultValue: 'false' },
  { name: 'options', types: ['Option[]'], defaultValue: null },
  { name: 'value', types: ['string'], defaultValue: null },
  {
    name: 'onChange',
    types: ['ChangeEventHandler<HTMLInputElement>'],
    defaultValue: null,
  },
  { name: 'defaultValue', types: ['string'], defaultValue: null },
];

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
] as const;

export function RadioPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
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

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Heading type="h2">
            <T k="components.common.usageTitle" />
          </Heading>
          <ComponentPreview
            code={`import { Radio } from '@k8o/arte-odyssey';

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
];

<p id="radio-label">Framework</p>
<Radio
  defaultValue="vue"
  isDisabled={false}
  labelId="radio-label"
  name="framework"
  options={options}
/>`}
          >
            <div className="w-full max-w-md">
              <p className="mb-3 font-medium text-fg-base" id="radio-label">
                Framework
              </p>
              <Radio
                defaultValue="vue"
                isDisabled={false}
                labelId="radio-label"
                name="framework"
                options={options}
              />
            </div>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.radio.defaultValueTitle" />
          </Heading>
          <ComponentPreview
            code={`const [value, setValue] = useState('react');

<p id="radio-controlled-label">Framework</p>
<Radio
  isDisabled={false}
  labelId="radio-controlled-label"
  name="framework-controlled"
  onChange={(event) => setValue(event.target.value)}
  options={options}
  value={value}
/>`}
          >
            <RadioControlledPreview />
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.radio.disabledTitle" />
          </Heading>
          <ComponentPreview
            code={`<p id="radio-disabled-label">Framework</p>
<Radio
  defaultValue="vue"
  isDisabled
  labelId="radio-disabled-label"
  name="framework-disabled"
  options={options}
/>`}
          >
            <div className="w-full max-w-md">
              <p
                className="mb-3 font-medium text-fg-base"
                id="radio-disabled-label"
              >
                Framework
              </p>
              <Radio
                defaultValue="vue"
                isDisabled
                labelId="radio-disabled-label"
                name="framework-disabled"
                options={options}
              />
            </div>
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={radioProps} />
      </section>
    </div>
  );
}
