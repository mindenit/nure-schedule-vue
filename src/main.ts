import './assets/main.scss'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { persistQueryClient } from '@tanstack/query-persist-client-core'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query'
import { createHead } from '@unhead/vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()

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
      // @ts-ignore
      queryClient,
      persister: createSyncStoragePersister({ storage: localStorage })
    })
  }
}

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(VueQueryPlugin, vueQueryOptions)
app.use(head)

app.mount('#app')
