// import {fileURLToPath, URL} from 'node:url'

// import {defineConfig} from 'vite'
// import vue from '@vitejs/plugin-vue'
// // import vueDevTools from 'vite-plugin-vue-devtools'

// // https://vite.dev/config/
// export default defineConfig({
//     server: {
//         host: '0.0.0.0',
//     },
//     plugins: [
//         vue(),
//         // vueDevTools(),
//     ],
//     resolve: {
//         alias: {
//             '@': fileURLToPath(new URL('./src', import.meta.url))
//         },
//     },
// })

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    // *** 新增的代理配置开始 ***
    proxy: {
      // 规则：将所有以 '/api' 开头的请求，转发到目标服务器
      '/api': {
        target: 'http://localhost:9200', // 你的后端服务器地址
        changeOrigin: true, // 修改请求头中的Host，有些服务器会校验这个
        // 如果你的后端接口路径就是 /api/v1/...，那么不需要重写。
        // 如果后端接口是 /v1/...（没有/api前缀），需要去掉请求路径中的 `/api`
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 可选：如果你需要连接后端的WebSocket (例如 ws://localhost:9100)
      '/ws': {
        target: 'ws://localhost:9100',
        ws: true, // 启用WebSocket代理
      },
    },
    // *** 新增的代理配置结束 ***
  },
  plugins: [
    vue(),
    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})