import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';

const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

const COLOR_FAMILIES = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'cyan',
  'blue',
  'purple',
  'pink',
] as const;

const Palette: FC = () => {
  return (
    <div className="flex flex-col gap-1">
      {/* Header row */}
      <div className="grid gap-1" style={{ gridTemplateColumns: '5rem repeat(10, 1fr)' }}>
        <div />
        {SHADES.map((shade) => (
          <div key={shade} className="text-center text-xs text-fg-mute">
            {shade}
          </div>
        ))}
      </div>
      {/* Color rows */}
      {COLOR_FAMILIES.map((color) => (
        <div
          key={color}
          className="grid items-center gap-1"
          style={{ gridTemplateColumns: '5rem repeat(10, 1fr)' }}
        >
          <span className="text-xs font-medium text-fg-base capitalize">{color}</span>
          {SHADES.map((shade) => (
            <div
              key={shade}
              className="h-8 rounded-sm"
              style={{ backgroundColor: `var(--${color}-${shade})` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const meta = {
  title: 'Design Tokens/Color Palette',
  component: Palette,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Palette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllColors: Story = {};

/* ─── Teal色相比較 ─── */
const CHROMA = [0.02, 0.058, 0.11, 0.16, 0.175, 0.165, 0.145, 0.12, 0.098, 0.078] as const;
const L_SCALE = [0.975, 0.945, 0.9, 0.84, 0.75, 0.66, 0.575, 0.49, 0.41, 0.37] as const;

const HUE_OPTIONS = [
  { label: 'H:160', hue: 160 },
  { label: 'H:165', hue: 165 },
  { label: 'H:170', hue: 170 },
  { label: 'H:175', hue: 175 },
  { label: 'H:180 (current)', hue: 180 },
  { label: 'H:185', hue: 185 },
  { label: 'H:190', hue: 190 },
  { label: 'H:195', hue: 195 },
  { label: 'H:200', hue: 200 },
] as const;

const TealHueComparison: FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="grid gap-1" style={{ gridTemplateColumns: '8rem repeat(10, 1fr)' }}>
        <div />
        {SHADES.map((shade) => (
          <div key={shade} className="text-center text-xs text-fg-mute">
            {shade}
          </div>
        ))}
      </div>
      {HUE_OPTIONS.map(({ label, hue }) => (
        <div
          key={hue}
          className="grid items-center gap-1"
          style={{ gridTemplateColumns: '8rem repeat(10, 1fr)' }}
        >
          <span className="text-xs font-medium text-fg-base">{label}</span>
          {SHADES.map((shade, i) => (
            <div
              key={shade}
              className="h-10 rounded-sm"
              style={{
                backgroundColor: `oklch(${L_SCALE[i]} ${CHROMA[i]} ${hue})`,
              }}
            />
          ))}
        </div>
      ))}

      {/* ボタン風プレビュー (200 = primary-bg相当) */}
      <div className="mt-8">
        <p className="mb-4 text-sm text-fg-mute">ボタンプレビュー (bg: 200相当, text: 800相当)</p>
        <div className="flex gap-4">
          {HUE_OPTIONS.map(({ label, hue }) => (
            <div
              key={hue}
              className="rounded-lg px-5 py-3 text-center text-sm font-bold"
              style={{
                backgroundColor: `oklch(${L_SCALE[2]} ${CHROMA[2]} ${hue})`,
                color: `oklch(${L_SCALE[8]} ${CHROMA[8]} ${hue})`,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const TealHue: Story = {
  render: () => <TealHueComparison />,
};

/* ─── Warm Gray 色相比較 ─── */
const GRAY_CHROMA = [0.003, 0.005, 0.008, 0.012, 0.015, 0.018, 0.02, 0.02, 0.018, 0.015] as const;

const GRAY_HUE_OPTIONS = [
  { label: 'H:265 (current, cool purple)', hue: 265 },
  { label: 'H:250 (blue-gray)', hue: 250 },
  { label: 'H:200 (cool neutral)', hue: 200 },
  { label: 'H:100 (warm neutral)', hue: 100 },
  { label: 'H:80 (warm yellow)', hue: 80 },
  { label: 'H:60 (warm sand)', hue: 60 },
  { label: 'H:45 (warm cream)', hue: 45 },
  { label: 'H:30 (warm blush)', hue: 30 },
] as const;

const WarmGrayComparison: FC = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* パレット比較 */}
      <div className="flex flex-col gap-1">
        <div className="grid gap-1" style={{ gridTemplateColumns: '14rem repeat(10, 1fr)' }}>
          <div />
          {SHADES.map((shade) => (
            <div key={shade} className="text-center text-xs text-fg-mute">
              {shade}
            </div>
          ))}
        </div>
        {GRAY_HUE_OPTIONS.map(({ label, hue }) => (
          <div
            key={hue}
            className="grid items-center gap-1"
            style={{ gridTemplateColumns: '14rem repeat(10, 1fr)' }}
          >
            <span className="text-xs font-medium text-fg-base">{label}</span>
            {SHADES.map((shade, i) => (
              <div
                key={shade}
                className="h-10 rounded-sm"
                style={{
                  backgroundColor: `oklch(${L_SCALE[i]} ${GRAY_CHROMA[i]} ${hue})`,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* 背景プレビュー: gray-50相当をbg-baseとして、tealボタンを載せる */}
      <div className="mt-4">
        <p className="mb-4 text-sm text-fg-mute">
          背景プレビュー: 各Gray H の 50相当をオフホワイト背景に、Tealボタンを配置
        </p>
        <div className="flex flex-col gap-4">
          {GRAY_HUE_OPTIONS.map(({ label, hue }) => (
            <div
              key={hue}
              className="flex items-center justify-between rounded-lg px-8 py-6"
              style={{
                backgroundColor: `oklch(${L_SCALE[0]} ${GRAY_CHROMA[0]} ${hue})`,
              }}
            >
              <div className="flex flex-col gap-1">
                <span
                  className="text-sm font-bold"
                  style={{ color: `oklch(${L_SCALE[9]} ${GRAY_CHROMA[9]} ${hue})` }}
                >
                  {label}
                </span>
                <span
                  className="text-xs"
                  style={{ color: `oklch(${L_SCALE[6]} ${GRAY_CHROMA[6]} ${hue})` }}
                >
                  オフホワイト背景の上にテキストとボタン
                </span>
              </div>
              <div className="flex gap-3">
                <div
                  className="rounded-lg px-5 py-2.5 text-sm font-bold"
                  style={{
                    backgroundColor: `oklch(${L_SCALE[2]} ${CHROMA[2]} 180)`,
                    color: `oklch(${L_SCALE[8]} ${CHROMA[8]} 180)`,
                  }}
                >
                  Primary
                </div>
                <div
                  className="rounded-lg border-2 px-5 py-2.5 text-sm font-bold"
                  style={{
                    borderColor: `oklch(${L_SCALE[4]} ${GRAY_CHROMA[4]} ${hue})`,
                    color: `oklch(${L_SCALE[9]} ${GRAY_CHROMA[9]} ${hue})`,
                  }}
                >
                  Secondary
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const WarmGray: Story = {
  render: () => <WarmGrayComparison />,
};
