import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import mine from '@/pages/mine/mine'
import release from '@/pages/release/release'
import aboutme from '@/pages/aboutme/aboutme'
import care from '@/pages/care/care'
import login from '@/pages/mine/component/login'
import update from '@/pages/mine/component/update'
import updUserInfo from '@/pages/mine/component/updUserInfo'
import detail from '@/pages/common/detail'
import lost from '@/pages/lost/lost'
import others from '@/pages/others/others'
import mall from '@/pages/mall/mall'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
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
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/update',
      name: 'update',
      component: update
    }, {
      path: '/updUserInfo',
      name: 'updUserInfo',
      component: updUserInfo
    }, {
      path: '/detail',
      name: 'detail',
      component: detail
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/lost',
      name: 'lost',
      component: lost
    }, {
      path: '/mall',
      name: 'mall',
      component: mall
    }, {
      path: '/others',
      name: 'others',
      component: others
    }
  ]
})
