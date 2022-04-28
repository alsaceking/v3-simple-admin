<template>
  <div class="wrapper">
    <div class="title">基础表单</div>
    <div class="form-wrapper">
      <el-form :model="formData" :rules="rules" ref="ruleFormRef" label-width="120px" class="form-content">
        <el-form-item prop="name" label="姓名：">
          <el-input v-model="formData.name" placeholder="输入姓名" />
        </el-form-item>
        <el-form-item prop="phone" label="手机号码：">
          <el-input v-model.number="formData.phone" placeholder="手机号码" />
        </el-form-item>
        <el-form-item prop="time" label="预约时间：">
          <el-date-picker v-model="formData.time" type="date" placeholder="请选择日期" />
        </el-form-item>
        <el-form-item prop="personnel" label="预约技师：">
          <el-select v-model="formData.personnel" placeholder="请选择预约技师">
            <el-option label="3号" value="1" />
            <el-option label="9号" value="2" />
            <el-option label="13号" value="3" />
          </el-select>
        </el-form-item>
        <el-form-item label="性别：">
          <el-radio-group v-model="formData.gender">
            <el-radio label="男" value="1" />
            <el-radio label="女" value="2" />
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="remarks" label="预约备注：">
          <el-input v-model="formData.remarks" placeholder="请输入预约备注" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit(ruleFormRef)">提交预约</el-button>
          <el-button @click="resetSubmit(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { throttle } from '@/assets/js/util.js'

const ruleFormRef = ref(null)
const formData = reactive({
  name: '',
  phone: '',
  time: '',
  personnel: '',
  gender: '女',
  remarks: ''
})

const rules = {
  name: [
    {
      required: true,
      message: "请输入姓名",
      trigger: "blur"
    }
  ],
  phone: [
    {
      required: true,
      message: "请输入手机号码",
      trigger: "blur"
    }
  ],
  time: [
    {
      required: true,
      message: "请选择预约日期",
      trigger: "blur"
    }
  ],
  personnel: [
    {
      required: true,
      message: "请选择预约技师",
      trigger: "change"
    }
  ],
  remarks: [
    {
      required: true,
      message: "请输入预约备注",
      trigger: "blur"
    }
  ]
}
// 提交信息
const checkSubmit = (formEl) => {
  if (!formEl) return
  formEl.validate((valid, fields) => {
    if (valid) {
      ElMessage.success("预约成功")
    } else {
      ElMessage.error("验证失败，请填写完整信息。")
      // console.table('error submit!', fields)
    }
  })
}
const handleSubmit = throttle(checkSubmit, 3500)

const resetSubmit = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
  // for (let e in formData) {
  //   formData[e] = ''
  //   if (e === 'gender') formData[e] = '女'
  // }
}

</script>

<style scoped lang="less">
.wrapper {
  background-color: @color-background;

  .title {
    padding: 20px;
    border-bottom: 1px solid @color-border;
  }

  .form-wrapper {
    padding: 20px;

    .form-content {
      margin: 0 auto;
      width: 60%;
    }
  }
}
</style>
