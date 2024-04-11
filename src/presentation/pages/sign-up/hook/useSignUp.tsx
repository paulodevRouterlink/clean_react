import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Props } from '../sign-up'

const useSignUp = ({ validation }: Props) => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    email: '',
    nameError: '',
    emailError: '',
    passwordError: 'Campo Obrigatório',
    passwordConfirmationError: 'Campo Obrigatório',
    mainError: '',
  })

  useEffect(() => {
    setState({
      ...state,
      nameError: validation.validate('name', state.name),
      emailError: validation.validate('email', state.email),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.name, state.email])

  const handlerNavigate = () => navigate('/signin')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  return { handlerNavigate, state, handleChange }
}

export { useSignUp }
