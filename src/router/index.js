import Vue from 'vue'
import Router from 'vue-router'
import Pic from '@/components/Pic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pic',
      component: Pic
    }
  ]
})
