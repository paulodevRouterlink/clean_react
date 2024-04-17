/* eslint-disable prettier/prettier */
import { HttpGetClient, HttpStatusCode } from '@/data/protocols/http'
import { Errors } from '@/domain/errors'
import { ILoadSurveyList, LoadSurveyList } from '@/domain/usecases'

export class RemoteLoadSurveyList implements ILoadSurveyList {
  constructor(
    private readonly URL: string,
    private readonly httpGetClient: HttpGetClient<RemoteLoadSurveyList.Model[]>,
  ) { }

  async loadAll(): Promise<LoadSurveyList.Model[]> {
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

export namespace RemoteLoadSurveyList {
  export type Model = LoadSurveyList.Model
}
