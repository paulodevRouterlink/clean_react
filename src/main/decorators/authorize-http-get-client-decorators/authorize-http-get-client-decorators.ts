/* eslint-disable @typescript-eslint/no-unused-vars */
import { IGetStorage } from '@/data/protocols/cache'
import {
  HttpGetClient,
  HttpGetParams,
  HttpResponse,
} from '@/data/protocols/http'

export class AuthorizeHttpGetClientDecorator implements HttpGetClient {
  constructor(
    private readonly getStorage: IGetStorage,
    private readonly httpGetClient: HttpGetClient,
  ) {}

  async get(params: HttpGetParams): Promise<HttpResponse> {
    const account = this.getStorage.get('account')
    if (account?.accessToken) {
      Object.assign(params, {
        headers: Object.assign(params.headers || {}, {
          'x-access-token': account.accessToken,
        }),
      })
    }
    await this.httpGetClient.get(params)
    return null
  }
}
