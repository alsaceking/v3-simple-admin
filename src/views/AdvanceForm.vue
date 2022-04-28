<template>
  <div class="wrapper">
    <div class="title">分步表单</div>
    <div class="form-wrapper">
      <el-steps align-center :active="setpActive" process-status="process" finish-status="finish">
        <el-step title="填写基本支付信息" description="确保填写正确" />
        <el-step title="确认支付信息" description="再次确认无误" />
        <el-step :status="lastStepStatus" title="完成支付" description="恭喜您，支付成功！" />
      </el-steps>
      <!-- form -->
      <el-form :model="formData" :rules="rules" ref="ruleFormRef" label-width="120px" class="form-content">
        <div v-show="setpActive === 0">
          <el-form-item prop="account" label="支付账户：">
            <el-input v-model="formData.account" placeholder="输入支付账户" />
          </el-form-item>
          <el-form-item prop="payType" label="支付类型：">
            <el-select v-model="formData.payType" placeholder="请选择支付类型">
              <el-option label="支付宝" value="1" />
              <el-option label="微信" value="2" />
              <el-option label="银联" value="3" />
            </el-select>
          </el-form-item>
          <el-form-item prop="amountMoney" label="支付金额：">
            <el-input v-model.number="formData.amountMoney" placeholder="输入支付金额" />
          </el-form-item>
          <el-form-item label="备注信息：">
            <el-input v-model="formData.remarks" placeholder="备注信息" />
          </el-form-item>
        </div>
        <div v-if="setpActive === 1">
          <el-form-item label="支付账户：">
            <p>{{ formData.account }}</p>
          </el-form-item>
          <el-form-item label="支付类型：">
            <p>{{ formData.payType === 1 ? '支付宝' : formData.payType === 2 ? '微信' : '银联' }}</p>
          </el-form-item>
          <el-form-item label="支付金额：">
            <p>￥{{ formData.amountMoney }}</p>
          </el-form-item>
          <el-form-item label="备注信息：">
            <p>{{ formData.remarks }}</p>
          </el-form-item>
          <el-form-item prop="password" label="支付密码：">
            <el-input v-model="formData.password" type="password" placeholder="输入支付密码" />
          </el-form-item>
        </div>
        <el-form-item>
          <el-button v-show="setpActive === 0" type="primary" @click="handleNext(ruleFormRef)">下一步</el-button>
          <el-button v-show="setpActive === 1" type="primary" @click="handleSubmit(ruleFormRef)">提交</el-button>
          <el-button v-show="setpActive === 1" @click="handleBack">上一步</el-button>
        </el-form-item>
        <div v-show="setpActive === 2">
          <el-result icon="success" title="操作成功！" sub-title="">
            <template #extra>
              <el-button type="primary" @click="goHome">Back</el-button>
            </template>
          </el-result>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router';

// step
const setpActive = ref(0)
const lastStepStatus = ref('')

// form
const ruleFormRef = ref(null)
const formData = reactive({
  account: '',
  payType: '',
  amountMoney: '',
  remarks: '',
  password: ''
})
const rules = {
  account: [
    {
      required: true,
      message: "请输入支付账户",
      trigger: "blur"
    }
  ],
  payType: [
    {
      required: true,
      message: "请选择支付方式",
      trigger: "change"
    }
  ],
  amountMoney: [
    {
      required: true,
      message: "请输入金额",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "请输入支付密码",
      trigger: "blur"
    }
  ]
}

const handleNext = (formEl) => {
  if (setpActive.value > 0) return
  formEl.validate((valid, fields) => {
    if (valid) {
      setpActive.value++
    } else {
      ElMessage.error("验证失败，请填写完整信息。")
    }
  })
}
const handleSubmit = (formEl) => {
  formEl.validate((valid, fields) => {
    if (valid) {
      setpActive.value++
      lastStepStatus.value = 'success'
    } else {
      ElMessage.error("验证失败，请填写完整信息。")
    }
  })
}
const handleBack = () => {
  if (setpActive.value < 1) return
  setpActive.value--
}

const router = useRouter()
const goHome = () => {
  router.push('/')
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
      margin: 50px auto 0;
      width: 60%;
    }
  }
}
</style>
