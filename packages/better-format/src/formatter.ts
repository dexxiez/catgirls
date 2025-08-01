import { FormatterOptions } from "./types";

const word = "[^\\s'’\\(\\)!?;:\"-]";

export const matchRegex = new RegExp(
  `(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${word}))|(${word}))(${word}*[’']*${word}*)`,
  "g",
);

export const convertToRegExp = (specials: string[]): [RegExp, string][] =>
  specials.map((s) => [new RegExp(`\\b${s}\\b`, "gi"), s]);

export const parseMatch = (match: string): string | null => {
  const firstCharacter = match[0];

  // test first character
  if (/\s/.test(firstCharacter)) {
    // If whitespace - trim and return
    return match.slice(1);
  }
  // eslint-disable-next-line no-useless-escape
  if (/[\(\)]/.test(firstCharacter)) {
    // If parens - this shouldn't be replaced
    return null;
  }

  return match;
};

export const prepareString = (str: string, options?: FormatterOptions) => {
  // if dash cleaning is enabled, replace all dashes with spaces
  if (options?.enableDashCleaning) {
    str = str.replace(/-/g, " ");
  }
  // if underscore cleaning is enabled, replace all underscores with spaces
  if (options?.enableUnderscoreCleaning) {
    str = str.replace(/_/g, " ");
  }

  // if exclude words is provided, do not format these words
  if (options?.excludeWords) {
    options.excludeWords.forEach((word) => {
      str = str.replace(new RegExp(`\\b${word}\\b`, "gi"), word);
    });
  }

  return str;
};
