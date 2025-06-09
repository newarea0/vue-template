import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icon from 'unplugin-icons/vite'

export default function IconsPlugin() {
  return Icon({
    compiler: 'vue3',
    autoInstall: true,
    customCollections: {
      custom: FileSystemIconLoader('./src/assets/icons'),
    },
  })
}
