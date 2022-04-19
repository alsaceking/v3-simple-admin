import { createStore } from "vuex"

export default createStore({
  state: {
    userInfo: null, // 用户信息
    token: '', // 登录token
    collapse: false, // 控制侧边栏折叠
    tagsList: [] // 快捷访问 标签列表
  },
  mutations: {
    // 获取用户登录后的信息
    setUserInfo (state, info) {
      state.userInfo = info
    },
    // 侧边栏折叠
    handleCollapse (state, isCollapse) {
      state.collapse = isCollapse
    },
    // handle tags
    setTagsItem (state, tag) {
      state.tagsList.push(tag)
    },
    delTagsItem (state, index) {
      state.tagsList.splice(index, 1)
    },
    clearTags (state) {
      state.tagsList = []
    },
    closeTagsOther (state, currentList) {
      state.tagsList = currentList
    }
  },
  actions: {},
  modules: {}
})