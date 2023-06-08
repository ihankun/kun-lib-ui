import axios, { AxiosRequestConfig } from 'axios'
import { encrypt } from './encrypt'
import { ProofTime } from '../utils/proof.time'

export class _httpComn {
  static create(config: AxiosRequestConfig) {
    const httpService = axios.create(config)
    const cancelToken = axios.CancelToken

    const source = cancelToken.source()

    httpService.interceptors.response.use(
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
          case '9998':
            alert('鉴权信息格式有误, 请检查')
            break
          case '9990':
          case '9991':
          case '9992':
          case '9994':
          case '9996':
          case '9997':
          case '9999':
            if (
              !(
                window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost'
              )
            ) {
              alert('用户鉴权信息有误, 请重新登录!')
              sessionStorage.clear()
              window.location.href =
                window.location.protocol +
                '//' +
                window.location.hostname +
                (window.location.port ? ':' + window.location.port : '') +
                '/portal/'
            }
            return Promise.reject(response.data.message || 'Error')
          default:
            return Promise.reject(response.data.message || 'Error')
        }
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    httpService.interceptors.request.use(
      (request) => {
        if (
          window.sessionStorage.getItem('currentUser') === null &&
          window.sessionStorage.getItem('LOGIN-SOLE-SIGN') === null
        ) {
          if (
            !(window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost')
          ) {
            alert('未获取到用户信息, 请先登录!')
            sessionStorage.clear()
            window.location.href =
              window.location.protocol +
              '//' +
              window.location.hostname +
              (window.location.port ? ':' + window.location.port : '') +
              '/portal/'
          }
          request.cancelToken = source.token
          source.cancel('Operation canceled by the user.')
        } else {
          Object.entries({
            'Cache-Control': 'no-cache',
            Authorization: encrypt.auth(request),
          }).forEach(([key, value]) => (request.headers[key] = value))
        }
        return request
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    return httpService
  }
}
