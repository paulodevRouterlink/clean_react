import { cleanup, render, screen, waitFor } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { BrowserRouter } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import {
  AuthenticationSpy,
  Helper,
  SaveCurrentAccountMock,
  ValidationStub,
} from '@/presentation/test'
import { Errors } from '@/domain/errors'

type SutTypes = {
  authenticationSpy: AuthenticationSpy
  saveCurrentAccountMock: SaveCurrentAccountMock
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  const authenticationSpy = new AuthenticationSpy()
  const saveCurrentAccountMock = new SaveCurrentAccountMock()
  validationStub.errorMessage = params?.validationError

  render(
    <BrowserRouter>
      <Login
        validation={validationStub}
        authentication={authenticationSpy}
        saveCurrentAccount={saveCurrentAccountMock}
      />
    </BrowserRouter>,
  )

  return {
    authenticationSpy,
    saveCurrentAccountMock,
  }
}

describe('Login Component', () => {
  afterEach(cleanup)

  test('Should start initial state', () => {
    const validationError = faker.word.words()
    makeSut({ validationError })
    Helper.testChildCount('error-wrap', 0)
    Helper.testButtonIsDisabled('submit', true)
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
    Helper.testButtonIsDisabled('submit', false)
  })

  test('Should show spinner on submit', async () => {
    makeSut()
    await Helper.simulateValidSubmitLogin()
    Helper.testElementExists('spinner')
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
    Helper.testElementText('main-error', error.message)
    expect(errorWrap.childElementCount).toBe(1)
  })

  test('Should call SaveAccessToken on success', async () => {
    const { authenticationSpy, saveCurrentAccountMock } = makeSut()
    Helper.simulateSubmitValidFormLogin()
    await waitFor(() => screen.getByTestId('form'))
    expect(saveCurrentAccountMock.account).toEqual(authenticationSpy.account)
  })

  test.skip('Should prevent error if SaveAccessToken fails', async () => {
    const { saveCurrentAccountMock } = makeSut()
    const error = new Errors.InvalidCredentialsError()
    jest
      .spyOn(saveCurrentAccountMock, 'save')
      .mockReturnValueOnce(Promise.reject(error))
    Helper.simulateSubmitValidFormLogin()
    const errorWrap = screen.getByTestId('error-wrap')
    await waitFor(() => errorWrap)
    Helper.testElementText('main-error', error.message)
    expect(errorWrap.childElementCount).toBe(1)
  })

  // test('Should present error if Authentication fails', async () => {
  //   const { sut, authenticationSpy } = makeSut()
  //   const error = new Errors.InvalidCredentialsError()
  //   jest
  //     .spyOn(authenticationSpy, 'auth')
  //     .mockReturnValueOnce(Promise.reject(error))
  //   simulateValidSubmit(sut)
  //   const helperText = sut.getByTestId('helper-text')
  //   await waitFor(() => helperText)
  //   const mainError = sut.getByTestId('main-error')
  //   expect(mainError.textContent).toBe(error)
  // })
})
