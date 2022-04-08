<template>
  <div class="header">
    <div class="header-top">
      <div class="collapse-icon" @click="collapseChage">
        <el-icon :size="28" v-show="!collapse">
          <Fold />
        </el-icon>
        <el-icon :size="28" v-show="collapse">
          <Expand />
        </el-icon>
      </div>
      <div style="flex: 1 1 0%;"></div>
      <div class="right-menu">
        <span class="menu-item">
          <el-badge :value="13" style="height: 50%;">
            <el-icon :size="24" style="vertical-align: top">
              <Bell />
            </el-icon>
          </el-badge>
        </span>
        <span class="menu-item">Jacob King</span>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="el-dropdown" trigger="click" @command="handleCommand">
          <span>
            <img class="avator" src="../../assets/images/avatar01.jpg" />
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <a href="https://github.com/alsaceking/" target="_blank">
                <el-dropdown-item>项目仓库</el-dropdown-item>
              </a>
              <el-dropdown-item command="user">个人中心</el-dropdown-item>
              <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <Tags />
  </div>
</template>

<script setup>
import { Fold, Expand, Bell, ArrowDown } from '@element-plus/icons-vue'
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
import Tags from './Tags.vue'

const store = useStore()
const collapse = computed(() => store.state.collapse)
// 侧边栏折叠
const collapseChage = () => {
  store.commit('handleCollapse', !collapse.value)
}

onMounted(() => {
  if (document.body.clientWidth < 1000) {
    collapseChage()
  }
})

// 处理用户操作
const handleCommand = (cmd) => {
  console.log(cmd)
}

</script>

<style scoped lang="less">
.header {
  height: 88px;
  width: 100%;
  background-color: @color-background;
  .header-top {
    display: flex;
    align-items: center;
    height: 47px;
    padding: 0 16px;
    border-bottom: 1px solid @color-border;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    .collapse-icon {
      width: 45px;
      text-align: center;
      cursor: pointer;
    }
    .right-menu {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
      text-align: right;
      .menu-item {
        display: inline-block;
        height: 48px;
        line-height: 48px;
        padding: 0 12px;
        vertical-align: top;
        cursor: pointer;
        font-size: @fontsize-medium;
      }
      .el-dropdown {
        cursor: pointer;
      }
      .avator {
        width: 35px;
        height: 35px;
        border-radius: 8px;
        vertical-align: baseline;
      }
    }
  }
}
</style>
