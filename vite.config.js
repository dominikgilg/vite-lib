import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve("src", "index.js"),
      name: "ViteLib",
      formats: ["es", "umd"],
      fileName: (format) => `vite-lib.${format}.js`,
    },
    external: ["react", "react-dom", "@shopify/hydrogen"],
    output: {
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
  },
});
