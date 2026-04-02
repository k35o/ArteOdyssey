import { Card, Heading, Separator } from '@k8o/arte-odyssey';
import { CodeBlock } from '../components/code-block';
import { T } from '../components/t';
import type { TokenDef } from '../components/token-card';
import { TokenCard } from '../components/token-card';

const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

const COLOR_FAMILIES = [
  {
    name: 'Gray',
    prefix: 'gray',
    oklchValues: [
      'oklch(0.975 0.001 235)',
      'oklch(0.945 0.0015 235)',
      'oklch(0.900 0.003 235)',
      'oklch(0.840 0.004 235)',
      'oklch(0.750 0.005 235)',
      'oklch(0.660 0.006 235)',
      'oklch(0.520 0.006 235)',
      'oklch(0.420 0.003 235)',
      'oklch(0.300 0.002 235)',
      'oklch(0.250 0.0015 235)',
      'oklch(0.180 0.001 235)',
    ],
  },
  {
    name: 'Red',
    prefix: 'red',
    oklchValues: [
      'oklch(0.975 0.016 25)',
      'oklch(0.945 0.042 25)',
      'oklch(0.900 0.084 25)',
      'oklch(0.840 0.150 25)',
      'oklch(0.750 0.225 25)',
      'oklch(0.660 0.270 25)',
      'oklch(0.575 0.255 25)',
      'oklch(0.490 0.220 25)',
      'oklch(0.410 0.180 25)',
      'oklch(0.370 0.140 25)',
      'oklch(0.180 0.100 25)',
    ],
  },
  {
    name: 'Pink',
    prefix: 'pink',
    oklchValues: [
      'oklch(0.975 0.016 350)',
      'oklch(0.945 0.038 350)',
      'oklch(0.900 0.078 350)',
      'oklch(0.840 0.145 350)',
      'oklch(0.750 0.225 350)',
      'oklch(0.660 0.270 350)',
      'oklch(0.575 0.260 350)',
      'oklch(0.490 0.230 350)',
      'oklch(0.410 0.190 350)',
      'oklch(0.370 0.150 350)',
      'oklch(0.180 0.108 350)',
    ],
  },
  {
    name: 'Purple',
    prefix: 'purple',
    oklchValues: [
      'oklch(0.975 0.018 305)',
      'oklch(0.945 0.042 305)',
      'oklch(0.900 0.082 305)',
      'oklch(0.840 0.155 305)',
      'oklch(0.750 0.240 305)',
      'oklch(0.660 0.290 305)',
      'oklch(0.575 0.295 305)',
      'oklch(0.490 0.265 305)',
      'oklch(0.410 0.220 305)',
      'oklch(0.370 0.175 305)',
      'oklch(0.180 0.125 305)',
    ],
  },
  {
    name: 'Cyan',
    prefix: 'cyan',
    oklchValues: [
      'oklch(0.975 0.022 210)',
      'oklch(0.945 0.055 210)',
      'oklch(0.900 0.098 210)',
      'oklch(0.840 0.155 210)',
      'oklch(0.750 0.180 210)',
      'oklch(0.660 0.170 210)',
      'oklch(0.575 0.150 210)',
      'oklch(0.490 0.128 210)',
      'oklch(0.410 0.105 210)',
      'oklch(0.370 0.082 210)',
      'oklch(0.180 0.058 210)',
    ],
  },
  {
    name: 'Blue',
    prefix: 'blue',
    oklchValues: [
      'oklch(0.975 0.016 260)',
      'oklch(0.945 0.040 260)',
      'oklch(0.900 0.078 260)',
      'oklch(0.840 0.145 260)',
      'oklch(0.750 0.210 260)',
      'oklch(0.660 0.255 260)',
      'oklch(0.575 0.275 260)',
      'oklch(0.490 0.260 260)',
      'oklch(0.410 0.215 260)',
      'oklch(0.370 0.165 260)',
      'oklch(0.180 0.118 260)',
    ],
  },
  {
    name: 'Teal',
    prefix: 'teal',
    oklchValues: [
      'oklch(0.975 0.020 180)',
      'oklch(0.945 0.058 180)',
      'oklch(0.900 0.110 180)',
      'oklch(0.840 0.160 180)',
      'oklch(0.750 0.175 180)',
      'oklch(0.660 0.165 180)',
      'oklch(0.575 0.145 180)',
      'oklch(0.490 0.120 180)',
      'oklch(0.410 0.098 180)',
      'oklch(0.370 0.078 180)',
      'oklch(0.180 0.055 180)',
    ],
  },
  {
    name: 'Green',
    prefix: 'green',
    oklchValues: [
      'oklch(0.975 0.020 150)',
      'oklch(0.945 0.052 150)',
      'oklch(0.900 0.100 150)',
      'oklch(0.840 0.175 150)',
      'oklch(0.750 0.235 150)',
      'oklch(0.660 0.245 150)',
      'oklch(0.575 0.220 150)',
      'oklch(0.490 0.180 150)',
      'oklch(0.410 0.140 150)',
      'oklch(0.370 0.108 150)',
      'oklch(0.180 0.075 150)',
    ],
  },
  {
    name: 'Yellow',
    prefix: 'yellow',
    oklchValues: [
      'oklch(0.975 0.030 90)',
      'oklch(0.945 0.080 90)',
      'oklch(0.900 0.148 90)',
      'oklch(0.840 0.200 90)',
      'oklch(0.750 0.200 90)',
      'oklch(0.660 0.180 90)',
      'oklch(0.575 0.158 90)',
      'oklch(0.490 0.135 90)',
      'oklch(0.410 0.110 90)',
      'oklch(0.370 0.085 90)',
      'oklch(0.180 0.060 90)',
    ],
  },
  {
    name: 'Orange',
    prefix: 'orange',
    oklchValues: [
      'oklch(0.975 0.020 55)',
      'oklch(0.945 0.050 55)',
      'oklch(0.900 0.098 55)',
      'oklch(0.840 0.165 55)',
      'oklch(0.750 0.220 55)',
      'oklch(0.660 0.240 55)',
      'oklch(0.575 0.235 55)',
      'oklch(0.490 0.200 55)',
      'oklch(0.410 0.165 55)',
      'oklch(0.370 0.128 55)',
      'oklch(0.180 0.090 55)',
    ],
  },
] as const;

const FG_TOKENS: TokenDef[] = [
  {
    name: 'fg-base',
    light: { source: 'gray-900' },
    dark: { source: 'gray-50' },
  },
  {
    name: 'fg-subtle',
    light: { source: 'gray-400' },
    dark: { source: 'gray-500' },
  },
  {
    name: 'fg-mute',
    light: { source: 'gray-700' },
    dark: { source: 'gray-300' },
  },
  {
    name: 'fg-inverse',
    light: { source: 'gray-50' },
    dark: { source: 'gray-900' },
  },
  {
    name: 'fg-info',
    light: { source: 'blue-800' },
    dark: { source: 'blue-200' },
  },
  {
    name: 'fg-success',
    light: { source: 'green-800' },
    dark: { source: 'green-200' },
  },
  {
    name: 'fg-warning',
    light: { source: 'yellow-800' },
    dark: { source: 'yellow-200' },
  },
  {
    name: 'fg-error',
    light: { source: 'red-800' },
    dark: { source: 'red-200' },
  },
];

const BG_TOKENS: TokenDef[] = [
  {
    name: 'bg-base',
    light: { source: 'white' },
    dark: { source: 'gray-900' },
  },
  {
    name: 'bg-surface',
    light: { source: 'gray-50' },
    dark: { source: 'gray-950' },
  },
  {
    name: 'bg-subtle',
    light: { source: 'gray-100' },
    dark: { source: 'gray-800' },
  },
  {
    name: 'bg-mute',
    light: { source: 'gray-200' },
    dark: { source: 'gray-700' },
  },
  {
    name: 'bg-emphasize',
    light: { source: 'gray-300' },
    dark: { source: 'gray-600' },
  },
  {
    name: 'bg-inverse',
    light: { source: 'gray-900' },
    dark: { source: 'white' },
  },
  {
    name: 'bg-info',
    light: { source: 'blue-100' },
    dark: { source: 'blue-900' },
  },
  {
    name: 'bg-success',
    light: { source: 'green-100' },
    dark: { source: 'green-900' },
  },
  {
    name: 'bg-warning',
    light: { source: 'yellow-100' },
    dark: { source: 'yellow-900' },
  },
  {
    name: 'bg-error',
    light: { source: 'red-100' },
    dark: { source: 'red-900' },
  },
];

const BORDER_TOKENS: TokenDef[] = [
  {
    name: 'border-base',
    light: { source: 'gray-400' },
    dark: { source: 'gray-600' },
  },
  {
    name: 'border-subtle',
    light: { source: 'gray-100' },
    dark: { source: 'gray-800' },
  },
  {
    name: 'border-mute',
    light: { source: 'gray-200' },
    dark: { source: 'gray-700' },
  },
  {
    name: 'border-emphasize',
    light: { source: 'gray-500' },
    dark: { source: 'gray-500' },
  },
  {
    name: 'border-inverse',
    light: { source: 'gray-700' },
    dark: { source: 'gray-300' },
  },
  {
    name: 'border-info',
    light: { source: 'blue-500' },
    dark: { source: 'blue-400' },
  },
  {
    name: 'border-success',
    light: { source: 'green-500' },
    dark: { source: 'green-400' },
  },
  {
    name: 'border-warning',
    light: { source: 'yellow-500' },
    dark: { source: 'yellow-400' },
  },
  {
    name: 'border-error',
    light: { source: 'red-500' },
    dark: { source: 'red-400' },
  },
];

const PRIMARY_TOKENS: TokenDef[] = [
  {
    name: 'primary-fg',
    light: { source: 'teal-800' },
    dark: { source: 'teal-300' },
  },
  {
    name: 'primary-bg',
    light: { source: 'teal-200' },
    dark: { source: 'teal-800' },
  },
  {
    name: 'primary-bg-subtle',
    light: { source: 'teal-50' },
    dark: { source: 'teal-950' },
  },
  {
    name: 'primary-bg-mute',
    light: { source: 'teal-100' },
    dark: { source: 'teal-900' },
  },
  {
    name: 'primary-bg-emphasize',
    light: { source: 'teal-300' },
    dark: { source: 'teal-700' },
  },
  {
    name: 'primary-border',
    light: { source: 'teal-500' },
    dark: { source: 'teal-500' },
  },
];

const SECONDARY_TOKENS: TokenDef[] = [
  {
    name: 'secondary-fg',
    light: { source: 'cyan-800' },
    dark: { source: 'cyan-300' },
  },
  {
    name: 'secondary-bg',
    light: { source: 'cyan-200' },
    dark: { source: 'cyan-800' },
  },
  {
    name: 'secondary-bg-subtle',
    light: { source: 'cyan-50' },
    dark: { source: 'cyan-950' },
  },
  {
    name: 'secondary-bg-mute',
    light: { source: 'cyan-100' },
    dark: { source: 'cyan-900' },
  },
  {
    name: 'secondary-bg-emphasize',
    light: { source: 'cyan-300' },
    dark: { source: 'cyan-700' },
  },
  {
    name: 'secondary-border',
    light: { source: 'cyan-500' },
    dark: { source: 'cyan-500' },
  },
];

const GROUP_TOKENS: TokenDef[] = [
  {
    name: 'group-primary',
    light: { source: 'teal-800' },
    dark: { source: 'teal-200' },
  },
  {
    name: 'group-secondary',
    light: { source: 'cyan-800' },
    dark: { source: 'cyan-200' },
  },
  {
    name: 'group-tertiary',
    light: { source: 'pink-800' },
    dark: { source: 'pink-200' },
  },
  {
    name: 'group-quaternary',
    light: { source: 'purple-800' },
    dark: { source: 'purple-200' },
  },
];

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
    value: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  { name: '2xl', value: '0 25px 50px -12px rgb(0 0 0 / 0.25)' },
] as const;

const RADII = [
  { name: 'sm', value: '0.375rem' },
  { name: 'md', value: '0.5rem' },
  { name: 'lg', value: '0.75rem' },
  { name: 'xl', value: '1rem' },
  { name: '2xl', value: '1.25rem' },
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
              <div className="grid grid-cols-5 gap-2 sm:grid-cols-11">
                {SHADES.map((shade, i) => (
                  <div
                    className="flex flex-col items-center gap-1"
                    key={shade}
                    title={family.oklchValues[i]}
                  >
                    <div
                      className="aspect-square w-full rounded-md border border-border-mute"
                      style={{ backgroundColor: family.oklchValues[i] }}
                    />
                    <span className="font-medium text-xs">{shade}</span>
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
              <TokenCard key={token.name} token={token} />
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
              <TokenCard key={token.name} token={token} />
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
              <TokenCard key={token.name} token={token} type="border" />
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
                key={token.name}
                token={token}
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
                key={token.name}
                token={token}
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
              <TokenCard key={token.name} token={token} />
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
          <Card appearance="bordered">
            <div className="flex flex-col gap-3 p-4">
              {TEXT_SIZES.map((size) => (
                <div className="flex items-baseline gap-4" key={size.name}>
                  <code className="w-20 shrink-0 text-fg-subtle text-sm">{size.name}</code>
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
          </Card>
        </div>

        {/* Font Weights */}
        <div className="flex flex-col gap-3">
          <Heading type="h3">
            <T k="theming.fontWeightsTitle" />
          </Heading>
          <Card appearance="bordered">
            <div className="flex flex-col gap-3 p-4">
              {FONT_WEIGHTS.map((weight) => (
                <div className="flex items-baseline gap-4" key={weight.name}>
                  <code className="w-20 shrink-0 text-fg-subtle text-sm">{weight.name}</code>
                  <span className="text-lg" style={{ fontWeight: weight.value }}>
                    ArteOdyssey
                  </span>
                  <span className="ml-auto shrink-0 text-fg-subtle text-xs">{weight.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Letter Spacing */}
        <div className="flex flex-col gap-3">
          <Heading type="h3">
            <T k="theming.letterSpacingTitle" />
          </Heading>
          <Card appearance="bordered">
            <div className="flex flex-col gap-3 p-4">
              {LETTER_SPACINGS.map((ls) => (
                <div className="flex items-baseline gap-4" key={ls.name}>
                  <code className="w-20 shrink-0 text-fg-subtle text-sm">{ls.name}</code>
                  <span className="text-lg" style={{ letterSpacing: ls.value }}>
                    ArteOdyssey
                  </span>
                  <span className="ml-auto shrink-0 text-fg-subtle text-xs">{ls.value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Line Height */}
        <div className="flex flex-col gap-3">
          <Heading type="h3">
            <T k="theming.lineHeightTitle" />
          </Heading>
          <Card appearance="bordered">
            <div className="flex flex-col gap-3 p-4">
              {LINE_HEIGHTS.map((lh) => (
                <div className="flex items-center gap-4" key={lh.name}>
                  <code className="w-20 shrink-0 text-fg-subtle text-sm">{lh.name}</code>
                  <div className="flex-1 text-sm" style={{ lineHeight: lh.value }}>
                    The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the
                    lazy dog.
                  </div>
                  <span className="shrink-0 text-fg-subtle text-xs">{lh.value}</span>
                </div>
              ))}
            </div>
          </Card>
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
        <Card appearance="bordered">
          <div className="flex flex-col gap-2 p-4">
            {SPACING_SCALE.map((space) => (
              <div className="flex items-center gap-3" key={space.name}>
                <code className="w-8 shrink-0 text-right text-fg-subtle text-sm">{space.name}</code>
                <div className="h-4 rounded bg-primary-bg" style={{ width: space.px }} />
                <span className="text-fg-subtle text-xs">
                  {space.rem} ({space.px})
                </span>
              </div>
            ))}
          </div>
        </Card>
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
        <Card appearance="bordered">
          <div className="flex flex-col gap-2 p-4">
            {BREAKPOINTS.map((bp) => (
              <div className="flex items-center gap-4" key={bp.name}>
                <code className="w-10 shrink-0 font-medium text-sm">{bp.name}</code>
                <span className="text-fg-subtle text-xs">
                  ≥ {bp.px} ({bp.rem})
                </span>
              </div>
            ))}
          </div>
        </Card>
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
