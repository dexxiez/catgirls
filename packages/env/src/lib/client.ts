import { z } from "zod";

import { EnvConfig } from "../types";
import { EnvValidationError } from "./errors";

/**
 * Creates a strongly-typed environment configuration object with runtime validation.
 *
 * @template T - Type of the resulting environment object. Must be a record of string keys to unknown values.
 * @param {EnvConfig<T>} config - Configuration object mapping environment keys to their validators
 * @returns {T} A validated environment object matching the type parameter
 * @throws {EnvValidationError} When environment variables are missing or fail validation
 *
 * @example
 * ```ts
 * const env = createClientEnv({
 * MY_ENV_VAR: z.string(),
 * MY_OTHER_ENV_VAR: z.number(),
 * });
 * // env is now typed as { MY_ENV_VAR: string, MY_OTHER_ENV_VAR: number }
 * ```
 */
export const createClientEnv = <T extends Record<string, unknown>>(
  config: EnvConfig<T>,
): T => {
  const env: Partial<T> = {};
  const errors: Array<{ key: string; message: string }> = [];

  for (const [key, validator] of Object.entries(config)) {
    const envKey = `NEXT_PUBLIC_${key}`;
    const rawValue = process.env[envKey];

    if (rawValue === undefined) {
      errors.push({ key, message: `Missing environment variable: ${envKey}` });
      continue;
    }

    try {
      const transformedValue = validator.transform
        ? validator.transform(rawValue)
        : rawValue;
      const validatedValue = validator.schema.parse(transformedValue);
      env[key as keyof T] = validatedValue;
    } catch (error) {
      if (error instanceof z.ZodError) {
        errors.push({
          key,
          message: `Invalid value for ${envKey}: ${error.errors[0].message}`,
        });
      }
    }
  }

  if (errors.length > 0) {
    throw new EnvValidationError(
      "Client environment validation failed",
      errors,
    );
  }

  return env as T;
};
