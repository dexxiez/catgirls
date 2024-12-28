/**
 * Transformers are helper functions that can be used to transform the value of an environment variable.
 * They are useful for converting strings to other types, such as numbers or booleans.
 */
export const transformers = {
  // Numberedoos
  number: (val: string) => parseInt(val, 10),
  optionalNumber: (val: string | undefined) =>
    val === undefined ? undefined : parseInt(val, 10),

  // Booleandoos
  boolean: (val: string) => val === "true",
  optionalBoolean: (val: string | undefined) =>
    val === undefined ? undefined : val === "true",

  // JSON-ify-doos
  json: <T>(val: string) => JSON.parse(val) as T,
};
