import { mockState } from "./core/mock-state-manager";
import { ArrayMockType } from "./generators/array-mock";
import { ObjectMockType } from "./generators/object-mock";
import { StringMockType } from "./generators/string-mock";
import type { MockGenerator } from "./types/mock.types";

export const mock = {
  string: () => new StringMockType(),
  object: <T extends Record<string, MockGenerator<unknown>>>(schema: T) =>
    new ObjectMockType(schema),
  array: <T>(elementType: MockGenerator<T>) => new ArrayMockType(elementType),

  setSeed: (seed: number) => mockState.setSeed(seed),
  reset: () => mockState.reset(),
  resetState: () => mockState.resetState(),
};

// Type exports
export type * from "./types/mock.types";
export { BaseMockType } from "./core/base-mock-type";
export { MockStateManager } from "./core/mock-state-manager";
