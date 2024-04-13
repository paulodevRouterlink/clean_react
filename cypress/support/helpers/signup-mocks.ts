import { faker } from '@faker-js/faker'
import * as Helper from './http-mocks'

const path = /signup/

export const mockEmailInUserError = (): void => {
  return Helper.mockForbiddenError(path, 'POST')
}

export const mockOkay = (): void => {
  return Helper.mockOk(path, 'POST', { accessToken: faker.string.uuid() })
}
