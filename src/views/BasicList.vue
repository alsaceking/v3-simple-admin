<template>
  <div class="wrapper">
    <el-tree
      ref="treeRef"
      :data="menuList"
      show-checkbox
      node-key="id"
      highlight-current
      :default-expanded-keys="treeOptions.defaultExpanded"
      :default-checked-keys="treeOptions.defaultChecked"
      :props="defaultProps"
    />
    <div class="ope-wrapper">
      <el-button type="primary" @click="getCheckedId">提交</el-button>
      <el-button type="danger" @click="resetCheckedId">重置</el-button>
    </div>
  </div>
</template>

<script setup>
import myStorage from '@/assets/js/myStorage.js'
import { USER_INFO } from '@/assets/js/constant.js'
import { reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const treeRef = ref(null)
const treeOptions = reactive({
  defaultExpanded: [1, 2, 3],
  defaultChecked: [1, 2, 3]
})
const defaultProps = {
  children: 'subs',
  label: 'title'
}
const userInfo = myStorage.getLocalData(USER_INFO)
const menuList = userInfo ? userInfo.content.menuList : []

const getCheckedId = () => {
  const checkedIdary = treeRef.value.getCheckedKeys(false)
  ElMessageBox.alert(checkedIdary, '已选的节点Id', {
    confirmButtonText: '确定'
  })
}
const resetCheckedId = () => {
  treeRef.value.setCheckedKeys([])
}
</script>

<style scoped lang="less">
.wrapper {
  padding: 20px;
  background-color: @color-background;
  .ope-wrapper {
    padding-top: 20px;
  }
}
</style>
