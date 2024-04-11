import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { LoginPageProps } from '../login'

const useLogin = ({
  validation,
  authentication,
  saveAccessToken,
}: LoginPageProps) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: '',
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.email, state.password])

  const handlerLogin = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault()

    try {
      if (state.isLoading || state.emailError || state.passwordError) return
      setState({ ...state, isLoading: true })
      const account = await authentication.auth({
        email: state.email,
        password: state.password,
      })
      await saveAccessToken.save(account.accessToken)
    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message,
      })
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  return { state, handlerLogin, handleChange }
}

export { useLogin }
