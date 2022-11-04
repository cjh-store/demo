import type { AxiosRequestConfig } from 'axios'

export function reqResolve(config: AxiosRequestConfig) {
  const token = 123
  /**
   * * 加上 token
   */
  if (token && config.headers) config.headers['token'] = token

  return config
}

export function reqReject(error: any) {
  return Promise.reject(error)
}
