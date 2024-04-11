import { AiOutlineLogin } from 'react-icons/ai'
import { Button, FormStatus, Input } from '@/presentation/components/ui'
import { FormContext } from '@/presentation/contexts/form'
import Styled from './sign-up.module.scss'
import { useSignUp } from './hook/useSignUp'

const SignUp = () => {
  const { handlerNavigate, state, handleChange } = useSignUp()

  return (
    <FormContext.Provider value={{ state }}>
      <form className={Styled.form}>
        <h2>Criar Conta</h2>

        <Input
          type="text"
          name="name"
          placeholder="Informe seu nome"
          onChange={handleChange}
          message={state.nameError}
        />
        <Input
          type="email"
          name="email"
          placeholder="Informe seu email"
          onChange={handleChange}
          message={state.emailError}
        />
        <Input
          type="password"
          name="password"
          placeholder="Informe sua senha"
          onChange={handleChange}
          message={state.passwordError}
        />
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirme sua senha"
          onChange={handleChange}
          message={state.passwordConfirmationError}
        />

        <Button
          data-testid="submit"
          disabled
          sx={{ width: '40%' }}
          size="small"
        >
          Cadastrar
          <AiOutlineLogin size={20} />
        </Button>

        <span className={Styled.link} onClick={() => handlerNavigate()}>
          Volta para o login
        </span>
        <FormStatus />
      </form>
    </FormContext.Provider>
  )
}

export { SignUp }
