// vite.config.ts
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'file:///D:/www/nure-schedule-vue/node_modules/.pnpm/vite@5.0.11_@types+node@18.19.6_sass@1.69.7/node_modules/vite/dist/node/index.js'
import vue from 'file:///D:/www/nure-schedule-vue/node_modules/.pnpm/@vitejs+plugin-vue@4.6.2_vite@5.0.11_vue@3.4.10/node_modules/@vitejs/plugin-vue/dist/index.mjs'
import vueJsx from 'file:///D:/www/nure-schedule-vue/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.0.11_vue@3.4.10/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs'
import svgLoader from 'file:///D:/www/nure-schedule-vue/node_modules/.pnpm/vite-svg-loader@5.1.0_vue@3.4.10/node_modules/vite-svg-loader/index.js'
import { VitePWA } from 'file:///D:/www/nure-schedule-vue/node_modules/.pnpm/vite-plugin-pwa@0.17.4_vite@5.0.11_workbox-build@7.0.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js'
var __vite_injected_original_import_meta_url = 'file:///D:/www/nure-schedule-vue/vite.config.ts'
var pwaOptions = {
  srcDir: 'src',
  filename: 'sw.ts',
  base: '/',
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
    globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest,json}']
    // runtimeCaching: [
    //   {
    //     urlPattern: ({ url }) => {
    //       return url.pathname.includes('api')
    //     },
    //     handler: 'NetworkFirst' as const,
    //     options: {
    //       cacheName: 'api-cache',
    //       expiration: {
    //         maxEntries: 10,
    //         maxAgeSeconds: 60 * 60 // 1 hour
    //       },
    //       cacheableResponse: {
    //         statuses: [0, 200]
    //       }
    //     }
    //   }
    // ]
  },
  devOptions: {
    enabled: process.env.NODE_ENV === 'development'
  }
}
var vite_config_default = defineConfig({
  plugins: [vue(), vueJsx(), svgLoader(), VitePWA(pwaOptions)],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', __vite_injected_original_import_meta_url))
    }
  }
})
export { vite_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3d3dcXFxcbnVyZS1zY2hlZHVsZS12dWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHd3d1xcXFxudXJlLXNjaGVkdWxlLXZ1ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd3d3L251cmUtc2NoZWR1bGUtdnVlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5pbXBvcnQgc3ZnTG9hZGVyIGZyb20gJ3ZpdGUtc3ZnLWxvYWRlcidcclxuXHJcbmltcG9ydCB7IFZpdGVQV0EsIFZpdGVQV0FPcHRpb25zIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xyXG5cclxuY29uc3QgcHdhT3B0aW9uczogUGFydGlhbDxWaXRlUFdBT3B0aW9ucz4gPSB7XHJcbiAgc3JjRGlyOiAnc3JjJyxcclxuICBmaWxlbmFtZTogJ3N3LnRzJyxcclxuICBiYXNlOiAnLycsXHJcbiAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXHJcbiAgaW5qZWN0UmVnaXN0ZXI6ICdpbmxpbmUnLFxyXG4gIHN0cmF0ZWdpZXM6ICdnZW5lcmF0ZVNXJyxcclxuICBvdXREaXI6ICdkaXN0JyxcclxuXHJcbiAgaW5jbHVkZUFzc2V0czogWydpY29ucy8qJ10sXHJcbiAgbWFuaWZlc3Q6IHtcclxuICAgIHNob3J0X25hbWU6ICdTY2hlZHVsZScsXHJcbiAgICBuYW1lOiAnTnVyZSBTY2hlZHVsZScsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1NjaGVkdWxlIGFwcCBmb3IgTlVSRSB1bml2ZXJzaXR5JyxcclxuICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcclxuICAgIGJhY2tncm91bmRfY29sb3I6ICcjRkZGRkZGJyxcclxuICAgIHRoZW1lX2NvbG9yOiAnI2Y3ZmVmZicsXHJcbiAgICBzdGFydF91cmw6ICcvJyxcclxuICAgIGljb25zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6ICdpY29ucy9wd2EtMTkyeDE5Mi5wbmcnLFxyXG4gICAgICAgIHNpemVzOiAnMTkyeDE5MicsXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgcHVycG9zZTogJ2FueSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogJ2ljb25zL3B3YS01MTJ4NTEyLnBuZycsXHJcbiAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICBwdXJwb3NlOiAnYW55J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiAnaWNvbnMvcHdhLW1hc2thYmxlLTE5MngxOTIucG5nJyxcclxuICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgICAgIHB1cnBvc2U6ICdtYXNrYWJsZSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogJ2ljb25zL3B3YS1tYXNrYWJsZS01MTJ4NTEyLnBuZycsXHJcbiAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG5cclxuICB3b3JrYm94OiB7XHJcbiAgICBnbG9iRGlyZWN0b3J5OiAnZGlzdCcsXHJcbiAgICBnbG9iUGF0dGVybnM6IFsnKiovKi57anMsY3NzLGh0bWwsaWNvLHBuZyxzdmcsd2VibWFuaWZlc3QsanNvbn0nXVxyXG4gICAgLy8gcnVudGltZUNhY2hpbmc6IFtcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIHVybFBhdHRlcm46ICh7IHVybCB9KSA9PiB7XHJcbiAgICAvLyAgICAgICByZXR1cm4gdXJsLnBhdGhuYW1lLmluY2x1ZGVzKCdhcGknKVxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgaGFuZGxlcjogJ05ldHdvcmtGaXJzdCcgYXMgY29uc3QsXHJcbiAgICAvLyAgICAgb3B0aW9uczoge1xyXG4gICAgLy8gICAgICAgY2FjaGVOYW1lOiAnYXBpLWNhY2hlJyxcclxuICAgIC8vICAgICAgIGV4cGlyYXRpb246IHtcclxuICAgIC8vICAgICAgICAgbWF4RW50cmllczogMTAsXHJcbiAgICAvLyAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgLy8gMSBob3VyXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgICAgY2FjaGVhYmxlUmVzcG9uc2U6IHtcclxuICAgIC8vICAgICAgICAgc3RhdHVzZXM6IFswLCAyMDBdXHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyBdXHJcbiAgfSxcclxuXHJcbiAgZGV2T3B0aW9uczoge1xyXG4gICAgZW5hYmxlZDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcclxuICB9XHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3Z1ZSgpLCB2dWVKc3goKSwgc3ZnTG9hZGVyKCksIFZpdGVQV0EocHdhT3B0aW9ucyldLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdRLFNBQVMsZUFBZSxXQUFXO0FBRW5TLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxlQUFlO0FBRXRCLFNBQVMsZUFBK0I7QUFQcUgsSUFBTSwyQ0FBMkM7QUFTOU0sSUFBTSxhQUFzQztBQUFBLEVBQzFDLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxFQUNWLE1BQU07QUFBQSxFQUNOLGNBQWM7QUFBQSxFQUNkLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxFQUNaLFFBQVE7QUFBQSxFQUVSLGVBQWUsQ0FBQyxTQUFTO0FBQUEsRUFDekIsVUFBVTtBQUFBLElBQ1IsWUFBWTtBQUFBLElBQ1osTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBQ1Qsa0JBQWtCO0FBQUEsSUFDbEIsYUFBYTtBQUFBLElBQ2IsV0FBVztBQUFBLElBQ1gsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLGNBQWMsQ0FBQyxpREFBaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQW1CbEU7QUFBQSxFQUVBLFlBQVk7QUFBQSxJQUNWLFNBQVMsUUFBUSxJQUFJLGFBQWE7QUFBQSxFQUNwQztBQUNGO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLEdBQUcsVUFBVSxHQUFHLFFBQVEsVUFBVSxDQUFDO0FBQUEsRUFDM0QsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
