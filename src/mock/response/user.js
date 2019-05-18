import Mock from 'mockjs'
const Random = Mock.Random
const getUserInfo = options => {
  const template = {
    'str|2-4': 'rand',
    'name|5': 'groot',
    'age|+2': 98,
    'num|4-10': 0,
    'float|3-10.2-5': 0,
    'bool1|1-3': true,
    'obj|2': {
      a: 'aaa',
      b: 'bbb',
      c: 'ccc',
      d: 'dddd'
    },
    'arr|2': [1, 3, 4],
    func: () => 'bbbbbb',
    reg: /[1-9][a-z]/,
    email: Mock.mock('@email'),
    date: Mock.mock('@date') + ' ' + Random.time('hh:mm'),
    range: Random.range(1, 11, 3),
    img: Random.image(),
    cword: Random.cword('啊的父亲为虑哦', 3, 7),
    title: Random.title(),
    ctitle: Random.ctitle(),
    cname: Random.cname(),
    name: Random.name(),
    url: Random.url('https', 'a.com'),
    region: Random.region(),
    increment: Random.increment()
  }

  return Mock.mock(template)
}

export { getUserInfo }
