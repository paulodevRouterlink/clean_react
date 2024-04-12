import { RemoteAddAccount } from '@/data/usecases'
import { IAddAccount } from '@/domain/usecases'
import { makeApiURL, makeAxiosHttpClient } from '@/main/factory/http'

export const makeRemoteAddAccount = (): IAddAccount => {
  return new RemoteAddAccount(makeApiURL('/login'), makeAxiosHttpClient())
}
