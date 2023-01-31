import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store/index'

import './assets/main.css'
const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(store)


app.mount('#app')

