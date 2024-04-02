import { AuthParams, IAuthentication } from '@/domain/usecases/auth/auth'
import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { AccountModel } from '@/domain/models/account-models'
import { Errors } from '@/domain/errors'

export class RemoteAuthentication implements IAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthParams, AccountModel>,
  ) {}

  async auth(params: AuthParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new Errors.InvalidCredentialError()
      default:
        throw new Errors.UnexpectedError()
    }
  }
}
