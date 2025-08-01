import { describe, expect, it } from "vitest";
import formatBetter from "../src/index";

describe("formatBetter", () => {
  describe("basic title case formatting", () => {
    it("should capitalize the first letter of each word", () => {
      expect(formatBetter("hello world")).toBe("Hello World");
      expect(formatBetter("the quick brown fox")).toBe("The Quick Brown Fox");
    });

    it("should handle single words", () => {
      expect(formatBetter("hello")).toBe("Hello");
      expect(formatBetter("HELLO")).toBe("Hello");
      expect(formatBetter("hELLo")).toBe("Hello");
    });

    it("should handle empty strings", () => {
      expect(formatBetter("")).toBe("");
    });

    it("should handle strings with only whitespace", () => {
      expect(formatBetter("   ")).toBe("   ");
      expect(formatBetter("\n\t")).toBe("\n\t");
    });
  });

  describe("articles, conjunctions, and prepositions", () => {
    it("should keep articles lowercase (except at start)", () => {
      expect(formatBetter("a tale of two cities")).toBe("A Tale of Two Cities");
      expect(formatBetter("the lord of the rings")).toBe(
        "The Lord of the Rings",
      );
      expect(formatBetter("an apple a day")).toBe("An Apple a Day");
    });

    it("should keep conjunctions lowercase (except at start)", () => {
      expect(formatBetter("fast and furious")).toBe("Fast and Furious");
      expect(formatBetter("pride and prejudice")).toBe("Pride and Prejudice");
      expect(formatBetter("for better or worse")).toBe("For Better or Worse");
      expect(formatBetter("now or never")).toBe("Now or Never");
    });

    it("should keep prepositions lowercase (except at start)", () => {
      expect(formatBetter("lord of the rings")).toBe("Lord of the Rings");
      expect(formatBetter("journey to the center")).toBe(
        "Journey to the Center",
      );
      expect(formatBetter("under the sea")).toBe("Under the Sea");
      expect(formatBetter("over the rainbow")).toBe("Over the Rainbow");
    });

    it("should capitalize small words at the end of title", () => {
      expect(formatBetter("something to live for")).toBe(
        "Something to Live For",
      );
      expect(formatBetter("what dreams may come to")).toBe(
        "What Dreams May Come To",
      );
    });
  });

  describe("punctuation handling", () => {
    it("should handle words after periods", () => {
      expect(formatBetter("mr. smith goes to washington")).toBe(
        "Mr. Smith Goes to Washington",
      );
      expect(formatBetter("i.e. this is a test")).toBe("I.e. This Is a Test");
    });

    it("should handle words after colons", () => {
      expect(formatBetter("title: subtitle here")).toBe("Title: Subtitle Here");
      expect(formatBetter("note: this is important")).toBe(
        "Note: This Is Important",
      );
    });

    it("should handle words after semicolons", () => {
      expect(formatBetter("first part; second part")).toBe(
        "First Part; Second Part",
      );
    });

    it("should handle words after exclamation marks", () => {
      expect(formatBetter("wow! amazing stuff")).toBe("Wow! Amazing Stuff");
    });

    it("should handle words after question marks", () => {
      expect(formatBetter("who? what when where")).toBe("Who? What When Where");
    });

    it("should handle words after quotation marks", () => {
      expect(formatBetter('he said "hello world"')).toBe(
        'He Said "Hello World"',
      );
      expect(formatBetter("she said 'goodbye now'")).toBe(
        "She Said 'Goodbye Now'",
      );
    });

    it("should handle parentheses correctly", () => {
      expect(formatBetter("title (with parentheses)")).toBe(
        "Title (With Parentheses)",
      );
      expect(formatBetter("(starting with paren) title")).toBe(
        "(starting with Paren) title",
      );
    });
  });

  describe("apostrophes and contractions", () => {
    it("should handle contractions properly", () => {
      expect(formatBetter("don't stop believing")).toBe("Don't Stop Believing");
      expect(formatBetter("it's a wonderful life")).toBe(
        "It's a Wonderful Life",
      );
      expect(formatBetter("can't buy me love")).toBe("Can't Buy Me Love");
    });

    it("should handle possessives", () => {
      expect(formatBetter("john's amazing adventure")).toBe(
        "John's Amazing Adventure",
      );
      expect(formatBetter("the dog's best friend")).toBe(
        "The Dog's Best Friend",
      );
    });
  });

  describe("options", () => {
    it("should respect excludeWords option", () => {
      const options = { excludeWords: ["custom", "special"] };
      expect(formatBetter("this custom word stays", options)).toBe(
        "This custom Word Stays",
      );
      expect(formatBetter("another special case here", options)).toBe(
        "Another special Case Here",
      );
    });

    it("should work without options", () => {
      expect(formatBetter("simple test case")).toBe("Simple Test Case");
    });

    it("should work with empty excludeWords array", () => {
      const options = { excludeWords: [] };
      expect(formatBetter("normal title case", options)).toBe(
        "Normal Title Case",
      );
    });
  });

  describe("edge cases", () => {
    it("should handle multiple spaces", () => {
      expect(formatBetter("hello    world")).toBe("Hello    World");
      expect(formatBetter("  spaced   out  words  ")).toBe(
        "  Spaced   Out  Words  ",
      );
    });

    it("should handle mixed case input", () => {
      expect(formatBetter("tHiS iS wEiRd CaSiNg")).toBe("This Is Weird Casing");
      expect(formatBetter("SHOUTING INTO the VOID")).toBe(
        "Shouting into the Void",
      );
    });

    it("should handle numbers and special characters", () => {
      expect(formatBetter("chapter 1 and 2")).toBe("Chapter 1 and 2");
      expect(formatBetter("test-case with dashes")).toBe(
        "Test Case with Dashes",
      );
      expect(formatBetter("email@domain.com format")).toBe(
        "Email@domain.com Format",
      );
    });

    it("should handle unicode characters", () => {
      expect(formatBetter("café and naïve")).toBe("Café and Naïve");
      expect(formatBetter("résumé writing tips")).toBe("Résumé Writing Tips");
    });
  });
});
