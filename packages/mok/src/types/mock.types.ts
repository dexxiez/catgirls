export type MockType = "string" | "number" | "boolean" | "array" | "object";

export interface MockGenerator<T> {
  type: MockType;
  generate(): T;
}

export type InferMockObject<T extends Record<string, MockGenerator<unknown>>> =
  {
    [K in keyof T]: ReturnType<T[K]["generate"]>;
  };
