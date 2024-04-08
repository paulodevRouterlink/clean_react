import { FC } from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import { Button, FormStatus, Input } from '@/presentation/components/ui'
import { Footer, Header } from '@/presentation/components/layout'
import { IValidation } from '@/presentation/protocols/validation'
import { IAuthentication } from '@/domain/usecases/auth'
import { useLogin } from './hook/useLogin'
import Styled from './login.module.scss'
import { FormContext } from '@/presentation/contexts/form'

export type LoginPageProps = {
  validation: IValidation
  authentication: IAuthentication
}

const Login: FC<LoginPageProps> = ({ validation, authentication }) => {
  const { handlerLogin, handleChange, state } = useLogin({
    validation,
    authentication,
  })

  return (
    <main className={Styled.login}>
      <Header />

      <FormContext.Provider value={state}>
        <form
          data-testid="form"
          onSubmit={handlerLogin}
          className={Styled.form}
        >
          <h2>Login</h2>

          <Input
            type="email"
            name="email"
            placeholder="Informe seu email"
            onChange={handleChange}
            value={state.email}
            message={state.emailError}
          />

          <Input
            type="password"
            name="password"
            placeholder="Informe sua senha"
            onChange={handleChange}
            value={state.password}
            message={state.passwordError}
          />

          <Button
            data-testid="submit"
            disabled={!!state.emailError && !!state.passwordError}
            sx={{ width: '40%' }}
            size="small"
            isLoading={state.isLoading}
          >
            Entrar
            <AiOutlineLogin size={20} />
          </Button>

          <span className={Styled.link}>Criar conta</span>

          <FormStatus />
        </form>
      </FormContext.Provider>

      <Footer />
    </main>
  )
}

export { Login }
