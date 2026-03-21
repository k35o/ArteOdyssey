import { Anchor, Heading, Separator, Slider } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';

const sliderProps: PropItem[] = [
  { name: 'isInvalid', types: ['boolean'], defaultValue: null },
  { name: 'isDisabled', types: ['boolean'], defaultValue: null },
  { name: 'isRequired', types: ['boolean'], defaultValue: null },
  { name: 'step', types: ['number'], defaultValue: '1' },
  { name: 'max', types: ['number'], defaultValue: '100' },
  { name: 'min', types: ['number'], defaultValue: '0' },
  { name: 'value', types: ['number'], defaultValue: null },
  {
    name: 'onChange',
    types: ['(value: number) => void'],
    defaultValue: null,
  },
  { name: 'defaultValue', types: ['number'], defaultValue: null },
  { name: 'id', types: ['string'], defaultValue: null },
  { name: 'name', types: ['string'], defaultValue: null },
  { name: 'describedbyId', types: ['string'], defaultValue: null },
];

export function SliderPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">Slider</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.slider.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-form-slider--docs`}
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
          code="import { Slider } from '@k8o/arte-odyssey';"
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
            code={`<Slider
  defaultValue={50}
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
/>`}
          >
            <div className="w-full">
              <Slider
                defaultValue={50}
                isDisabled={false}
                isInvalid={false}
                isRequired={false}
              />
            </div>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.slider.minMaxStepTitle" />
          </Heading>
          <ComponentPreview
            code={`<Slider
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
              <Slider
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

        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.slider.disabledTitle" />
          </Heading>
          <ComponentPreview
            code={`<Slider
  defaultValue={30}
  isDisabled
  isInvalid={false}
  isRequired={false}
/>`}
          >
            <div className="w-full">
              <Slider
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

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={sliderProps} />
      </section>
    </div>
  );
}
