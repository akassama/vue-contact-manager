import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**
 import Font-awesome config
 */
 import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

/**
 import Bootstrap CSS, JS
 */
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
 import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";


 /**
import global style sheet
 */
import './style.css'


createApp(App).use(store).use(router).mount('#app')
