import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './router'
import { setTitle } from '@/lib/util'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  next()
})
// const HAS_LOGINED = true
// router.beforeEach((to, from, next) => {
//   to.meta && setTitle(to.meta.title)
//   if (to.name === 'Home') {
//     next()
//   } else if (to.name !== 'Login') {
//     if (HAS_LOGINED) next()
//     else next({name: 'Login'})
//   } else {
//     if (HAS_LOGINED) next({name: 'Home'})
//     else next()
//   }
// })
export default router
