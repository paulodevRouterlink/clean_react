import { createContext } from 'react'
import { AccountModel } from '@/domain/models'

type AppContextProps = {
  setCurrentAccount?(account: AccountModel): void
  getCurrentAccount?(): AccountModel
}

export const AppContext = createContext<AppContextProps>(null)
