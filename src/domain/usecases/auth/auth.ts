import { AccountModel } from '@/domain/models'

type AuthenticationParams = {
  email: string
  password: string
}

interface IAuthentication {
  auth(params: AuthenticationParams): Promise<AccountModel>
}

export type { IAuthentication, AuthenticationParams }
