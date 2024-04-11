import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'
import { faker } from '@faker-js/faker'
import { Login } from '@/presentation/pages'
import {
  AuthenticationSpy,
  SaveAccessTokenMock,
  ValidationStub,
} from '@/presentation/test'
import { Errors } from '@/domain/errors'

type SutTypes = {
  sut: RenderResult
  authenticationSpy: AuthenticationSpy
  saveAccessTokenMock: SaveAccessTokenMock
}

type SutParams = {
  validationError: string
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  const authenticationSpy = new AuthenticationSpy()
  const saveAccessTokenMock = new SaveAccessTokenMock()
  validationStub.errorMessage = params?.validationError

  const sut = render(
    <Login
      validation={validationStub}
      authentication={authenticationSpy}
      saveAccessToken={saveAccessTokenMock}
    />,
  )

  return {
    sut,
    authenticationSpy,
    saveAccessTokenMock,
  }
}

const simulateValidSubmit = (
  sut: RenderResult,
  email = faker.internet.email(),
  password = faker.internet.password(),
): void => {
  populateEmailField(sut, email)
  populatePasswordField(sut, password)
  const submitButton = sut.getByTestId('submit')
  fireEvent.click(submitButton)
}

const populateEmailField = (
  sut: RenderResult,
  email = faker.internet.email(),
): void => {
  const emailInput = sut.getByTestId('email')
  fireEvent.input(emailInput, { target: { value: email } })
}

const populatePasswordField = (
  sut: RenderResult,
  password = faker.internet.password(),
): void => {
  const passwordInput = sut.getByTestId('password')
  fireEvent.input(passwordInput, { target: { value: password } })
}

const testStatusForField = (
  sut: RenderResult,
  fieldName: string,
  validationError?: string,
): void => {
  const emailStatus = sut.getByTestId(`${fieldName}-status`)
  expect(emailStatus.title).toBe(validationError || 'Tudo Certo!')
  expect(emailStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

const testErrorWrapCount = (sut: RenderResult, count: number) => {
  const errorWrap = sut.getByTestId('error-wrap')
  expect(errorWrap.childElementCount).toBe(count)
}

const testElementExists = (sut: RenderResult, fieldName: string) => {
  const el = sut.getByTestId(fieldName)
  expect(el).toBeTruthy()
}

const testButtonIsDisabled = (
  sut: RenderResult,
  fieldName: string,
  isDisabled: boolean,
) => {
  const submitButton = sut.getByTestId(fieldName) as HTMLButtonElement
  expect(submitButton.disabled).toBe(isDisabled)
}

const testElementText = (
  sut: RenderResult,
  fieldName: string,
  text: string,
) => {
  const element = sut.getByTestId(fieldName)
  expect(element.textContent).toBe(text)
}

describe('Login Component', () => {
  afterEach(cleanup)

  test('Should start initial state', () => {
    const validationError = faker.word.words()
    const { sut } = makeSut({ validationError })
    testErrorWrapCount(sut, 0)
    testButtonIsDisabled(sut, 'submit', true)
    testStatusForField(sut, 'email', validationError)
    testStatusForField(sut, 'password', validationError)
  })

  test('Should show email Validation if error failed', () => {
    const validationError = faker.word.words()
    const { sut } = makeSut({ validationError })
    populateEmailField(sut)
    testStatusForField(sut, 'email', validationError)
  })

  test('Should show password Validation if error failed', () => {
    const validationError = faker.word.words()
    const { sut } = makeSut({ validationError })
    populatePasswordField(sut)
    testStatusForField(sut, 'password', validationError)
  })

  test('Should show valid email state if Validation succeeds', () => {
    const { sut } = makeSut()
    populateEmailField(sut)
    testStatusForField(sut, 'email')
  })

  test('Should show valid password state if Validation succeeds', () => {
    const { sut } = makeSut()
    populatePasswordField(sut)
    testStatusForField(sut, 'password')
  })

  test('Should enabled submit button form is valid', () => {
    const { sut } = makeSut()
    populateEmailField(sut)
    populatePasswordField(sut)
    testButtonIsDisabled(sut, 'submit', false)
  })

  test('Should show spinner on submit', () => {
    const { sut } = makeSut()
    simulateValidSubmit(sut)
    testElementExists(sut, 'spinner')
  })

  test('Should call Authentication with correct values', () => {
    const { sut, authenticationSpy } = makeSut()
    const email = faker.internet.email()
    const password = faker.internet.password()
    simulateValidSubmit(sut, email, password)
    expect(authenticationSpy.params).toEqual({ email, password })
  })

  test('Should call Authentication only once', () => {
    const { sut, authenticationSpy } = makeSut()
    simulateValidSubmit(sut)
    simulateValidSubmit(sut)
    expect(authenticationSpy.callsCount).toEqual(1)
  })

  test('Should not call Authentication if form is invalid', () => {
    const validationError = faker.word.words()
    const { sut, authenticationSpy } = makeSut({ validationError })
    populateEmailField(sut)
    fireEvent.submit(sut.getByTestId('form'))
    expect(authenticationSpy.callsCount).toEqual(0)
  })

  test('Should prevent error if Authentication fails', async () => {
    const { sut, authenticationSpy } = makeSut()
    const error = new Errors.InvalidCredentialsError()
    jest
      .spyOn(authenticationSpy, 'auth')
      .mockReturnValueOnce(Promise.reject(error))
    simulateValidSubmit(sut)
    const errorWrap = sut.getByTestId('error-wrap')
    await waitFor(() => errorWrap)
    testElementText(sut, 'main-error', error.message)
    expect(errorWrap.childElementCount).toBe(1)
  })

  test('Should call SaveAccessToken on success', async () => {
    const { sut, authenticationSpy, saveAccessTokenMock } = makeSut()
    simulateValidSubmit(sut)
    await waitFor(() => sut.getByTestId('form'))
    expect(saveAccessTokenMock.accessToken).toBe(
      authenticationSpy.account.accessToken,
    )
  })

  test.skip('Should prevent error if SaveAccessToken fails', async () => {
    const { sut, saveAccessTokenMock } = makeSut()
    const error = new Errors.InvalidCredentialsError()
    jest
      .spyOn(saveAccessTokenMock, 'save')
      .mockReturnValueOnce(Promise.reject(error))
    simulateValidSubmit(sut)
    const errorWrap = sut.getByTestId('error-wrap')
    await waitFor(() => errorWrap)
    testElementText(sut, 'main-error', error.message)
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
