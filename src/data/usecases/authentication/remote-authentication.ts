import { HttpPostClient, HttpStatusCode } from '@/data/protocols'
import { Errors } from '@/domain/errors/errors'
import { AccountModel } from '@/domain/models/account-models'
import { AuthParams } from '@/domain/usecases/auth/auth'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthParams, AccountModel>,
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
