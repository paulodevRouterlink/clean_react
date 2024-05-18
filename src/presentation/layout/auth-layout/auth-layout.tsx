import { Outlet } from 'react-router-dom'
import { Footer } from '@/presentation/components/layout'
import Styled from './auth-layout.module.scss'

const AuthLayout = () => {
  return (
    <main className={Styled.main_container}>
      <header>
        <img src="/logo.png" alt="Logotipo" />
        <h1>4Dev - Enquete para programadores</h1>
      </header>

      <Outlet />

      <Footer />
    </main>
  )
}

export { AuthLayout }
