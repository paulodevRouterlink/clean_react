import { FC } from 'react'
import { Login } from '@/presentation/pages'
import { adapterLogin } from '@/main/adapters'

export const makeLogin: FC = () => {
  const { authentication, validation } = adapterLogin()

  return <Login validation={validation} authentication={authentication} />
}
