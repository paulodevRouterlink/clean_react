import { FC, useState } from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import { Button, Input } from '@/presentation/components/ui'
import { Footer, Header } from '@/presentation/components/layout'
import { FormContext } from '@/presentation/contexts/form'
import Styled from './login.module.scss'

type StateProps = {
  isLoading: boolean
}

const Login: FC = () => {
  const [state] = useState<StateProps>({ isLoading: false })

  return (
    <main className={Styled.login}>
      <Header
        props={{
          heading: '4Dev - Enquete para programadores',
          logo: '/logo.png',
        }}
      />

      <FormContext.Provider value={state}>
        <form className={Styled.form} autoComplete="off">
          <h2>Login</h2>

          <Input
            type="email"
            name="email"
            placeholder="Informe seu email"
            error={true}
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
      </FormContext.Provider>

      <Footer />
    </main>
  )
}

export { Login }
