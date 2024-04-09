import { IFieldValidation } from '@/validation/protocols'
import {
  EmailValidation,
  RequiredFieldValidation,
} from '@/validation/validators'

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: IFieldValidation[],
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email(): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  build(): IFieldValidation[] {
    return this.validations
  }
}
