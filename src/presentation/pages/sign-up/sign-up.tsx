import { FC } from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import { Button, FormStatus, Input } from '@/presentation/components/ui'
import { FormContext } from '@/presentation/contexts/form'
import Styled from './sign-up.module.scss'
import { useSignUp } from './hook/useSignUp'
import { IValidation } from '@/presentation/protocols/validation'
import { IAddAccount, ISaveAccessToken } from '@/domain/usecases'

export type Props = {
  validation: IValidation
  addAccount: IAddAccount
  saveAccessToken: ISaveAccessToken
}

const SignUp: FC<Props> = ({ validation, addAccount, saveAccessToken }) => {
  const { state, handlerNavigate, handleChange, handlerLogin } = useSignUp({
    validation,
    addAccount,
    saveAccessToken,
  })

  return (
    <FormContext.Provider value={state}>
      <form data-testid="form" onSubmit={handlerLogin} className={Styled.form}>
        <h2>Criar Conta</h2>

        <Input
          type="text"
          name="name"
          placeholder="Informe seu nome"
          onChange={handleChange}
          value={state.name}
          message={state.nameError}
          error={!!state.nameError}
          helperText={state.nameError}
        />

        <Input
          type="email"
          name="email"
          placeholder="Informe seu email"
          onChange={handleChange}
          value={state.email}
          message={state.emailError}
          error={!!state.emailError}
          helperText={state.emailError}
        />

        <Input
          type="password"
          name="password"
          placeholder="Informe sua senha"
          onChange={handleChange}
          value={state.password}
          message={state.passwordError}
          error={!!state.passwordError}
          helperText={state.passwordError}
        />

        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirme sua senha"
          onChange={handleChange}
          value={state.passwordConfirmation}
          message={state.passwordConfirmationError}
          error={!!state.passwordConfirmationError}
          helperText={state.passwordConfirmationError}
        />

        <Button
          data-testid="submit"
          disabled={state.isFormInvalid}
          isLoading={state.isLoading}
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
