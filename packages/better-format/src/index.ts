import { dumbWords, lowerCase } from "./consts";
import {
  convertToRegExp,
  matchRegex,
  parseMatch,
  prepareString,
} from "./formatter";
import { FormatterOptions } from "./types";

export default (str: string, options?: FormatterOptions) => {
  // set default options if not provided
  options = {
    enableDashCleaning: true,
    enableUnderscoreCleaning: true,
    ...options,
  };

  str = prepareString(str, options);
  str = str
    .toLowerCase()
    .replace(
      matchRegex,
      (m, lead = "", forced, lower, rest, offset, string) => {
        const isLastWord = m.length + offset >= string.length;

        const parsedMatch = parseMatch(m);
        if (!parsedMatch) {
          return m;
        }
        if (!forced) {
          const fullLower = lower + rest;

          if (lowerCase.has(fullLower) && !isLastWord) {
            return parsedMatch;
          }
        }

        return lead + (lower || forced).toUpperCase() + rest;
      },
    );

  const customSpecials = options?.excludeWords || [];
  const replace = [...dumbWords, ...customSpecials];
  const replaceRegExp = convertToRegExp(replace);

  replaceRegExp.forEach(([pattern, s]) => {
    str = str.replace(pattern, s);
  });

  return str;
};
