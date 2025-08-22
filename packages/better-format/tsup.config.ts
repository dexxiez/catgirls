import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["src/index.ts", "src/angular.ts"],
  format: ["cjs", "esm"],
  dts: {
    compilerOptions: {
      composite: false,
      incremental: false,
      tsBuildInfoFile: null,
    },
  },
  minify: true,
  sourcemap: true,
  splitting: true,
  treeshake: true,
  clean: true,
  external: ["@angular/core"],
});
