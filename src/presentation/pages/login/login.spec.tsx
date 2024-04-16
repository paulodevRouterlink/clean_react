import { render, screen, waitFor } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { BrowserRouter } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { AuthenticationSpy, Helper, ValidationStub } from '@/presentation/test'
import { Errors } from '@/domain/errors'
import { AppContext } from '@/presentation/contexts/api'
import { AccountModel } from '@/domain/models'

type SutTypes = {
  authenticationSpy: AuthenticationSpy
  setCurrentAccountMock(account: AccountModel): void
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  const authenticationSpy = new AuthenticationSpy()
  const setCurrentAccountMock = jest.fn()
  validationStub.errorMessage = params?.validationError

  render(
    <AppContext.Provider value={{ setCurrentAccount: setCurrentAccountMock }}>
      <BrowserRouter>
        <Login validation={validationStub} authentication={authenticationSpy} />
      </BrowserRouter>
      ,
    </AppContext.Provider>,
  )

  return {
    authenticationSpy,
    setCurrentAccountMock,
  }
}

describe('Login Component', () => {
  test('Should start initial state', () => {
    const validationError = faker.word.words()
    makeSut({ validationError })
    expect(screen.getByTestId('error-wrap').children).toHaveLength(0)
    expect(screen.getByTestId('submit')).toBeDisabled()
    Helper.testStatusForField('email', validationError)
    Helper.testStatusForField('password', validationError)
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

  test('Should enabled submit button form is valid', () => {
    makeSut()
    Helper.populateField('email')
    Helper.populateField('password')
    expect(screen.getByTestId('submit')).toBeEnabled()
  })

  test('Should show spinner on submit', async () => {
    makeSut()
    await Helper.simulateValidSubmitLogin()
    expect(screen.queryByTestId('spinner')).toBeInTheDocument()
  })

  test('Should call Authentication with correct values', async () => {
    const { authenticationSpy } = makeSut()
    const email = faker.internet.email()
    const password = faker.internet.password()
    await Helper.simulateValidSubmitLogin(email, password)
    expect(authenticationSpy.params).toEqual({ email, password })
  })

  test('Should call Authentication only once', async () => {
    const { authenticationSpy } = makeSut()
    await Helper.simulateValidSubmitLogin()
    await Helper.simulateValidSubmitLogin()
    expect(authenticationSpy.callsCount).toEqual(1)
  })

  test('Should not call Authentication if form is invalid', async () => {
    const validationError = faker.word.words()
    const { authenticationSpy } = makeSut({ validationError })
    Helper.populateField('email')
    await Helper.simulateValidSubmitLogin()
    expect(authenticationSpy.callsCount).toEqual(0)
  })

  test('Should prevent error if Authentication fails', async () => {
    const { authenticationSpy } = makeSut()
    const error = new Errors.InvalidCredentialsError()
    jest.spyOn(authenticationSpy, 'auth').mockRejectedValueOnce(error)
    Helper.simulateSubmitValidFormLogin()
    const errorWrap = screen.getByTestId('error-wrap')
    await waitFor(() => errorWrap)
    expect(screen.getByTestId('main-error')).toHaveTextContent(error.message)
    expect(errorWrap.children).toHaveLength(1)
  })

  test('Should call SaveAccessToken on success', async () => {
    const { authenticationSpy, setCurrentAccountMock } = makeSut()
    Helper.simulateSubmitValidFormLogin()
    await waitFor(() => screen.getByTestId('form'))
    expect(setCurrentAccountMock).toHaveBeenCalledWith(
      authenticationSpy.account,
    )
  })
})
