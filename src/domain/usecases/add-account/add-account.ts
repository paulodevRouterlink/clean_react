import { AccountModel } from '@/domain/models'

export type AddAccountParams = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export namespace AddAccount {
  export type Params = {
    name: string
    email: string
    password: string
    passwordConfirmation: string
  }

  export type Model = AccountModel
}

export interface IAddAccount {
  add(params: AddAccount.Params): Promise<AddAccount.Model>
}
