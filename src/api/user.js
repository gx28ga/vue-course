import axios from './index'

const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getUserInfo',
    method: 'post',
    data: { userId }
  })
}

export { getUserInfo }
