export function usePieOptions (chartData) {

  const style01 = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '5%',
      left: 'center'
    },
    series: [
      {
        name: chartData.title,
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
          }
        },
        labelLine: {
          show: false
        },
        data: chartData.data
      }
    ]
  }
  const style02 = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
      {
        name: chartData.title,
        type: 'pie',
        radius: [20, 140],
        roseType: 'area',
        // label: {
        //   show: false
        // },
        itemStyle: {
          borderRadius: 5
        },
        data: chartData.data
      }
    ]
  }

  let options

  switch (chartData.style) {
    case 1:
      options = style01
      break
    case 2:
      options = style02
      break
    default:
      break
  }

  return options
}
