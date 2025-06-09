import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import AutoImportPlugin from './vite/plugins/auto-import'
import ComponentsPlugin from './vite/plugins/components'
import IconsPlugin from './vite/plugins/icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImportPlugin(),
    ComponentsPlugin(),
    tailwindcss(),
    IconsPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
