import { Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';

const parameters: PropItem[] = [
  {
    name: 'value',
    types: ['T'],
    defaultValue: null,
  },
  {
    name: 'initialValue',
    types: ['T'],
    defaultValue: '-',
  },
];

const returnValue: PropItem[] = [
  {
    name: '[T, boolean]',
    types: ['readonly [deferredValue: T, isPending: boolean]'],
    defaultValue: null,
  },
];

export function UseDeferredDebouncePage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">useDeferredDebounce</Heading>
        <p className="text-fg-mute text-lg">
          <T k="hooks.useDeferredDebounce.description" />
        </p>
      </div>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="hooks.common.importTitle" />
        </Heading>
        <CodeBlock code="import { useDeferredDebounce } from '@k8o/arte-odyssey';" lang="ts" />
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
          <CodeBlock
            code={`const [query, setQuery] = useState('');
const [deferredQuery, isPending] = useDeferredDebounce(query);

const filtered = options.filter((o) => o.label.includes(deferredQuery));

return (
  <>
    <input value={query} onChange={(e) => setQuery(e.target.value)} />
    <ul aria-busy={isPending} className={isPending ? 'opacity-60' : undefined}>
      {filtered.map((o) => <li key={o.value}>{o.label}</li>)}
    </ul>
  </>
);`}
            lang="tsx"
          />
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
