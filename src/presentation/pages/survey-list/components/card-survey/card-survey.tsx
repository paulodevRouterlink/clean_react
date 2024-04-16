import { FC } from 'react'
import { Icon, IconName } from '@/presentation/components/ui'
import Styled from './card-survey.module.scss'
import { SurveyModel } from '@/domain/models'

type CardSurveyProps = {
  survey: SurveyModel
}

const CardSurvey: FC<CardSurveyProps> = ({ survey }) => {
  return (
    <li>
      <div className={Styled.survey_content}>
        <Icon icon={IconName.thumbUp} className={Styled.icon_container} />
        <time>
          <span data-testid="day" className={Styled.day}>
            {survey.date.getDate()}
          </span>
          <span data-testid="month" className={Styled.month}>
            {survey.date
              .toLocaleString('pt-BR', { month: 'short' })
              .replace('.', '')}
          </span>
          <span data-testid="year" className={Styled.year}>
            {survey.date.getFullYear()}
          </span>
        </time>
        <p data-testid="question">{survey.question}</p>
      </div>
      <footer>Ver Resultado</footer>
    </li>
  )
}

export { CardSurvey }
