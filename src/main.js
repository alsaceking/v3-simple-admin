import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from './plugins/element-plus'

// 引入全局样式
import '@/assets/less/index.less'

createApp(App)
  .use(element)
  .use(router)
  .use(store).mount('#app')
