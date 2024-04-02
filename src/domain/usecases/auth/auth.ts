import { AccountModel } from '@/domain/models/account-models'

type AuthParams = {
  email: string
  password: string
}

interface IAuth {
  auth(params: AuthParams): Promise<AccountModel>
}

export type { IAuth }
