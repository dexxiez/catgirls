import { describe, expect, it } from "vitest";
import { prepareString } from "../src/formatter";

describe("prepareString", () => {
  describe("dash cleaning", () => {
    it("should replace dashes with spaces when enableDashCleaning is true", () => {
      expect(
        prepareString("test-case-example", { enableDashCleaning: true }),
      ).toBe("test case example");
      expect(
        prepareString("multi-word-title", { enableDashCleaning: true }),
      ).toBe("multi word title");
      expect(prepareString("single-dash", { enableDashCleaning: true })).toBe(
        "single dash",
      );
    });

    it("should preserve dashes when enableDashCleaning is false", () => {
      expect(
        prepareString("test-case-example", { enableDashCleaning: false }),
      ).toBe("test-case-example");
      expect(
        prepareString("multi-word-title", { enableDashCleaning: false }),
      ).toBe("multi-word-title");
    });

    it("should handle multiple consecutive dashes", () => {
      expect(
        prepareString("test--double--dash", { enableDashCleaning: true }),
      ).toBe("test  double  dash");
      expect(
        prepareString("test---triple---dash", { enableDashCleaning: true }),
      ).toBe("test   triple   dash");
    });

    it("should handle dashes at beginning and end", () => {
      expect(prepareString("-start-dash", { enableDashCleaning: true })).toBe(
        " start dash",
      );
      expect(prepareString("end-dash-", { enableDashCleaning: true })).toBe(
        "end dash ",
      );
      expect(prepareString("-both-ends-", { enableDashCleaning: true })).toBe(
        " both ends ",
      );
    });
  });

  describe("underscore cleaning", () => {
    it("should replace underscores with spaces when enableUnderscoreCleaning is true", () => {
      expect(
        prepareString("test_case_example", { enableUnderscoreCleaning: true }),
      ).toBe("test case example");
      expect(
        prepareString("multi_word_title", { enableUnderscoreCleaning: true }),
      ).toBe("multi word title");
      expect(
        prepareString("single_underscore", { enableUnderscoreCleaning: true }),
      ).toBe("single underscore");
    });

    it("should preserve underscores when enableUnderscoreCleaning is false", () => {
      expect(
        prepareString("test_case_example", { enableUnderscoreCleaning: false }),
      ).toBe("test_case_example");
      expect(
        prepareString("multi_word_title", { enableUnderscoreCleaning: false }),
      ).toBe("multi_word_title");
    });

    it("should handle multiple consecutive underscores", () => {
      expect(
        prepareString("test__double__underscore", {
          enableUnderscoreCleaning: true,
        }),
      ).toBe("test  double  underscore");
      expect(
        prepareString("test___triple___underscore", {
          enableUnderscoreCleaning: true,
        }),
      ).toBe("test   triple   underscore");
    });

    it("should handle underscores at beginning and end", () => {
      expect(
        prepareString("_start_underscore", { enableUnderscoreCleaning: true }),
      ).toBe(" start underscore");
      expect(
        prepareString("end_underscore_", { enableUnderscoreCleaning: true }),
      ).toBe("end underscore ");
      expect(
        prepareString("_both_ends_", { enableUnderscoreCleaning: true }),
      ).toBe(" both ends ");
    });
  });

  describe("excludeWords functionality", () => {
    it("should preserve excluded words in their original case", () => {
      const options = { excludeWords: ["API", "URL", "ID"] };
      expect(prepareString("this api should stay", options)).toBe(
        "this API should stay",
      );
      expect(prepareString("the url and id fields", options)).toBe(
        "the URL and ID fields",
      );
    });

    it("should handle case-insensitive matching", () => {
      const options = { excludeWords: ["JavaScript"] };
      expect(prepareString("javascript is great", options)).toBe(
        "JavaScript is great",
      );
      expect(prepareString("JAVASCRIPT rocks", options)).toBe(
        "JavaScript rocks",
      );
      expect(prepareString("JavaScript works", options)).toBe(
        "JavaScript works",
      );
    });

    it("should only match whole words", () => {
      const options = { excludeWords: ["test"] };
      expect(prepareString("testing is important", options)).toBe(
        "testing is important",
      );
      expect(prepareString("the test case works", options)).toBe(
        "the test case works",
      );
    });

    it("should work with empty excludeWords array", () => {
      const options = { excludeWords: [] };
      expect(prepareString("normal text here", options)).toBe(
        "normal text here",
      );
    });
  });

  describe("combined options", () => {
    it("should apply both dash and underscore cleaning", () => {
      const options = {
        enableDashCleaning: true,
        enableUnderscoreCleaning: true,
      };
      expect(prepareString("test-case_example", options)).toBe(
        "test case example",
      );
      expect(prepareString("multi_word-title", options)).toBe(
        "multi word title",
      );
    });

    it("should apply cleaning and preserve excluded words", () => {
      const options = {
        enableDashCleaning: true,
        enableUnderscoreCleaning: true,
        excludeWords: ["API"],
      };
      expect(prepareString("test-api_endpoint", options)).toBe(
        "test API endpoint",
      );
      expect(prepareString("the_api-gateway", options)).toBe("the API gateway");
    });

    it("should disable both cleaning options", () => {
      const options = {
        enableDashCleaning: false,
        enableUnderscoreCleaning: false,
      };
      expect(prepareString("test-case_example", options)).toBe(
        "test-case_example",
      );
    });

    it("should work with mixed cleaning options", () => {
      expect(
        prepareString("test-case_example", {
          enableDashCleaning: true,
          enableUnderscoreCleaning: false,
        }),
      ).toBe("test case_example");
      expect(
        prepareString("test-case_example", {
          enableDashCleaning: false,
          enableUnderscoreCleaning: true,
        }),
      ).toBe("test-case example");
    });
  });

  describe("edge cases", () => {
    it("should handle empty string", () => {
      expect(prepareString("", { enableDashCleaning: true })).toBe("");
      expect(prepareString("", { enableUnderscoreCleaning: true })).toBe("");
    });

    it("should handle whitespace-only strings", () => {
      expect(prepareString("   ", { enableDashCleaning: true })).toBe("   ");
      expect(prepareString("\t\n", { enableUnderscoreCleaning: true })).toBe(
        "\t\n",
      );
    });

    it("should work without options (should use undefined behavior)", () => {
      expect(prepareString("test-case_example")).toBe("test-case_example");
    });

    it("should handle strings with only dashes and underscores", () => {
      expect(prepareString("---", { enableDashCleaning: true })).toBe("   ");
      expect(prepareString("___", { enableUnderscoreCleaning: true })).toBe(
        "   ",
      );
      expect(
        prepareString("-_-", {
          enableDashCleaning: true,
          enableUnderscoreCleaning: true,
        }),
      ).toBe("   ");
    });

    it("should handle mixed special characters", () => {
      const options = {
        enableDashCleaning: true,
        enableUnderscoreCleaning: true,
      };
      expect(prepareString("test-case@domain_name.com", options)).toBe(
        "test case@domain name.com",
      );
      expect(prepareString("file_name-v2.txt", options)).toBe(
        "file name v2.txt",
      );
    });
  });
});
