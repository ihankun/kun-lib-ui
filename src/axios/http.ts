import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { _httpClient } from './_httpClient'
import { _httpComn } from './_httpComn'
import { LoginSign } from '../types/http'

export class http {
  static create(config: AxiosRequestConfig, extraParams?: LoginSign): AxiosInstance {
    if (
      !extraParams ||
      Object.prototype.toString.call(extraParams) !== '[object Object]' ||
      Object.keys(extraParams).length === 0
    ) {
      return _httpComn.create(config)
    }
    return _httpClient.create(config, extraParams)
  }
}
