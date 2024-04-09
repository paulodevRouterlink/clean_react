import { ValidationBuilder, ValidationComposite } from '@/validation/validators'
import { RemoteAuthentication } from '@/data/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const adapterLogin = () => {
  const url = ''
  const axiosHttpClient = new AxiosHttpClient()
  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient)
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build(),
  ])

  return {
    validation: validationComposite,
    authentication: remoteAuthentication,
  }
}
