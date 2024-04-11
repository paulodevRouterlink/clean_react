import { FC, memo } from 'react'
import Styled from './header.module.scss'

type HeaderProps = {
  heading?: string
  logo?: string
}

const Head: FC<HeaderProps> = ({
  heading = '4Dev - Enquete para programadores',
  logo = '/logo.png',
}) => {
  return (
    <header className={Styled.header}>
      <img src={logo} alt="Logotipo" />
      <h1>{heading}</h1>
    </header>
  )
}

export const Header = memo(Head)
