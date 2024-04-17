import { faker } from '@faker-js/faker'
import { Authentication, IAuthentication } from '../usecases'
import { mockAccountModel } from './mock-account'

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
})

export const mockAuthenticationModel = (): Authentication.Model => {
  return mockAccountModel()
}

export class AuthenticationSpy implements IAuthentication {
  account = mockAuthenticationModel()
  params: Authentication.Params
  callsCount = 0

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    this.params = params
    this.callsCount++
    return Promise.resolve(this.account)
  }
}
