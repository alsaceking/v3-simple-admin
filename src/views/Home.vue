<template>
  <div class="home">
    <Aside />
    <div class="main">
      <Header />
      <div class="content-wrapper">
        <div class="content">
          <router-view v-slot="{ Component }">
            <transition name="move" mode="out-in">
              <keep-alive :include="tagsNameList">
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"
import Aside from '@/components/layout/Aside.vue'
import Header from '@/components/layout/Header.vue'

const store = useStore()
const tagsNameList = computed(() =>
  store.state.tagsList.map((item) => item.name)
)

</script>

<style scoped lang="less">
.move-enter-active,
.move-leave-active {
  transition: opacity 0.1s ease;
}

.move-enter-from,
.move-leave-to {
  opacity: 0;
}
.home {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .main {
    position: relative;
    flex: 1;
    background-color: @color-background-d;
    // overflow-y: scroll;
    .content-wrapper {
      position: absolute;
      padding: 0px 10px 10px 10px;
      top: 88px;
      left: 0;
      bottom: 0;
      right: 0;
      overflow-y: scroll;
      background-color: @color-background-d;
      .content {
        background-color: @color-background;
        height: 100%;
      }
    }
  }
}
</style>
