/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseMockType } from "../core/base-mock-type";
import type {
  InferMockObject,
  MockGenerator,
  MockType,
} from "../types/mock.types";

export class ObjectMockType<
  T extends Record<string, MockGenerator<unknown>>,
> extends BaseMockType<InferMockObject<T>> {
  type: MockType = "object";

  constructor(private schema: T) {
    super();
  }

  generate(): InferMockObject<T> {
    const result: any = {};
    for (const [key, mockGen] of Object.entries(this.schema)) {
      result[key] = mockGen.generate();
    }
    return result;
  }
}
