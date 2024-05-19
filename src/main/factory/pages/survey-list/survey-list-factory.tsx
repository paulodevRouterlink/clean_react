import { FC } from 'react'
import { SurveyList } from '@/presentation/pages'
import { makeRemoteLoadSurveyList } from '../../usecases'

export const MakeSurveyList: FC = () => {
  return <SurveyList loadSurveyList={makeRemoteLoadSurveyList()} />
}
