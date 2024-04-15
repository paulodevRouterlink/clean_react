import { FC } from 'react'
import Styled from './card-survey.module.scss'

const CardSurvey: FC = () => {
  return (
    <li>
      <div className={Styled.survey_content}>
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
