import { SurveyModel } from '@/domain/models'

export type SurveyStateParams = {
  surveys: SurveyModel[]
  error: string
  reload: boolean
}

export type SurveyStateProps = {
  state: SurveyStateParams
}
