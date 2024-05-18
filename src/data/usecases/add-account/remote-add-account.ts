/* eslint-disable prettier/prettier */
import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { Errors } from '@/domain/errors'
import { AddAccount, IAddAccount } from '@/domain/usecases'

export class RemoteAddAccount implements IAddAccount {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<RemoteAddAccount.Model>,
  ) { }

  async add(params: AddAccount.Params): Promise<AddAccount.Model> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.forbidden:
        throw new Errors.EmailInUseError()
      default:
        throw new Errors.UnexpectedError()
    }
  }
}

export namespace RemoteAddAccount {
  export type Model = AddAccount.Model
}
