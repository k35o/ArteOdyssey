import { Anchor, Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../../components/code-block';
import type { PropItem } from '../../components/props-table';
import { PropsTable } from '../../components/props-table';
import { T } from '../../components/t';
import { STORYBOOK_URL } from '../../constants';

const errorBoundaryProps: PropItem[] = [
  { name: 'fallback', types: ['ReactNode'], defaultValue: null },
  {
    name: 'fallbackRender',
    types: ['(props: FallbackProps) => ReactNode'],
    defaultValue: null,
  },
  {
    name: 'FallbackComponent',
    types: ['ComponentType<FallbackProps>'],
    defaultValue: null,
  },
  {
    name: 'onError',
    types: ['(error: Error, info: ErrorInfo) => void'],
    defaultValue: null,
  },
  {
    name: 'onReset',
    types: ['(details: ResetDetails) => void'],
    defaultValue: null,
  },
  {
    name: 'resetKeys',
    types: ['unknown[]'],
    defaultValue: null,
  },
  { name: 'children', types: ['ReactNode'], defaultValue: null },
];

export function ErrorBoundaryPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">ErrorBoundary</Heading>
        <p className="text-fg-mute text-lg">
          <T k="components.errorBoundary.description" />
        </p>
        <div>
          <Anchor
            href={`${STORYBOOK_URL}/?path=/docs/components-error-boundary--docs`}
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
          code="import { ErrorBoundary } from '@k8o/arte-odyssey/error-boundary';"
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
        </div>

        {/* Basic usage */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.common.basicUsageTitle" />
          </Heading>
          <CodeBlock
            code={`import { ErrorBoundary } from '@k8o/arte-odyssey/error-boundary';

<ErrorBoundary fallback={<p>Something went wrong.</p>}>
  <MyComponent />
</ErrorBoundary>`}
            lang="tsx"
          />
        </div>

        {/* Fallback with Reset */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.errorBoundary.fallbackRenderTitle" />
          </Heading>
          <CodeBlock
            code={`import { ErrorBoundary } from '@k8o/arte-odyssey/error-boundary';

<ErrorBoundary
  fallbackRender={({ error, resetErrorBoundary }) => (
    <div role="alert">
      <p>Error: {error.message}</p>
      <button onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  )}
  onReset={() => {
    // Reset application state here
  }}
>
  <MyComponent />
</ErrorBoundary>`}
            lang="tsx"
          />
        </div>

        {/* FallbackComponent */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.errorBoundary.fallbackComponentTitle" />
          </Heading>
          <CodeBlock
            code={`import { ErrorBoundary } from '@k8o/arte-odyssey/error-boundary';
import type { FallbackProps } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <MyComponent />
</ErrorBoundary>`}
            lang="tsx"
          />
        </div>

        {/* Reset Keys */}
        <div className="flex flex-col gap-4">
          <Heading type="h3">
            <T k="components.errorBoundary.resetKeysTitle" />
          </Heading>
          <CodeBlock
            code={`import { ErrorBoundary } from '@k8o/arte-odyssey/error-boundary';

function App() {
  const [retryKey, setRetryKey] = useState(0);

  return (
    <ErrorBoundary
      fallback={<p>Something went wrong.</p>}
      onReset={() => {
        // Reset application state when retryKey changes
      }}
      resetKeys={[retryKey]}
    >
      <MyComponent key={retryKey} />
    </ErrorBoundary>
  );
}`}
            lang="tsx"
          />
        </div>
      </section>
      <Separator color="mute" />

      {/* Props */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="components.common.propsTitle" />
        </Heading>
        <PropsTable items={errorBoundaryProps} />
      </section>
    </div>
  );
}
