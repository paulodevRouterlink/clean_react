import { ILoadSurveyList, LoadSurveyList } from '@/domain/usecases'

export namespace SurveyState {
  export type Params = {
    surveys: LoadSurveyList.Model[]
    error: string
    reload: boolean
  }

  export type Props = {
    state: Params
  }

  export type Types = {
    loadSurveyList: ILoadSurveyList
  }
}
