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
          width="300"
          >
        </el-table-column>
        <el-table-column
          prop="abstract"
          label="摘要"
          show-overflow-tooltip
          width="350">
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
        this.apiGet('/article/articlelist').then((res) => {
          if (res.code == 200) {
            this.list = res.data
          } else {
            this.dealError(res)
          }
        })
      }
    },
    created () {
      this.getData()
    }
  }
</script>
