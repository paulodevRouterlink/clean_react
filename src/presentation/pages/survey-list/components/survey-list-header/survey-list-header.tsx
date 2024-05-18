import Styled from './survey.module.scss'

const SurveyHeader = () => {
  return (
    <header className={Styled.survey_list__header}>
      <div className={Styled.header__content}>
        <img src="/logo.png" alt="Logotipo" />
        <div className={Styled.header__wrap}>
          <span>Username</span>
          <a href="#">Sair</a>
        </div>
      </div>
    </header>
  )
}

export { SurveyHeader }
