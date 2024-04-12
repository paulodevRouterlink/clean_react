/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ISaveAccessToken } from '@/domain/usecases'

export class SaveAccessTokenMock implements ISaveAccessToken {
  accessToken: string

  async save(accessToken): Promise<void> {
    this.accessToken = accessToken
  }
}
