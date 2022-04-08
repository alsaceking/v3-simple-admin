<template>
  <div class="base-table">
    <el-table :data="tableData" border>
      <el-table-column prop="date" label="Date" />
      <el-table-column prop="name" label="Name">
        <template #default="scope">
          <el-tag>{{ scope.row.name }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="state" label="State" />
      <el-table-column prop="address" label="Address" width="300" />
      <el-table-column prop="zip" label="Zip" />
      <el-table-column fixed="right" label="Operations" width="160">
        <template #default="scope">
          <el-button type="danger" size="small" @click="handleClick(scope.$index, scope.row)">Detail</el-button>
          <el-button type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// const tableData = [
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     state: 'California',
//     address: 'No. 189, Grove St, Los Angeles',
//     zip: 'CA 90036',
//     tag: 'Office',
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     state: 'California',
//     address: 'No. 189, Grove St, Los Angeles',
//     zip: 'CA 90036',
//     tag: 'Office',
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     state: 'California',
//     address: 'No. 189, Grove St, Los Angeles',
//     zip: 'CA 90036',
//     tag: 'Office',
//   }
// ]
const tableData = ref([])
onMounted(() => {
  tableData.value = [
    {
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Office',
    }
  ]
})

const handleClick = (index, row) => {
  console.log(index)
}

</script>

<style scoped lang="less">
.base-table {
  padding: 20px;
  // background-color: @color-background;
}
</style>
