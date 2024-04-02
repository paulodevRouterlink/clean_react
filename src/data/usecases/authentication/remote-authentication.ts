import { HttpPostClient } from '@/data/protocols'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { Errors } from '@/domain/errors/errors'
import { AuthParams } from '@/domain/usecases/auth/auth'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient,
  ) {}

  async auth(params: AuthParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break

      case HttpStatusCode.unauthorized:
        throw new Errors.InvalidCredentialError()

      default:
        throw new Errors.UnexpectedError()
    }
  }
}
