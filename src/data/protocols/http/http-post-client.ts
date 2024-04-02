import { HttpResponse } from './index'

type HttpPostParams<T> = {
  url: string
  body?: T
}

interface HttpPostClient<T, R> {
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>
}

export type { HttpPostClient, HttpPostParams }
