import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js",
      formats: ["es", "umd"],
      name: "vite-lib",
      fileName: (format) => `index.${format}.js`,
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
