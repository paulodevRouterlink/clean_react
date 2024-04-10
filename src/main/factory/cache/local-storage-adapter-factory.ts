import { ISetStorage } from '@/data/protocols/cache'
import { LocalStorageAdapter } from '@/infra/cache'

export const makeLocalStorageAdapter = (): ISetStorage => {
  return new LocalStorageAdapter()
}
