import { IGetStorage, ISetStorage } from '@/data/protocols/cache'
import { LocalStorageAdapter } from '@/infra/cache'

export const makeLocalStorageAdapter = (): ISetStorage & IGetStorage => {
  return new LocalStorageAdapter()
}
