<template>
  <div class="wrapper">
    <div class="add-btn">
      <el-button :icon="$Icons.Plus" type="primary" @click="handleAdd"
        >添加角色</el-button
      >
    </div>
    <el-table :data="tableData" border stripe>
      <el-table-column prop="roleName" label="角色名称" />
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-tag :type="scope.row.status ? '' : 'danger'">{{
            scope.row.status ? '启用' : '禁用'
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="remarks" label="备注" />
      <el-table-column prop="date" label="创建时间" width="120" />
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button
            class="opt-btn"
            :icon="$Icons.Edit"
            type="primary"
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-popconfirm
            confirm-button-text="确定"
            cancel-button-text="取消"
            icon-color="red"
            title="确定要删除吗?"
            @confirm="handleDle(scope.$index)"
          >
            <template #reference>
              <el-button
                class="opt-btn"
                :icon="$Icons.Delete"
                type="danger"
                size="small"
                >删除
              </el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!-- 角色编辑 -->
    <RoleListEditWrapper
      ref="editWrapper"
      @save-add="checkedAdd"
      @save-edit="checkedEdit"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { roleList } from '../api/mock'
import { deepClone } from '@/assets/js/util.js'
import { ElMessage } from 'element-plus'
import RoleListEditWrapper from './RoleListEditWrapper.vue'

onMounted(() => {
  tableData.value = roleList
})

const tableData = ref([])

const editWrapper = ref(null)

// delete
const handleDle = (index) => {
  tableData.value.splice(index, 1)
  ElMessage.success('删除成功!')
}

// add and edit role
const handleAdd = () => {
  const editWrapperValue = editWrapper.value

  editWrapperValue.resetRoleForm()
  editWrapperValue.allowIsAdd()
  editWrapperValue.showDrawer()
}

// 当前编辑行index
let currentEditIndex = -1

const handleEdit = (index, row) => {
  currentEditIndex = index
  const editWrapperValue = editWrapper.value

  editWrapperValue.notAdd()
  editWrapperValue.setRoleForm(row)
  editWrapperValue.showDrawer()
}

const checkedAdd = (roleForm) => {
  const addsData = deepClone(roleForm)
  tableData.value.push(addsData)
  // to do smt

  editWrapper.value.hideDrawer()
  ElMessage.success(`添加成功`)
}

const checkedEdit = (roleForm) => {
  Object.keys(roleForm).forEach((item) => {
    tableData.value[currentEditIndex][item] = roleForm[item]
  })
  // to do smt

  editWrapper.value.hideDrawer()
  ElMessage.success(`修改第 ${currentEditIndex + 1} 行成功`)
}
</script>

<style scoped lang="less">
.wrapper {
  padding: 20px;
  background-color: @color-background;
  .add-btn {
    padding-bottom: 20px;
  }
}
</style>
