import axios, {AxiosRequestConfig} from 'axios';

const instance = axios.create({
  baseURL: '',
  timeout: 5000
});

instance.interceptors.request.use();

instance.interceptors.response.use();

export interface Result<T=any> {
  code: number,
  message: string,
  data: T
}

export function get<T>(url: string, params?: AxiosRequestConfig['params'], restConfig?: Partial<AxiosRequestConfig>): Promise<T> {
  return instance.get(url, {
    params,
    ...restConfig
  });
}
