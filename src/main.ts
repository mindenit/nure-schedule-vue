import './assets/main.scss'

import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'

import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query'
import { persistQueryClient } from '@tanstack/query-persist-client-core'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

const vueQueryOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        gcTime: 24 * 60 * 60 * 1000,
        staleTime: 24 * 60 * 60 * 1000
      }
    }
  },
  clientPersister: (queryClient) => {
    return persistQueryClient({
      queryClient,
      persister: createSyncStoragePersister({ storage: localStorage })
    })
  }
}

app.use(VueQueryPlugin, vueQueryOptions)
app.mount('#app')
