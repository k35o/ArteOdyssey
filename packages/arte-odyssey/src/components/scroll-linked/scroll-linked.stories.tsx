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
            aria-label="スクロールコンテナの例"
            className="relative h-96 overflow-y-scroll rounded-lg border border-border-mute"
            ref={containerRef}
            // biome-ignore lint/a11y/noNoninteractiveTabindex: Scrollable region requires keyboard access for accessibility
            tabIndex={0}
          >
            <Story args={{ container: containerRef }} />
            <div className="h-[200vh] p-4">
              <h2 className="mb-4 font-bold text-xl">
                コンテナ内スクロールの例
              </h2>
              <p className="mb-4">
                このコンテナ内をスクロールすると、上部にプログレスバーが表示されます。
              </p>
              <p className="mb-4">
                プログレスバーはウィンドウではなく、このコンテナのスクロール位置を追跡します。
              </p>
              <div className="mt-8 space-y-4">
                {Array.from({ length: 20 }, (_, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: Static demo content
                  <p className="rounded-lg bg-bg-mute p-4" key={`content-${i}`}>
                    コンテンツブロック {i + 1}
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
