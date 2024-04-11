import { fireEvent, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'

const simulateValidSubmit = (
  name = faker.internet.userName(),
  email = faker.internet.email(),
  password = faker.internet.password(),
): void => {
  populateField('name', name)
  populateField('email', email)
  populateField('password', password)
  populateField('passwordConfirmation', password)
  const submitButton = screen.getByTestId('submit')
  fireEvent.click(submitButton)
}

const testChildCount = (fieldName: string, count: number) => {
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

const populateField = (fieldName: string, value = faker.word.words()): void => {
  const input = screen.getByTestId(fieldName)
  fireEvent.input(input, { target: { value } })
}

const testElementExists = (fieldName: string): void => {
  const el = screen.getByTestId(fieldName)
  expect(el).toBeTruthy()
}

export {
  simulateValidSubmit,
  testButtonIsDisabled,
  testStatusForField,
  testElementExists,
  testChildCount,
  populateField,
}
