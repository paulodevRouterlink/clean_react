import { FC } from 'react'
import { Icon, IconName } from '@/presentation/components/ui'
import { LoadSurveyList } from '@/domain/usecases'
import Styled from './card-survey.module.scss'

type CardSurveyProps = {
  survey: LoadSurveyList.Model
}

const CardSurvey: FC<CardSurveyProps> = ({ survey }) => {
  const icon = survey.didAnswer ? IconName.thumbUp : IconName.thumbDown

  return (
    <li className={Styled.survey_wrap}>
      <div className={Styled.survey_content}>
        <Icon icon={icon} className={Styled.icon_container} />
        <time>
          <span data-testid="day" className={Styled.day}>
            {survey.date.getDate().toString().padStart(2, '0')}
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
