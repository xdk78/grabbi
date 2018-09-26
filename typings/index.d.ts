import { AxiosRequestConfig, AxiosResponse } from 'axios';
declare const grabbi: (url: string, opts?: AxiosRequestConfig) => Promise<{ doc: HTMLDocument, res: AxiosResponse }>;
export default grabbi;
