import { ValidationBuilder, ValidationComposite } from '@/validation/validators'

export const makeLoginValidate = (): ValidationComposite => {
  return ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build(),
  ])
}
