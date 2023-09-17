<template>
  <div class="tags-wrapper">
    <span class="tag" :class="{ active: isActive('/workplace') }">
      <router-link class="title" to="/workplace">工作台</router-link>
    </span>
    <span
      class="tag"
      v-for="(tag, index) in tagsList"
      :key="index"
      :class="{ active: isActive(tag.path) }"
    >
      <router-link class="title" :to="tag.path">{{ tag.title }}</router-link>
      <el-icon
        class="icon"
        :size="16"
        style="vertical-align: middle; margin-left: 5px"
        @click="closeTag(index)"
      >
        <close />
      </el-icon>
    </span>
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
import { computed } from 'vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

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
  }
}

setTags(route)
onBeforeRouteUpdate((to) => {
  setTags(to)
})

const closeTag = (index) => {
  const delItem = tagsList.value[index]
  store.commit('delTagsItem', index)
  const item = tagsList.value[index]
    ? tagsList.value[index]
    : tagsList.value[index - 1]
  if (item) {
    delItem.path === route.fullPath && router.push(item.path)
  } else {
    router.push('/')
  }
}

// 关闭全部标签
const closeAll = () => {
  store.commit('clearTags')
  router.push('/')
}

// 关闭其他标签
const closeOther = () => {
  const curItem = tagsList.value.filter((item) => {
    return item.path === route.fullPath
  })
  store.commit('closeTagsOther', curItem)
}

const handleTags = (command) => {
  command === 'other' ? closeOther() : closeAll()
}
</script>

<style scoped lang="less">
.tags-wrapper {
  position: relative;
  height: 30px;
  padding: 5px 10px;
  background-color: @color-background-d;
  overflow: hidden;

  .tag {
    display: inline-block;
    background-color: @color-background;
    height: 20px;
    line-height: 17px;
    padding: 6px 16px 4px;
    cursor: pointer;

    .title {
      font-size: @fontsize-medium;
      color: @color-title;
      .extend-click();
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
    position: absolute;
    top: 5px;
    right: 15px;
    bottom: 5px;
    padding: 3px 5px 0px 5px;
    background-color: @color-background;
    cursor: pointer;

    .icon {
      color: @color-sub;
    }
  }
}
</style>
