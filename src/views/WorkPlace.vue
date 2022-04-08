<template>
  <div class="wokeplace">
    <el-row>
      <el-col :span="6">
        <div class="cell-wrapper">
          <el-card class="box-card" shadow="never">
            <template #header>
              <div class="card-header">
                <span class="title">最帅气的英雄</span>
                <el-tag>帅气</el-tag>
              </div>
            </template>
            <div class="content">
              <div class="text">Nevermore</div>
              <img src="../assets/images/avatar01.jpg" />
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cell-wrapper">
          <el-card class="box-card" shadow="never">
            <template #header>
              <div class="card-header">
                <span class="title">最性感的英雄</span>
                <el-tag type="success">性感</el-tag>
              </div>
            </template>
            <div class="content">
              <div class="text">Nevermore</div>
              <img src="../assets/images/avatar02.jpg" />
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cell-wrapper">
          <el-card class="box-card" shadow="hover">
            <template #header>
              <div class="card-header">
                <span class="title">最美的英雄</span>
                <el-tag type="danger">美丽</el-tag>
              </div>
            </template>
            <div class="content">
              <div class="text">Nevermore</div>
              <img src="../assets/images/avatar03.jpg" />
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cell-wrapper">
          <el-card class="box-card" shadow="never">
            <template #header>
              <div class="card-header">
                <span class="title">最可爱英雄</span>
                <el-tag type="warning">可爱</el-tag>
              </div>
            </template>
            <div class="content">
              <div class="text">Nevermore</div>
              <img src="../assets/images/avatar02.jpg" />
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
</script>

<style scoped lang="less">
.wokeplace {
  position: relative;
  height: 100%;
  background-color: @color-background-d;
  .cell-wrapper {
    padding: 0px 10px 20px 10px;
    .box-card {
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: @fontsize-medium;
          color: @color-content-l;
        }
      }
      .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .text {
          font-size: @fontsize-large;
          color: @color-title;
          font-weight: bold;
        }
        img {
          width: 45px;
          height: 45px;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
