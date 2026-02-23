import { Code } from '@k8o/arte-odyssey';
import type { FC } from 'react';

export type PropItem = {
  name: string;
  types: readonly string[];
  defaultValue: string | null;
};

const TypeCodes: FC<{ types: readonly string[] }> = ({ types }) => {
  return (
    <span className="flex flex-wrap items-center gap-1">
      {types.map((type, i) => (
        <span className="flex items-center gap-1" key={type}>
          {i > 0 && <span className="text-fg-mute/60">|</span>}
          <Code>{type}</Code>
        </span>
      ))}
    </span>
  );
};

const DefaultValue: FC<{ value: string | null }> = ({ value }) => {
  return value ? <Code>{value}</Code> : <>-</>;
};

export const PropsTable: FC<{ items: readonly PropItem[] }> = ({ items }) => {
  return (
    <>
      {/* Mobile: card list */}
      <dl className="flex flex-col gap-4 md:hidden">
        {items.map((prop) => (
          <div
            className="flex flex-col gap-1 border-border-mute border-b pb-4"
            key={prop.name}
          >
            <dt className="font-medium">
              <Code>{prop.name}</Code>
            </dt>
            <dd className="text-fg-mute text-sm">
              <span className="text-fg-mute/60">Type: </span>
              <TypeCodes types={prop.types} />
            </dd>
            <dd className="text-fg-mute text-sm">
              <span className="text-fg-mute/60">Default: </span>
              <DefaultValue value={prop.defaultValue} />
            </dd>
          </div>
        ))}
      </dl>
      {/* Desktop: table */}
      <table className="hidden w-full text-left text-sm md:table">
        <thead>
          <tr className="border-border-mute border-b">
            <th className="whitespace-nowrap py-3 pr-6 font-medium">Prop</th>
            <th className="whitespace-nowrap py-3 pr-6 font-medium">Type</th>
            <th className="whitespace-nowrap py-3 font-medium">Default</th>
          </tr>
        </thead>
        <tbody className="text-fg-mute">
          {items.map((prop) => (
            <tr className="border-border-mute border-b" key={prop.name}>
              <td className="whitespace-nowrap py-3 pr-6">
                <Code>{prop.name}</Code>
              </td>
              <td className="py-3 pr-6">
                <TypeCodes types={prop.types} />
              </td>
              <td className="whitespace-nowrap py-3">
                <DefaultValue value={prop.defaultValue} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
