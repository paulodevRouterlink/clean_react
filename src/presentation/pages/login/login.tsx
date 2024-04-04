import { FC } from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import { Button, Input } from '@/presentation/components/ui'
import { Footer, Header } from '@/presentation/components/layout'
import Styled from './login.module.scss'

const Login: FC = () => {
  return (
    <main className={Styled.login}>
      <Header
        props={{
          heading: '4Dev - Enquete para programadores',
          logo: '/logo.png',
        }}
      />

      <form className={Styled.form} autoComplete="off">
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
          error={false}
          helperText="Dados inválidos"
        />

        <Button
          data-testid="submit"
          disabled
          sx={{ width: '40%' }}
          size="small"
        >
          Entrar
          <AiOutlineLogin size={20} />
        </Button>

        <span className={Styled.link}>Criar conta</span>
      </form>

      <Footer />
    </main>
  )
}

export { Login }
