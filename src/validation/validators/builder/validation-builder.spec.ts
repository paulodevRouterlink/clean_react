import { faker } from '@faker-js/faker'
import { ValidationBuilder as sut } from './validation-builder'
import {
  EmailValidation,
  MinLengthValidation,
  RequiredFieldValidation,
} from '@/validation/validators'
import { CompareFieldsValidation } from '../compare-fields-validation'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('Should return EmailValidation', () => {
    const field = faker.database.column()
    const validations = sut.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('Should return MinLength', () => {
    const field = faker.database.column()
    const length = faker.number.int()
    const validations = sut.field(field).min(length).build()
    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })

  test('Should return CompareFieldValidation', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const validations = sut.field(field).sameAs(fieldToCompare).build()
    expect(validations).toEqual([
      new CompareFieldsValidation(field, fieldToCompare),
    ])
  })
  test('Should return a list of validators', () => {
    const field = faker.database.column()
    const length = faker.number.int()
    const validations = sut.field(field).required().min(length).email().build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new MinLengthValidation(field, length),
      new EmailValidation(field),
    ])
  })
})
