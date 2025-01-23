import { faker, type SexType } from "@faker-js/faker";
import { BaseMockType } from "../core/base-mock-type";
import type { MockType } from "../types/mock.types";

export class StringMockType extends BaseMockType<string> {
  type: MockType = "string";
  private _generators: Array<() => string> = [];

  firstName(gender?: SexType): this {
    this._generators.push(() => faker.person.firstName(gender));
    return this;
  }

  lastName(gender?: SexType): this {
    this._generators.push(() => faker.person.lastName(gender));
    return this;
  }

  fullName(gender: SexType): this {
    this._generators.push(() => faker.person.fullName({ sex: gender }));
    return this;
  }

  email(): this {
    this._generators.push(() => faker.internet.email());
    return this;
  }

  generate(): string {
    if (this._generators.length === 0) {
      return faker.lorem.word();
    }
    return this._generators[this._generators.length - 1]();
  }
}
