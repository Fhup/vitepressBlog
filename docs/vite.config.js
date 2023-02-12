// docs/vite.config.js
import { SimpleSearch } from "vitepress-plugin-simple-search";
import { defineConfig } from "vite";

// 搜索插件
export default defineConfig({
  plugins: [SimpleSearch()],
});
