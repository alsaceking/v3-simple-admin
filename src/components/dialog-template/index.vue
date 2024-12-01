<template>
  <el-dialog
    v-model="visible"
    :title="title"
    :width="width"
    :fullscreen="fullscreen"
    :top="top"
    :center="center"
    :destroy-on-close="destroyOnClose"
    @close="handleClose"
  >
    <!-- 插槽内容自定义，可以包含输入框等 -->
    <slot></slot>
    <!-- 底部按钮 -->
    <template #footer>
      <slot name="footer">
        <el-button @click="handleClose">取消</el-button>
        <el-popconfirm title="确定吗？" @confirm="handleConfirm">
          <template #reference>
            <el-button type="primary">确定</el-button>
          </template>
        </el-popconfirm>
      </slot>
    </template>
  </el-dialog>
</template>

<script setup>
const visible = ref(false);
const init = () => {
  visible.value = true;
};
const handleClose = () => {
  visible.value = false;
};
defineExpose({
  init,
  handleClose,
});

const props = defineProps({
  title: {
    type: String,
    default: "提示",
  },
  width: {
    type: String,
    default: "50%",
  },
  top: {
    type: String,
    default: "15vh",
  },
  // 是否全屏
  fullscreen: {
    type: Boolean,
    default: false,
  },
  // 是否居中
  center: {
    type: Boolean,
    default: false,
  },
  // 当关闭 Dialog 时，是否销毁其中的元素
  destroyOnClose: {
    type: Boolean,
    default: true,
  },
  wrapHeight: { type: String, default: "800px" },
});

const emit = defineEmits(["confirm"]);

// 确定按钮点击后，将 solotData 传给父组件
const handleConfirm = () => {
  emit("confirm");
};
</script>

<style scoped></style>
