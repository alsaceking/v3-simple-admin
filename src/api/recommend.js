// recommend 接口模块
import base from '@/api/base'
import axios from '@/api/http'
// import QS from 'qs'

const recommend = {
  // 推荐列表
  getRecommend () {
    return axios.get(`${base.apifox}/mock/697037/recommend`)
  }
}

export default recommend
