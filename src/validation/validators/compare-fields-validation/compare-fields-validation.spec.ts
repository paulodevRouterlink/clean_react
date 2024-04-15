import { faker } from '@faker-js/faker'
import { ValidateError } from '@/validation/errors'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (
  field: string,
  fieldToCompare: string,
): CompareFieldsValidation => {
  return new CompareFieldsValidation(field, fieldToCompare)
}
describe('CompareFieldsValidation', () => {
  test('Should return error if compare is invalid', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({
      [field]: faker.word.words(2),
      [fieldToCompare]: faker.word.words(6),
    })
    expect(error).toEqual(new ValidateError.InvalidFieldError())
  })

  test('Should return error if compare is valid', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const value = faker.word.words()
    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({
      [field]: value,
      [fieldToCompare]: value,
    })
    expect(error).toBeFalsy()
  })
})
