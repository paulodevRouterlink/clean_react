import { FC, memo } from 'react'
import Styled from './header.module.scss'

const Head: FC = () => {
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

export const Header = memo(Head)
