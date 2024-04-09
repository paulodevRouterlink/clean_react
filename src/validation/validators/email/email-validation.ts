import { IFieldValidation } from '@/validation/protocols'
import { ValidateError } from '@/validation/errors'

export class EmailValidation implements IFieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error {
    return new ValidateError.InvalidFieldError()
  }
}
