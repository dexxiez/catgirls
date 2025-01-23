import type { MockType, MockGenerator } from "../types/mock.types";

export abstract class BaseMockType<T> implements MockGenerator<T> {
  abstract type: MockType;
  abstract generate(): T;
}
