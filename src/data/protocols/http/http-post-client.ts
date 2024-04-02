type HttpPostParams = {
  url: string
}

interface HttpPostClient {
  post(params: HttpPostParams): Promise<void>
}

export type { HttpPostClient, HttpPostParams }
