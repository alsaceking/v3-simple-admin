<template>
  <div class="base-table">
    <div class="search-wrapper">
      <FormTemplate v-model="pageParams" :fields="fields" :labelWidth="'20px'">
        <template #opeButton>
          <el-button :icon="$Icons.Search" type="primary" @click="handleSearch">
            搜索
          </el-button>
        </template>
      </FormTemplate>
    </div>
    <!-- ope -->
    <div style="padding-bottom: 10px; text-align: right">
      <el-upload
        style="display: inline-block; margin-right: 10px"
        ref="upload"
        class="upload-demo"
        action="#"
        accept=".xls,.xlsx"
        :show-file-list="false"
        :auto-upload="false"
        :limit="1"
        :on-exceed="handleExceed"
        :on-change="handleImport"
      >
        <el-button type="success"> 导 入 </el-button>
      </el-upload>
      <el-popconfirm title="确定吗？" @confirm="handleExport">
        <template #reference>
          <el-button type="warning">导 出</el-button>
        </template>
      </el-popconfirm>
    </div>
    <!-- table -->
    <TableTemplate
      :tableData="tableData"
      :columns="columns"
      :border="true"
      :operation="{ width: '180px' }"
      selection
      pagination
      :total="pageParams.total"
      :currentPage="pageParams.current"
      :pageSize="pageParams.size"
      @currentChange="handleCurrentChange"
      @sizeChange="handleSizeChange"
    >
      <template #img="{ row }">
        <el-image
          class="table-img"
          :src="row.img"
          :preview-src-list="[row.img]"
          preview-teleported
        >
        </el-image>
      </template>
      <template #status="{ row }">
        <el-tag :type="row.status">{{ row.status }}</el-tag>
      </template>
      <template #operation="{ row, $index }">
        <el-button
          class="opt-btn"
          :icon="$Icons.Edit"
          type="primary"
          size="small"
          @click="handleEdit($index, row)"
          >编辑</el-button
        >
        <el-popconfirm
          confirm-button-text="确定"
          cancel-button-text="取消"
          icon-color="red"
          title="确定要删除吗?"
          @confirm="handleDle($index)"
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
    </TableTemplate>
    <!--编辑弹出框 -->
    <DialogTemplate
      ref="EditDialogRefs"
      title="编辑"
      width="40%"
      @confirm="saveEdit"
    >
      <template #default>
        <FormTemplate v-model="editData" :fields="editFields"> </FormTemplate>
      </template>
    </DialogTemplate>
  </div>
</template>

<script setup>
import { baseTableData } from '@/api/mock.js'
import { ElMessage } from 'element-plus'
import FormTemplate from '@/components/form-template/index.vue'
import TableTemplate from '@/components/table-template/index.vue'
import DialogTemplate from '@/components/dialog-template/index.vue'

const fields = [
  {
    span: 4,
    // label: '用户ID：',
    prop: 'id',
    type: 'input',
    attrs: { placeholder: '用户ID', clearable: true }
  },
  {
    span: 4,
    // label: '姓名：',
    prop: 'name',
    type: 'input',
    attrs: { placeholder: '姓名', clearable: true }
  }
]

const columns = [
  {
    prop: 'id',
    label: 'ID'
  },
  {
    prop: 'name',
    label: '用户名'
  },
  {
    prop: 'img',
    label: '头像(查看大图)',
    width: '180px',
    align: 'center',
    isSlot: true
  },
  {
    prop: 'status',
    label: '状态',
    isSlot: true
  },
  {
    prop: 'address',
    label: '地址',
    minWidth: '320px'
  },
  {
    prop: 'date',
    label: '日期'
  }
]
const editFields = [
  {
    label: '姓名：',
    prop: 'name',
    type: 'input',
    attrs: { placeholder: '姓名', clearable: true }
  },
  {
    label: '地址：',
    prop: 'address',
    type: 'input',
    attrs: { placeholder: '地址', clearable: true }
  },
  {
    label: '选择状态：',
    prop: 'status',
    type: 'select',
    attrs: { placeholder: '选择状态：', clearable: true },
    sonType: 'el-option',
    sonKeyType: {
      label: 'name',
      value: 'value'
    },
    sonList: [
      { name: 'danger', value: 'danger' },
      { name: 'success', value: 'success' },
      { name: 'warning', value: 'warning' }
    ]
  }
]
onMounted(() => {
  tableData.value = baseTableData
  pageParams.value.total = baseTableData.length
})

const pageParams = ref({
  name: '',
  id: '',
  current: 1,
  size: 10,
  total: 0
})
// 搜索
const handleSearch = () => {
  console.log(pageParams.value)
}

const tableData = ref([])

const handleDle = (index) => {
  console.log(index)
  tableData.value.splice(index, 1)
  ElMessage.success('删除成功')
}

// -----编辑弹窗
const editData = ref({
  name: '',
  address: '',
  status: ''
})
// 当前编辑行index
let currentEditIndex = -1
const EditDialogRefs = ref(null)

const handleEdit = (index, row) => {
  currentEditIndex = index
  Object.keys(editData.value).forEach((item) => {
    editData.value[item] = row[item]
  })
  EditDialogRefs.value.init()
}
const saveEdit = () => {
  Object.keys(editData.value).forEach((item) => {
    tableData.value[currentEditIndex][item] = editData.value[item]
  })

  EditDialogRefs.value.handleClose()
  ElMessage.success(`修改第 ${currentEditIndex + 1} 行成功`)
}
// -----分页
const handleCurrentChange = (page) => {
  console.log(page)
}

const handleSizeChange = (size) => {
  console.log(size)
}
// 导出
import { exceljsExport, importjsExport } from '@/assets/js/exportExcel.js'
const handleExport = () => {
  const options = {
    sheetName: '用户列表',
    headerColumns: [
      { title: '用户ID', key: 'id' },
      { title: '用户名', key: 'name' },
      { title: '头像', key: 'img' },
      { title: '状态', key: 'status' },
      { title: '地址', key: 'address' },
      { title: '日期', key: 'date' }
    ],
    tableData: tableData.value
  }
  exceljsExport(options)
}

const upload = ref(null)
const handleExceed = (files) => {
  upload.value.clearFiles()
  const file = files[0]
  upload.value.handleStart(file)
}
const handleImport = async (file) => {
  try {
    const data = await importjsExport(file)
    const keys = ['id', 'name', 'img', 'status', 'address', 'date']
    let retData = []
    data.json.forEach((el) => {
      let obj = {}
      for (let i = 0; i < el.length; i++) {
        obj[keys[i]] = el[i]
      }
      retData.push(obj)
    })
    tableData.value = retData
    console.log(retData)
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped lang="less">
.base-table {
  padding: 20px;
  background-color: @color-background;

  .search-wrapper {
    padding-bottom: 10px;

    .search-input {
      display: inline-block;
      width: 200px;
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

  .pagination {
    padding-top: 20px;
    // text-align: right;

    .el-page {
      justify-content: flex-end;
    }
  }
}
</style>
