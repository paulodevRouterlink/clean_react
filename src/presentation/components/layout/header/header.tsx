import { FC, memo } from 'react'
import Styled from './header.module.scss'

type HeaderProps = {
  props: {
    heading: string
    logo: string
  }
}

const Head: FC<HeaderProps> = ({ props: { heading, logo } }) => {
  return (
    <header className={Styled.header}>
      <img src={logo} alt="Logotipo" />
      <h1>{heading}</h1>
    </header>
  )
}

export const Header = memo(Head)
