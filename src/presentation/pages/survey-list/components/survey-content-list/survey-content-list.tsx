import { FC } from 'react'
import {
  CardSurvey,
  CardSurveyEmpty,
} from '@/presentation/pages/survey-list/components'
import Styled from './survey-content-list.module.scss'
import { SurveyState } from '@/presentation/pages/survey-list/types'

const SurveyContentList: FC<SurveyState.Props> = ({ state }) => {
  return (
    <ul data-testid="survey-list" className={Styled.survey_content}>
      {state.surveys.length ? (
        state.surveys.map((props) => (
          <CardSurvey key={props.id} survey={props} />
        ))
      ) : (
        <CardSurveyEmpty />
      )}
    </ul>
  )
}

export { SurveyContentList }
