import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  sourcemap: true,
  dts: true,
  tsconfig: "src/tsconfig.json",
  clean: true,
});
