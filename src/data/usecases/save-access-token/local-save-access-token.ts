import { ISaveAccessToken } from '@/domain/usecases'
import { ISetStorage } from '@/data/protocols/cache'
import { Errors } from '@/domain/errors'

export class LocalSaveAccessToken implements ISaveAccessToken {
  constructor(private readonly setStorage: ISetStorage) {}

  async save(accessToken: string): Promise<void> {
    if (!accessToken) {
      throw new Errors.UnexpectedError()
    }
    await this.setStorage.set('accessToken', accessToken)
  }
}
