<template>
  <div>
    <div class="title-wrap m-b-50">添加用户</div>
    <div class="p-l-50 w-300">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="账号" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">保存</el-button>
          <el-button type="warning" @click="reset">重置</el-button>
          <el-button @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        form: {
          name: '',
          password: ''
        },
        rules: {
          name: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
          password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
        },
      }
    },
    methods: {
      submit () {
        this.$refs.form.validate((vaild) => {
          if (vaild) {
            this.apiPost('users/add', this.form).then((res) => {
              if (res.code == 200) {
                this.Toast(res.msg, 1)
                setTimeout(() => {
                  this.back()
                }, 1500)
              } else {
                this.dealError(res)
              }
            })
          } else {
            return false
          }
        })
      },
      back () {
        this.$router.go(-1)
      },
      reset () {
        this.$refs.form.resetFields()
      }
    }
  }
</script>
