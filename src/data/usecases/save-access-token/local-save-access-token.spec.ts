/* eslint-disable @typescript-eslint/no-explicit-any */
import { faker } from '@faker-js/faker'
import { LocalSaveAccessToken } from './local-save-access-token'
import { SetStorageMock } from '@/data/test'

type SutTypes = {
  sut: LocalSaveAccessToken
  setStorageMock: SetStorageMock
}

const makeSut = (): SutTypes => {
  const setStorageMock = new SetStorageMock()
  const sut = new LocalSaveAccessToken(setStorageMock)

  return {
    sut,
    setStorageMock,
  }
}

describe('LocalSaveAccessToken', () => {
  test('Should call SetStorage with correct with values', async () => {
    const { sut, setStorageMock } = makeSut()
    const accessToken = faker.string.uuid()
    await sut.save(accessToken)
    expect(setStorageMock.key).toBe('accessToken')
    expect(setStorageMock.value).toBe(accessToken)
  })

  test('Should throw if SetStorage throws', async () => {
    const { sut, setStorageMock } = makeSut()
    jest.spyOn(setStorageMock, 'set').mockRejectedValueOnce(new Error())
    const promise = sut.save(faker.string.uuid())
    await expect(promise).rejects.toThrow(new Error())
  })
})
