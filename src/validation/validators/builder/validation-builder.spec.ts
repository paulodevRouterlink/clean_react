import { faker } from '@faker-js/faker'
import { ValidationBuilder as sut } from './validation-builder'
import {
  EmailValidation,
  MinLengthValidation,
  RequiredFieldValidation,
} from '@/validation/validators'

const makeField = () => {
  const field = faker.database.column()
  const length = faker.number.int()
  return { field, length }
}

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const { field } = makeField()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('Should return EmailValidation', () => {
    const { field } = makeField()
    const validations = sut.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('Should return MinLength', () => {
    const { field, length } = makeField()
    const validations = sut.field(field).min(length).build()
    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })
  test('Should return a list of validators', () => {
    const { field, length } = makeField()
    const validations = sut.field(field).required().min(length).email().build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, length),
      new EmailValidation(field),
    ])
  })
})
