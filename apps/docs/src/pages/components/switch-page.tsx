import { Anchor, Heading, Separator, Switch } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';
import { SwitchControlledPreview } from './_previews/switch-previews';

const switchProps: PropItem[] = [
  { name: 'describedbyId', types: ['string'], defaultValue: null },
  { name: 'isInvalid', types: ['boolean'], defaultValue: 'false' },
  { name: 'isDisabled', types: ['boolean'], defaultValue: 'false' },
  { name: 'isRequired', types: ['boolean'], defaultValue: 'false' },
  { name: 'label', types: ['string'], defaultValue: null },
  { name: 'value', types: ['boolean'], defaultValue: null },
  {
    name: 'onChange',
    types: ['ChangeEventHandler<HTMLInputElement>'],
    defaultValue: null,
  },
  { name: 'defaultChecked', types: ['boolean'], defaultValue: null },
  { name: 'id', types: ['string'], defaultValue: null },
  { name: 'name', types: ['string'], defaultValue: null },
];

export function SwitchPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">Switch</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.switch.description" />
        </p>
        <div>
          <Anchor href={`${STORYBOOK_URL}/?path=/docs/components-form-switch--docs`} openInNewTab>
            <T k="components.common.storybookLink" />
          </Anchor>
        </div>
      </div>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.importTitle" />
        </Heading>
        <CodeBlock code="import { Switch } from '@k8o/arte-odyssey';" lang="ts" />
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Heading type="h2">
            <T k="components.common.usageTitle" />
          </Heading>
          <ComponentPreview
            code={`<Switch
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  label="Email notifications"
/>`}
          >
            <Switch
              isDisabled={false}
              isInvalid={false}
              isRequired={false}
              label="Email notifications"
            />
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.switch.defaultCheckedTitle" />
          </Heading>
          <ComponentPreview
            code={`<Switch
  defaultChecked
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  label="Automatic backups"
/>`}
          >
            <Switch
              defaultChecked
              isDisabled={false}
              isInvalid={false}
              isRequired={false}
              label="Automatic backups"
            />
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.switch.controlledTitle" />
          </Heading>
          <ComponentPreview
            code={`const [value, setValue] = useState(false);

<Switch
  isDisabled={false}
  isInvalid={false}
  isRequired={false}
  label="Controlled switch"
  onChange={(event) => setValue(event.target.checked)}
  value={value}
/>`}
          >
            <SwitchControlledPreview />
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.switch.disabledTitle" />
          </Heading>
          <ComponentPreview
            code={`<Switch isDisabled isInvalid={false} isRequired={false} label="Airplane mode" />
<Switch defaultChecked isDisabled isInvalid={false} isRequired={false} label="Offline sync" />`}
          >
            <Switch isDisabled isInvalid={false} isRequired={false} label="Airplane mode" />
            <Switch
              defaultChecked
              isDisabled
              isInvalid={false}
              isRequired={false}
              label="Offline sync"
            />
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={switchProps} />
      </section>
    </div>
  );
}
