import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home').default
    },
    {
      path: '/binary',
      name: 'binary',
      component: require('@/components/Binary').default
    },
    {
      path: '/circle',
      name: 'circle',
      component: require('@/components/Circle').default
    },
    {
      path: '/digital',
      name: 'digital',
      component: require('@/components/Digital').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
