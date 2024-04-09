import { IFieldValidation } from '@/validation/protocols'
import { RequiredError } from '@/validation/errors'

export class RequiredFieldValidation implements IFieldValidation {
  constructor(readonly field: string) {}

  validate(value: string): Error {
    return value ? null : new RequiredError.FieldError()
  }
}
