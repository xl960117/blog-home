<template>
  <div>
    <el-row type='flex' justify='space-between' class='top-nav box-shadow h-60 p-l-30 p-r-30' style="z-index: 100;">
      <div class='w-60 fz-20'>Bear</div>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">admin</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改头像</el-dropdown-item>
            <el-dropdown-item>忘记密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-row>
    <el-row class="m-t-60">
      <el-col :span='4'>
        <el-menu mode="vertical" default-active="1" theme="dark" class="el-menu-vertical-demo">
            <el-menu-item-group title="文章管理">
              <el-menu-item index="1" @click="change('ArticleList')">文章列表</el-menu-item>
              <el-menu-item index="2">文章分类</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="系统管理">
              <el-menu-item index="3">系统配置</el-menu-item>
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
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      change (name) {
        this.$router.push({ name: name })
      }
    }
  }
</script>
