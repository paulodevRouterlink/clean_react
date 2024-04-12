import { FC } from 'react'
import { SignUp } from '@/presentation/pages'
import {
  AddAccountSpy,
  SaveAccessTokenMock,
  ValidationStub,
} from '@/presentation/test'

export const makeSignUp: FC = () => {
  const validationStub = new ValidationStub()
  const addAccountSpy = new AddAccountSpy()
  const saveAccessTokenMock = new SaveAccessTokenMock()

  return (
    <SignUp
      validation={validationStub}
      addAccount={addAccountSpy}
      saveAccessToken={saveAccessTokenMock}
    />
  )
}
