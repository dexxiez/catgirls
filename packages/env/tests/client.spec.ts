import { z } from "zod";
import { createClientEnv, EnvValidationError } from "../src";

describe("createClientEnv", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("validates required environment variables with NEXT_PUBLIC_ prefix", () => {
    process.env.NEXT_PUBLIC_API_KEY = "test-key";
    const env = createClientEnv({
      API_KEY: { schema: z.string() },
    });
    expect(env.API_KEY).toBe("test-key");
  });

  it("throws for missing required variables", () => {
    expect(() =>
      createClientEnv({
        API_KEY: { schema: z.string() },
      }),
    ).toThrow("Client environment validation failed");
  });

  it("allows optional variables", () => {
    const env = createClientEnv({
      OPTIONAL: { schema: z.string().optional() },
    });
    expect(env.OPTIONAL).toBeUndefined();
  });

  it("transforms values before validation", () => {
    process.env.NEXT_PUBLIC_PORT = "3000";
    const env = createClientEnv({
      PORT: {
        schema: z.number(),
        transform: (val) => parseInt(val, 10),
      },
    });
    expect(env.PORT).toBe(3000);
  });

  it("validates transformed values", () => {
    process.env.NEXT_PUBLIC_PORT = "invalid";
    expect(() =>
      createClientEnv({
        PORT: {
          schema: z.number(),
          transform: (val) => parseInt(val, 10),
        },
      }),
    ).toThrow(EnvValidationError);
  });

  it("handles multiple validation errors", () => {
    process.env.NEXT_PUBLIC_URL = "not-a-url";
    try {
      createClientEnv({
        API_KEY: { schema: z.string() },
        URL: { schema: z.string().url() },
      });
      fail("Should have thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(EnvValidationError);
      if (error instanceof EnvValidationError) {
        expect(error.errors).toHaveLength(2);
        expect(error.errors).toEqual(
          expect.arrayContaining([
            {
              key: "API_KEY",
              message: "Missing environment variable: NEXT_PUBLIC_API_KEY",
            },
            {
              key: "URL",
              message: expect.stringContaining(
                "Invalid value for NEXT_PUBLIC_URL",
              ),
            },
          ]),
        );
      }
    }
  });
});
