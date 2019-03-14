import { routes, routermap } from '@/router/router'
const state = {
  routers: routes,
  hasGetRules: false
}
const mutations = {
  CONCAT_ROUTES(state, routerList) {
    state.routers = routerList.concat(routes)
    state.hasGetRules = true
  }
}
const getAccessRouterList = (routermap, rules) => {
  return routermap.filter(item => {
    if (rules[item.name] === true) {
      if (item.children) item.children = getAccessRouterList(item.children, rules)
      return true
    } else {
      return false
    }
  })
}
const actions = {
  concatRoutes({ commit }, rules) {
    return new Promise((resolve, reject) => {
      try {
        let routerList = []
        if (Object.entries(rules).every(item => item[1])) {
          routerList = routermap
        } else {
          routerList = getAccessRouterList(routermap, rules)
        }
        commit('CONCAT_ROUTES', routerList)
        resolve(state.routers)
      } catch (err) {
        reject(err)
      }
    })
  }
}
export default {
  state,
  mutations,
  actions
}
