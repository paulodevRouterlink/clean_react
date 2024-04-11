import { RenderResult, cleanup, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { SignUp } from './sign-up'
import { Helper, ValidationStub } from '@/presentation/test'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: RenderResult
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError
  const sut = render(
    <BrowserRouter>
      <SignUp validation={validationStub} />
    </BrowserRouter>,
  )

  return { sut }
}

describe('SignUp Component', () => {
  afterEach(cleanup)
  test('Should start initial state', () => {
    const validationError = faker.word.words()
    makeSut({ validationError })
    Helper.testChildCount('error-wrap', 0)
    Helper.testButtonIsDisabled('submit', true)
    Helper.testStatusForField('name', validationError)
    Helper.testStatusForField('email', 'Campo Obrigatório')
    Helper.testStatusForField('password', 'Campo Obrigatório')
    Helper.testStatusForField('passwordConfirmation', 'Campo Obrigatório')
  })

  test('Should show name Validation if error failed', () => {
    const validationError = faker.word.words()
    makeSut({ validationError })
    Helper.populateField('name')
    Helper.testStatusForField('name', validationError)
  })
})
