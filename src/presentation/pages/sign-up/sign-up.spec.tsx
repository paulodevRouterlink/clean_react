import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { faker } from '@faker-js/faker'
import { SignUp } from './sign-up'
import { AddAccountSpy, Helper, ValidationStub } from '@/presentation/test'
import { Errors } from '@/domain/errors'
import { AppContext } from '@/presentation/contexts/api'
import { AccountModel } from '@/domain/models'

type SutTypes = {
  addAccountSpy: AddAccountSpy
  setCurrentAccountMock(account: AccountModel): void
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError
  const addAccountSpy = new AddAccountSpy()
  const setCurrentAccountMock = jest.fn()
  render(
    <AppContext.Provider value={{ setCurrentAccount: setCurrentAccountMock }}>
      <BrowserRouter>
        <SignUp validation={validationStub} addAccount={addAccountSpy} />
      </BrowserRouter>
    </AppContext.Provider>,
  )

  return { addAccountSpy, setCurrentAccountMock }
}

describe('SignUp Component', () => {
  test('Should start initial state', () => {
    const validationError = faker.word.words()
    makeSut({ validationError })
    expect(screen.getByTestId('error-wrap').children).toHaveLength(0)
    expect(screen.getByTestId('submit')).toBeDisabled()
    Helper.testStatusForField('name', validationError)
    Helper.testStatusForField('email', validationError)
    Helper.testStatusForField('password', validationError)
    Helper.testStatusForField('passwordConfirmation', validationError)
  })

  test('Should show name Validation if error failed', () => {
    const validationError = faker.word.words()
    makeSut({ validationError })
    Helper.populateField('name')
    Helper.testStatusForField('name', validationError)
  })

  test('Should show email Validation if error failed', () => {
    const validationError = faker.word.words()
    makeSut({ validationError })
    Helper.populateField('email')
    Helper.testStatusForField('email', validationError)
  })
  test('Should show password Validation if error failed', () => {
    const validationError = faker.word.words()
    makeSut({ validationError })
    Helper.populateField('password')
    Helper.testStatusForField('password', validationError)
  })

  test('Should show passwordConfirmation Validation if error failed', () => {
    const validationError = faker.word.words()
    makeSut({ validationError })
    Helper.populateField('passwordConfirmation')
    Helper.testStatusForField('passwordConfirmation', validationError)
  })

  test('Should show valid name state if Validation succeeds', () => {
    makeSut()
    Helper.populateField('name')
    Helper.testStatusForField('name')
  })

  test('Should show valid email state if Validation succeeds', () => {
    makeSut()
    Helper.populateField('email')
    Helper.testStatusForField('email')
  })

  test('Should show valid password state if Validation succeeds', () => {
    makeSut()
    Helper.populateField('password')
    Helper.testStatusForField('password')
  })

  test('Should show valid passwordConfirmation state if Validation succeeds', () => {
    makeSut()
    Helper.populateField('passwordConfirmation')
    Helper.testStatusForField('passwordConfirmation')
  })

  test('Should enabled submit button form is valid', () => {
    makeSut()
    Helper.populateField('name')
    Helper.populateField('email')
    Helper.populateField('password')
    Helper.populateField('passwordConfirmation')
    expect(screen.getByTestId('submit')).toBeEnabled()
  })

  test('Should show spinner on submit', async () => {
    makeSut()
    await Helper.simulateValidSubmit()
    expect(screen.queryByTestId('spinner')).toBeInTheDocument()
  })

  test('Should call AddAccount with correct values', async () => {
    const { addAccountSpy } = makeSut()
    const name = faker.internet.userName()
    const email = faker.internet.email()
    const password = faker.internet.password()
    await Helper.simulateValidSubmit(name, email, password)
    expect(addAccountSpy.params).toEqual({
      name,
      email,
      password,
      passwordConfirmation: password,
    })
  })

  test('Should call AddAccount only once', async () => {
    const { addAccountSpy } = makeSut()
    await Helper.simulateValidSubmit()
    await Helper.simulateValidSubmit()
    expect(addAccountSpy.callsCount).toEqual(1)
  })

  test('Should not call AddAccount if form is invalid', async () => {
    const validationError = faker.word.words()
    const { addAccountSpy } = makeSut({ validationError })
    Helper.populateField('email')
    await Helper.simulateValidSubmit()
    expect(addAccountSpy.callsCount).toEqual(0)
  })

  test('Should prevent error if AddAccount fails', async () => {
    const { addAccountSpy } = makeSut()
    const error = new Errors.EmailInUseError()
    jest.spyOn(addAccountSpy, 'add').mockRejectedValueOnce(error)
    Helper.simulateValidSubmitSign()
    const errorWrap = screen.getByTestId('error-wrap')
    await waitFor(() => errorWrap)
    expect(screen.getByTestId('main-error')).toHaveTextContent(error.message)
    expect(errorWrap.children).toHaveLength(1)
  })

  test('Should call SaveAccessToken on success', async () => {
    const { addAccountSpy, setCurrentAccountMock } = makeSut()
    Helper.simulateValidSubmitSign()
    await waitFor(() => screen.getByTestId('form'))
    expect(setCurrentAccountMock).toHaveBeenCalledWith(addAccountSpy.account)
  })
})
