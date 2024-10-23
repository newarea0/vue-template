import AutoImport from 'unplugin-auto-import/vite'

export function AutoImportPlugin() {
  return AutoImport({
    imports: ['vue', 'vue-router', 'pinia'],
    dts: 'src/types/auto-imports.d.ts',
  })
}
