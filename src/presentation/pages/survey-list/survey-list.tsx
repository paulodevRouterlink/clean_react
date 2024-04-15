import { FC } from 'react'
import { Footer } from '@/presentation/components/layout'
import Styled from './survey-list.module.scss'
import { CardSurvey, HeaderSurvey } from './components'

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
