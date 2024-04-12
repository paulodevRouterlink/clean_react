/* eslint-disable prettier/prettier */
import { IFieldValidation } from '@/validation/protocols'
import { ValidateError } from '@/validation/errors'

export class RequiredFieldValidation implements IFieldValidation {
  constructor(readonly field: string) { }

  validate(input: object): Error {
    return input[this.field] ? null : new ValidateError.RequiredFieldError()
  }
}
