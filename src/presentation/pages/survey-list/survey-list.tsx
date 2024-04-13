import { FC } from 'react'
import { Footer } from '@/presentation/components/layout'
import Styled from './survey-list.module.scss'

const SurveyList: FC = () => {
  return (
    <div className={Styled.survey_list}>
      <header className={Styled.survey_list__header}>
        <div className={Styled.header__content}>
          <img src="/logo.png" alt="Logotipo" />
          <div className={Styled.header__wrap}>
            <span>Username</span>
            <a href="#">Sair</a>
          </div>
        </div>
      </header>
      <div className={Styled.survey_list__content}>
        <h2>Enquete</h2>
        <ul>
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={index}>
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
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export { SurveyList }
