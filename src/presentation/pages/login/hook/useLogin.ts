import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginProps, schemaLogin } from '@/presentation/pages/login/schema'
import { LoginPageProps } from '../login'

const useLogin = ({ validation, authentication }: LoginPageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schemaLogin),
  })

  const [state, setState] = useState({
    isLoading: true,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validade('email', state.email),
      passwordError: validation.validade('password', state.password),
    })
  }, [state.email, state.password])

  const handlerLogin = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault()
    setState({ ...state, isLoading: true })
    await authentication.auth({ email: state.email, password: state.password })
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  return { register, handleSubmit, errors, state, handlerLogin, handleChange }
}

export { useLogin }
