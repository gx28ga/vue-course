import Mock from 'mockjs'
import { getUserInfo } from './response/user'
Mock.mock(/\/getUserInfo/, 'post', getUserInfo)
// Mock.setup({
//   timeout: '1000-6000'
// })
export default Mock
