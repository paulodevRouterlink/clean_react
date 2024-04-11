import { RenderResult, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { SignUp } from './sign-up'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>,
  )

  return {
    sut,
  }
}

const testChildWrapCount = (fieldName: string, count: number) => {
  const el = screen.getByTestId(fieldName)
  expect(el.childElementCount).toBe(count)
}

const testButtonIsDisabled = (fieldName: string, isDisabled: boolean) => {
  const submitButton = screen.getByTestId(fieldName) as HTMLButtonElement
  expect(submitButton.disabled).toBe(isDisabled)
}

const testStatusForField = (
  fieldName: string,
  validationError?: string,
): void => {
  const fieldStatus = screen.getByTestId(`${fieldName}-status`)
  expect(fieldStatus.title).toBe(validationError || 'Tudo Certo!')
  expect(fieldStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

describe('SignUp Component', () => {
  test('Should start initial state', () => {
    makeSut()
    const validationError = 'Campo Obrigatório'
    testChildWrapCount('error-wrap', 0)
    testButtonIsDisabled('submit', true)
    testStatusForField('name', validationError)
    testStatusForField('email', validationError)
    testStatusForField('password', validationError)
    testStatusForField('passwordConfirmation', validationError)
  })
})
