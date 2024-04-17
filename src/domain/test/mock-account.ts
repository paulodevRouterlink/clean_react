import { faker } from '@faker-js/faker'
import { AccountModel } from '@/domain/models'

export const mockAccountModel = (): AccountModel => ({
  name: faker.internet.userName(),
  accessToken: faker.string.uuid(),
})
