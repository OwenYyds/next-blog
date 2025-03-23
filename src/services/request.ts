/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from 'axios'
import { getToken } from './token'
import { ApiResponse } from '@/modal/apiResponse'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
  timeout: 10000,
})

const cancelTokens: Record<string, CancelTokenSource> = {}

instance.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      if (config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Request Error:', error.response || error.message)
    return Promise.reject(error)
  }
)

const request = async <T>(
  method: AxiosRequestConfig['method'],
  url: string,
  params?: Record<string, any> | URLSearchParams,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  const options: AxiosRequestConfig = { method, url, ...config }

  if (method === 'get') {
    options.params = params
  } else {
    options.data = params
  }

  if (!options.headers) {
    options.headers = { 'Content-Type': 'application/json' }
  }

  const response: AxiosResponse<ApiResponse<T>> = await instance(options)
  return response.data
}

export const createApi = <T>(
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  url: string,
  data?: any,
  config?: AxiosRequestConfig & { cancelKey?: string } // 添加 cancelKey
) => {
  if (config?.cancelKey) {
    if (cancelTokens[config.cancelKey]) {
      cancelTokens[config.cancelKey].cancel(
        'Request canceled due to a new request.'
      )
    }
    const source = axios.CancelToken.source()
    config.cancelToken = source.token
    cancelTokens[config.cancelKey] = source
  }

  return request<T>(method, url, data, config)
}

export default request
