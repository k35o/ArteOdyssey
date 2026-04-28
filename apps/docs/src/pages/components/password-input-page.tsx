import { Anchor, Heading, PasswordInput, Separator } from '@k8o/arte-odyssey';

import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';
import { PasswordInputControlledPreview } from './_previews/password-input-previews';

const passwordInputProps: PropItem[] = [
  { name: 'describedbyId', types: ['string'], defaultValue: null },
  { name: 'isInvalid', types: ['boolean'], defaultValue: 'false' },
  { name: 'isDisabled', types: ['boolean'], defaultValue: 'false' },
  { name: 'isRequired', types: ['boolean'], defaultValue: 'false' },
  { name: 'placeholder', types: ['string'], defaultValue: null },
  {
    name: 'autoComplete',
    types: ['string'],
    defaultValue: '"current-password"',
  },
  { name: 'showLabel', types: ['string'], defaultValue: '"Show password"' },
  { name: 'hideLabel', types: ['string'], defaultValue: '"Hide password"' },
  { name: 'value', types: ['string'], defaultValue: null },
  {
    name: 'onChange',
    types: ['ChangeEventHandler<HTMLInputElement>'],
    defaultValue: null,
  },
  { name: 'defaultValue', types: ['string'], defaultValue: null },
  { name: 'id', types: ['string'], defaultValue: null },
  { name: 'name', types: ['string'], defaultValue: null },
];

export function PasswordInputPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">PasswordInput</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.passwordInput.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-form-password-input--docs`}
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
          code="import { PasswordInput } from '@k8o/arte-odyssey';"
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
            code={`<PasswordInput
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  placeholder="Enter your password"
/>`}
          >
            <PasswordInput
              isDisabled={false}
              isInvalid={false}
              isRequired={false}
              placeholder="Enter your password"
            />
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.passwordInput.controlledTitle" />
          </Heading>
          <ComponentPreview
            code={`const [value, setValue] = useState('hunter2');

<PasswordInput
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  onChange={(event) => setValue(event.target.value)}
  value={value}
/>`}
          >
            <PasswordInputControlledPreview />
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.passwordInput.disabledTitle" />
          </Heading>
          <ComponentPreview
            code={`<PasswordInput
  defaultValue="read-only-password"
  isDisabled
  isInvalid={false}
  isRequired={false}
/>`}
          >
            <PasswordInput
              defaultValue="read-only-password"
              isDisabled
              isInvalid={false}
              isRequired={false}
            />
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={passwordInputProps} />
      </section>
    </div>
  );
}
