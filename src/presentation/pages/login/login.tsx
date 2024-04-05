import { FC } from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import { Button, Input } from '@/presentation/components/ui'
import { Footer, Header } from '@/presentation/components/layout'
import { useLogin } from './hook/useLogin'
import Styled from './login.module.scss'
import { IValidation } from '@/presentation/protocols/validation'

type LoginProps = {
  validation: IValidation
}

const Login: FC<LoginProps> = ({ validation }) => {
  const { register, errors, handlerLogin, handleSubmit, handleChange, state } =
    useLogin(validation)

  return (
    <main className={Styled.login}>
      <Header
        props={{
          heading: '4Dev - Enquete para programadores',
          logo: '/logo.png',
        }}
      />

      <form
        onSubmit={handleSubmit(handlerLogin)}
        className={Styled.form}
        autoComplete="off"
      >
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
