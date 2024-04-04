import { IValidation } from './validation-interface'

export class ValidationSpy implements IValidation {
  errorMessage: string
  input: object

  validade(input: object): string {
    this.input = input
    return this.errorMessage
  }
}
