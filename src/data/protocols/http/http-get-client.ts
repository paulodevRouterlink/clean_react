/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpResponse } from '.'

export type HttpGetParams = {
  url: string
  headers?: any
}

export interface HttpGetClient<R = any> {
  get(params: HttpGetParams): Promise<HttpResponse<R>>
}
