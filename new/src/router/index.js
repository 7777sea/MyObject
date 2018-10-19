import Vue from 'vue'
import Router from 'vue-router'
import Charts from '@/components/Charts'
import Index from '@/components/Index'
import Table from '@/components/Table'
import Form from '@/components/form'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/Charts',
      component: Charts,
    },
    {
      path:'/index',
      name:'Index',
      component:Index,
      // children:[
      //   {path:'index',component:Hello}
      // ]
    },
    {
      path: '/table',
      component: Table,
    },
    {
      path: '/form',
      component: Form,
    },
  ]
})
