import { faker } from '@faker-js/faker'
import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mockHttpResponse = (): any => ({
  data: faker.helpers.objectEntry({ prop1: 'value1', prop2: 'value2' }),
  status: faker.number.int(),
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockClear().mockResolvedValue(mockHttpResponse())
  mockedAxios.get.mockClear().mockResolvedValue(mockHttpResponse())
  return mockedAxios
}
