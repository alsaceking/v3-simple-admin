<template>
  <div class="wrapper">
    <el-drawer v-model="drawerVisible" size="50%">
      <template #title>
        <h4>{{ isAdd ? '添加角色' : '编辑角色' }}</h4>
      </template>
      <template #default>
        <el-form :model="roleForm" label-width="70px">
          <el-form-item label="角色名">
            <el-input
              v-model="roleForm.roleName"
              autocomplete="off"
              placeholder="角色名"
            />
          </el-form-item>
          <el-form-item label="状态">
            <el-switch
              v-model="roleForm.status"
              :width="60"
              inline-prompt
              active-text="启用"
              inactive-text="禁用"
            />
          </el-form-item>
          <el-form-item label="备注">
            <el-input
              v-model="roleForm.remarks"
              type="textarea"
              placeholder="备注"
              maxlength="35"
              show-word-limit
              resize="none"
            />
          </el-form-item>
        </el-form>
        <div class="tree-wrapper">
          <h2 class="title">菜单分配</h2>
          <el-tree
            ref="treeRef"
            :data="dynamicMenuList"
            show-checkbox
            node-key="id"
            highlight-current
            :default-expand-all="true"
            :props="defaultProps"
            @check-change="checkChange"
          />
        </div>
      </template>
      <template #footer>
        <div class="drawer-footer">
          <el-button @click="cancelClick">取消</el-button>
          <el-button type="primary" @click="confirmClick">确认</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessageBox } from 'element-plus'
import { dynamicMenuList } from '@/components/layout/staticMenuList.js'

// add and edit role
const drawerVisible = ref(false)
const isAdd = ref(false)
const roleForm = reactive({
  roleName: '',
  status: true,
  remarks: '',
  // tree selected
  permissionMenuId: [],
  menuList: []
})

// 树形 菜单权限
const treeRef = ref(null)
const defaultProps = {
  children: 'subs',
  label: 'title'
}

const cancelClick = () => {
  drawerVisible.value = false
}

const confirmClick = () => {
  ElMessageBox.confirm('是否确认提交保存!', '提示', {
    type: 'warning'
  })
    .then(() => {
      if (isAdd.value) {
        handleAdd()
      } else {
        handleEdit()
      }
    })
    .catch(() => {})
}

const emit = defineEmits(['saveAdd', 'saveEdit'])

const handleAdd = () => {
  emit('saveAdd', roleForm)
}

const handleEdit = () => {
  emit('saveEdit', roleForm)
}

const checkChange = () => {
  const checkedIdList = treeRef.value.getCheckedKeys(true)
  const checkedNodesList = treeRef.value.getCheckedNodes(false, true)

  roleForm.permissionMenuId = checkedIdList
  roleForm.menuList = formatTreeNodes(checkedNodesList)
}

// set tree checked
const setCurrentChecked = (ary) => {
  treeRef.value.setCheckedKeys(ary)
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

const resetRoleForm = () => {
  roleForm.roleName = ''
  roleForm.status = true
  roleForm.remarks = ''
  setTimeout(() => {
    setCurrentChecked([])
  })
}

const setRoleForm = (row) => {
  Object.keys(roleForm).forEach((item) => {
    roleForm[item] = row[item]
  })
  setTimeout(() => {
    setCurrentChecked(row.permissionMenuId)
  })
}

const hideDrawer = () => {
  drawerVisible.value = false
}

const showDrawer = () => {
  drawerVisible.value = true
}

const allowIsAdd = () => {
  isAdd.value = true
}

const notAdd = () => {
  isAdd.value = false
}

defineExpose({
  hideDrawer,
  showDrawer,
  allowIsAdd,
  notAdd,
  resetRoleForm,
  setRoleForm
})
</script>

<style scoped lang="less">
.drawer-footer {
  padding-top: 20px;
  border-top: 1px solid @color-border;
}
.tree-wrapper {
  .title {
    padding: 20px 0;
    color: @color-title;
  }
}
</style>
