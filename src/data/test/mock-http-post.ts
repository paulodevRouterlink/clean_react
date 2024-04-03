import { faker } from '@faker-js/faker'
import { HttpPostParams } from '../protocols/http'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.helpers.objectEntry({ prop1: 'value1', prop2: 'value2' }),
})
