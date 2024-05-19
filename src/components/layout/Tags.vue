<template>
  <div class="tags-wrapper">
    <div class="scroll-wrapper" ref="wrapperRef">
      <div class="tags-content">
        <span class="tag" :class="{ active: isActive('/workplace') }">
          <router-link class="title" to="/workplace">工作台</router-link>
        </span>
        <span
          class="tag"
          v-for="(tag, index) in tagsList"
          :key="index"
          :class="{ active: isActive(tag.path) }"
          @contextmenu.prevent.native="handleContextMenu($event, tag)"
        >
          <router-link class="title" :to="tag.path">{{ tag.title }}</router-link>
          <el-icon class="icon" :size="16" style="vertical-align: middle; margin-left: 5px" @click="closeTag(index)">
            <close />
          </el-icon>
        </span>
      </div>
    </div>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-icon :size="24" class="icon">
          <ArrowDown />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu size="small">
            <el-dropdown-item command="other">关闭其他</el-dropdown-item>
            <el-dropdown-item command="all">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { Close, ArrowDown } from '@element-plus/icons-vue'
import { watch, computed, onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

import BScroll from '@better-scroll/core'
const wrapperRef = ref(null)
const bsVal = ref(null)

onMounted(() => {
  const bs = new BScroll(wrapperRef.value, {
    scrollX: true,
    scrollY: false
  })
  bsVal.value = bs
})

const refreshBs = (bs) => {
  if (bs) {
    setTimeout(() => {
      bs.refresh()
    })
  }
}

const route = useRoute()
const router = useRouter()
const isActive = (path) => {
  return path === route.fullPath
}

const store = useStore()
const tagsList = computed(() => store.state.tagsList)

const setTags = (route) => {
  const isWorkPlace = '/workplace' === route.fullPath

  const isExist = tagsList.value.some((item) => {
    return item.path === route.fullPath
  })

  if (!isExist && !isWorkPlace) {
    if (tagsList.value.length >= 8) {
      store.commit('delTagsItem', 0)
    }
    store.commit('setTagsItem', {
      name: route.name,
      title: route.meta.title,
      path: route.fullPath
    })
    refreshBs(bsVal.value)
  }
}

setTags(route)
// onBeforeRouteUpdate((to) => {
//   setTags(to)
// })

watch(route, (nval, oval) => {
  setTags(nval)
})

const closeTag = (index) => {
  const delItem = tagsList.value[index]
  store.commit('delTagsItem', index)
  refreshBs(bsVal.value)
  const item = tagsList.value[index] ? tagsList.value[index] : tagsList.value[index - 1]
  if (item) {
    delItem.path === route.fullPath && router.push(item.path)
  } else {
    router.push('/')
  }
}

// 关闭全部标签
const closeAll = () => {
  store.commit('clearTags')
  refreshBs(bsVal.value)
  router.push('/')
}

// 关闭其他标签
const closeOther = () => {
  const curItem = tagsList.value.filter((item) => {
    return item.path === route.fullPath
  })
  store.commit('closeTagsOther', curItem)
  refreshBs(bsVal.value)
}

const handleTags = (command) => {
  command === 'other' ? closeOther() : closeAll()
}

const handleContextMenu = ($event, tag) => {
  console.log($event)
}
</script>

<style scoped lang="less">
.tags-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  line-height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: @color-background-d;
  overflow: hidden;

  .scroll-wrapper {
    flex: 1 1 0%;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    .tags-content {
      // background-color: #ccc;
      display: inline-block;
    }
  }

  .tag {
    display: inline-block;
    background-color: @color-background;
    height: 20px;
    line-height: 17px;
    padding: 6px 16px 4px;
    cursor: pointer;
    border-radius: 5px;

    .title {
      font-size: @fontsize-medium;
      color: @color-title;
      .extend-click();
    }
    &:hover {
      background-color: rgb(191, 203, 217);
    }

    .icon {
      &:hover {
        background-color: @color-background;
        border-radius: 50%;
        color: @color-theme;
      }
    }

    &.active {
      background-color: @color-theme;
      color: @color-white;

      .title {
        color: @color-white;
      }
    }

    & + .tag {
      margin-left: 5px;
    }
  }

  .tags-close-box {
    padding: 3px 5px 0 5px;
    background-color: @color-background;
    cursor: pointer;
    .el-dropdown {
      vertical-align: sub;
    }
    .icon {
      color: @color-sub;
    }
  }
}
</style>
