import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { somePlugin } from './backend/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), somePlugin],
  optimizeDeps: {
    include: ['pinyin'],
  },
})
