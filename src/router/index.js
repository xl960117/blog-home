import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '../components/home'
import Login from '../components/user/login'
import ArticleList from '../components/article/list'
import ArticleAdd from '../components/article/add'
import ArticleEdit from '../components/article/edit'
import ArticleDetail from '../components/article/detail'
import UserList from '../components/user/list'
import UserAdd from '../components/user/add'
import UserEdit from '../components/user/edit'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'login', component: Login },
    { path: '/home', name: 'Home', component: Home, redirect: { name: 'ArticleList' } },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        { path: '/article/list', name: 'ArticleList', component: ArticleList },
        { path: '/article/add', name: 'ArticleAdd', component: ArticleAdd },
        { path: '/article/edit/:id', name: 'ArticleEdit', component: ArticleEdit },
        { path: '/article/detail/:id', name: 'ArticleDetail', component: ArticleDetail }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        { path: '/user/list', name: 'UserList', component: UserList },
        { path: '/user/add', name: 'UserAdd', component: UserAdd },
        { path: '/user/edit/:id', name: 'UserEdit', component: UserEdit }
      ]
    }
  ]
})
