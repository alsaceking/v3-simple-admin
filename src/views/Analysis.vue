<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="12" :md="6" v-for="(item, index) in cycleData" :key="index">
        <div class="cell-wrapper">
          <el-card class="box-card" shadow="never">
            <template #header>
              <div class="card-header">
                <span class="title">{{ item.title }}</span>
                <el-tag :type="item.tagType">{{ item.tag }}</el-tag>
              </div>
            </template>
            <div class="content">
              <div class="text">{{ item.text }}</div>
              <img :src="item.img" />
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <!-- charts  section-->
    <div class="charts-section">
      <div class="tabs-wrapper">
        <el-tabs v-model="activeTab" @tab-click="handleClick">
          <el-tab-pane :label="lineChartData.title" name="first">
            <ChartWrapper :chart-data="lineChartData" ref="linechart" />
          </el-tab-pane>
          <el-tab-pane :label="barChartData.title" name="second">
            <ChartWrapper :chart-data="barChartData" ref="barChart" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!-- pie -->
    <div class="pie-wrapper">
      <el-row>
        <el-col :span="12">
          <div class="chart-wrapper">
            <div class="chart-title">{{ pieChartData.title }}</div>
            <div class="chart-item">
              <ChartWrapper :chart-data="pieChartData" :height="450" />
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="chart-wrapper">
            <div class="chart-title">{{ pieChartDataSub.title }}</div>
            <div class="chart-item">
              <ChartWrapper :chart-data="pieChartDataSub" :height="450" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// export default {
//   name: 'analysis'
// }
</script>
<script setup>
import { ref, onMounted } from 'vue'
import ChartWrapper from '@/components/charts/ChartWrapper.vue'
import { analysisData } from '@/api/mock.js'

// cycle data
const cycleData = ref([])

onMounted(() => {
  cycleData.value = analysisData.cycleData
})

// chart data
const activeTab = ref('first')

const lineChartData = analysisData.lineChartData
const barChartData = analysisData.barChartData
const pieChartData = analysisData.pieChartData
const pieChartDataSub = analysisData.pieChartDataSub

const linechart = ref(null)
const barChart = ref(null)
const handleClick = () => {
  setTimeout(() => {
    linechart.value.resizeChart()
    barChart.value.resizeChart()
  })
}
</script>

<style scoped lang="less">
.wrapper {
  position: relative;
  width: 100%;
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

  .charts-section {
    padding: 0 10px 10px 10px;

    .tabs-wrapper {
      background-color: @color-background;
      padding: 20px;
    }
  }

  .pie-wrapper {
    margin-top: 20px;
    padding-bottom: 10px;

    .chart-wrapper {
      padding: 0 10px;

      .chart-title {
        padding: 15px 20px;
        background-color: @color-background;
        border-bottom: 1px solid @color-border;
        color: @color-title;
      }

      .chart-item {
        background-color: @color-background;
      }
    }
  }
}
</style>
