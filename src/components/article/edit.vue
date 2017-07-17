<template>
  <div>
    <div class="title-wrap m-b-50">编辑文章</div>
    <div class="p-l-50 p-r-100">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item label="摘要" prop="abstract">
          <el-input v-model="form.abstract"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <div id="editor"></div>
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
  import E from 'wangeditor'

  export default {
    name: 'hello',
    data () {
      return {
        id: '',
        form: {},
        rules: {
          title: [{ required: true, message: '标题不能为空', trigger: 'blur' }],
          author: [{ required: true, message: '作者不能为空', trigger: 'blur' }],
          abstract: [{ required: true, message: '摘要不能为空', trigger: 'blur' }],
          content: [{ required: true, message: '内容不能为空', trigger: 'blur' }]
        },
        editor: ''
      }
    },
    methods: {
      async init () {
        await this.initEditor()
        this.getData()
      },
      initEditor () {
        this.editor = new E('#editor')
        return this.editor.create()
      },
      submit () {
        this.form.content = !this.editor.txt.text() ? this.editor.txt.text() : this.editor.txt.html()
        this.$refs.form.validate((vaild) => {
          if (vaild) {
            this.apiPost('article/edit', this.form).then((res) => {
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
      getData () {
        this.apiPost('article/detail', { id: this.id }).then((res) => {
          if (res.code == 200) {
            this.form = res.data
            this.editor.txt.html(this.form.content)
          } else {
            this.dealError(res)
          }
        })
      },
      back () {
        this.$router.go(-1)
      },
      reset () {
        this.editor.txt.clear()
        this.$refs.form.resetFields()
      }
    },
    created () {
      this.id = this.$route.params.id
    },
    mounted () {
      this.init()
    }
  }
</script>
