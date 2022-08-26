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

// adds the v-touch directive https://www.npmjs.com/package/vue3-touch-events
// @ts-ignore
import Vue3TouchEvents from 'vue3-touch-events';
app.use(Vue3TouchEvents, {disableClick: true});


// init app
app.mount('#app')
