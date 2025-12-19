import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'
// Crear la instancia de la aplicación y montar el router correctamente
const app = createApp(App)
app.use(router)
app.mount('#app')
