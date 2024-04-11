import { ValidateError } from '@/validation/errors'
import { faker } from '@faker-js/faker'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (valueToCompare: string): CompareFieldsValidation => {
  return new CompareFieldsValidation(faker.database.column(), valueToCompare)
}
describe('CompareFieldsValidation', () => {
  test('Should return error if compare is invalid', () => {
    const sut = makeSut(faker.word.words())
    const error = sut.validate(faker.word.words())
    expect(error).toEqual(new ValidateError.InvalidFieldError())
  })

  test('Should return error if compare is valid', () => {
    const password = faker.word.words()
    const sut = makeSut(password)
    const error = sut.validate(password)
    expect(error).toBeFalsy()
  })
})
