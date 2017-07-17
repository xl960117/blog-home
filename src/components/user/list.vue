<template>
  <div>
    <div class="m-b-20">
      <el-button type="success" icon="plus" @click="add">添加</el-button>
    </div>
    <div>
      <el-table :data="list" style="width: 100%" @selection-change="selectAll">
        <!--<el-table-column-->
          <!--type="selection"-->
          <!--width="55">-->
        <!--</el-table-column>-->
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
          width="220">
          <template scope="scope">
            <!--<el-button size="small" @click="detail(scope.row.id)">查看</el-button>-->
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
        this.$router.push({ name: 'UserAdd' })
      },
      getData() {
        this.apiGet('/users/list').then((res) => {
          if (res.code == 200) {
            this.list = res.data
          } else {
            this.dealError(res)
          }
        })
      },
      selectAll (selection) {
        console.log(selection)
      },
      del (id) {
        this.apiPost('/users/delete', { id: id }).then((res) => {
          if (res.code == 200) {
            this.Toast(res.msg, 1)
            this.getData()
          } else {
            this.dealError(res)
          }
        })
      },
//      detail (id) {
//        this.$router.push({ name: 'ArticleDetail', params: { id: id }})
//      },
      edit (id) {
        this.$router.push({ name: 'UserEdit', params: { id: id }})
      }
    },
    created () {
      this.getData()
    }
  }
</script>
