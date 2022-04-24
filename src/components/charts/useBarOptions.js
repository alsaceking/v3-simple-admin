export function useBarOptions (chartData) {
  const formatSeries = (data) => {
    let ret = []
    data.forEach((item) => {
      ret.push(
        {
          type: 'bar',
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
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
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
        data: chartData.category
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: formatSeries(chartData.data)
  }

  return options
}
