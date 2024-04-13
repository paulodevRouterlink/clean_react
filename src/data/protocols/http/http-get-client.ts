/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpResponse } from '.'

export type HttpGetParams = {
  url: string
}

export interface IHttpGetClient<R = any> {
  get(params: HttpGetParams): Promise<HttpResponse<R>>
}
