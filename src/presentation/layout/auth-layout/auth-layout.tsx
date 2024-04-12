import { Outlet } from 'react-router-dom'
import { Footer, Header } from '@/presentation/components/layout'
import Styled from './auth-layout.module.scss'

const AuthLayout = () => {
  return (
    <main className={Styled.main_container}>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export { AuthLayout }
