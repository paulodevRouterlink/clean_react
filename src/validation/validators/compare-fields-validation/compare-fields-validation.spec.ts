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

  // test('Should return error if field is not empty', () => {
  //   const sut = makeSut()
  //   const error = sut.validate(faker.internet.email())
  //   expect(error).toBeFalsy()
  // })
})
