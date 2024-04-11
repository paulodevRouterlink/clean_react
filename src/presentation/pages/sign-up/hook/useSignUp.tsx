import { useNavigate } from 'react-router-dom'

const useSignUp = () => {
  const navigate = useNavigate()

  const handlerNavigate = () => navigate('/signin')

  return { handlerNavigate }
}

export { useSignUp }
