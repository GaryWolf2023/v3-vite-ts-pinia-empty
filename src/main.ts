import { createApp } from 'vue'
import './style.css'
import 'vue-global-api'
import App from './App.vue'
import store from './store'
import router from '@/router';
import i18n from '@/i18n/index';

const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(store)
app.mount('#app')
