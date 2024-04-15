import { ISaveCurrentAccount } from '@/domain/usecases'
import { ISetStorage } from '@/data/protocols/cache'
import { Errors } from '@/domain/errors'
import { AccountModel } from '@/domain/models'

export class LocalSaveCurrentAccount implements ISaveCurrentAccount {
  constructor(private readonly setStorage: ISetStorage) {}

  async save(account: AccountModel): Promise<void> {
    if (!account?.accessToken) {
      throw new Errors.UnexpectedError()
    }
    this.setStorage.set('account', JSON.stringify(account))
  }
}
