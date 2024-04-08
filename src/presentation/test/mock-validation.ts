/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IValidation } from '@/presentation/protocols/validation'

export class ValidationStub implements IValidation {
  errorMessage: string

  validade(_fieldName: string, _fieldValue: string): string {
    return this.errorMessage
  }
}
