import Vue from 'vue'
import Router from 'vue-router'
// 异步组件使用
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home'),
    },{
      path: '/City',
      name: 'City',
      component: () => import('@/pages/city/City')
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:() => import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior(to, from, savePositon){
    return {x:0, y:0}
  }
})
