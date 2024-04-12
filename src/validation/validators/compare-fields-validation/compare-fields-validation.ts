/* eslint-disable prettier/prettier */
import { ValidateError } from '@/validation/errors'
import { IFieldValidation } from '@/validation/protocols'

export class CompareFieldsValidation implements IFieldValidation {
  constructor(
    readonly field: string,
    private readonly fieldToCompare: string,
  ) { }

  validate(input: object): Error {
    return input[this.field] !== input[this.fieldToCompare]
      ? new ValidateError.InvalidFieldError()
      : null
  }
}
