import Vue from 'vue'
import Router from 'vue-router'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'
import Index from '../views/Index.vue'
import Main from '../views/Main.vue'
import Table from '../views/Table.vue'
import Chart from '../views/Chart.vue'
import Form from '../views/Form.vue'
import Tabs from '../views/Tabs.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Signin',
      component:Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component:Signup
    },{
      path: '/home1',
      component: Index,
      children: [
        { path: '/', component: Main, name: '导航一'},
        { path: '/table', component: Table, name: 'Table' },
        { path: '/chart', component: Chart, name: 'Chart' },
      ]
    },
    {
      path: '/home2',
      component: Index,
      children: [
        { path:'/', component: Main, name:'导航二'},
        { path: '/form', component: Form, name: 'Form'},
        { path:'/tabs',component:Tabs,name:'Tabs'}
      ]
    },
    {
      path: '/home3',
      component: Index,
      name: '导航三'
    },
    {
      path: '/home4',
      component: Index,
      name: '导航四'
    },
  ]
})
