import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '西安'
  },
  actions: {
    changeCity (ctx, cityname) {
      ctx.commit('changeCity', cityname)
    }
  },
  mutations: {
    changeCity (state, cityname) {
      state.city = cityname
    }
  }
})
