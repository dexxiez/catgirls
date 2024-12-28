/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";
import { createServerEnv, EnvValidationError } from "../src";

describe("createServerEnv", () => {
  const originalEnv = process.env;
  const originalWindow = global.window as typeof global.window;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
    (global as any).window = undefined;
  });

  afterEach(() => {
    process.env = originalEnv;
    global.window = originalWindow;
  });

  it("throws when accessed from client side", () => {
    global.window = {} as Window & typeof globalThis;
    expect(() =>
      createServerEnv({
        TEST: { schema: z.string() },
      }),
    ).toThrow("Server env accessed on client side!");
  });

  it("validates required environment variables", () => {
    process.env.REQUIRED = "value";
    const env = createServerEnv({
      REQUIRED: { schema: z.string() },
    });
    expect(env.REQUIRED).toBe("value");
  });

  it("throws for missing required variables", () => {
    expect(() =>
      createServerEnv({
        MISSING: { schema: z.string() },
      }),
    ).toThrow(EnvValidationError);
  });

  it("allows optional variables", () => {
    const env = createServerEnv({
      OPTIONAL: { schema: z.string().optional() },
    });
    expect(env.OPTIONAL).toBeUndefined();
  });

  it("transforms values before validation", () => {
    process.env.NUMBER = "42";
    const env = createServerEnv({
      NUMBER: {
        schema: z.number(),
        transform: (val) => parseInt(val, 10),
      },
    });
    expect(env.NUMBER).toBe(42);
  });

  it("validates transformed values", () => {
    process.env.INVALID = "not-a-number";
    expect(() =>
      createServerEnv({
        INVALID: {
          schema: z.number(),
          transform: (val) => parseInt(val, 10),
        },
      }),
    ).toThrow(EnvValidationError);
  });

  it("provides detailed error messages", () => {
    process.env.URL = "not-a-url";
    try {
      createServerEnv({
        URL: { schema: z.string().url() },
      });
      fail("Should have thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(EnvValidationError);
      if (error instanceof EnvValidationError) {
        expect(error.errors).toHaveLength(1);
        expect(error.errors[0]).toMatchObject({
          key: "URL",
          message: expect.stringContaining("Invalid value for URL"),
        });
      }
    }
  });

  it("handles multiple validation errors", () => {
    try {
      createServerEnv({
        MISSING: { schema: z.string() },
        INVALID_URL: { schema: z.string().url() },
      });
      fail("Should have thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(EnvValidationError);
      if (error instanceof EnvValidationError) {
        expect(error.errors).toHaveLength(2);
      }
    }
  });
});
