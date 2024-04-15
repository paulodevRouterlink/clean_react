import { AccountModel } from '@/domain/models'

export interface ISaveCurrentAccount {
  save(account: AccountModel): Promise<void>
}
