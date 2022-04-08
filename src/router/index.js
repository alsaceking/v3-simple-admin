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
        path: "/analysis",
        name: "analysis",
        meta: {
          title: '分析页'
        },
        component: () => import( /* webpackChunkName: "table" */ "@/views/Analysis.vue")
      },
      {
        path: "/permission",
        name: "permission",
        meta: {
          title: '权限管理'
        },
        component: () => import( /* webpackChunkName: "table" */ "@/views/Permission.vue")
      },
      {
        path: "/role-list",
        name: "role-list",
        meta: {
          title: '角色管理'
        },
        component: () => import( /* webpackChunkName: "role" */ "@/views/RoleList.vue")
      },
      {
        path: "/basic-form",
        name: "basic-form",
        meta: {
          title: '基础表单'
        },
        component: () => import( /* webpackChunkName: "table" */ "@/views/BasicForm.vue")
      },
      {
        path: "/advance-form",
        name: "advance-form",
        meta: {
          title: '进阶表单'
        },
        component: () => import( /* webpackChunkName: "table" */ "@/views/AdvanceForm.vue")
      },
      {
        path: "/basic-list",
        name: "basic-list",
        meta: {
          title: '基础列表'
        },
        component: () => import( /* webpackChunkName: "table" */ "@/views/BasicList.vue")
      },
      {
        path: "/card-list",
        name: "card-list",
        meta: {
          title: '卡片列表'
        },
        component: () => import( /* webpackChunkName: "table" */ "@/views/CardList.vue")
      },
      {
        path: "/base-table",
        name: "base-table",
        meta: {
          title: '基础表格'
        },
        component: () => import( /* webpackChunkName: "table" */ "@/views/BaseTable.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
