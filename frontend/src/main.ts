import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// global imports
import './assets/reset.css'
import 'milligram'

// store
import { createPinia } from 'pinia';
app.use(createPinia())

//router
import router from "./router";
app.use(router)

// init app
app.mount('#app')
