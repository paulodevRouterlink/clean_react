import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useSignUp = () => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    isLoading: false,
    // name: '',
    // email: '',
    // password: '',
    // passwordConfirmation: '',
    nameError: 'Campo Obrigatório',
    emailError: 'Campo Obrigatório',
    passwordError: 'Campo Obrigatório',
    passwordConfirmationError: 'Campo Obrigatório',
    mainError: '',
  })

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
