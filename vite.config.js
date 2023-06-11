import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  server: {
    port: "8080",
    host: "localhost"
  },
  preview: {
    port: "8080",
    host: "localhost"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      vue: "vue/dist/vue.esm-bundler.js"
    }
  },
  plugins: [vue()],
  envPrefix: "ENV_"
});
