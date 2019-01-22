export default {
  changeCity (state, cityname) {
    state.city = cityname
    try {
      localStorage.city = cityname
    } catch (e) {
    }
  }
}
