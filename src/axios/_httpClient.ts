import axios, { AxiosRequestConfig } from 'axios'
import { ProofTime } from '../utils/proof.time'
import { LoginSign } from '../types/http'
import { encrypt } from './encrypt'

export class _httpClient {
  constructor() {}
  static create(config: AxiosRequestConfig, extraParams: LoginSign) {
    const _httpClientService = axios.create(config)

    _httpClientService.interceptors.response.use(
      (response) => {
        if (response.headers.date) {
          ProofTime.proofread(response.headers.date)
        }

        if (response.request.responseType === 'blob') {
          return Promise.resolve(response.data)
        }

        switch (response.data.code) {
          case process.env.VUE_APP_MAGIC_VAL:
            return response.data.data
          case '9990':
          case '9991':
          case '9992':
          case '9994':
          case '9996':
          case '9997':
          case '9998':
          case '9999':
          default:
            return Promise.reject(response.data.message || 'Error')
        }
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    _httpClientService.interceptors.request.use(
      (request) => {
        if (typeof extraParams !== 'object' || Object.keys(extraParams).length === 0) {
          return request
        }
        Object.entries({
          'Cache-Control': 'no-cache',
          gateway: 'app',
          Authorization: encrypt.selfAuth(request, extraParams),
        }).forEach(([key, value]) => (request.headers[key] = value))
        return request
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    return _httpClientService
  }
}
