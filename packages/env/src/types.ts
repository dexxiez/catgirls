import { z } from "zod";

type ValidatorConfig<T> = {
  schema: z.ZodType<T>;
  transform?: (value: string) => unknown;
};

export type EnvConfig<T> = {
  [K in keyof T]: ValidatorConfig<T[K]>;
};
