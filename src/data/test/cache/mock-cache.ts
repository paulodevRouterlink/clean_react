/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISetStorage } from '@/data/protocols/cache'

export class SetStorageMock implements ISetStorage {
  key: string
  value: any

  set(key: string, value: any): void {
    this.key = key
    this.value = value
  }
}
