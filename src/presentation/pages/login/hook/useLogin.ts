import { ChangeEvent, useEffect, useState } from 'react'
import { IValidation } from '@/presentation/protocols/validation'

const useLogin = (validation: IValidation) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    validation.validade('email', state.email)
  }, [validation, state.email])

  useEffect(() => {
    validation.validade('password', state.password)
  }, [validation, state.password])

  return { state, handleChange }
}

export { useLogin }
