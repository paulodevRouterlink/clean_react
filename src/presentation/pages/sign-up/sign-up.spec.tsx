import { RenderResult, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { SignUp } from './sign-up'
import { Helper } from '@/presentation/test'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>,
  )

  return { sut }
}

describe('SignUp Component', () => {
  test('Should start initial state', () => {
    makeSut()
    const validationError = 'Campo Obrigatório'
    Helper.testChildCount('error-wrap', 0)
    Helper.testButtonIsDisabled('submit', true)
    Helper.testStatusForField('name', validationError)
    Helper.testStatusForField('email', validationError)
    Helper.testStatusForField('password', validationError)
    Helper.testStatusForField('passwordConfirmation', validationError)
  })
})
