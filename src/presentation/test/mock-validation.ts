import { IValidation } from '@/presentation/protocols/validation'

export class ValidationStub implements IValidation {
  errorMessage: string

  validade(fieldName: string, fieldValue: string): string {
    return this.errorMessage
  }
}
