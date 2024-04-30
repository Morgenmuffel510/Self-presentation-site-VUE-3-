import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import {fileURLToPath, URL} from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueRouter({routesFolder: 'src/pages'}), vue()],
  ssr: {
    noExternal: /./,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }},
  server: {
    port: 4000,
    host: "0.0.0.0",
  }
})

