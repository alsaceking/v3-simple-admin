<template>
  <div class="aside" :class="{ 'aside-collapse': isCollapse }">
    <div class="log-wrapper">
      <img class="log" src="../../assets/images/logo.png" />
      <div class="text">yuxiAdmin</div>
    </div>
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#303133"
      text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
      <template v-for="item in menusList">
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
                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">{{
                  threeItem.title
                }}</el-menu-item>
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
import { ref, computed } from 'vue'
import Icons from '@/plugins/element-icon.js'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import myStorage from '@/assets/js/myStorage.js'
import { USER_INFO } from '@/assets/js/constant.js'

const store = useStore()
const isCollapse = computed(() => store.state.collapse)

// const list = computed(() => store.state.userInfo.menuList)
const userInfo = myStorage.getLocalData(USER_INFO)
const list = userInfo ? userInfo.content.menuList : []
const menusList = ref(list)

const route = useRoute()
const onRoutes = computed(() => {
  return route.path
})

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
