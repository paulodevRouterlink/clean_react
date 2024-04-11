import { fireEvent, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'

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

export {
  testButtonIsDisabled,
  testStatusForField,
  testChildCount,
  populateField,
}
