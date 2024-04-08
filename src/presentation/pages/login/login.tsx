import { FC } from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import { Button, Input } from '@/presentation/components/ui'
import { Footer, Header } from '@/presentation/components/layout'
import { IValidation } from '@/presentation/protocols/validation'
import { IAuthentication } from '@/domain/usecases/auth'
import { useLogin } from './hook/useLogin'
import Styled from './login.module.scss'

export type LoginPageProps = {
  validation: IValidation
  authentication: IAuthentication
}

const Login: FC<LoginPageProps> = ({ validation, authentication }) => {
  const { register, errors, handlerLogin, handleChange, state } = useLogin({
    validation,
    authentication,
  })

  return (
    <main className={Styled.login}>
      <Header />

      <form onSubmit={handlerLogin} className={Styled.form} autoComplete="off">
        <h2>Login</h2>

        <Input
          {...register('email')}
          type="email"
          name="email"
          placeholder="Informe seu email"
          error={!!errors.email?.message}
          helperText={errors.email?.message}
          onChange={handleChange}
          value={state.email}
          message={state.emailError}
        />

        <Input
          {...register('password')}
          type="password"
          name="password"
          placeholder="Informe sua senha"
          error={!!errors.password?.message}
          helperText={errors.password?.message}
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
      </form>

      <Footer />
    </main>
  )
}

export { Login }
