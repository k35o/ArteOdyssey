import type { Meta, StoryObj } from '@storybook/react-vite';
import { useRef } from 'react';
import { ScrollLinked } from './scroll-linked';

const meta: Meta<typeof ScrollLinked> = {
  title: 'components/scroll-linked',
  component: ScrollLinked,
};

export default meta;
type Story = StoryObj<typeof ScrollLinked>;

export const NoScroll: Story = {};

export const Scroll: Story = {
  decorators: [
    (Story) => (
      <div className="h-lvh overflow-y-scroll">
        <Story />
      </div>
    ),
  ],
};

export const WithContainer: Story = {
  decorators: [
    (Story) => {
      const containerRef = useRef<HTMLDivElement>(null);
      return (
        <div>
          <section
            aria-label="Scrollable container example"
            className="relative h-96 overflow-y-scroll rounded border border-gray-300"
            ref={containerRef}
            // biome-ignore lint/a11y/noNoninteractiveTabindex: Scrollable region requires keyboard access for accessibility
            tabIndex={0}
          >
            <Story args={{ container: containerRef }} />
            <div className="h-[200vh] p-4">
              <h2 className="mb-4 font-bold text-xl">
                Container Scroll Example
              </h2>
              <p className="mb-4">
                Scroll within this container to see the progress bar at the top.
              </p>
              <p className="mb-4">
                The progress bar tracks this container's scroll position, not
                the window's scroll.
              </p>
              <div className="mt-8 space-y-4">
                {Array.from({ length: 20 }, (_, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: Static demo content
                  <p className="rounded bg-gray-100 p-4" key={`content-${i}`}>
                    Content block {i + 1}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    },
  ],
};
