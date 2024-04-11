import { createContext } from 'react'

// export type SignInProps = {
//   isLoading: boolean
//   email: string
//   password: string
//   emailError: string
//   passwordError: string
//   mainError: string
// }

// export type SignUpProps = SignInProps & {
//   name: string
//   nameError: string
//   passwordConfirmation: string
//   passwordConfirmationError: string
// }

// export type FormContextProps = {
//   dataSignIn: SignInProps
//   dataSignUp: SignUpProps
// }

export const FormContext = createContext(null)
