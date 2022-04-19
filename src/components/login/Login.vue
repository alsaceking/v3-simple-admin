<template>
  <div class="wrapper">
    <div class="login-wrapper">
      <div class="login-title">Yuxi Admin</div>
      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="form-content">
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="username">
            <template #prepend>
              <el-icon class="icon">
                <component :is="$Icons.User"></component>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="param.password" @keyup.enter="handleSubmit()">
            <template #prepend>
              <el-icon class="icon">
                <component :is="$Icons.Lock"></component>
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <div class="btn-wrapper">
          <el-button class="btn" type="primary" @click="handleSubmit()">登录</el-button>
        </div>
        <p class="login-tips">Tips : </p>
      </el-form>
    </div>
    <div class="sun-wrapper">
      <div class="sun"></div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { throttle } from '@/assets/js/util.js'
import { ElMessage } from 'element-plus'
import myStorage from '@/assets/js/myStorage.js'
import { USER_INFO } from '@/assets/js/constant.js'
import { AdminUser, vipUser, commonUser } from '@/api/mock.js'

const router = useRouter()
const param = reactive({
  username: "admin",
  password: "123123",
})

const rules = {
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    }
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
  ]
}
const store = useStore()

const checkLogin = () => {
  if (!param.username || !param.password) return
  else {
    let userInfo
    switch (param.username) {
      case 'admin':
        userInfo = AdminUser
        break
      case 'vipuser':
        userInfo = vipUser
        break
      default:
        userInfo = commonUser
        break
    }
    // console.log(userInfo)
    myStorage.setLocalData(USER_INFO, userInfo)
    store.commit('setUserInfo', userInfo)
    ElMessage.success("登录成功")
    router.push('/')
  }
}

const handleSubmit = throttle(checkLogin, 2000)
store.commit('clearTags')

</script>

<style scoped lang="less">
.wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(45deg, @color-theme, #34d6ff);
  overflow: hidden;

  .sun-wrapper {
    position: absolute;
    top: 40px;
    right: 40px;

    .sun {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      opacity: 0.9;
      background-color: white;
      box-shadow: 0px 0px 40px 15px white;
    }
  }

  .login-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;

    .login-title {
      width: 100%;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      color: @color-white;
      border-bottom: 1px solid @color-border;
    }

    .form-content {
      padding: 30px 30px;

      .btn-wrapper {
        text-align: center;

        .btn {
          width: 100%;
          height: 36px;
          margin-bottom: 10px;
        }
      }

      .login-tips {
        font-size: 12px;
        line-height: 30px;
        color: @color-white;
      }
    }
  }
}
</style>
