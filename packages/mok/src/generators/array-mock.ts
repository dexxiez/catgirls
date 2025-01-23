import { BaseMockType } from "../core/base-mock-type";
import { MockGenerator, MockType } from "../types/mock.types";

export class ArrayMockType<T> extends BaseMockType<T[]> {
  type: MockType = "array";
  private _min = 0;
  private _max = 10;

  constructor(private elementType: MockGenerator<T>) {
    super();
  }

  min(value: number): this {
    this._min = value;
    return this;
  }

  max(value: number): this {
    this._max = value;
    return this;
  }

  generate(): T[] {
    const length =
      Math.floor(Math.random() * (this._max - this._min + 1)) + this._min;
    return Array.from({ length }, () => this.elementType.generate());
  }
}
