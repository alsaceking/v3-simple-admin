<template>
  <div class="wrapper">
    <div class="add-btn">
      <el-button :icon="$Icons.Plus" type="primary">添加角色</el-button>
    </div>
    <el-table :data="tableData" border stripe>
      <el-table-column prop="name" label="角色名称" />
      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <el-tag :type="scope.row.status === '正常' ? '' : 'danger'">{{
            scope.row.status
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" />
      <el-table-column prop="date" label="创建时间" width="120" />
      <el-table-column fixed="right" label="操作" width="180">
        <template #default="scope">
          <el-button
            class="opt-btn"
            :icon="$Icons.Edit"
            type="primary"
            size="small"
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { roleList } from '../api/mock'

onMounted(() => {
  tableData.value = roleList
})

const tableData = ref([])

const handleDle = (index) => {
  console.log(index)
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
