<template>
  <div class="wrapper">
    <div class="tabs-wrapper">
      <el-tabs v-model="activeTab" @tab-click="handleClick">
        <el-tab-pane :label="lineChartData.title" name="first">
          <ChartWrapper :chart-data='lineChartData' ref="linechart" />
        </el-tab-pane>
        <el-tab-pane :label="barChartData.title" name="second">
          <ChartWrapper :chart-data='barChartData' ref="barChart" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'analysis'
}
</script>
<script setup>
import { ref } from 'vue'
import ChartWrapper from '@/components/charts/ChartWrapper.vue'
import { analysisData } from '@/api/mock.js'

const activeTab = ref('first')

const lineChartData = analysisData.lineChartData
const barChartData = analysisData.barChartData
const pieChartData = analysisData.pieChartData

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
  width: 100%;

  .tabs-wrapper {
    background-color: @color-background;
    padding: 20px;
  }
}
</style>
