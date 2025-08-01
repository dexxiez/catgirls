import { describe, expect, it } from "vitest";
import { dumbWords, lowerCase } from "../src/consts";

describe("constants", () => {
  describe("dumbWords", () => {
    it("should be an empty array", () => {
      expect(dumbWords).toEqual([]);
      expect(Array.isArray(dumbWords)).toBe(true);
    });
  });

  describe("lowerCase", () => {
    it("should be a Set", () => {
      expect(lowerCase).toBeInstanceOf(Set);
    });

    it("should contain common articles", () => {
      expect(lowerCase.has("a")).toBe(true);
      expect(lowerCase.has("an")).toBe(true);
      expect(lowerCase.has("the")).toBe(true);
    });

    it("should contain common conjunctions", () => {
      expect(lowerCase.has("and")).toBe(true);
      expect(lowerCase.has("or")).toBe(true);
      expect(lowerCase.has("but")).toBe(true);
      expect(lowerCase.has("for")).toBe(true);
      expect(lowerCase.has("nor")).toBe(true);
      expect(lowerCase.has("yet")).toBe(true);
      expect(lowerCase.has("so")).toBe(true);
    });

    it("should contain common prepositions", () => {
      expect(lowerCase.has("of")).toBe(true);
      expect(lowerCase.has("in")).toBe(true);
      expect(lowerCase.has("on")).toBe(true);
      expect(lowerCase.has("at")).toBe(true);
      expect(lowerCase.has("to")).toBe(true);
      expect(lowerCase.has("from")).toBe(true);
      expect(lowerCase.has("with")).toBe(true);
      expect(lowerCase.has("by")).toBe(true);
      expect(lowerCase.has("under")).toBe(true);
      expect(lowerCase.has("over")).toBe(true);
    });

    it("should not contain words that should be capitalized", () => {
      expect(lowerCase.has("hello")).toBe(false);
      expect(lowerCase.has("world")).toBe(false);
      expect(lowerCase.has("title")).toBe(false);
    });

    it("should have reasonable size", () => {
      expect(lowerCase.size).toBeGreaterThan(50);
      expect(lowerCase.size).toBeLessThan(200);
    });

    it("should contain expected prepositions", () => {
      const expectedPrepositions = [
        "about",
        "above",
        "across",
        "after",
        "against",
        "along",
        "among",
        "around",
        "before",
        "behind",
        "below",
        "beneath",
        "beside",
        "between",
        "beyond",
        "during",
        "except",
        "inside",
        "into",
        "near",
        "onto",
        "through",
        "toward",
        "towards",
        "underneath",
        "until",
        "upon",
        "versus",
        "via",
        "within",
        "without",
      ];

      expectedPrepositions.forEach((prep) => {
        expect(lowerCase.has(prep)).toBe(true);
      });
    });
  });
});
