import { IFieldValidation } from '@/validation/protocols'
import { ValidateError } from '@/validation/errors'
import { Regex } from '../regex'

export class EmailValidation implements IFieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error {
    const emailRegex = Regex.validateEmail(value)
    return !value || emailRegex ? null : new ValidateError.InvalidFieldError()
  }
}
