import { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { IValidation } from '@/presentation/protocols/validation'
import { LoginProps, schemaLogin } from '@/presentation/pages/login/schema'

const useLogin = (validation: IValidation) => {
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

  const handlerLogin = (data: LoginProps) => console.log(data)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  return { register, handleSubmit, errors, state, handlerLogin, handleChange }
}

export { useLogin }
