/* eslint-disable prettier/prettier */
import {  Authentication,  IAuthentication} from '@/domain/usecases/auth/auth'
import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { Errors } from '@/domain/errors'

export class RemoteAuthentication implements IAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<RemoteAuthentication.Model>,
  ) { }

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new Errors.InvalidCredentialsError()
      default:
        throw new Errors.UnexpectedError()
    }
  }
}

export namespace RemoteAuthentication {
  export type Model = Authentication.Model
}
