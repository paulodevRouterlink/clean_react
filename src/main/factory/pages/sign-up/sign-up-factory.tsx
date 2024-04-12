import { FC } from 'react'
import { SignUp } from '@/presentation/pages'
import { makeSignUpValidation } from './sign-up-validation'
import {
  makeLocalSaveAccessToken,
  makeRemoteAddAccount,
} from '@/main/factory/usecases'

export const makeSignUp: FC = () => {
  return (
    <SignUp
      addAccount={makeRemoteAddAccount()}
      validation={makeSignUpValidation()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
