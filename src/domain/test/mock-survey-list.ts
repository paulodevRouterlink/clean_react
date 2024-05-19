import { faker } from '@faker-js/faker'
import { ILoadSurveyList, LoadSurveyList } from '@/domain/usecases'

export const mockSurveyModel = (): LoadSurveyList.Model => ({
  id: faker.string.uuid(),
  question: faker.word.words(),
  didAnswer: faker.datatype.boolean(),
  date: faker.date.recent(),
})

export const mockLoadSurveyList = (): LoadSurveyList.Model[] => [
  mockSurveyModel(),
  mockSurveyModel(),
  mockSurveyModel(),
]

export class LoadSurveyListSpy implements ILoadSurveyList {
  callsCount: number = 0
  surveys = mockLoadSurveyList()

  async loadAll(): Promise<LoadSurveyList.Model[]> {
    this.callsCount++
    return this.surveys
  }
}
