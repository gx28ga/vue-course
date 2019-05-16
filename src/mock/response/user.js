import Mock from 'mockjs'

const getUserInfo = (options) => {
  const template = {
    'str|2-4': 'rand'
  }

  return Mock.mock(template)
}

export { getUserInfo }
