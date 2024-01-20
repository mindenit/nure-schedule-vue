import './assets/main.scss'

import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'

import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

pinia.use(piniaPluginPersistedstate)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')
