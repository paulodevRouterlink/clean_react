import { AiOutlineLogin } from 'react-icons/ai'
import { Button, FormStatus, Input } from '@/presentation/components/ui'
import { FormContext } from '@/presentation/contexts/form'
import Styled from './sign-up.module.scss'
import { useSignUp } from './hook/useSignUp'

const SignUp = () => {
  const { handlerNavigate } = useSignUp()

  return (
    <FormContext.Provider value={{}}>
      <form className={Styled.form}>
        <h2>Criar Conta</h2>

        <Input type="text" name="name" placeholder="Informe seu nome" />
        <Input type="email" name="email" placeholder="Informe seu email" />
        <Input
          type="password"
          name="password"
          placeholder="Informe sua senha"
        />
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirme sua senha"
        />

        <Button sx={{ width: '40%' }} size="small">
          Cadastrar
          <AiOutlineLogin size={20} />
        </Button>

        <span className={Styled.link} onClick={() => handlerNavigate()}>
          Criar conta
        </span>
        <FormStatus />
      </form>
    </FormContext.Provider>
  )
}

export { SignUp }
