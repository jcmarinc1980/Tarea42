import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import ConversionDistancia from './components/ConversionDistancia.vue'
import ConversionTemperatura from './components/ConversionTemperatura.vue'
import ConversionPeso from './components/ConversionPeso.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/distancia', component: ConversionDistancia },
  { path: '/temperatura', component: ConversionTemperatura },
  { path: '/peso', component: ConversionPeso }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
