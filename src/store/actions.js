import { getUserName } from '@/api/app'
export default {
  changeCity (ctx, cityname) {
    ctx.commit('changeCity', cityname)
  },
  // updateUserName ({ commit }) {
  //   getUserName().then(res => {
  //     const { info: { username } } = res
  //     commit('SET_USER_NAME', username)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
  async updateUserName ({ commit }) {
    try {
      const { info: { username } } = await getUserName()
      commit('SET_USER_NAME', username)
    } catch (err) {
      console.log(err)
    }
  }
}
