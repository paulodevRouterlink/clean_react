/* eslint-disable prettier/prettier */
import { IHttpGetClient } from '@/data/protocols/http'
import { ILoadSurveyList } from '@/domain/usecases'

export class RemoteLoadSurveyList implements ILoadSurveyList {
  constructor(
    private readonly URL: string,
    private readonly httpGetClient: IHttpGetClient,
  ) { }

  async loadAll(): Promise<void> {
    await this.httpGetClient.get({ url: this.URL })
    return Promise.resolve()
  }
}
