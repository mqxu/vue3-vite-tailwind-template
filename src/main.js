import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

import './styles/index.css'

app.use(router)

app.mount('#app')
