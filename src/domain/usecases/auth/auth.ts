import { AccountModel } from '@/domain/models'

export namespace Authentication {
  export type Params = {
    email: string
    password: string
  }

  export type Model = AccountModel
}

export interface IAuthentication {
  auth(params: Authentication.Params): Promise<Authentication.Model>
}
