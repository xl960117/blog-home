// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import moment from 'moment'
import Lockr from 'lockr'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import http from './assets/js/http'
import _g from './assets/js/global'

import './assets/css/global.css'
import './assets/css/base.css'
import './assets/css/element.css'

const imgUrl = 'http://localhost:3001/'
let HOST = 'http://localhost:3001/'

axios.defaults.baseURL = HOST
axios.defaults.headers['Content-Type'] = 'application/json'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.mixin(http)
Vue.mixin(_g)

window.HOST = HOST
window.imgUrl = imgUrl
window.axios = axios
window.moment = moment
window.Lockr = Lockr

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
