import * as Helper from './http-mocks'

// const path = /signup/

export const mockEmailInUserError = (): void => {
  return Helper.mockForbiddenError(/signup/, 'POST')
}
