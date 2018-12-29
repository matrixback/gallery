import Vue from 'vue'
import Router from 'vue-router'
import Pic from '@/components/Pic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Pic',
      redirect: '/pic/women'
    },
    {
      path: '/pic/:category',
      name: 'Pic',
      component: Pic
    },
    {
      path: '/404',
      name: '404',
      component: () =>
      import('@/components/404')
    }
  ]
})
