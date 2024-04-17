import { SurveyModel } from '@/domain/models'
import { mockLoadSurveyList } from '@/domain/test'
import { ILoadSurveyList } from '@/domain/usecases'

export class LoadSurveyListSpy implements ILoadSurveyList {
  callsCount: number = 0
  surveys = mockLoadSurveyList()

  async loadAll(): Promise<SurveyModel[]> {
    this.callsCount++
    return this.surveys
  }
}
