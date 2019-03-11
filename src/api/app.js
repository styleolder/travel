import axios from 'axios'
export const getUserName = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if (!err) {
        resolve({
          code: 200,
          info: {
            username: 'hello vue'
          }
        })
      } else {
        reject(err)
      }
    })
  })
}
export const userlogin = ({username, passsword}) => {
  return axios.request({
    url: '/api/user.json',
    method: 'get',
    data: {
      username,
      passsword
    }
  })
  }
