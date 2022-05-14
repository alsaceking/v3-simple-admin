import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/v3-simple-admin/',
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/assets/less/config.less')}";`
        },
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  server: {
    host: '0.0.0.0'
  },
  plugins: [vue()]
})
