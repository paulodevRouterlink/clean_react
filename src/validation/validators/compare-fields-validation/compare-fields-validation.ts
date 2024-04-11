import { ValidateError } from '@/validation/errors'
import { IFieldValidation } from '@/validation/protocols'

export class CompareFieldsValidation implements IFieldValidation {
  constructor(
    readonly field: string,
    private readonly valueToCompare: string,
  ) {}

  validate(value: string): Error {
    return new ValidateError.InvalidFieldError()
  }
}
