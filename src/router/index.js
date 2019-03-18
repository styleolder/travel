import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './router'
import store from '@/store'
import clonedeep from 'clonedeep'
import { setTitle, setToken, getToken } from '@/lib/util'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  const token = getToken()
  if (token) {
    if (!store.state.router.hasGetRules) {
      store.dispatch('authorization').then(rules => {
        store.dispatch('concatRoutes', rules).then(routers => {
          router.addRoutes(clonedeep(routers))
          next({...to, replace: true})
        }).catch(() => {
          setToken('')
          next({name: 'Login'})
        })
      })
    } else {
      if (to.name === 'Login') next({ name: 'Home' })
      else next()
    }
  } else {
    if (to.name === 'Login') next()
    else next({ name: 'Login' })
  }
})
// const HAS_LOGINED = true
// router.beforeEach((to, from, next) => {
//   to.meta && setTitle(to.meta.title)
//   if (to.name === 'Login') {
//     next()
//   } else if (to.name !== 'Login') {
//     if (getToken()) next()
//     else next({name: 'Login'})
//   }
// })
export default router
