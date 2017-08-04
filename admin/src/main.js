// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'assets/css/bootstrap.css'
import 'assets/js/bootstrap.js'
import echarts from 'echarts'
import element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.config.productionTip = false
Vue.use(element);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

