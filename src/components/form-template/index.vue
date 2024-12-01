<!-- 
  示例
  fields: [
    {
      span: 12,
      label: '年龄：',
      prop: 'age',
      type: 'input',
      attrs: { placeholder: '请输入年龄', type: 'Number', clearable: true }
    },
    {
      span: 12,
      label: '是否启用：',
      prop: 'switch',
      type: 'switch'
    },
    {
      span: 12,
      label: '列表选择：',
      prop: 'zone',
      type: 'select',
      attrs: { placeholder: '请选择地区', clearable: true },
      sonType: 'el-option',
      sonKeyType: {
        label: 'name',
        value: 'value'
      },
      sonList: [
        { name: 'one', value: '1' },
        { name: 'two', value: '2' },
        { name: 'three', value: '3' },
        { name: 'four', value: '4' }
      ]
    }
  ]
 -->
<template>
  <div class="wrapper">
    <el-form
      ref="formRefs"
      :model="internalFormData"
      :rules="rules"
      :label-width="labelWidth"
    >
      <el-row>
        <el-col
          v-for="(field, index) in fields"
          :key="index"
          :span="field.span || 24"
        >
          <!-- 动态生成表单项 -->
          <el-form-item
            v-if="field.type !== 'slot'"
            :label="field.label"
            :prop="field.prop"
          >
            <!-- 根据不同的 type 渲染不同的表单项 -->
            <component
              :is="getFieldComponent(field.type)"
              v-model="internalFormData[field.prop]"
              v-bind="field.attrs"
            >
              <component
                v-if="field.sonType"
                v-for="item in field.sonList"
                :key="item[field.sonKeyType.value]"
                :is="field.sonType"
                :label="item[field.sonKeyType.label]"
                :value="item[field.sonKeyType.value]"
              >
              </component>
            </component>
          </el-form-item>
          <!-- 自定义插槽 -->
          <el-form-item
            v-if="field.type === 'slot'"
            :label="field.label"
            :prop="field.prop"
          >
            <slot :name="field.slotName"></slot>
          </el-form-item>
        </el-col>
        <!-- 操作按钮插槽 -->
        <div style="display: inline-block; padding-left: 20px">
          <slot name="opeButton"></slot>
        </div>
      </el-row>
    </el-form>
  </div>
</template>
<script setup>
// 获取表单项的组件类型
const componentMap = {
  input: 'el-input',
  select: 'el-select',
  checkbox: 'el-checkbox',
  radio: 'el-radio-group',
  switch: 'el-switch',
  datePicker: 'el-date-picker'
}
const getFieldComponent = (type) => {
  return componentMap[type] || 'el-input' // 默认使用 el-input
}

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  fields: {
    type: Array,
    required: true
  },
  rules: {
    type: Object,
    default: () => ({})
  },
  labelPosition: {
    type: String,
    default: 'center'
  },
  labelWidth: {
    type: String,
    default: '150px'
  }
})

const emit = defineEmits(['update:modelValue'])
// 用于保存表单内部的数据副本
const internalFormData = ref({ ...props.modelValue })
// 监听内部表单数据的变化并通知父组件
watch(
  internalFormData,
  (newVal) => {
    emit('update:modelValue', newVal) // 同步更新到父组件
  },
  { deep: true }
)

const formRefs = ref(null)
const handleValidate = async () => {
  return await formRefs.value.validate().catch(() => false)
}
defineExpose({
  handleValidate
})
</script>

<style scoped lang="less"></style>
