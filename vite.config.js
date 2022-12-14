import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import path from "path";

console.log(__filename, __dirname, import.meta.url);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve("src", "index.js"),
      name: "vite-lib",
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
