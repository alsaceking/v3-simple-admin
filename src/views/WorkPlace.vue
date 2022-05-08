<template>
  <div class="wokeplace">
    <!-- header-tips -->
    <div class="hearder-tips">
      <div class="avatar">
        <img src="../assets/images/avatar02.jpg" alt="" />
      </div>
      <div class="tips">
        <h2 class="title">早安，{{ userName }}。美好的一天从微笑开始~</h2>
        <p class="text">做最棒的自己~加油！</p>
      </div>
      <div class="others">
        <h2 class="title">待办</h2>
        <div class="text">8/20</div>
      </div>
    </div>
    <!-- content-wrapper -->
    <div class="content-wrapper">
      <el-row :gutter="10">
        <el-col :span="16">
          <div class="actions-wrapper">
            <div class="title">最新动态</div>
            <ul class="content">
              <li
                class="action"
                v-for="(item, index) in actionsList"
                :key="index"
              >
                <img class="img" :src="item.img" alt="" />
                <div class="text">
                  <div class="desc">{{ item.desc }}</div>
                  <div class="time">{{ item.time }}</div>
                </div>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="notice-wrapper">
            <div class="title">公告</div>
            <p class="text">
              JavaScript ( JS )
              是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web
              页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，例如
              Node.js、 Apache CouchDB 和 Adobe Acrobat。JavaScript
              是一种基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。
            </p>
          </div>
          <div class="ad-wrapper">
            <img src="../assets/images/notice-bg.jpg" alt="" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import myStorage from '@/assets/js/myStorage.js'
import { USER_INFO } from '@/assets/js/constant.js'
import { workPlaceData } from '@/api/mock'

const userInfo = myStorage.getLocalData(USER_INFO).content
const name = userInfo.token
const userName = ref(name)

// 动态列表
const actionsList = ref([])
onMounted(() => {
  actionsList.value = workPlaceData.actionsList
})
</script>

<style scoped lang="less">
.wokeplace {
  position: relative;
  width: 100%;
  height: 100%;

  .hearder-tips {
    padding: 25px 20px;
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: @color-background;
    .avatar {
      width: 100px;
      font-size: 0;
      img {
        width: 72px;
        height: 72px;
        border-radius: 50%;
      }
    }
    .tips {
      flex: 2;
      .title {
        color: @color-title;
      }
      .text {
        margin-top: 20px;
        font-size: @fontsize-medium;
        color: @color-content-l;
      }
    }
    .others {
      flex: 1;
      padding-right: 20px;
      text-align: right;
      .title {
        font-size: @fontsize-medium;
        color: @color-content-l;
      }
      .text {
        margin-top: 20px;
        color: @color-title;
        font-size: @fontsize-large-x;
      }
    }
  }
  .content-wrapper {
    margin-top: 10px;
    .actions-wrapper {
      background-color: @color-background;

      .title {
        padding: 20px;
        border-bottom: 1px solid @color-border;
      }

      .content {
        padding: 20px;

        .action {
          display: flex;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid @color-border;

          .img {
            width: 35px;
            height: 35px;
            margin-right: 25px;
            border-radius: 10px;
            align-self: flex-start;
          }

          .text {
            overflow: hidden;
            flex: 1;

            .desc {
              padding-bottom: 20px;
              font-size: @fontsize-medium-x;
              color: @color-title;
              .no-wrap();
            }

            .time {
              font-size: @fontsize-medium;
              color: @color-content-l;
            }
          }
        }
      }
    }

    .notice-wrapper {
      background-color: @color-background;

      .title {
        padding: 20px;
        border-bottom: 1px solid @color-border;
      }

      .text {
        padding: 20px;
        line-height: 30px;
      }
    }

    .ad-wrapper {
      padding: 10px;
      margin-top: 10px;
      font-size: 0;
      background-color: @color-background;

      img {
        width: 100%;
      }
    }
  }
}
</style>
