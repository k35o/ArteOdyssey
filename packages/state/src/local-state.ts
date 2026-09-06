import { createStoredCodec } from './entry/codec';
import type { StoredCodec } from './entry/codec';
import type { StateSchema } from './schema/object';

/**
 * App-scope state that lives in localStorage: device-persistent, shared
 * across tabs, never page-bound — which is why it is its own definition kind
 * instead of a slot on a page state.
 */
export type LocalState<Schema extends StateSchema = StateSchema> = {
  kind: 'local';
  /** Identity of this state: the storage key and the store registry slot. */
  key: string;
  /** The schema as passed. */
  schema: Schema;
  /** The localStorage key the values are written under: `k8ordo-state:<key>`. */
  storageKey: string;
  /**
   * A JavaScript expression, for an inline `<script>`, that evaluates in the
   * browser to the stored object — or `null` when nothing is stored, the JSON
   * is corrupt, the value is not an object, or storage cannot be read. The
   * schema does not run there: treat the result as untrusted and read only
   * the fields you need, each with its own fallback.
   */
  inlineRead: () => string;
};

// Namespaced so an app's own localStorage use can never collide with a state
// key; also what makes the rows recognizable in devtools.
const STORAGE_KEY_PREFIX = 'k8ordo-state:';

/**
 * The key as a JavaScript string literal. `JSON.stringify` escapes it for
 * JavaScript; `<` is escaped on top so the literal can never close the inline
 * `<script>` it is written into, whatever the key contains.
 */
const literalOf = (text: string): string =>
  JSON.stringify(text).replaceAll('<', String.raw`\u003c`);

// A self-invoking function, so the expression stays usable in any position
// (`const s = …;`, an argument, a ternary) without leaking a binding. Only
// an object survives: `JSON.parse` happily returns `5` or `null`, and a
// scalar where the schema promised an object would be read as fields.
const inlineReadOf = (storageKey: string): string =>
  `(()=>{try{const v=JSON.parse(localStorage.getItem(${literalOf(storageKey)}));return v!==null&&typeof v==="object"&&!Array.isArray(v)?v:null}catch{return null}})()`;

const codecs = new WeakMap<LocalState, StoredCodec>();

export const localCodecOf = (def: LocalState): StoredCodec => {
  const codec = codecs.get(def);
  if (codec === undefined) {
    throw new TypeError(
      `"${def.key}" was not created by defineLocalState of this module instance`,
    );
  }
  return codec;
};

export const defineLocalState = <Schema extends StateSchema>(
  key: string,
  schema: Schema,
): LocalState<Schema> => {
  const storageKey = `${STORAGE_KEY_PREFIX}${key}`;
  const def: LocalState<Schema> = {
    kind: 'local',
    key,
    schema,
    storageKey,
    inlineRead: () => inlineReadOf(storageKey),
  };
  codecs.set(def, createStoredCodec(schema, 'local'));
  return def;
};
