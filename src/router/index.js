import { createRouter, createWebHashHistory } from 'vue-router'
import { routes, dynamicRoutes } from './permissionRouterMap.js'
import myStorage from '@/assets/js/myStorage.js'
import { USER_INFO } from '@/assets/js/constant.js'
import NProgress from "nprogress"
import "nprogress/nprogress.css"
// import { computed } from 'vue'
// import store from '@/store'

NProgress.configure({
  easing: "ease",  // 动画方式
  speed: 1000,  // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const getUserInfo = () => myStorage.getLocalData(USER_INFO, null) ? myStorage.getLocalData(USER_INFO).content : null

const addRouteDynamicRoutes = (list) => {
  const allow_routes = dynamicRoutes.filter((route) => { //过滤允许访问的路由
    return list.includes(route.name)
  })
  allow_routes.forEach((route) => { // 将允许访问的路由动态添加到路由栈中
    router.addRoute('home', route)
  })
}

// 刷新动态路由页面时的处理
if (getUserInfo()) {
  const menuName = getUserInfo().menuName
  addRouteDynamicRoutes(menuName)
}

router.beforeEach((to, from, next) => {
  NProgress.start()
  document.title = `${to.meta.title} | yuxi`
  // const userInfo = computed(() => store.state.userInfo)
  const userInfo = getUserInfo()
  if (to.path !== '/login' && !userInfo) next({ name: 'login' })
  else if (userInfo) {
    if (to.path === '/login') router.push('/')
    const menuName = userInfo.menuName
    addRouteDynamicRoutes(menuName)
    next()
  } else next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
