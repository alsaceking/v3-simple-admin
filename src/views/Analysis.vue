<template>
  <div class="wrapper">
    <LineChart :line-chart-data='lineChartData' />
  </div>
</template>

<script>
export default {
  name: 'analysis'
}
</script>
<script setup>
import LineChart from '@/components/charts/LineCharts.vue'
import { analysisData } from '@/api/mock.js'

const lineChartData = analysisData.lineChartData

</script>

<style scoped lang="less">
.wrapper {
  width: 100%;
}
</style>
