import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/workplace'
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: "/workplace",
        name: "workplace",
        meta: {
          title: '工作台'
        },
        component: () => import( /* webpackChunkName: "dashboard" */ "@/views/WorkPlace.vue")
      },
      {
        path: "/base-table",
        name: "basetable",
        meta: {
          title: '基础表格'
        },
        component: () => import( /* webpackChunkName: "table" */ "@/views/BaseTable.vue")
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
