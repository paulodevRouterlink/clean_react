/* eslint-disable @typescript-eslint/no-explicit-any */
import { faker } from '@faker-js/faker'
import { IGetStorage } from '@/data/protocols/cache'

export class GetStorageSpy implements IGetStorage {
  key: string
  value = faker.helpers.objectEntry({ prop1: 'value1', prop2: 'value2' })

  get(key: string): any {
    this.key = key
  }
}
