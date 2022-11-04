import type { AxiosResponse } from 'axios'
import router from '@/router'

const successCode = [200, 0, '200', '0']
const CODE_MESSAGE: any = {
  200: '服务器成功返回请求数据',
  201: '新建或修改数据成功',
  202: '一个请求已经进入后台排队(异步任务)',
  204: '删除数据成功',
  400: '发出信息有误',
  401: '用户没有权限(令牌失效、用户名、密码错误、登录过期)',
  402: '令牌过期',
  403: '用户得到授权，但是访问是被禁止的',
  404: '访问资源不存在',
  406: '请求格式不可得',
  410: '请求资源被永久删除，且不会被看到',
  500: '服务器发生错误',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时',
}

function handleData({ data, status, statusText }: AxiosResponse) {
  // 若data.code存在，覆盖默认code
  let code = data && data['code'] ? data['code'] : status
  // 若code属于操作正常code，则status修改为200
  if (successCode.includes(data['code'])) code = 200
  switch (code) {
    case 200:
      // 业务层级错误处理，以下是假定restful有一套统一输出格式(指不管成功与否都有相应的数据格式)情况下进行处理
      // 例如响应内容：
      // 错误内容：{ code: 1, msg: '非法参数' }
      // 正确内容：{ code: 200, data: {  }, msg: '操作正常' }
      // return data
      return data
    case 401:
      router.push({ path: '/login', replace: true }).then(() => {})
      break
    case 403:
      router.push({ path: '/403' }).then(() => {})
      break
  }
  // 异常处理
  // 若data.msg存在，覆盖默认提醒消息
  const errMsg = `${
    data && data['msg']
      ? data['msg']
      : CODE_MESSAGE[code]
      ? CODE_MESSAGE[code]
      : statusText
  }`
  $g.notify({
    message: errMsg,
    type: 'error',
  })
  return Promise.reject(data)
}

export async function resResolve(res: AxiosResponse) {
  return handleData(res)
}

export function resReject(error: any) {
  const { response } = error
  if (response === undefined) {
    $g.notify({
      message:
        '连接后台接口失败，可能由以下原因造成：后端不支持跨域CORS、接口地址不存在、请求超时等，请联系管理员排查后端接口问题 ',
      type: 'error',
    })
    return {}
  } else return handleData(response)
}
