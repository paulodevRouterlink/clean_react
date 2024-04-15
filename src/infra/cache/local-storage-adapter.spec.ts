import 'jest-localstorage-mock'
import { faker } from '@faker-js/faker'
import { LocalStorageAdapter } from './local-storage-adapter'
import { AccountModel } from '@/domain/models'

const makeSut = (): LocalStorageAdapter => new LocalStorageAdapter()

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  test('Should call localStorage with correct values', () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.helpers.objectEntry<AccountModel>({
      name: 'value1',
      accessToken: 'dsadasdff64454value2',
    })
    sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value),
    )
  })
})
