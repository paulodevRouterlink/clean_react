import { IValidation } from './validation-interface'

export class ValidationSpy implements IValidation {
  errorMessage: string
  fieldName: string
  fieldValue: string

  validade(fieldName: string, fieldValue: string): string {
    this.fieldName = fieldName
    this.fieldValue = fieldValue
    return this.errorMessage
  }
}
