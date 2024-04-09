// import './assets/main.css'
import { useUserStore } from './stores/user'
import axios from 'axios'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
// import HTTP from './http-client'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

axios.defaults.baseURL="http://localhost:8000"
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.withXSRFToken = true
axios.defaults.withCredentials = true



const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
app.use(createPinia())




app.use(pinia)
app.use(router)
// app.use(HTTP)
app.mount('#app')
// const userStore = useUserStore()