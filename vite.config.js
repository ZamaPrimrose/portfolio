import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Make sure this line is there!
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});