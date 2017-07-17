<template>
  <div>
    <el-row type='flex' justify='space-between' class='top-nav box-shadow h-60 p-l-30 p-r-30' style="z-index: 100;">
      <div class='w-60 fz-20'>Bear</div>
      <div>
        <el-dropdown @command="select">
          <span class="el-dropdown-link">{{ user }}</span>
          <el-dropdown-menu slot="dropdown">
            <!--<el-dropdown-item command="1">修改头像</el-dropdown-item>-->
            <!--<el-dropdown-item command="2">修改密码</el-dropdown-item>-->
            <el-dropdown-item command="3">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-row>
    <el-row class="m-t-60">
      <el-col :span='4'>
        <el-menu mode="vertical" default-active="1" theme="dark" class="el-menu-vertical-demo">
            <el-menu-item-group title="文章管理">
              <el-menu-item index="1" @click="change('ArticleList')">文章列表</el-menu-item>
              <!--<el-menu-item index="2">文章分类</el-menu-item>-->
            </el-menu-item-group>
            <el-menu-item-group title="系统管理">
              <!--<el-menu-item index="3">系统配置</el-menu-item>-->
              <el-menu-item index="4" @click="change('UserList')">用户管理</el-menu-item>
            </el-menu-item-group>
        </el-menu>
      </el-col>
      <el-col :span='20' class="p-20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  /*body {*/
    /*background-color: #324157;*/
  /*}*/
  .top-nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
  }
</style>

<script>
  export default {
    name: 'home',
    data () {
      return {
        user: ''
      }
    },
    methods: {
      change (name) {
        this.$router.push({ name: name })
      },
      select (command) {
        switch (command) {
          case '1':
            break;
          case '2':
            break;
          case '3':
            this.Toast('登出成功!', 1)
            setTimeout(() => {
              this.$router.push({ name: 'login' })
            }, 1500)
            break;
        }
      }
    },
    created () {
      this.user = window.Lockr.get('user_info')
      console.log(this.user)
    }
  }
</script>
