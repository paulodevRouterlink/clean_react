import { SurveyModel } from '@/domain/models'

export type SurveyStateProps = {
  state: {
    surveys: SurveyModel[]
    error: string
  }
}
