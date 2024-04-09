import { RemoteAuthentication } from '@/data/usecases'
import { IAuthentication } from '@/domain/usecases/auth'
import { makeAxiosHttpClient } from '@/main/factory/http'

export const makeRemoteAuthentication = (): IAuthentication => {
  const url = ''
  return new RemoteAuthentication(url, makeAxiosHttpClient())
}
