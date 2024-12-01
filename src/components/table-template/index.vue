<!-- 
loading	Boolean	false	显示加载状态
tableData	Object	必填	表格数据
columns	Array	必填	列配置
columns:[
  { prop: 'date', label: '日期', width: '150' },
  { prop: 'name', label: '姓名', width: '120', },
  { prop: 'age', label: '年龄', width: '120', sortable: true },
  { prop: 'city', label: '城市', width: '120', isSlot: true },
  { prop: 'address', label: '地址', minWidth: '300', showOverflowTooltip: true},
  { prop: 'zip', label: '编码', width: '120' }
]
border	Boolean	true	是否显示边框
stripe	Boolean	true	是否显示斑马纹
highlightCurrentRow	Boolean	true	是否高亮当前行
selection	Boolean	false	是否显示选择列
showIndex	Boolean	true	是否显示序号列
// 操作列
operation	Object	null	操作列配置
operation: {
  width: '200',
  label: '操作',
  fixed: 'right',
  align: 'center'
}
// 合计
showSummary Boolean false 是否显示尾列合计
summary Object 合计列配置
summary: {
  type: Object,
  default: () => ({
    // 合计行第一列的文本
    summaryTitle: '',
    // 需要合计的列的prop数组
    summaryProps: []
  })
},
summaryMethod	Function	null	自定义合计计算方法
// 分页属性
pagination	Boolean	false	是否启用分页
total	Number	0	总条目数
currentPage	Number	1	当前页码
pageSize	Number	10	每页显示条数
pageSizes	Array	[10, 20, 50, 100]	可选的每页条数
paginationBackground	Boolean	false	分页按钮是否带有背景色
// example
<tableTemplate
  :tableData="tableData"
  :columns="columns"
  :operation="operation"
  selection
  showSummary
  :summary="summary"
  pagination
  :total="total"
  :currentPage="queryParam.currentPage"
  :pageSize="queryParam.pageSize"
  @selectionChange="handleSelectionChange"
  @currentChange="handleCurrentChange"
  @sizeChange="handleSizeChange"
>
  <template #name="{ row, $index }">
    <el-tag>{{ row.name }}</el-tag>
  </template>
  <template #operation="{ row, $index }">
    <el-button link type="primary" size="small" @click="showDialog">
      details
    </el-button>
    <el-button link type="primary" size="small">Edit</el-button>
  </template>
</tableTemplate>
-->
<template>
  <div class="wrapper">
    <el-table
      ref="tableRefs"
      v-loading="loading"
      :data="tableData"
      :border="border"
      :stripe="stripe"
      :header-cell-class-name="headerCellClassName"
      :row-class-name="rowClassName"
      :show-summary="showSummary"
      :summary-method="getSummaryMethod"
      :highlight-current-row="highlightCurrentRow"
      @selection-change="handleSelectionChange"
    >
      <!-- 选择列 -->
      <el-table-column
        v-if="selection"
        type="selection"
        width="60"
        align="center"
        fixed="left"
      />
      <!-- 索引列 -->
      <el-table-column
        v-if="showIndex"
        type="index"
        :index="getIndex"
        width="60"
        label="序号"
        align="center"
        fixed="left"
      />
      <!-- 动态列 -->
      <template v-for="(column, index) in columns" :key="index">
        <el-table-column
          :prop="column.prop"
          :label="column.label"
          :width="column.width"
          :min-width="column.minWidth"
          :align="column.align || 'left'"
          :show-overflow-tooltip="column.showOverflowTooltip"
          :fixed="column.fixed"
          :sortable="column.sortable"
        >
          <template v-if="column.isSlot" v-slot="scope">
            <!-- 自定义插槽内容 -->
            <slot
              :name="column.prop"
              :row="scope.row"
              :$index="scope.$index"
            ></slot>
          </template>
        </el-table-column>
      </template>
      <!-- 操作列 -->
      <el-table-column
        v-if="operation"
        :width="operation.width"
        :label="operation.label || '操作'"
        :fixed="operation.fixed || 'right'"
        :align="operation.align || 'center'"
      >
        <template #default="scope">
          <slot name="operation" :row="scope.row" :$index="scope.$index"></slot>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div v-if="pagination" class="table-template-pagination-container">
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :page-sizes="pageSizes"
        :total="total"
        :background="paginationBackground"
        :hide-on-single-page="false"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  tableData: {
    type: Array,
    required: true,
  },
  // 列配置
  columns: {
    type: Array,
    required: true,
  },
  border: {
    type: Boolean,
    default: false,
  },
  stripe: {
    type: Boolean,
    default: false,
  },
  highlightCurrentRow: {
    type: Boolean,
    default: true,
  },
  headerCellClassName: {
    type: String,
    default: "table-header",
  },
  rowClassName: {
    type: String,
    default: "table-row-low",
  },
  selection: {
    type: Boolean,
    default: false,
  },
  showIndex: {
    type: Boolean,
    default: false,
  },
  // 是否有操作列
  operation: {
    type: Object,
    default: () => null,
  },
  // 是否有分页
  pagination: {
    type: Boolean,
    default: false,
  },
  total: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  pageSizes: {
    type: Array,
    default: () => [10, 20, 50, 100],
  },
  paginationBackground: {
    type: Boolean,
    default: false,
  },
  // 合计
  showSummary: {
    type: Boolean,
    default: false,
  },
  summary: {
    type: Object,
    default: () => ({
      // 合计行第一列的文本
      summaryTitle: "",
      // 需要合计的列的prop数组
      summaryProps: [],
    }),
  },
  customSummaryMethod: {
    type: Function,
    default: null,
  },
});
// 合计
const getSummaryMethod = (param) => {
  if (props.customSummaryMethod) {
    return props.customSummaryMethod(param);
  }
  const propList = props.columns.map((item) => item.prop);
  const { columns, data } = param;
  const summary = props.summary;
  const sums = [];

  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = summary.summaryTitle || "合计:";
      return;
    }

    const prop = column.property;
    const includesList = summary.summaryProps.length
      ? summary.summaryProps
      : propList;
    if (!includesList.includes(prop)) {
      sums[index] = "";
      return;
    }
    const values = data.map((item) => Number(item[prop]));
    if (!values.every((value) => Number.isNaN(value))) {
      sums[index] = `${values.reduce((prev, curr) => {
        const value = Number(curr);
        if (!Number.isNaN(value)) {
          return prev + curr;
        } else {
          return prev;
        }
      }, 0)}`;
    } else {
      sums[index] = "N/A";
    }
  });
  return sums;
};

// 获取序号
const getIndex = (index) => {
  return (props.currentPage - 1) * props.pageSize + index + 1;
};

const emit = defineEmits(["selectionChange", "sizeChange", "currentChange"]);

const handleSelectionChange = (list) => {
  emit("selectionChange", list);
};

const handleCurrentChange = (val) => {
  emit("currentChange", val);
};

const handleSizeChange = (val) => {
  emit("sizeChange", val);
};

// 表格引用
const tableRefs = ref(null);

defineExpose({
  tableRefs,
});
</script>

<style>
.table-template-pagination-container {
  padding-top: 25px;
  display: flex;
  justify-content: flex-end;
}
.table-row-low {
  height: 60px;
}
.table-header {
  background-color: #f7f8fa !important;
  color: #000;
  height: 60px;
}
</style>
