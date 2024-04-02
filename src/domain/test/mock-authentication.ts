import { faker } from '@faker-js/faker'
import { AuthParams } from '../usecases/auth/auth'

export const mockAuthentication = (): AuthParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
})
