import { AccountModel } from '@/domain/models/account-models'

type AuthParams = {
  email: string
  password: string
}

interface IAuthentication {
  auth(params: AuthParams): Promise<AccountModel>
}

export type { IAuthentication, AuthParams }
