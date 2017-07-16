<template>
  <el-row class="login-wrap" type="flex" justify="center" align="middle">
    <div class="login-box w-300 h-300 bor-gra bor-ra-3">
      <div class="h-50 tx-c">博客管理后台</div>
      <div class="p-l-30 p-r-30">
        <el-form ref="form" :model="user">
          <el-form-item label="账号">
            <el-input v-model="user.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="user.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="w-full" type="primary" @click="login" :loading="disabled">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </el-row>
</template>

<style scoped>
  .el-form-item {
    margin-bottom: 22px !important;
  }
  .login-wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background: url(../../assets/img/bg.jpg) no-repeat;
    background-size: 100%;
  }
  .login-box {
    background-color: rgb(255, 255, 255);
  }
</style>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        user: {
          name: '',
          password: ''
        },
        disabled: false
      }
    },
    methods: {
      verify () {
        if (!this.user.name) {
          this.Toast('账号不能为空', 2)
          return false
        } else if (!this.user.password) {
          this.Toast('密码不能为空', 2)
          return false
        } else {
          return true
        }
      },
      login () {
        let result = this.verify()
        if (result) {
          this.disabled = true
          this.apiPost('/users/login', this.user).then((res) => {
            this.disabled = false
            if (res.code == 200) {
              this.Toast(res.msg, 1)
            } else {
              this.dealError(res)
            }
          })
        } else {
          return false
        }
      }
    }
  }
</script>
