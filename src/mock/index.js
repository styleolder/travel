import Mock from 'mockjs'
import { getCityInfo } from './response/city'

Mock.mock('http://127.0.0.1:8080/api/index.json', getCityInfo)

export default Mock
