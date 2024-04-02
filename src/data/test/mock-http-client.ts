import { HttpPostClient } from '../protocols'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post(url: string): Promise<void> {
    this.url = url
    return Promise.resolve()
  }
}
