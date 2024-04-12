import { FC } from 'react'
import { Login } from '@/presentation/pages'
import {
  makeLocalSaveAccessToken,
  makeRemoteAuthentication,
} from '@/main/factory/usecases'
import { makeLoginValidate } from './login-validate-factory'

export const makeLogin: FC = () => (
  <Login
    validation={makeLoginValidate()}
    authentication={makeRemoteAuthentication()}
    saveAccessToken={makeLocalSaveAccessToken()}
  />
)
