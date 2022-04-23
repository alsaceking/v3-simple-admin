<template>
  <div class='line-chart' ref="lineChart"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const props = defineProps(['lineChartData'])

const formatSeriesData = (data) => {
  let ret = []
  data.forEach((item) => {
    ret.push(
      {
        name: item.name,
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: item.data
      }
    )
  })
  return ret
}

const lineChart = ref(null)
onMounted(() => {
  const myChart = echarts.init(lineChart.value)
  myChart.setOption(options)
})

const options = {
  title: {
    text: props.lineChartData.title
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: props.lineChartData.category
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: formatSeriesData(props.lineChartData.data)
}

</script>

<style scoped lang="less">
.line-chart {
  width: 100%;
  height: 300px;
}
</style>
