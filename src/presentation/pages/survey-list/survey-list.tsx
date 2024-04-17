import { FC } from 'react'
import { Error, SurveyContentList } from './components'
import { ILoadSurveyList } from '@/domain/usecases'
import { useSurveyList } from './hook/useSurveyList'
import Styled from './survey-list.module.scss'

type SurveyProps = {
  loadSurveyList: ILoadSurveyList
}

const SurveyList: FC<SurveyProps> = ({ loadSurveyList }) => {
  const { state } = useSurveyList({ loadSurveyList })

  return (
    <div className={Styled.survey_list__content}>
      <h2>Enquete</h2>
      {state.error ? (
        <Error state={state} />
      ) : (
        <SurveyContentList state={state} />
      )}
    </div>
  )
}

export { SurveyList }
export type { SurveyProps }
