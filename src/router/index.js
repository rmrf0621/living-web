import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/views/index'
import home from '@/views/home/home'
import living from '@/views/living/living'
import house from '@/views/house/house'
import sports from '@/views/sports/sports'
import subscription from '@/views/subscription/subscription'
import download from '@/views/download/download'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/living',
          name: 'living',
          component: living
        },
        {
          path: '/sports',
          name: 'sports',
          component: sports
        },
        {
          path: '/subscription',
          name: 'subscription',
          component: subscription
        },
        {
          path: '/download',
          name: 'download',
          component: download
        }
      ]
    },
    {
      path: '/house/:id',
      name: 'house',
      component: house
    }
  ]
})
