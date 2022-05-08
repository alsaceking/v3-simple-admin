<template>
  <div class="wrapper">
    <el-tree
      ref="treeRef"
      :data="dynamicMenuList"
      show-checkbox
      node-key="id"
      highlight-current
      :default-expanded-keys="treeOptions.defaultExpanded"
      :default-checked-keys="treeOptions.defaultChecked"
      :props="defaultProps"
      @check-change="checkChange"
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
import { onMounted, reactive, ref } from 'vue'
import { dynamicMenuList } from '@/components/layout/staticMenuList.js'

const treeRef = ref(null)
const treeOptions = reactive({
  defaultExpanded: [1, 2, 3, 303],
  defaultChecked: []
})
const defaultProps = {
  children: 'subs',
  label: 'title'
}

const checkChange = () => {
  const checkedIdList = treeRef.value.getCheckedKeys(true)
}

const setChecked = (ary) => {
  treeRef.value.setCheckedKeys(ary)
}

const userInfo = myStorage.getLocalData(USER_INFO)
const checkedList = userInfo ? userInfo.content.permissionMenuId : []

onMounted(() => {
  treeOptions.defaultChecked = checkedList
})

const getCheckedId = () => {
  const checkedIdary = treeRef.value.getCheckedNodes(false, true)

  console.log(formatTreeNodes(checkedIdary))
}

// get role permission menuList
const formatTreeNodes = (ary) => {
  let parMenu = []
  ary.forEach((e) => {
    if (!e.parentId) {
      e.subs = []
      parMenu.push(e)
    }
    for (let i = 0; i < ary.length; i++) {
      if (ary[i].parentId && ary[i].parentId === e.id) {
        if (ary[i].subs) {
          ary[i].subs = []
        }
        e.subs.push(ary[i])
      }
    }
  })

  return parMenu
}

const resetCheckedId = () => {
  setChecked([])
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
