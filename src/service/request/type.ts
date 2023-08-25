import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface XXInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface XXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: XXInterceptors<T>
}
