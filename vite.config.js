import { resolve } from "path";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import htmlImages from "vite-plugin-html-images";
import handlebars from "vite-plugin-handlebars";

module.exports = defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        homepage: resolve(__dirname, "src/index.html"),
        theCafe: resolve(__dirname, "src/das-cafe/index.html"),
      },
    },
  },
  plugins: [
    imagetools(),
    htmlImages(),
    handlebars({ partialDirectory: resolve(__dirname, "src/components") }),
  ],
});
