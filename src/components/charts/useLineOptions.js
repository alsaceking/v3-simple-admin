export function useLineOptions (lineData) {
  const formatLineChartSeries = (data) => {
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

  const options = {
    // title: {
    //   text: chartData.title
    // },
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
        data: lineData.category
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: formatLineChartSeries(lineData.data)
  }

  return options
}
