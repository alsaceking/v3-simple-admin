<template>
  <div class='error-page'>
    <div class="error-tip">
      <img src="../../assets/images/404.png">
      <p class=" desc">抱歉，你访问的页面不存在</p>
      <div class="error-handle">
        <router-link to="/">
          <el-button type="primary">返回首页</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="less">
.error-page {
  position: relative;
  height: 100%;
  background-color: @color-background-d;

  .error-tip {
    text-align: center;

    img {
      width: 300px;
    }
  }

  .error-handle {
    margin-top: 30px;
    padding-bottom: 200px;
  }
}
</style>
