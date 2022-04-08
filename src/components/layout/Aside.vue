<template>
  <div class="aside" :class="{ 'aside-collapse': isCollapse }">
    <div class="log-wrapper">
      <img class="log" src="../../assets/images/logo.png" />
      <div class="text">yuxiAdmin</div>
    </div>
    <el-menu
      :default-active="onRoutes"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#303133"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in menus">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <el-icon>
                <component :is="Icons[item.icon]"></component>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.title">{{ subItem.title }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <el-icon>
              <component :is="Icons[item.icon]"></component>
            </el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import Icons from '@/plugins/element-icon.js'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const menus = [
  {
    icon: "Odometer",
    index: "/dashboard",
    title: "仪表盘",
    subs: [
      {
        index: "/workplace",
        title: "工作台"
      },
      {
        index: "/analysis",
        title: "分析页"
      }
    ]
  },
  {
    icon: "SetUp",
    index: "/system",
    title: "系统管理",
    subs: [
      {
        index: "/role-list",
        title: "角色管理"
      },
      {
        index: "/permission",
        title: "权限管理"
      }
    ]
  },
  {
    icon: "Edit",
    index: "/forms",
    title: "表单页",
    subs: [
      {
        index: "/basic-form",
        title: "基础表单"
      },
      {
        index: "/advance-form",
        title: "进阶表单"
      }
    ]
  },
  {
    icon: "Grid",
    index: "/list",
    title: "列表页",
    subs: [
      {
        index: "/basic-list",
        title: "标准列表"
      },
      {
        index: "/card-list",
        title: "卡片列表"
      },
      {
        index: "/table",
        title: "表格",
        subs: [
          {
            index: "/base-table",
            title: "基础表格"
          }
        ]
      }
    ]
  }
]


const route = useRoute()
const onRoutes = computed(() => {
  return route.path
})

const store = useStore()
const isCollapse = computed(() => store.state.collapse)

</script>

<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  border-right: 1px solid @color-title;
}
.el-menu-vertical-demo {
  border-right: 1px solid @color-title;
}
.aside {
  width: 200px;
  height: 100%;
  color: @color-sub;
  background-color: @color-title;
  transition: all 0.3s;
  &.aside-collapse {
    width: 64px;
    transition: all 0.3s;
  }
  .log-wrapper {
    display: flex;
    align-items: center;
    padding: 10px;
    overflow: hidden;
    // font-size: 0;
    .log {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    .text {
      flex: 1;
      margin-left: 15px;
      font-weight: bold;
      color: @color-white;
    }
  }
}
</style>
