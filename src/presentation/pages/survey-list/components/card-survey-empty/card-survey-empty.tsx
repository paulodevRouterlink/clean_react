import { FC } from 'react'
import Styled from './card-survey-empty.module.scss'

const CardSurveyEmpty: FC = () => (
  <>
    <li className={Styled.card_survey_empty}></li>
    <li className={Styled.card_survey_empty}></li>
    <li className={Styled.card_survey_empty}></li>
    <li className={Styled.card_survey_empty}></li>
  </>
)

export { CardSurveyEmpty }
