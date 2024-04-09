import { IFieldValidation } from '@/validation/protocols'
import { ValidateError } from '@/validation/errors'
import { Regex } from '../regex'

export class EmailValidation implements IFieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error {
    return Regex.validateEmail(value)
      ? null
      : new ValidateError.InvalidFieldError()
  }
}
