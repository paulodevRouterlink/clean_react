import { faker } from '@faker-js/faker'
import { AddAccount, IAddAccount } from '@/domain/usecases'
import { mockAccountModel } from './mock-account'

export const mockAddAccountParams = (): AddAccount.Params => {
  const password = faker.internet.password()
  return {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password,
    passwordConfirmation: password,
  }
}

export const mockAddAccountModel = (): AddAccount.Model => {
  return mockAccountModel()
}

export class AddAccountSpy implements IAddAccount {
  account = mockAddAccountModel()
  params: AddAccount.Params
  callsCount = 0

  async add(params: AddAccount.Params): Promise<AddAccount.Model> {
    this.params = params
    this.callsCount++
    return Promise.resolve(this.account)
  }
}
