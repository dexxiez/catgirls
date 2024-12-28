import { transformers } from "../src/";

describe("transformers", () => {
  describe("number", () => {
    it("should convert string to number", () => {
      expect(transformers.number("42")).toBe(42);
    });

    it("should handle negative numbers", () => {
      expect(transformers.number("-69")).toBe(-69);
    });

    it("should return NaN for invalid numbers", () => {
      expect(Number.isNaN(transformers.number("not a number"))).toBe(true);
    });
  });

  describe("optionalNumber", () => {
    it("should convert string to number when defined", () => {
      expect(transformers.optionalNumber("42")).toBe(42);
    });

    it("should return undefined when input is undefined", () => {
      expect(transformers.optionalNumber(undefined)).toBeUndefined();
    });

    it("should handle negative numbers", () => {
      expect(transformers.optionalNumber("-420")).toBe(-420);
    });

    it("should return NaN for invalid numbers", () => {
      expect(Number.isNaN(transformers.optionalNumber("wat"))).toBe(true);
    });
  });

  describe("boolean", () => {
    it('should convert "true" to true', () => {
      expect(transformers.boolean("true")).toBe(true);
    });

    it("should convert everything else to false", () => {
      expect(transformers.boolean("false")).toBe(false);
      expect(transformers.boolean("True")).toBe(false);
      expect(transformers.boolean("1")).toBe(false);
      expect(transformers.boolean("")).toBe(false);
    });
  });

  describe("optionalBoolean", () => {
    it('should convert "true" to true when defined', () => {
      expect(transformers.optionalBoolean("true")).toBe(true);
    });

    it("should return undefined when input is undefined", () => {
      expect(transformers.optionalBoolean(undefined)).toBeUndefined();
    });

    it("should convert everything else to false", () => {
      expect(transformers.optionalBoolean("false")).toBe(false);
      expect(transformers.optionalBoolean("TRUE")).toBe(false);
      expect(transformers.optionalBoolean("1")).toBe(false);
      expect(transformers.optionalBoolean("")).toBe(false);
    });
  });

  describe("json", () => {
    it("should parse valid JSON", () => {
      const testObj = { foo: "bar", num: 42, arr: [1, 2, 3] };
      expect(transformers.json(JSON.stringify(testObj))).toEqual(testObj);
    });

    it("should handle arrays", () => {
      const testArr = [1, "two", { three: 3 }];
      expect(transformers.json(JSON.stringify(testArr))).toEqual(testArr);
    });

    it("should handle primitive values", () => {
      expect(transformers.json('"string"')).toBe("string");
      expect(transformers.json("42")).toBe(42);
      expect(transformers.json("true")).toBe(true);
      expect(transformers.json("null")).toBe(null);
    });

    it("should throw on invalid JSON", () => {
      expect(() => transformers.json("{ not valid json }")).toThrow();
      expect(() => transformers.json("undefined")).toThrow();
    });
  });
});
