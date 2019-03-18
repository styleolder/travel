import Mock from 'mockjs'
import { authorization, user, getindex, getdetail, getcity } from './response/user'

Mock.mock(/\/authorization/, 'get', authorization)
Mock.mock(/\/user/, 'get', user)
Mock.mock(/\/index/, 'get', getindex)
Mock.mock(/\/detail/, 'get', getdetail)
Mock.mock(/\/city/, 'get', getcity)

Mock.setup({
  timeout: 0
})

export default Mock
