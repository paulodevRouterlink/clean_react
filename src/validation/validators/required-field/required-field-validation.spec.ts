import { faker } from '@faker-js/faker'
import { ValidateError } from '@/validation/errors'
import { RequiredFieldValidation } from './required-field-validation'

const makeSut = (field: string) => new RequiredFieldValidation(field)
describe('Required Field Validation', () => {
  test('Should return error if field is empty', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: '' })
    expect(error).toEqual(new ValidateError.RequiredFieldError())
  })

  test('Should return error if field is not empty', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.internet.email() })
    expect(error).toBeFalsy()
  })
})
