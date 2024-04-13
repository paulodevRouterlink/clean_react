import { SurveyModel } from '@/domain/models'

export interface ILoadSurveyList {
  loadAll(): Promise<SurveyModel>
}
