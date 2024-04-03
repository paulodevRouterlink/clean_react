import { FC } from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import { Button, Input } from '@/presentation/components'
import Styled from './login.module.scss'

const Login: FC = () => {
  return (
    <main className={Styled.login}>
      <header className={Styled.header}>
        <img src="/logo.png" alt="Logotipo" />
        <h1>4Dev - Enquete para programadores</h1>
      </header>
      <form className={Styled.form}>
        <h2>Login</h2>

        <Input
          type="email"
          name="email"
          placeholder="Informe seu email"
          error={false}
          helperText="Dados inválidos"
        />

        <Input
          type="password"
          name="password"
          placeholder="Informe sua senha"
        />

        <Button sx={{ width: '40%' }} size="small">
          Entrar
          <AiOutlineLogin size={20} />
        </Button>

        <span className={Styled.link}>Criar conta</span>
      </form>
      <footer className={Styled.footer} />
    </main>
  )
}

export { Login }
