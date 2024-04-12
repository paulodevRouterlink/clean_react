import {
  ValidationBuilder as Builder,
  ValidationComposite,
} from '@/validation/validators'
import { makeSignUpValidation } from './sign-up-validation'

describe('SignUpValidateFactory', () => {
  test('should composite ValidationComposite with correct validations', () => {
    const composite = makeSignUpValidation()
    expect(composite).toEqual(
      ValidationComposite.build([
        ...Builder.field('name').required().min(5).build(),
        ...Builder.field('email').required().email().build(),
        ...Builder.field('password').required().min(5).build(),
        ...Builder.field('passwordConfirmation')
          .required()
          .sameAs('password')
          .build(),
      ]),
    )
  })
})
