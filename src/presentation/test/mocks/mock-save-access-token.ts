/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AccountModel } from '@/domain/models'
import { ISaveCurrentAccount } from '@/domain/usecases'

export class SaveCurrentAccountMock implements ISaveCurrentAccount {
  account: AccountModel

  async save(account: AccountModel): Promise<void> {
    this.account = account
  }
}
