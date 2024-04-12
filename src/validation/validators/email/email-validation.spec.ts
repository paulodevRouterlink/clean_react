import { faker } from '@faker-js/faker'
import { ValidateError } from '@/validation/errors'
import { EmailValidation } from './email-validation'

const makeSut = (field: string): EmailValidation => {
  return new EmailValidation(field)
}

describe('Email Validation', () => {
  test('Should return error if email is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.word.words() })
    expect(error).toEqual(new ValidateError.InvalidFieldError())
  })

  test('Should return falsy if email is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.internet.email() })
    expect(error).toBeFalsy()
  })

  test('Should return falsy if email is empty', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: '' })
    expect(error).toBeFalsy()
  })
})
