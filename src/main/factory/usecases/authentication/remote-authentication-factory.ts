import { RemoteAuthentication } from '@/data/usecases'
import { IAuthentication } from '@/domain/usecases/auth'
import { makeApiURL, makeAxiosHttpClient } from '@/main/factory/http'

export const makeRemoteAuthentication = (): IAuthentication => {
  return new RemoteAuthentication(makeApiURL('/login'), makeAxiosHttpClient())
}
