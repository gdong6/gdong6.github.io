import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/main.css'
import './assets/styles/topbar.css'
import './assets/styles/bottombar.css'
import './assets/styles/home.css'
import './assets/styles/project.css'
import './assets/styles/thought.css'
import './assets/styles/link.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
