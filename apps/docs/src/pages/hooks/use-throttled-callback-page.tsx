import { Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import { ComponentPreview } from '../../components/component-preview';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { UseThrottledCallbackPreview } from './_previews/use-throttled-callback-previews';

const parameters: PropItem[] = [
  {
    name: 'callback',
    types: ['T extends (...args: any[]) => any'],
    defaultValue: null,
  },
  {
    name: 'interval',
    types: ['number'],
    defaultValue: null,
  },
];

const returnValue: PropItem[] = [
  {
    name: 'throttledCallback',
    types: ['(...args: Parameters<T>) => void'],
    defaultValue: null,
  },
];

export function UseThrottledCallbackPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">useThrottledCallback</Heading>
        <p className="text-fg-mute text-lg">
          <T k="hooks.useThrottledCallback.description" />
        </p>
      </div>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="hooks.common.importTitle" />
        </Heading>
        <CodeBlock code="import { useThrottledCallback } from '@k8o/arte-odyssey';" lang="ts" />
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-8">
        <Heading type="h2">
          <T k="hooks.common.usageTitle" />
        </Heading>
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="hooks.common.basicUsageTitle" />
          </Heading>
          <ComponentPreview
            code={`const [count, setCount] = useState(0);
const throttledIncrement = useThrottledCallback(() => {
  setCount((prev) => prev + 1);
}, 1000);

return (
  <div>
    <button onClick={throttledIncrement}>Increment</button>
    <p>Count: {count}</p>
  </div>
);`}
          >
            <UseThrottledCallbackPreview />
          </ComponentPreview>
        </div>
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="hooks.common.parametersTitle" />
        </Heading>
        <PropsTable items={parameters} />
      </section>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="hooks.common.returnValueTitle" />
        </Heading>
        <PropsTable items={returnValue} />
      </section>
    </div>
  );
}
