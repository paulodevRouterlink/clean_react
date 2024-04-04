import {
  RenderResult,
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react'
import { Login } from './login'
import { ValidationSpy } from '@/presentation/protocols/validation'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(<Login validation={validationSpy} />)
  return { sut, validationSpy }
}

describe('Login Component', () => {
  afterEach(cleanup)
  test('Should start initial state', () => {
    const { sut } = makeSut()
    const helperText = sut.queryByTestId('helper-text')
    expect(helperText).toBeNull()
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })

  test('Should call validation with correct values', () => {
    const { sut, validationSpy } = makeSut()
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: 'any_email' } })
    const passwordInput = sut.getByTestId('password')
    fireEvent.input(passwordInput, { target: { value: 'any_pass' } })
    expect(validationSpy.input).toEqual({
      email: 'any_email',
      password: 'any_pass',
    })
  })
})
