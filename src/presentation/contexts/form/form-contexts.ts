import { createContext } from 'react'

export type SignInProps = {
  isLoading: boolean
  email: string
  password: string
  emailError: string
  passwordError: string
  mainError: string
}

export type FormContextProps = {
  dataSignIn: SignInProps
  dataSignUp: SignInProps & {
    name: string
    passwordConfirmation: string
  }
}

export const FormContext = createContext(null)
