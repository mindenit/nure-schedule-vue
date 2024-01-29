import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'

import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const pwaOptions: Partial<VitePWAOptions> = {
  // srcDir: 'src',
  // filename: 'sw.ts',
  base: './',
  registerType: 'autoUpdate',
  injectRegister: 'inline',
  strategies: 'generateSW',
  outDir: 'dist',

  includeAssets: ['icons/*'],
  manifest: {
    short_name: 'Schedule',
    name: 'Nure Schedule',
    description: 'Schedule app for NURE university',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#f7feff',
    start_url: '/',
    icons: [
      {
        src: 'icons/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: 'icons/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: 'icons/pwa-maskable-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: 'icons/pwa-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ]
  },

  workbox: {
    globDirectory: 'dist',
    globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest,json}'],
    runtimeCaching: [
      // {
      //   urlPattern: ({ url }) => {
      //     return url.pathname.includes('api')
      //   },
      //   handler: 'NetworkFirst' as const,
      //   options: {
      //     cacheName: 'api-cache',
      //     expiration: {
      //       maxEntries: 10,
      //       maxAgeSeconds: 60 * 60 // 1 hour
      //     },
      //     cacheableResponse: {
      //       statuses: [0, 200]
      //     }
      //   }
      // }
      {
        urlPattern: ({ url }) => {
          return url.pathname.includes('js') || url.pathname.includes('css')
        },
        handler: 'NetworkFirst' as const,
        options: {
          cacheName: 'app-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 // 1 hour
          },
          cacheableResponse: {
            statuses: [0, 200, 304]
          }
        }
      }
    ]
  },

  devOptions: {
    enabled: process.env.NODE_ENV === 'development'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), svgLoader(), VitePWA(pwaOptions)],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
