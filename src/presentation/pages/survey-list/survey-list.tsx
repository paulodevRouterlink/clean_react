import { FC } from 'react'
import { Error, SurveyContentList } from './components'
import { useSurveyList } from './hook/useSurveyList'
import { SurveyState } from './types'
import Styled from './survey-list.module.scss'

const SurveyList: FC<SurveyState.Types> = ({ loadSurveyList }) => {
  const { state, setState } = useSurveyList({ loadSurveyList })

  return (
    <div className={Styled.survey_list__content}>
      <h2>Enquete</h2>
      {state.error ? (
        <Error props={{ state, setState }} />
      ) : (
        <SurveyContentList state={state} />
      )}
    </div>
  )
}

export { SurveyList }
