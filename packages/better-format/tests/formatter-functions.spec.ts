import { describe, expect, it } from "vitest";
import { convertToRegExp, matchRegex, parseMatch } from "../src/formatter";

describe("formatter utility functions", () => {
  describe("convertToRegExp", () => {
    it("should convert strings to word boundary regex patterns", () => {
      const specials = ["test", "word"];
      const result = convertToRegExp(specials);

      expect(result).toHaveLength(2);
      expect(result[0][0]).toBeInstanceOf(RegExp);
      expect(result[0][1]).toBe("test");
      expect(result[1][0]).toBeInstanceOf(RegExp);
      expect(result[1][1]).toBe("word");
    });

    it("should create case-insensitive global patterns", () => {
      const specials = ["Test"];
      const result = convertToRegExp(specials);
      const [pattern] = result[0];

      expect(pattern.flags).toContain("g");
      expect(pattern.flags).toContain("i");
    });

    it("should handle empty array", () => {
      const result = convertToRegExp([]);
      expect(result).toEqual([]);
    });

    it("should handle special regex characters", () => {
      const specials = ["test.word", "test+word"];
      const result = convertToRegExp(specials);

      expect(result).toHaveLength(2);
      expect(result[0][1]).toBe("test.word");
      expect(result[1][1]).toBe("test+word");
    });
  });

  describe("matchRegex", () => {
    it("should be a global regex", () => {
      expect(matchRegex.global).toBe(true);
    });

    it("should match words at the beginning of strings", () => {
      const matches = Array.from("hello world".matchAll(matchRegex));
      expect(matches.length).toBeGreaterThan(0);
    });

    it("should match words after punctuation", () => {
      const matches = Array.from("hello. world".matchAll(matchRegex));
      expect(matches.length).toBeGreaterThan(0);
    });

    it("should handle contractions", () => {
      const matches = Array.from("don't stop".matchAll(matchRegex));
      expect(matches.length).toBeGreaterThan(0);
    });
  });

  describe("parseMatch", () => {
    it("should return trimmed match for whitespace-prefixed strings", () => {
      expect(parseMatch(" hello")).toBe("hello");
      expect(parseMatch("\thello")).toBe("hello");
      expect(parseMatch("\nhello")).toBe("hello");
    });

    it("should return null for parentheses-prefixed strings", () => {
      expect(parseMatch("(hello")).toBe(null);
      expect(parseMatch(")hello")).toBe(null);
    });

    it("should return the original match for normal words", () => {
      expect(parseMatch("hello")).toBe("hello");
      expect(parseMatch("world")).toBe("world");
      expect(parseMatch("test123")).toBe("test123");
    });

    it("should handle punctuation that should be processed", () => {
      expect(parseMatch("hello")).toBe("hello");
      expect(parseMatch("!hello")).toBe("!hello");
      expect(parseMatch("?hello")).toBe("?hello");
      expect(parseMatch(":hello")).toBe(":hello");
    });

    it("should handle edge cases", () => {
      expect(parseMatch("")).toBe("");
      expect(parseMatch(" ")).toBe("");
    });
  });
});
