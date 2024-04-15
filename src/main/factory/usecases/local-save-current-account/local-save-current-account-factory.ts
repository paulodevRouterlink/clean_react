import { LocalSaveCurrentAccount } from '@/data/usecases'
import { ISaveCurrentAccount } from '@/domain/usecases'
import { makeLocalStorageAdapter } from '@/main/factory/cache'

export const makeLocalSaveCurrentAccount = (): ISaveCurrentAccount => {
  return new LocalSaveCurrentAccount(makeLocalStorageAdapter())
}
