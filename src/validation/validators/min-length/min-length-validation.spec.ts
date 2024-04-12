import { faker } from '@faker-js/faker'
import { ValidateError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (field: string): MinLengthValidation => {
  return new MinLengthValidation(field, 5)
}

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.string.alphanumeric(3) })
    expect(error).toEqual(new ValidateError.InvalidFieldError())
  })

  test('Should return falsy if value is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.string.alphanumeric(5) })
    expect(error).toBeFalsy()
  })

  test('Should return falsy if field does not exists in schema', () => {
    const sut = makeSut(faker.database.column())
    const error = sut.validate({
      [faker.database.column()]: faker.string.alphanumeric(5),
    })
    expect(error).toBeFalsy()
  })
})
