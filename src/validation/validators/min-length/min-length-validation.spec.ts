import { ValidateError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validation'

const makeSut = () => new MinLengthValidation('field', 5)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid', () => {
    const sut = makeSut()
    const error = sut.validate('123')
    expect(error).toEqual(new ValidateError.InvalidFieldError())
  })

  test('Should return falsy if value is valid', () => {
    const sut = makeSut()
    const error = sut.validate('12345')
    expect(error).toBeFalsy()
  })
})
