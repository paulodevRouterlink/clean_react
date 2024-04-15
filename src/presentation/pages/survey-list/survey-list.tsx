import { FC } from 'react'
import { Footer } from '@/presentation/components/layout'
import { CardSurvey, HeaderSurvey } from './components'
import Styled from './survey-list.module.scss'

const SurveyList: FC = () => {
  return (
    <div className={Styled.survey_list}>
      <HeaderSurvey />

      <div className={Styled.survey_list__content}>
        <h2>Enquete</h2>
        <ul>
          {Array.from({ length: 3 }).map((_, index) => (
            <CardSurvey key={index} />
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  )
}

export { SurveyList }
