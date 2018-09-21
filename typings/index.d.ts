import { AxiosRequestConfig, AxiosResponse } from 'axios'
export declare type Grabbi = (url: string, opts?: AxiosRequestConfig) => Promise<{ doc: HTMLDocument, res: AxiosResponse }>
export default Grabbi
