import { createStore } from "vuex"

export default createStore({
  state: {
    collapse: false,
    tagsList: []
  },
  mutations: {
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