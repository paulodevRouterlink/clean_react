import { ValidateError } from '@/validation/errors'
import { RequiredFieldValidation } from './required-field-validation'
import { faker } from '@faker-js/faker'

const makeSut = () => new RequiredFieldValidation(faker.database.column())
describe('Required Field Validation', () => {
  test('Should return error if field is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toEqual(new ValidateError.RequiredFieldError())
  })

  test('Should return error if field is not empty', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
