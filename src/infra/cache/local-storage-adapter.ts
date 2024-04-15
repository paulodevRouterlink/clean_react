/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISetStorage } from '@/data/protocols/cache'

export class LocalStorageAdapter implements ISetStorage {
  set(key: string, value: object): void {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
