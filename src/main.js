import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import element from './plugins/element-plus'

// 引入全局样式
import Icons from '@/plugins/element-icon.js'
import '@/assets/less/index.less'

const app = createApp(App)
app.config.globalProperties.$Icons = Icons

app
  .use(element)
  .use(store)
  .use(router)
  .mount('#app')
