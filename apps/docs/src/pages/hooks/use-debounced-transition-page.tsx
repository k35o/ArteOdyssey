import { Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';

const parameters: PropItem[] = [
  {
    name: 'delay',
    types: ['number'],
    defaultValue: null,
  },
];

const returnValue: PropItem[] = [
  {
    name: '[boolean, (action) => void]',
    types: [
      'readonly [isPending: boolean, run: (action: (signal: AbortSignal) => void | Promise<void>) => void]',
    ],
    defaultValue: null,
  },
];

export function UseDebouncedTransitionPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      <div className="flex flex-col gap-4">
        <Heading type="h1">useDebouncedTransition</Heading>
        <p className="text-fg-mute text-lg">
          <T k="hooks.useDebouncedTransition.description" />
        </p>
      </div>
      <Separator color="mute" />

      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="hooks.common.importTitle" />
        </Heading>
        <CodeBlock code="import { useDebouncedTransition } from '@k8o/arte-odyssey';" lang="ts" />
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
const [results, setResults] = useState<Result[]>([]);
const [isPending, run] = useDebouncedTransition(300);

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const next = e.target.value;
  setQuery(next);
  run(async (signal) => {
    const res = await fetch(\`/api/search?q=\${next}\`, { signal });
    setResults(await res.json());
  });
};

return (
  <>
    <input value={query} onChange={handleChange} />
    <ul aria-busy={isPending}>
      {results.map((r) => <li key={r.id}>{r.label}</li>)}
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
