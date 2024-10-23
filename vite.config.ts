import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { AutoImportPlugin } from './vite/plugins/auto-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImportPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
