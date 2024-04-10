import { fireEvent, render, screen } from '@testing-library/react'
import { Input } from './input'
import { faker } from '@faker-js/faker'

const makeSut = (fieldName: string) => render(<Input name={fieldName} />)

describe('InputComponent', () => {
  test('Should begin with readOnly', () => {
    const field = faker.database.column()
    makeSut(field)
    const input = screen.getByTestId(field) as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  test('Should remove readOnly on focus', () => {
    const field = faker.database.column()
    makeSut(field)
    const input = screen.getByTestId(field) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })
})
