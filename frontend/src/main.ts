import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/main.css';

axios.defaults.baseURL = 'http://127.0.0.1:8000'

const app = createApp(App)

app.use(createPinia())
app.use(router, axios)

app.mount('#app')
