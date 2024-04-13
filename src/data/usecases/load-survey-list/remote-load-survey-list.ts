/* eslint-disable prettier/prettier */
import { HttpStatusCode, IHttpGetClient } from '@/data/protocols/http'
import { Errors } from '@/domain/errors'
import { ILoadSurveyList } from '@/domain/usecases'

export class RemoteLoadSurveyList implements ILoadSurveyList {
  constructor(
    private readonly URL: string,
    private readonly httpGetClient: IHttpGetClient,
  ) { }

  async loadAll(): Promise<void> {
    const httpResponse = await this.httpGetClient.get({ url: this.URL })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break
      default:
        throw new Errors.UnexpectedError()
    }
  }
}
