import { FC, memo } from 'react'
import Styled from './footer.module.scss'

const Footer: FC = memo(() => <footer className={Styled.footer} />)

Footer.displayName = 'Footer'
export { Footer }
