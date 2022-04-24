<template>
  <div class='chart-wrapper' ref="chartWrapper"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onActivated } from 'vue'
import * as echarts from 'echarts'
import { useChart } from './useChart'

const props = defineProps(['chartData', 'height'])
const height = props.height ? props.height : 300

const chartWrapper = ref(null)
const { options } = useChart(props.chartData)

const myChart = ref(null)

onMounted(() => {
  const chartVal = myChart.value = echarts.init(chartWrapper.value, null, {
    width: 'auto',
    height: height
  })

  chartVal.setOption(options)

  window.addEventListener('resize', () => {
    chartVal.resize()
  })
})

onUnmounted(() => {
  myChart.value.dispose
  window.removeEventListener("resize", () => {
    myChart.value.resize()
  })
})

const resizeChart = () => {
  const chartVal = myChart.value
  chartVal.resize()
}

defineExpose({
  resizeChart
})

// onActivated(() => {
//   myChart.value.resize()
// })

</script>

<style scoped lang="less">
.chart-wrapper {
  width: 100%;
}
</style>
