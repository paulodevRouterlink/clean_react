/* eslint-disable prettier/prettier */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IFieldValidation } from '@/validation/protocols'

export class FieldValidationSpy implements IFieldValidation {
  error: Error = null

  constructor(readonly field: string) { }

  validate(_input: object): Error {
    return this.error
  }
}
