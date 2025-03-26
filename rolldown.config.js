import { defineConfig } from "rolldown";

export default defineConfig({
  input: "src/index.js",
  output: {
    format: "esm",
    dir: "dist",
  },
  platform: "node",
});
