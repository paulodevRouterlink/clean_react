import { ValidateError } from '@/validation/errors'
import { IFieldValidation } from '@/validation/protocols'

export class MinLengthValidation implements IFieldValidation {
  constructor(
    readonly field: string,
    private readonly minLength: number,
  ) {}

  validate(value: string): Error {
    return new ValidateError.InvalidFieldError()
  }
}
