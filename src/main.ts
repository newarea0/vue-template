import App from './App.vue'
import router from './router'

import './style/index.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')
