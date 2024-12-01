import ExcelJS from 'exceljs'
/**
 * excel 导出
 * sheetName：工作表名
 * tableData:表的数据内容
 * headerColumns: [{title: '', key: ''}, {title: '', key: ''}] 表头配置
 */

export const exceljsExport = async (options) => {
  const { sheetName, headerColumns, tableData } = options

  // 创建工作簿
  const workbook = new ExcelJS.Workbook()
  // 添加工作表
  const sheet = workbook.addWorksheet(sheetName)

  // 设置表头
  if (headerColumns.length > 0) {
    const columnsData = headerColumns.map((column, index) => {
      const width = column.width
      return {
        header: column.title,
        key: column.key,
        width: isNaN(width) ? 20 : width / 10
      }
    })
    sheet.columns = columnsData
    // 设置表头样式
    headerColumns.forEach((column, index) => {
      const cell = sheet.getCell(1, index + 1) // 获取表头单元格
      cell.font = { bold: true, color: { argb: 'black' } } // 加粗白色字体
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'f8f8f8' } // 蓝色背景
      }
    })
  }

  // 设置行数据
  if (tableData.length > 0) {
    tableData.forEach((table) => {
      // const obj = {}
      // headerColumns.forEach((el) => {
      //   obj[el.key] = table[el.key]
      // })
      // sheet.addRow(obj)
      sheet.addRow(table)
    })
  }
  // 导出
  const buffer = await workbook.xlsx.writeBuffer()
  const blob = new Blob([buffer], { type: 'application/octet-stream' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${sheetName}.xlsx`
  a.click()
  URL.revokeObjectURL(url)
}

/**
 * excel 导入
 */

export const importjsExport = async (file) => {
  const reader = new FileReader()
  let jsonData = []
  let headers = []

  return new Promise((resolve, reject) => {
    reader.onload = async (e) => {
      const arrayBuffer = e.target.result
      const workbook = new ExcelJS.Workbook()
      await workbook.xlsx.load(arrayBuffer)
      const worksheet = workbook.worksheets[0]
      headers = worksheet.getRow(1).values.slice(1)
      jsonData = []

      worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
        if (rowNumber > 1) {
          jsonData.push(row.values.slice(1))
        }
      })
      resolve({
        header: headers,
        json: jsonData
      })
    }
    reader.onerror = () => {
      reject(new Error('Error reading file'))
    }
    reader.readAsArrayBuffer(file.raw)
  })
}
