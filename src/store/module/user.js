import { userlogin, authorization } from '@/api/app'
import { setToken } from '@/lib/util'
const state = {
  userName: 'style'
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}
const actions = {
  userlogin ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      userlogin({ userName, password }).then(res => {
        if (res.status === 200 && res.data.ret) {
          setToken(res.data.data.toke)
          resolve()
        } else {
          console.log('登录失败')
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  authorization ({ commit }) {
    return new Promise((resolve, reject) => {
      authorization().then(res => {
        if (res.data.ret !== true) {
          reject(new Error('token error'))
        } else {
          console.log(res.data.data.rules.page)
          resolve(res.data.data.rules.page)
        }
      }).catch(error => {
        reject(error)
      })
    })
  }
}
export default {
  state,
  mutations,
  actions
}
