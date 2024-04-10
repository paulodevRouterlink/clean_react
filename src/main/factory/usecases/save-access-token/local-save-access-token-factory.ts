import { LocalSaveAccessToken } from '@/data/usecases'
import { ISaveAccessToken } from '@/domain/usecases'
import { makeLocalStorageAdapter } from '@/main/factory/cache'

export const makeLocalSaveAccessToken = (): ISaveAccessToken => {
  return new LocalSaveAccessToken(makeLocalStorageAdapter())
}
