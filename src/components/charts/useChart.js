import { useBarOptions } from "./useBarOptions"
import { useLineOptions } from "./useLineOptions"
import { usePieOptions } from "./usePieOptions"

export function useChart (chartData) {
  const { type } = chartData
  let options

  switch (type) {
    case 'line':
      options = useLineOptions(chartData)
      break
    case 'bar':
      options = useBarOptions(chartData)
      break
    case 'pie':
      options = usePieOptions(chartData)
      break
    default:
      break
  }
  return { options }
}
