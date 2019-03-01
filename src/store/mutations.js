import vue from 'vue'
const mutations = {
  changeCity (state, cityname) {
    state.city = cityname
    try {
      localStorage.city = cityname
    } catch (e) {
    }
  },
  loginChangeCity (state, params) {
    state.city = params.cityname
    try {
      localStorage.city = params.cityname
    } catch (e) {
    }
  },
  loginSetCity (state) {
    vue.set(state, 'appversion', 'v2.0')
  }
}
export default mutations
