import { createContext } from 'react'

type FormContextProps = {
  isLoading: boolean
  email: string
  password: string
  emailError: string
  passwordError: string
  mainError: string
}

export const FormContext = createContext({} as FormContextProps | null)
