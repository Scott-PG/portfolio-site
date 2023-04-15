import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";
import stylelint from "vite-plugin-stylelint";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [
      react(),
      tsconfigPaths(),
      svgr({ svgrOptions: { icon: true } }),
      eslint(),
      stylelint(),
    ],
  };
});
