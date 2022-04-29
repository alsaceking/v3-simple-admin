// import { ElButton, ElCard, ElRow } from "element-plus"
import Element from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export default function (app) {
  // app.use(ElButton)
  //   .use(ElCard)
  //   .use(ElRow)
  app.use(Element, {
    locale: zhCn
  })
}
