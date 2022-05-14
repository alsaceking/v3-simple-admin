<template>
  <div class="wrapper">
    <h2 class="title">关于</h2>
    <p>
      yuxiAdmin 是一个基于 vue3，vite2，element-plus 的简易后台管理模板。
      非常适合新手朋友的学习以及小型的应用场景。
      目前已有的功能：权限管理、表单应用、echart图表数据展示。
      <span class="tip">持续更新中~</span>
    </p>
    <p>
      与作者一起探讨问题。击剑邮箱:
      <span class="tip"> jinyunkai@outlook.com</span>
    </p>
    <div class="img-wrapper">
      <img src="../assets/images/donate.jpg" alt="" />
      <div class="tips">
        如果这个小框架对你有帮助，不妨请作者喝杯水鼓励一下！
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.wrapper {
  position: relative;
  .title {
    padding: 20px;
    color: @color-title;
  }
  p {
    padding-left: 20px;
    line-height: 30px;
    color: @color-content-l;
    font-size: @fontsize-medium;
    .tip {
      color: @color-theme;
    }
  }
  .img-wrapper {
    padding: 20px;
    font-size: 0;
    img {
      width: 300px;
      height: 300px;
    }
    .tips {
      font-weight: bold;
      font-size: 14px;
      padding: 10px;
    }
  }
}
</style>
