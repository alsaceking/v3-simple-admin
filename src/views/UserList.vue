<template>
  <div class="wrapper">
    <div class="search-wrapper">
      <el-input
        v-model="searchParam.name"
        placeholder="用户名"
        class="search-input"
      />
      <el-input
        v-model="searchParam.username"
        placeholder="登入账号"
        class="search-input"
      />
      <el-input
        v-model="searchParam.phone"
        placeholder="手机号"
        class="search-input"
      />
      <el-select
        v-model="searchParam.role"
        placeholder="请选择角色"
        class="search-input"
      >
        <el-option label="vip用户" value="1" />
        <el-option label="普通用户" value="2" />
      </el-select>
      <el-button :icon="$Icons.Search" type="primary" @click="handleSearch"
        >搜索</el-button
      >
    </div>
    <el-table :data="tableData" border stripe>
      <el-table-column prop="name" label="用户名" />
      <el-table-column prop="username" label="账号" />
      <el-table-column label="头像(查看大图)" align="center">
        <template #default="scope">
          <el-image
            class="table-img"
            :src="scope.row.img"
            :preview-src-list="[scope.row.img]"
            preview-teleported
          >
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-tag :type="scope.row.status === '正常' ? '' : 'danger'">{{
            scope.row.status
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="role" label="角色" width="120" />
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
    <!--编辑弹出框 -->
    <el-dialog v-model="editVisible" title="编辑" width="40%">
      <el-form :model="editData" label-width="70px">
        <el-form-item label="用户名">
          <el-input
            v-model="editData.name"
            autocomplete="off"
            placeholder="用户名"
          />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="editData.role" placeholder="选择状态">
            <el-option label="admin" value="admin" />
            <el-option label="vipuser" value="vipuser" />
            <el-option label="commonuser" value="commonuser" />
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="editData.remarks" placeholder="备注" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editVisible = false">取消</el-button>
          <el-button type="primary" @click="saveEdit">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { userList } from '../api/mock'
import { ElMessage } from 'element-plus'

onMounted(() => {
  tableData.value = userList
})

// 搜索
const searchParam = reactive({
  name: '',
  username: '',
  phone: '',
  role: ''
})
const handleSearch = () => {
  console.log(searchParam)
}

// tabledata
const tableData = ref([])

const handleDle = (index) => {
  tableData.value.splice(index, 1)
  ElMessage.success('删除成功')
}

// -----编辑弹窗
const editVisible = ref(false)
const editData = reactive({
  name: '',
  remarks: '',
  role: ''
})
// 当前编辑行index
let currentEditIndex = -1

const handleEdit = (index, row) => {
  currentEditIndex = index
  Object.keys(editData).forEach((item) => {
    editData[item] = row[item]
  })
  editVisible.value = true
}
const saveEdit = () => {
  Object.keys(editData).forEach((item) => {
    tableData.value[currentEditIndex][item] = editData[item]
  })
  editVisible.value = false
  ElMessage.success(`修改第 ${currentEditIndex + 1} 行成功`)
}
</script>

<style scoped lang="less">
.wrapper {
  padding: 20px;
  background-color: @color-background;
  .search-wrapper {
    padding-bottom: 20px;

    .search-input {
      display: inline-block;
      width: 150px;
      margin-right: 10px;
    }
  }
  .table-img {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }

  .opt-btn {
    margin-right: 12px;

    & + .opt-btn {
      margin-left: 0;
    }
  }
}
</style>
