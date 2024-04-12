/* eslint-disable prettier/prettier */
import { IFieldValidation } from '@/validation/protocols'
import { ValidateError } from '@/validation/errors'
import { Regex } from '@/validation/validators'

export class EmailValidation implements IFieldValidation {
  constructor(readonly field: string) { }

  validate(input: object): Error {
    const emailRegex = Regex.validateEmail(input[this.field])
    return !input[this.field] || emailRegex
      ? null
      : new ValidateError.InvalidFieldError()
  }
}
