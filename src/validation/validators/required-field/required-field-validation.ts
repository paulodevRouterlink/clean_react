import { IFieldValidation } from '@/validation/protocols'
import { ValidateError } from '@/validation/errors'

export class RequiredFieldValidation implements IFieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error {
    return value ? null : new ValidateError.RequiredFieldError()
  }
}
