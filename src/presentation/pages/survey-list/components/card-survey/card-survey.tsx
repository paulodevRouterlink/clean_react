import { FC } from 'react'
import { Icon, IconName } from '@/presentation/components/ui'
import Styled from './card-survey.module.scss'

const CardSurvey: FC = () => {
  return (
    <li>
      <div className={Styled.survey_content}>
        <Icon icon={IconName.thumbDown} className={Styled.icon_container} />
        <time>
          <span className={Styled.day}>22</span>
          <span className={Styled.month}>03</span>
          <span className={Styled.year}>2020</span>
        </time>
        <p>Qual é seu framework favorito na web?</p>
      </div>
      <footer>Ver Resultado</footer>
    </li>
  )
}

export { CardSurvey }
