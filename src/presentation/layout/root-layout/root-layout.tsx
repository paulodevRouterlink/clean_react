import { Outlet } from 'react-router-dom'
import { Footer, Header } from '@/presentation/components/layout'
import Styled from './root-layout.module.scss'

const RootLayout = () => {
  return (
    <div className={Styled.survey_list}>
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}

export { RootLayout }
