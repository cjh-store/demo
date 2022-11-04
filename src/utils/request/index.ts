import axios from 'axios'
import type { CreateAxiosDefaults } from 'axios'
import { reqResolve, reqReject } from './interceptors.req'
import { resResolve, resReject } from './interceptors.res'

interface AxiosConfig extends CreateAxiosDefaults {
  returnAll: boolean // false-只返回data数据 true-返回全部数据(包括code.msg)
}

/**
 * @description axios初始化
 */
const server = axios.create({
  timeout: 30 * 1000,
  headers: {
    // 配后端数据的接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
    'Content-Type': 'application/json;charset=UTF-8',
  },
  returnAll: false, // false-只返回data数据 true-返回全部数据(包括code,msg...)
} as AxiosConfig)

/**
 * @description axios请求拦截器
 */
server.interceptors.request.use(reqResolve, reqReject)

/**
 * @description axios响应拦截器
 */
server.interceptors.response.use(resResolve, resReject)

export default server
