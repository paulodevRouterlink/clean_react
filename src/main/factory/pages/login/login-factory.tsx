import { FC } from 'react'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '@/main/factory/usecases'
import { makeLoginValidate } from './login-validate-factory'
import { SaveAccessTokenMock } from '@/presentation/test'

const makeSaveAccessToken = (): SaveAccessTokenMock => new SaveAccessTokenMock()

export const makeLogin: FC = () => (
  <Login
    validation={makeLoginValidate()}
    authentication={makeRemoteAuthentication()}
    saveAccessToken={makeSaveAccessToken()}
  />
)
