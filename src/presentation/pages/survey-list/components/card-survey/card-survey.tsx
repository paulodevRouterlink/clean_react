import { FC } from 'react'
import { HiHandThumbDown } from 'react-icons/hi2'
import Styled from './card-survey.module.scss'

const CardSurvey: FC = () => {
  return (
    <li>
      <div className={Styled.survey_content}>
        <div
          className={[Styled.icon_wrapper, Styled.icon_wrapper__red].join(' ')}
        >
          <HiHandThumbDown className={Styled.icon} />
        </div>
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
