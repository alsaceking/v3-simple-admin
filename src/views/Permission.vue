<template>
  <div class="wrapper">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <p>账号：admin</p>
          <p>密码：随便填</p>
          <p>拥有所有权限</p>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <p>账号：vipuser</p>
          <p>密码：随便填</p>
          <p>拥有除开系统管理外所有权限</p>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <p>账号：commonuser</p>
          <p>密码：随便填</p>
          <p>只拥有部分权限</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
.wrapper {
  padding: 20px;
  .box-card {
    color: @color-content;
    p {
      margin-bottom: 15px;
    }
  }
}
</style>
