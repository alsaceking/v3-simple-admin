<template>
  <div class="wrapper">
    <el-timeline>
      <el-timeline-item center timestamp="2022/3/2" placement="top">
        开始
      </el-timeline-item>
      <el-timeline-item center timestamp="2022/3/28" placement="top">
        <el-card> 执行任务1 </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2022/4/3" placement="top">
        <el-card> 执行任务2 </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2022/4/19" placement="top">
        <el-card> 执行任务3 </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2022/5/2" placement="top">
        结束
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.wrapper {
  padding: 20px;
}
</style>
