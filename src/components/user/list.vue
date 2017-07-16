<template>
  <div>
    <div class="m-b-20">
      <el-button type="success" icon="plus" @click="add">添加</el-button>
    </div>
    <div>
      <el-table :data="list" style="width: 100%" @selection-change="selectAll">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label="账号"
          >
        </el-table-column>
        </el-table-column>
        <el-table-column
          prop="password"
          label="密码"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template scope="scope">
            <el-button type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        list: []
      }
    },
    methods: {
      add () {
        this.$router.push({ name: 'ArticleAdd' })
      },
      getData() {
        this.apiGet('/users/getUser').then((res) => {
          if (res.code == 200) {
            this.list = res.data
          } else {
            this.dealError(res)
          }
        })
      },
      selectAll (selection) {
        console.log(selection)
      }
    },
    created () {
      this.getData()
    }
  }
</script>
