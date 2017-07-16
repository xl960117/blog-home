import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '../components/home'
import Login from '../components/user/login'
import ArticleList from '../components/article/list'
import ArticleAdd from '../components/article/add'
import UserList from '../components/user/list'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'login', component: Login },
    { path: '/home', name: 'home', component: Home },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        { path: '/article/list', name: 'ArticleList', component: ArticleList },
        { path: '/article/add', name: 'ArticleAdd', component: ArticleAdd }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        { path: '/user/list', name: 'UserList', component: UserList }
        // { path: '/article/add', name: 'ArticleAdd', component: ArticleAdd }
      ]
    }
  ]
})
