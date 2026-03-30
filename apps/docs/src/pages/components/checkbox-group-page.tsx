import { Anchor, Checkbox, CheckboxGroup, Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';
import { CheckboxGroupControlledPreview } from './_previews/checkbox-group-previews';

const checkboxGroupProps: PropItem[] = [
  { name: 'name', types: ['string'], defaultValue: null },
  { name: 'labelId', types: ['string'], defaultValue: null },
  { name: 'describedbyId', types: ['string'], defaultValue: null },
  { name: 'isDisabled', types: ['boolean'], defaultValue: 'false' },
  { name: 'isInvalid', types: ['boolean'], defaultValue: 'false' },
  { name: 'isRequired', types: ['boolean'], defaultValue: 'false' },
  { name: 'value', types: ['string[]'], defaultValue: null },
  { name: 'onChange', types: ['(value: string[]) => void'], defaultValue: null },
  { name: 'defaultValue', types: ['string[]'], defaultValue: null },
  { name: 'children', types: ['ReactNode'], defaultValue: null },
];

export function CheckboxGroupPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">CheckboxGroup</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.checkboxGroup.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-form-checkbox-group--docs`}
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
        <CodeBlock code="import { CheckboxGroup, Checkbox } from '@k8o/arte-odyssey';" lang="ts" />
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Heading type="h2">
            <T k="components.common.usageTitle" />
          </Heading>
          <ComponentPreview
            code={`import { CheckboxGroup, Checkbox } from '@k8o/arte-odyssey';
import { useState } from 'react';

const [value, setValue] = useState(['react']);

<p id="frameworks-label">Framework</p>
<CheckboxGroup
  labelId="frameworks-label"
  name="frameworks"
  onChange={setValue}
  value={value}
>
  <Checkbox itemValue="react" label="React" />
  <Checkbox itemValue="vue" label="Vue" />
  <Checkbox itemValue="svelte" label="Svelte" />
</CheckboxGroup>`}
          >
            <CheckboxGroupControlledPreview />
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.checkboxGroup.disabledTitle" />
          </Heading>
          <ComponentPreview
            code={`<p id="frameworks-disabled-label">Framework</p>
<CheckboxGroup
  defaultValue={['vue']}
  isDisabled
  labelId="frameworks-disabled-label"
  name="frameworks-disabled"
>
  <Checkbox itemValue="react" label="React" />
  <Checkbox itemValue="vue" label="Vue" />
  <Checkbox itemValue="svelte" label="Svelte" />
</CheckboxGroup>`}
          >
            <div className="w-full max-w-md">
              <p className="mb-3 font-medium text-fg-base" id="frameworks-disabled-label">
                Framework
              </p>
              <CheckboxGroup
                defaultValue={['vue']}
                isDisabled
                labelId="frameworks-disabled-label"
                name="frameworks-disabled"
              >
                <Checkbox itemValue="react" label="React" />
                <Checkbox itemValue="vue" label="Vue" />
                <Checkbox itemValue="svelte" label="Svelte" />
              </CheckboxGroup>
            </div>
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={checkboxGroupProps} />
      </section>
    </div>
  );
}
