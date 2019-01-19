import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import mine from '@/pages/mine/mine'
import release from '@/pages/release/release'
import aboutme from '@/pages/aboutme/aboutme'
import care from '@/pages/care/care'
import login from '@/pages/mine/component/login'
import update from '@/pages/mine/component/update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/mine',
      name: 'mine',
      component: mine
    }, {
      path: '/release',
      name: 'release',
      component: release
    }, {
      path: '/aboutme',
      name: 'aboutme',
      component: aboutme
    }, {
      path: '/care',
      name: 'care',
      component: care
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/update',
      name: 'update',
      component: update
    }
  ]
})
