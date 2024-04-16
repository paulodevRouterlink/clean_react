import { FC } from 'react'
import { CardSurvey, CardSurveyEmpty } from './components'
import Styled from './survey-list.module.scss'

const SurveyList: FC = () => {
  return (
    <div className={Styled.survey_list__content}>
      <h2>Enquete</h2>
      <ul data-testid="survey-list">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardSurvey key={index} />
        ))}
        <CardSurveyEmpty />
      </ul>
    </div>
  )
}

export { SurveyList }
