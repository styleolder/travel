import axios from '@/lib/axios'
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
    url: '/api/user',
    method: 'get',
    data: {
      username,
      passsword
    }
  })
}
export const formgroup = (data) => {
  // return axios.request({
  //   url: 'http://127.0.0.1/formgroup',
  //   method: 'post',
  //   data: data
  // })
  return new Promise((resolve, reject) => {
    if (data['name'] === 'style') {
      resolve({
        code: 200,
        name: '验证通过'
      })
    } else {
      resolve({
        code: 401,
        name: '验证不通过'
      })
    }
  })
}
export const authorization = () => {
  return axios.request({
    url: '/api/authorization',
    method: 'get'
  })
}
export const getindex = () => {
  return axios.request({
    url: '/api/index',
    method: 'get'
  })
}
export const getCity = () => {
  return axios.request({
    url: '/api/city',
    method: 'get'
  })
}
export const getdetail = ({ id }) => {
  return axios.request({
    url: '/api/detail',
    method: 'get',
    data: {
      id
    }
  })
}
