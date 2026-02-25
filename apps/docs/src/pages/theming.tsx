import { Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../components/code-block';
import { T } from '../components/t';

const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

const COLOR_FAMILIES = [
  {
    name: 'Gray',
    prefix: 'gray',
    hexes: [
      '#fafafa',
      '#f4f4f5',
      '#e4e4e7',
      '#d4d4d8',
      '#a1a1aa',
      '#71717a',
      '#52525b',
      '#3f3f46',
      '#27272a',
      '#18181b',
    ],
  },
  {
    name: 'Red',
    prefix: 'red',
    hexes: [
      '#fef2f2',
      '#fee2e2',
      '#fecaca',
      '#fca5a5',
      '#f87171',
      '#ef4444',
      '#dc2626',
      '#991919',
      '#511111',
      '#300c0c',
    ],
  },
  {
    name: 'Pink',
    prefix: 'pink',
    hexes: [
      '#fdf2f8',
      '#fce7f3',
      '#fbcfe8',
      '#f9a8d4',
      '#f472b6',
      '#ec4899',
      '#db2777',
      '#a41752',
      '#6d0e34',
      '#45061f',
    ],
  },
  {
    name: 'Purple',
    prefix: 'purple',
    hexes: [
      '#faf5ff',
      '#f3e8ff',
      '#e9d5ff',
      '#d8b4fe',
      '#c084fc',
      '#a855f7',
      '#9333ea',
      '#641ba3',
      '#4a1772',
      '#2f0553',
    ],
  },
  {
    name: 'Cyan',
    prefix: 'cyan',
    hexes: [
      '#ecfeff',
      '#cffafe',
      '#a5f3fc',
      '#67e8f9',
      '#22d3ee',
      '#06b6d4',
      '#0891b2',
      '#0c5c72',
      '#134152',
      '#072a38',
    ],
  },
  {
    name: 'Blue',
    prefix: 'blue',
    hexes: [
      '#eff6ff',
      '#dbeafe',
      '#bfdbfe',
      '#a3cfff',
      '#60a5fa',
      '#3b82f6',
      '#2563eb',
      '#173da6',
      '#1a3478',
      '#14204a',
    ],
  },
  {
    name: 'Teal',
    prefix: 'teal',
    hexes: [
      '#f0fdfa',
      '#ccfbf1',
      '#99f6e4',
      '#5eead4',
      '#2dd4bf',
      '#14b8a6',
      '#0d9488',
      '#0c5d56',
      '#114240',
      '#032726',
    ],
  },
  {
    name: 'Green',
    prefix: 'green',
    hexes: [
      '#f0fdf4',
      '#dcfce7',
      '#bbf7d0',
      '#86efac',
      '#4ade80',
      '#22c55e',
      '#16a34a',
      '#116932',
      '#124a28',
      '#042713',
    ],
  },
  {
    name: 'Yellow',
    prefix: 'yellow',
    hexes: [
      '#fefce8',
      '#fef9c3',
      '#fef08a',
      '#fde047',
      '#facc15',
      '#eab308',
      '#ca8a04',
      '#845209',
      '#713f12',
      '#422006',
    ],
  },
  {
    name: 'Orange',
    prefix: 'orange',
    hexes: [
      '#fff7ed',
      '#ffedd5',
      '#fed7aa',
      '#fdba74',
      '#fb923c',
      '#f97316',
      '#ea580c',
      '#92310a',
      '#6c2710',
      '#3b1106',
    ],
  },
] as const;

const FG_TOKENS = [
  { name: 'fg-base', source: 'gray-900', hex: '#18181b' },
  { name: 'fg-subtle', source: 'gray-400', hex: '#a1a1aa' },
  { name: 'fg-mute', source: 'gray-700', hex: '#3f3f46' },
  { name: 'fg-inverse', source: 'gray-50', hex: '#fafafa' },
  { name: 'fg-info', source: 'blue-700', hex: '#173da6' },
  { name: 'fg-success', source: 'green-700', hex: '#116932' },
  { name: 'fg-warning', source: 'yellow-700', hex: '#845209' },
  { name: 'fg-error', source: 'red-700', hex: '#991919' },
] as const;

const BG_TOKENS = [
  { name: 'bg-base', source: 'white', hex: '#ffffff' },
  { name: 'bg-subtle', source: 'gray-100', hex: '#f4f4f5' },
  { name: 'bg-mute', source: 'gray-200', hex: '#e4e4e7' },
  { name: 'bg-emphasize', source: 'gray-300', hex: '#d4d4d8' },
  { name: 'bg-inverse', source: 'gray-900', hex: '#18181b' },
  { name: 'bg-info', source: 'blue-100', hex: '#dbeafe' },
  { name: 'bg-success', source: 'green-100', hex: '#dcfce7' },
  { name: 'bg-warning', source: 'yellow-100', hex: '#fef9c3' },
  { name: 'bg-error', source: 'red-100', hex: '#fee2e2' },
] as const;

const BORDER_TOKENS = [
  { name: 'border-base', source: 'gray-400', hex: '#a1a1aa' },
  { name: 'border-subtle', source: 'gray-100', hex: '#f4f4f5' },
  { name: 'border-mute', source: 'gray-200', hex: '#e4e4e7' },
  { name: 'border-emphasize', source: 'gray-500', hex: '#71717a' },
  { name: 'border-inverse', source: 'gray-700', hex: '#3f3f46' },
  { name: 'border-info', source: 'blue-500', hex: '#3b82f6' },
  { name: 'border-success', source: 'green-500', hex: '#22c55e' },
  { name: 'border-warning', source: 'yellow-500', hex: '#eab308' },
  { name: 'border-error', source: 'red-500', hex: '#ef4444' },
] as const;

const PRIMARY_TOKENS = [
  { name: 'primary-fg', source: 'teal-700', hex: '#0c5d56' },
  { name: 'primary-bg', source: 'teal-300', hex: '#5eead4' },
  { name: 'primary-bg-subtle', source: 'teal-100', hex: '#ccfbf1' },
  { name: 'primary-bg-mute', source: 'teal-200', hex: '#99f6e4' },
  { name: 'primary-bg-emphasize', source: 'teal-300', hex: '#5eead4' },
  { name: 'primary-border', source: 'teal-600', hex: '#0d9488' },
] as const;

const SECONDARY_TOKENS = [
  { name: 'secondary-fg', source: 'cyan-700', hex: '#0c5c72' },
  { name: 'secondary-bg', source: 'cyan-300', hex: '#67e8f9' },
  { name: 'secondary-bg-subtle', source: 'cyan-100', hex: '#cffafe' },
  { name: 'secondary-bg-mute', source: 'cyan-200', hex: '#a5f3fc' },
  { name: 'secondary-bg-emphasize', source: 'cyan-300', hex: '#67e8f9' },
  { name: 'secondary-border', source: 'cyan-600', hex: '#0891b2' },
] as const;

const GROUP_TOKENS = [
  { name: 'group-primary', source: 'teal-700', hex: '#0c5d56' },
  { name: 'group-secondary', source: 'cyan-700', hex: '#0c5c72' },
  { name: 'group-tertiary', source: 'pink-700', hex: '#a41752' },
  { name: 'group-quaternary', source: 'purple-700', hex: '#641ba3' },
] as const;

const TEXT_SIZES = [
  { name: 'xs', fontSize: '0.75rem', lineHeight: 1 / 0.75 },
  { name: 'sm', fontSize: '0.875rem', lineHeight: 1.25 / 0.875 },
  { name: 'md', fontSize: '1rem', lineHeight: 1.5 },
  { name: 'lg', fontSize: '1.125rem', lineHeight: 1.75 / 1.125 },
  { name: 'xl', fontSize: '1.25rem', lineHeight: 1.75 / 1.25 },
  { name: '2xl', fontSize: '1.5rem', lineHeight: 2 / 1.5 },
  { name: '3xl', fontSize: '1.875rem', lineHeight: 2.25 / 1.875 },
  { name: 'emphasize', fontSize: '3rem', lineHeight: 1 },
  { name: 'highlight', fontSize: '6rem', lineHeight: 1 },
];

const FONT_WEIGHTS = [
  { name: 'medium', value: '450' },
  { name: 'bold', value: '700' },
] as const;

const LETTER_SPACINGS = [
  { name: 'none', value: '0em' },
  { name: 'normal', value: '0.025em' },
] as const;

const LINE_HEIGHTS = [
  { name: 'none', value: '1' },
  { name: 'tight', value: '1.25' },
  { name: 'snug', value: '1.375' },
  { name: 'normal', value: '1.5' },
  { name: 'relaxed', value: '1.625' },
  { name: 'loose', value: '2' },
] as const;

const SHADOWS = [
  { name: '2xs', value: '0 1px rgb(0 0 0 / 0.05)' },
  { name: 'xs', value: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
  {
    name: 'sm',
    value: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  },
  {
    name: 'md',
    value: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  },
  {
    name: 'lg',
    value: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  {
    name: 'xl',
    value:
      '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  { name: '2xl', value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
] as const;

const RADII = [
  { name: 'sm', value: '0.375rem' },
  { name: 'md', value: '0.5rem' },
  { name: 'lg', value: '0.75rem' },
] as const;

const SPACING_SCALE = [
  { name: '0.5', rem: '0.125rem', px: '2px' },
  { name: '1', rem: '0.25rem', px: '4px' },
  { name: '2', rem: '0.5rem', px: '8px' },
  { name: '3', rem: '0.75rem', px: '12px' },
  { name: '4', rem: '1rem', px: '16px' },
  { name: '5', rem: '1.25rem', px: '20px' },
  { name: '6', rem: '1.5rem', px: '24px' },
  { name: '8', rem: '2rem', px: '32px' },
  { name: '10', rem: '2.5rem', px: '40px' },
  { name: '12', rem: '3rem', px: '48px' },
  { name: '16', rem: '4rem', px: '64px' },
  { name: '20', rem: '5rem', px: '80px' },
  { name: '24', rem: '6rem', px: '96px' },
] as const;

const BREAKPOINTS = [
  { name: 'sm', rem: '40rem', px: '640px' },
  { name: 'md', rem: '48rem', px: '768px' },
  { name: 'lg', rem: '64rem', px: '1024px' },
  { name: 'xl', rem: '80rem', px: '1280px' },
  { name: '2xl', rem: '96rem', px: '1536px' },
] as const;

function TokenCard({
  name,
  source,
  hex,
  type = 'fill',
}: {
  name: string;
  source: string;
  hex: string;
  type?: 'fill' | 'border';
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border-mute px-3 py-2">
      <div
        className="h-6 w-6 shrink-0 rounded-md"
        style={
          type === 'border'
            ? { border: `2px solid var(--${name})` }
            : { backgroundColor: `var(--${name})` }
        }
      />
      <div className="min-w-0">
        <p className="font-medium text-sm">{name}</p>
        <p className="text-fg-subtle text-xs">
          {source} ({hex})
        </p>
      </div>
    </div>
  );
}

export function Theming() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-12 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Heading type="h1">
          <T k="nav.theming" />
        </Heading>
        <p className="text-fg-mute text-lg">
          <T k="theming.introduction" />
        </p>
      </div>
      <Separator color="mute" />

      {/* Color Palette */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="theming.colorPaletteTitle" />
        </Heading>
        <p className="text-fg-mute">
          <T k="theming.colorPaletteDescription" />
        </p>
        <div className="flex flex-col gap-4">
          {COLOR_FAMILIES.map((family) => (
            <div className="flex flex-col gap-1" key={family.prefix}>
              <span className="font-medium text-sm">{family.name}</span>
              <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
                {SHADES.map((shade, i) => (
                  <div className="flex flex-col items-center gap-1" key={shade}>
                    <div
                      className="aspect-square w-full rounded-md border border-border-mute"
                      style={{ backgroundColor: family.hexes[i] }}
                    />
                    <span className="font-medium text-xs">{shade}</span>
                    <span className="text-fg-subtle text-xs">
                      {family.hexes[i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Separator color="mute" />

      {/* Semantic Colors */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Heading type="h2">
            <T k="theming.semanticColorsTitle" />
          </Heading>
          <p className="text-fg-mute">
            <T k="theming.semanticColorsDescription" />
          </p>
        </div>

        {/* Foreground */}
        <div className="flex flex-col gap-3">
          <Heading type="h3">
            <T k="theming.foregroundTitle" />
          </Heading>
          <div className="grid gap-2 sm:grid-cols-2">
            {FG_TOKENS.map((token) => (
              <TokenCard
                hex={token.hex}
                key={token.name}
                name={token.name}
                source={token.source}
              />
            ))}
          </div>
        </div>

        {/* Background */}
        <div className="flex flex-col gap-3">
          <Heading type="h3">
            <T k="theming.backgroundTitle" />
          </Heading>
          <div className="grid gap-2 sm:grid-cols-2">
            {BG_TOKENS.map((token) => (
              <TokenCard
                hex={token.hex}
                key={token.name}
                name={token.name}
                source={token.source}
              />
            ))}
          </div>
        </div>

        {/* Border */}
        <div className="flex flex-col gap-3">
          <Heading type="h3">
            <T k="theming.borderTitle" />
          </Heading>
          <div className="grid gap-2 sm:grid-cols-2">
            {BORDER_TOKENS.map((token) => (
              <TokenCard
                hex={token.hex}
                key={token.name}
                name={token.name}
                source={token.source}
                type="border"
              />
            ))}
          </div>
        </div>
      </section>
      <Separator color="mute" />

      {/* Brand Colors */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Heading type="h2">
            <T k="theming.brandColorsTitle" />
          </Heading>
          <p className="text-fg-mute">
            <T k="theming.brandColorsDescription" />
          </p>
        </div>

        {/* Primary */}
        <div className="flex flex-col gap-3">
          <Heading type="h3">Primary</Heading>
          <div className="grid gap-2 sm:grid-cols-2">
            {PRIMARY_TOKENS.map((token) => (
              <TokenCard
                hex={token.hex}
                key={token.name}
                name={token.name}
                source={token.source}
                type={token.name.includes('border') ? 'border' : 'fill'}
              />
            ))}
          </div>
        </div>

        {/* Secondary */}
        <div className="flex flex-col gap-3">
          <Heading type="h3">Secondary</Heading>
          <div className="grid gap-2 sm:grid-cols-2">
            {SECONDARY_TOKENS.map((token) => (
              <TokenCard
                hex={token.hex}
                key={token.name}
                name={token.name}
                source={token.source}
                type={token.name.includes('border') ? 'border' : 'fill'}
              />
            ))}
          </div>
        </div>

        {/* Group */}
        <div className="flex flex-col gap-3">
          <Heading type="h3">Group</Heading>
          <div className="grid gap-2 sm:grid-cols-2">
            {GROUP_TOKENS.map((token) => (
              <TokenCard
                hex={token.hex}
                key={token.name}
                name={token.name}
                source={token.source}
              />
            ))}
          </div>
        </div>
      </section>
      <Separator color="mute" />

      {/* Typography */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Heading type="h2">
            <T k="theming.typographyTitle" />
          </Heading>
          <p className="text-fg-mute">
            <T k="theming.typographyDescription" />
          </p>
        </div>

        {/* Text Sizes */}
        <div className="flex flex-col gap-3">
          <Heading type="h3">
            <T k="theming.textSizesTitle" />
          </Heading>
          <div className="flex flex-col gap-3 rounded-lg border border-border-mute p-4">
            {TEXT_SIZES.map((size) => (
              <div className="flex items-baseline gap-4" key={size.name}>
                <code className="w-20 shrink-0 text-fg-subtle text-sm">
                  {size.name}
                </code>
                <span
                  className="truncate"
                  style={{
                    fontSize: size.fontSize,
                    lineHeight: size.lineHeight,
                  }}
                >
                  ArteOdyssey
                </span>
                <span className="ml-auto shrink-0 text-fg-subtle text-xs">
                  {size.fontSize} / {Number(size.lineHeight.toFixed(3))}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Font Weights */}
        <div className="flex flex-col gap-3">
          <Heading type="h3">
            <T k="theming.fontWeightsTitle" />
          </Heading>
          <div className="flex flex-col gap-3 rounded-lg border border-border-mute p-4">
            {FONT_WEIGHTS.map((weight) => (
              <div className="flex items-baseline gap-4" key={weight.name}>
                <code className="w-20 shrink-0 text-fg-subtle text-sm">
                  {weight.name}
                </code>
                <span className="text-lg" style={{ fontWeight: weight.value }}>
                  ArteOdyssey
                </span>
                <span className="ml-auto shrink-0 text-fg-subtle text-xs">
                  {weight.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Letter Spacing */}
        <div className="flex flex-col gap-3">
          <Heading type="h3">
            <T k="theming.letterSpacingTitle" />
          </Heading>
          <div className="flex flex-col gap-3 rounded-lg border border-border-mute p-4">
            {LETTER_SPACINGS.map((ls) => (
              <div className="flex items-baseline gap-4" key={ls.name}>
                <code className="w-20 shrink-0 text-fg-subtle text-sm">
                  {ls.name}
                </code>
                <span className="text-lg" style={{ letterSpacing: ls.value }}>
                  ArteOdyssey
                </span>
                <span className="ml-auto shrink-0 text-fg-subtle text-xs">
                  {ls.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Line Height */}
        <div className="flex flex-col gap-3">
          <Heading type="h3">
            <T k="theming.lineHeightTitle" />
          </Heading>
          <div className="flex flex-col gap-3 rounded-lg border border-border-mute p-4">
            {LINE_HEIGHTS.map((lh) => (
              <div className="flex items-center gap-4" key={lh.name}>
                <code className="w-20 shrink-0 text-fg-subtle text-sm">
                  {lh.name}
                </code>
                <div
                  className="flex-1 text-sm"
                  style={{ lineHeight: lh.value }}
                >
                  The quick brown fox jumps over the lazy dog. The quick brown
                  fox jumps over the lazy dog.
                </div>
                <span className="shrink-0 text-fg-subtle text-xs">
                  {lh.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Separator color="mute" />

      {/* Border Radius */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="theming.borderRadiusTitle" />
        </Heading>
        <p className="text-fg-mute">
          <T k="theming.borderRadiusDescription" />
        </p>
        <div className="flex items-end gap-6">
          {RADII.map((radius) => (
            <div className="flex flex-col items-center gap-2" key={radius.name}>
              <div
                className="h-16 w-16 border-2 border-border-base bg-bg-subtle"
                style={{ borderRadius: radius.value }}
              />
              <div className="flex flex-col items-center">
                <code className="font-medium text-sm">{radius.name}</code>
                <span className="text-fg-subtle text-xs">{radius.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Separator color="mute" />

      {/* Shadow */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="theming.shadowTitle" />
        </Heading>
        <p className="text-fg-mute">
          <T k="theming.shadowDescription" />
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {SHADOWS.map((shadow) => (
            <div className="flex flex-col items-center gap-2" key={shadow.name}>
              <div
                className="h-16 w-full rounded-lg border border-border-mute bg-bg-base"
                style={{ boxShadow: shadow.value }}
              />
              <div className="flex flex-col items-center">
                <code className="font-medium text-sm">{shadow.name}</code>
                <span className="text-fg-subtle text-xs">{shadow.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Separator color="mute" />

      {/* Spacing */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="theming.spacingTitle" />
        </Heading>
        <p className="text-fg-mute">
          <T k="theming.spacingDescription" />
        </p>
        <div className="flex flex-col gap-2 rounded-lg border border-border-mute p-4">
          {SPACING_SCALE.map((space) => (
            <div className="flex items-center gap-3" key={space.name}>
              <code className="w-8 shrink-0 text-right text-fg-subtle text-sm">
                {space.name}
              </code>
              <div
                className="h-4 rounded bg-primary-bg"
                style={{ width: space.px }}
              />
              <span className="text-fg-subtle text-xs">
                {space.rem} ({space.px})
              </span>
            </div>
          ))}
        </div>
      </section>
      <Separator color="mute" />

      {/* Breakpoints */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="theming.breakpointsTitle" />
        </Heading>
        <p className="text-fg-mute">
          <T k="theming.breakpointsDescription" />
        </p>
        <div className="flex flex-col gap-2 rounded-lg border border-border-mute p-4">
          {BREAKPOINTS.map((bp) => (
            <div className="flex items-center gap-4" key={bp.name}>
              <code className="w-10 shrink-0 font-medium text-sm">
                {bp.name}
              </code>
              <span className="text-fg-subtle text-xs">
                ≥ {bp.px} ({bp.rem})
              </span>
            </div>
          ))}
        </div>
      </section>
      <Separator color="mute" />

      {/* Dark Mode */}
      <section className="flex flex-col gap-4">
        <Heading type="h2">
          <T k="theming.darkModeTitle" />
        </Heading>
        <p className="text-fg-mute">
          <T k="theming.darkModeDescription" />
        </p>
        <CodeBlock
          code={`// Enable dark mode
document.documentElement.classList.add('dark');

// Disable dark mode
document.documentElement.classList.remove('dark');`}
          lang="ts"
        />
      </section>
    </div>
  );
}
