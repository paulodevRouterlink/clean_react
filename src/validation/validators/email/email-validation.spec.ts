import { ValidateError } from '@/validation/errors'
import { EmailValidation } from './email-validation'
import { faker } from '@faker-js/faker'

const makeSut = (): EmailValidation =>
  new EmailValidation(faker.database.column())

describe('Email Validation', () => {
  test('Should return error if email is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.word.words())
    expect(error).toEqual(new ValidateError.InvalidFieldError())
  })

  test('Should return false if email is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
