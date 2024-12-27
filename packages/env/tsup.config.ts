import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: {
    compilerOptions: {
      composite: false,
      incremental: false,
      tsBuildInfoFile: null,
    },
  },
  minify: true,
  splitting: true,
  clean: true,
  external: ["zod"],
});
