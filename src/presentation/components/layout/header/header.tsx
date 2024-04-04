import { FC } from 'react'
import Styled from './header.module.scss'

type HeaderProps = {
  props: {
    heading: string
    logo: string
  }
}

const Header: FC<HeaderProps> = ({ props: { heading, logo } }) => {
  return (
    <header className={Styled.header}>
      <img src={logo} alt="Logotipo" />
      <h1>{heading}</h1>
    </header>
  )
}

export { Header }
