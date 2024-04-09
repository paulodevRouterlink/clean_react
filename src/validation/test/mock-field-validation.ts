/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IFieldValidation } from '@/validation/protocols'

export class FieldValidationSpy implements IFieldValidation {
  error: Error = null

  constructor(readonly field: string) {}

  validate(value: string): Error {
    return this.error
  }
}
