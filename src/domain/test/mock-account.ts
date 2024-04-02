import { faker } from '@faker-js/faker'
import { AuthParams } from '../usecases/auth'
import { AccountModel } from '../models'

export const mockAuthentication = (): AuthParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.string.uuid(),
})
