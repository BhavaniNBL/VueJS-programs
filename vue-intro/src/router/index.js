import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld1 from '@/components/HelloWorld1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld1',
      component: HelloWorld1
    }

  ]
})
