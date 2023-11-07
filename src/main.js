import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Utils from './Utils'

const app = createApp(App)

app.use(router)
app.config.globalProperties.Utils = Utils

app.mount('#app')
