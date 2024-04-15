import { Errors } from '@/domain/errors'
import { AccountModel } from '@/domain/models'
import { makeLocalStorageAdapter } from '@/main/factory/cache'

export const setCurrentAccountAdapter = (account: AccountModel): void => {
  if (!account?.accessToken) {
    throw new Errors.UnexpectedError()
  }
  makeLocalStorageAdapter().set('account', account)
}
