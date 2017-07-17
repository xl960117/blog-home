<template>
  <div>
    <div class="m-b-20">
      <el-button type="success" icon="plus" @click="add">添加</el-button>
    </div>
    <div>
      <el-table :data="list" style="width: 100%">
        <el-table-column
          prop="title"
          label="标题"
          width="250"
          >
        </el-table-column>
        <el-table-column
          prop="abstract"
          label="摘要"
          show-overflow-tooltip
          width="250">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者"
          width="120">
        </el-table-column>
        <el-table-column
          prop="date"
          label="时间"
          >
        </el-table-column>
        <el-table-column
          label="操作"
          width="220">
          <template scope="scope">
            <el-button size="small" @click="detail(scope.row.id)">查看</el-button>
            <el-button type="primary" size="small" @click="edit(scope.row.id)">编辑</el-button>
            <el-button type="danger" size="small" @click="del(scope.row.id)">删除</el-button>
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
        this.apiGet('/article/list').then((res) => {
          if (res.code == 200) {
            this.list = res.data
          } else {
            this.list.splice(0, this.list.length)
            this.dealError(res)
          }
        })
      },
      del (id) {
        this.apiPost('/article/delete', { id: id }).then((res) => {
          if (res.code == 200) {
            this.Toast(res.msg, 1)
            this.getData()
          } else {
            this.dealError(res)
          }
        })
      },
      detail (id) {
        this.$router.push({ name: 'ArticleDetail', params: { id: id }})
      },
      edit (id) {
        this.$router.push({ name: 'ArticleEdit', params: { id: id }})
      }
    },
    created () {
      this.getData()
    }
  }
</script>
