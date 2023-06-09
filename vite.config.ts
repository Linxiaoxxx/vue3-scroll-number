import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'vue3-scroll-number',
  plugins: [vue(), dts()],
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, 'package/index.ts'),
      name: 'ScrollNumber',
      fileName: 'scroll-number'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
