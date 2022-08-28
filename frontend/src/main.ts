import {createApp} from 'vue'
import App from './App.vue'
// global imports
import './assets/reset.css'
import 'milligram'

// store
import {createPinia} from 'pinia';
//router
import router from "./router";
// adds the v-touch directive https://www.npmjs.com/package/vue3-touch-events
// @ts-ignore
import Vue3TouchEvents from 'vue3-touch-events';
// https://troisjs.github.io
import {TroisJSVuePlugin} from 'troisjs';

const app = createApp(App)

app.use(createPinia())

app.use(router)

app.use(Vue3TouchEvents, {disableClick: true});

app.use(TroisJSVuePlugin);

// init app
app.mount('#app')
