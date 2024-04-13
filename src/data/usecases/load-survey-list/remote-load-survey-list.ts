/* eslint-disable prettier/prettier */
import { HttpGetClient, HttpStatusCode } from '@/data/protocols/http'
import { Errors } from '@/domain/errors'
import { SurveyModel } from '@/domain/models'
import { ILoadSurveyList } from '@/domain/usecases'

export class RemoteLoadSurveyList implements ILoadSurveyList {
  constructor(
    private readonly URL: string,
    private readonly httpGetClient: HttpGetClient<SurveyModel[]>,
  ) { }

  async loadAll(): Promise<SurveyModel[]> {
    const httpResponse = await this.httpGetClient.get({ url: this.URL })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.noContent:
        return []
      default:
        throw new Errors.UnexpectedError()
    }
  }
}
