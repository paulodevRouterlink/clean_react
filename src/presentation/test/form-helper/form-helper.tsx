import { fireEvent, screen, waitFor } from '@testing-library/react'
import { faker } from '@faker-js/faker'

export const simulateValidSubmit = async (
  name = faker.internet.userName(),
  email = faker.internet.email(),
  password = faker.internet.password(),
): Promise<void> => {
  populateField('name', name)
  populateField('email', email)
  populateField('password', password)
  populateField('passwordConfirmation', password)
  const form = screen.getByTestId('form')
  fireEvent.submit(form)
  await waitFor(() => form)
}

export const simulateValidSubmitSign = (
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

export const simulateValidSubmitLogin = async (
  email = faker.internet.email(),
  password = faker.internet.password(),
): Promise<void> => {
  populateField('email', email)
  populateField('password', password)
  const form = screen.getByTestId('form')
  fireEvent.submit(form)
  await waitFor(() => form)
}

export const simulateSubmitValidFormLogin = (
  email = faker.internet.email(),
  password = faker.internet.password(),
): void => {
  populateField('email', email)
  populateField('password', password)
  const submitButton = screen.getByTestId('submit')
  fireEvent.click(submitButton)
}

export const testChildCount = (fieldName: string, count: number) => {
  const el = screen.getByTestId(fieldName)
  expect(el.childElementCount).toBe(count)
}

export const testButtonIsDisabled = (
  fieldName: string,
  isDisabled: boolean,
) => {
  const submitButton = screen.getByTestId(fieldName) as HTMLButtonElement
  expect(submitButton.disabled).toBe(isDisabled)
}

export const testStatusForField = (
  fieldName: string,
  validationError?: string,
): void => {
  const fieldStatus = screen.getByTestId(`${fieldName}-status`)
  expect(fieldStatus.title).toBe(validationError || 'Tudo Certo!')
  expect(fieldStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

export const populateField = (
  fieldName: string,
  value = faker.word.words(),
): void => {
  const input = screen.getByTestId(fieldName)
  fireEvent.input(input, { target: { value } })
}

export const testElementExists = (fieldName: string): void => {
  const el = screen.getByTestId(fieldName)
  expect(el).toBeTruthy()
}

export const testElementText = (fieldName: string, text: string) => {
  const element = screen.getByTestId(fieldName)
  expect(element.textContent).toBe(text)
}
