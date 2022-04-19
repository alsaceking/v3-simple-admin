import { createRouter, createWebHashHistory } from 'vue-router'
import { routes, dynamicRoutes } from './permissionRouterMap.js'
import myStorage from '@/assets/js/myStorage.js'
import { USER_INFO } from '@/assets/js/constant.js'
import { computed } from 'vue'
import store from '@/store'

const userInfo = computed(() => store.state.userInfo)
// const userInfo = myStorage.getLocalData(USER_INFO, null) ? myStorage.getLocalData(USER_INFO).content : null

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | yuxi`
  // const token = myStorage.getLocalData(USER_INFO.content)
  if (to.path !== '/login' && !userInfo.value) next({ name: 'login' })
  else if (userInfo.value) {
    const menuName = userInfo.value.menuName
    const allow_routes = dynamicRoutes.filter((route) => { //过滤允许访问的路由
      return menuName.includes(route.name)
    })
    allow_routes.forEach((route) => { // 将允许访问的路由动态添加到路由栈中
      router.addRoute('home', route)
    })
    next()
  } else next()
})

export default router
