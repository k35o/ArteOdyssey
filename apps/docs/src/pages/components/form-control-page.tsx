import { Anchor, Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';
import {
  FormControlBasicPreview,
  FormControlDisabledPreview,
  FormControlErrorTextPreview,
  FormControlHelpTextPreview,
  FormControlRequiredPreview,
} from './_previews/form-control-previews';

const formControlProps: PropItem[] = [
  { name: 'isDisabled', types: ['boolean'], defaultValue: 'false' },
  { name: 'isInvalid', types: ['boolean'], defaultValue: 'false' },
  { name: 'isRequired', types: ['boolean'], defaultValue: 'false' },
  { name: 'label', types: ['string'], defaultValue: null },
  {
    name: 'labelAs',
    types: ["'label'", "'legend'"],
    defaultValue: "'label'",
  },
  { name: 'helpText', types: ['string'], defaultValue: null },
  { name: 'errorText', types: ['string'], defaultValue: null },
  { name: 'renderInput', types: ['function'], defaultValue: null },
];

export function FormControlPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">FormControl</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.formControl.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-form-form-control--docs`}
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
          code="import { FormControl } from '@k8o/arte-odyssey/form-control';"
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
            code={`<FormControl
  label="Name"
  renderInput={(props) => (
    <TextField
      {...props}
      placeholder="Enter your name"
    />
  )}
/>`}
          >
            <FormControlBasicPreview />
          </ComponentPreview>
        </div>

        {/* Help Text */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.formControl.helpTextTitle" />
          </Heading>
          <ComponentPreview
            code={`<FormControl
  helpText="Please enter a valid email address."
  label="Email"
  renderInput={(props) => (
    <TextField
      {...props}
      placeholder="you@example.com"
    />
  )}
/>`}
          >
            <FormControlHelpTextPreview />
          </ComponentPreview>
        </div>

        {/* Error Text */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.formControl.errorTextTitle" />
          </Heading>
          <ComponentPreview
            code={`<FormControl
  errorText="This field is required."
  isInvalid
  label="Email"
  renderInput={(props) => (
    <TextField {...props} />
  )}
/>`}
          >
            <FormControlErrorTextPreview />
          </ComponentPreview>
        </div>

        {/* Required */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.formControl.requiredTitle" />
          </Heading>
          <ComponentPreview
            code={`<FormControl
  isRequired
  label="Username"
  renderInput={(props) => (
    <TextField
      {...props}
      placeholder="Required field"
    />
  )}
/>`}
          >
            <FormControlRequiredPreview />
          </ComponentPreview>
        </div>

        {/* Disabled */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.formControl.disabledTitle" />
          </Heading>
          <ComponentPreview
            code={`<FormControl
  isDisabled
  label="Username"
  renderInput={(props) => (
    <TextField
      {...props}
      placeholder="Disabled field"
    />
  )}
/>`}
          >
            <FormControlDisabledPreview />
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      {/* Props */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={formControlProps} />
      </section>
    </div>
  );
}
