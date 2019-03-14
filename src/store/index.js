import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './gettersjs'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import router from './module/router'
// import saveLnLocal from './plugin/saveLnLocal'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    user,
    router
  }
  // plugins: [ saveLnLocal ]
})
