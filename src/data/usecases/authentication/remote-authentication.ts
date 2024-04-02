import { HttpPostClient } from '@/data/protocols'
import { AuthParams } from '@/domain/usecases/auth/auth'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {}

  async auth(params: AuthParams): Promise<void> {
    await this.httpPostClient.post({
      url: this.url,
      body: params,
    })
  }
}
