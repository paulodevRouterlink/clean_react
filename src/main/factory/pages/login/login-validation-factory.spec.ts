import { ValidationBuilder, ValidationComposite } from '@/validation/validators'
import { makeLoginValidate } from './login-validate-factory'

describe('LoginValidateFactory', () => {
  test('should composite ValidationComposite with correct validations', () => {
    const composite = makeLoginValidate()
    expect(composite).toEqual(
      ValidationComposite.build([
        ...ValidationBuilder.field('email').required().email().build(),
        ...ValidationBuilder.field('password').required().min(5).build(),
      ]),
    )
  })
})
