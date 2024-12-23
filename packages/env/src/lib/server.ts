import { z } from "zod";

import { EnvConfig } from "../types";
import { EnvValidationError } from "./errors";

/**
 * Creates a strongly-typed environment configuration object with runtime validation.
 *
 * @template T - Type of the resulting environment object. Must be a record of string keys to unknown values.
 * @param {EnvConfig<T>} config - Configuration object mapping environment keys to their validators
 * @returns {T} A validated environment object matching the type parameter
 * @throws {Error} When accessed from client-side code (server.ts only)
 * @throws {EnvValidationError} When environment variables are missing or fail validation
 *
 * @example
 * ```ts
 * const env = createServerEnv({
 *   DATABASE_URL: { schema: z.string().url() },
 *   PORT: {
 *     schema: z.number(),
 *     transform: (val) => parseInt(val, 10)
 *   }
 * });
 * // env is now typed as { DATABASE_URL: string, PORT: number }
 * ```
 */
export const createServerEnv = <T extends Record<string, unknown>>(
  config: EnvConfig<T>,
): T => {
  if (typeof window !== "undefined") {
    throw new Error("Server env accessed on client side!");
  }

  const env: Partial<T> = {};
  const errors: Array<{ key: string; message: string }> = [];

  for (const [key, validator] of Object.entries(config)) {
    const rawValue = process.env[key];

    if (rawValue === undefined) {
      errors.push({ key, message: `Missing environment variable: ${key}` });
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
          message: `Invalid value for ${key}: ${error.errors[0].message}`,
        });
      }
    }
  }

  if (errors.length > 0) {
    throw new EnvValidationError(
      "Server environment validation failed",
      errors,
    );
  }

  return env as T;
};
