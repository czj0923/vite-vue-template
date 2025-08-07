import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import Components from 'unplugin-vue-components/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [VueRouter({}), vue(), Components({})],
  envDir: 'environment',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  define: {
    APP_VERSION: JSON.stringify('1.0.0')
  },
  server: {
    // 局域网服务
    host: true,
    port: 3000,
    hmr: true
  }
});
